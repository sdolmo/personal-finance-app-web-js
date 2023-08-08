import React from "react";
import PropTypes from "prop-types";
import { UserContext } from "../Context";
import Nav from "./Nav";

import "../assets/styles/Nav.css";

const loggedinMenuItems = [
  { key: "accounts", name: "Accounts", link: "/accounts" },
  { key: "transactions", name: "Transactions", link: "/transactions" },
  { key: "settings", name: "Settings", link: "/settings" },
];

const logedoutMenuItems = [{ key: "login", name: "Login", link: "/login" }];

NavFunc.propTypes = {
  setUser: PropTypes.func,
};

export default function NavFunc({ setUser }) {
  const user = useContext(UserContext);
  const menu = user ? loggedinMenuItems : logedoutMenuItems;

  return (
    <>
      <Nav menuContent={menu} />
    </>
  );
}
