import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import ProtectedRoute from "./pages/ProtectedRoute";
import Accounts from "./pages/Accounts";
import Balances from "./pages/Balances";
import Transactions from "./pages/Transactions";

import { UserContext, MenuContext, TransactionsDataContext } from "./Context";

function App() {
  const [user, setUser] = useState(null);
  const [menu, setMenu] = useState(false);
  const [transactions, setTransactions] = useState([]);

  return (
    <UserContext.Provider value={user}>
      <MenuContext.Provider value={menu}>
        <TransactionsDataContext.Provider value={transactions}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<SharedLayout setUser={setUser} setMenu={setMenu} />}
              >
                <Route index element={<Home />} />
                <Route path="login" element={<Login setUser={setUser} />} />
                <Route
                  path="accounts"
                  element={
                    <ProtectedRoute user={user}>
                      <Accounts user={user} setTransactions={setTransactions} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="balances"
                  element={
                    <ProtectedRoute user={user}>
                      <Balances user={user} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="transactions"
                  element={
                    <ProtectedRoute user={user} transactions={transactions}>
                      <Transactions
                        user={user}
                        setTransactions={setTransactions}
                      />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TransactionsDataContext.Provider>
      </MenuContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
