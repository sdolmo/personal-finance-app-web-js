import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import MenuList from "../components/MenuList";
import { MenuContext } from "../Context";

ProtectedRoute.propTypes = {
  children: PropTypes.object,
  user: PropTypes.object,
};

export default function ProtectedRoute({ children, user }) {
  const menu = useContext(MenuContext);

  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      {menu ? <MenuList /> : null}
      {children}
    </>
  );
}
