import './App.css';
import Nav from './components/Nav';
import TransactionList from './components/TransactionList';
import Distribution from './components/Distribution';
import Spending from './components/Spending';
import YearMonthSelector from './components/YearMonthSelector';
import MenuList from './components/MenuList';
import { useState } from 'react';


function App() {
  const [ menuView, setMenuView ] = useState(false);

  function toggleMenu() {
    setMenuView(!menuView);
  }

  return (
    <>
      <Nav onMenuClick={toggleMenu} heading="Accounts"/>
      { menuView ? <MenuList /> : null}
      <YearMonthSelector />
      <Distribution />
      <Spending />
      <TransactionList />
    </>
  );
}

export default App;
