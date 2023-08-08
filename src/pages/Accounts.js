import React from "react";
import Link from "../components/Link";
import PropTypes from "prop-types";
import Header from "../components/Header";

Accounts.propTypes = {
  setTransactions: PropTypes.func,
};

export default function Accounts({ setTransactions }) {
  return (
    <>
      <Header
        heading="Accounts"
        subHeading="Connect your account to view transactions"
      />
      <section>
        <Link setTransactions={setTransactions} />
      </section>
    </>
  );
}
