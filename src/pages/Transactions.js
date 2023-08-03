import React, { useContext } from "react";
import Distribution from "../components/Distribution";
import Spending from "../components/Spending";
import TransactionsTable from "../components/TransactionsTable";
import { TransactionsDataContext } from "../Context";

export default function Transactions() {
  const data = useContext(TransactionsDataContext);

  return (
    <>
      <h2>Transactions Page</h2>
      <Distribution transactions={data} />
      <Spending transactions={data} />
      <TransactionsTable transactions={data} />
    </>
  );
}
