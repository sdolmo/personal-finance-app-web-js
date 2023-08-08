import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../Context";
import Nav from "./Nav";

const loggedInMenuItems = [
  { key: "accounts", name: "Accounts", link: "/accounts" },
  { key: "transactions", name: "Transactions", link: "/transactions" },
  { key: "settings", name: "Settings", link: "/settings" },
];

const loggedOutMenuItems = [{ key: "login", name: "Login", link: "/login" }];

NavFunc.propTypes = {
  setUser: PropTypes.func,
};

export default function NavFunc() {
  const user = useContext(UserContext);
  console.log(user);
  const menu = !user ? loggedOutMenuItems : loggedInMenuItems;

  return (
    <>
      <Nav menuContent={menu} />
    </>
  );
}
