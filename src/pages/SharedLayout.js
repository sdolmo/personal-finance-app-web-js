import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
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
      <Nav setMenu={setMenu} setUser={setUser} />
      {menu ? <MenuList /> : null}
      <main>
        <Outlet />
      </main>
    </>
  );
}
