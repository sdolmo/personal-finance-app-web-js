import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import NavFunc from "../components/NavFunc";
import MenuList from "../components/MenuList";
import { MenuContext } from "../Context";

SharedLayout.propTypes = {
  setMenu: PropTypes.func,
  setUser: PropTypes.func,
};

export default function SharedLayout({ setUser, setMenu }) {
  const menu = useContext(MenuContext);
  return (
    <>
      <NavFunc />
      {menu ? <MenuList /> : null}
      <main>
        <Outlet />
      </main>
    </>
  );
}
