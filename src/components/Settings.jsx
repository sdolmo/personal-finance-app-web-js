import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context";

Settings.propTypes = {
  setUser: PropTypes.func,
  setMenu: PropTypes.func,
  setSettings: PropTypes.func,
};

export default function Settings({ setSettings, setUser, setMenu }) {
  const user = useContext(UserContext);

  const navigate = useNavigate();

  const handleSignout = (e) => {
    e.preventDefault();
    setUser(null);
    setMenu(false);
    setSettings(false);
    navigate("/");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setSettings(false);
    navigate("/login");
  };

  return (
    <section>
      {user ? (
        <button onClick={handleSignout}>Signout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </section>
  );
}
