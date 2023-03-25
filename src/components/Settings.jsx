import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../Context";

export default function Settings() {
  const user = useContext(UserContext);

  return (
    <section>
      {user ? (
        <NavLink to="/">Signout</NavLink>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </section>
  );
}
