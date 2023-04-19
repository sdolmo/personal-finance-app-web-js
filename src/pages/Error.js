import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section>
      <h2>Error</h2>
      <p>Page not found</p>
      <Link to="/">back to home</Link>
    </section>
  );
}
