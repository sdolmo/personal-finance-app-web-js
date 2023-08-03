import React from "react";
import Link from "../components/Link";
import PropTypes from "prop-types";

Accounts.propTypes = {
  setTransactions: PropTypes.func,
};

export default function Accounts({ setTransactions }) {
  return (
    <section>
      <h2>Accounts Page</h2>
      <Link setTransactions={setTransactions} />
    </section>
  );
}
