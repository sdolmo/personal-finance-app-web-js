import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

ProtectedRoute.propTypes = {
  children: PropTypes.object,
  user: PropTypes.object,
};

export default function ProtectedRoute({ children, user }) {
  if (!user) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
}
