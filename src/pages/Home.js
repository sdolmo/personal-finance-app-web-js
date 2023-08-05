import React from "react";

export default function Home() {
  return (
    <>
      <h2></h2>
      <section id="banner"></section>
      <div className="container">
        <section className="box">
          <h3>Secure</h3>
          <p>Safely connect banking data by loging into your account</p>
        </section>
        <section className="box">
          <h3>Transactions</h3>
          <p>View latest transactions data from your connected accounts</p>
        </section>
        <section className="box">
          <h3>Budgeting</h3>
          <p>
            Compare spending over the last few months and review distribution of
            spending habits
          </p>
        </section>
      </div>
    </>
  );
}
