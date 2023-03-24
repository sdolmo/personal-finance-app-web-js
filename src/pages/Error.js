import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section>
      <h2>Error Page</h2>
      <Link to="/">back to home</Link>
    </section>
  );
}
