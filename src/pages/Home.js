import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h2>Login to view your financial information</h2>
      <Link to="/login">Login</Link>
    </section>
  );
}
