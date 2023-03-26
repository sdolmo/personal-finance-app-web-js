import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

SharedLayout.propTypes = {
  setMenu: PropTypes.func,
  setUser: PropTypes.func,
};

export default function SharedLayout({ setUser, setMenu }) {
  return (
    <>
      <Nav setMenu={setMenu} setUser={setUser} />
      <Outlet />
    </>
  );
}
