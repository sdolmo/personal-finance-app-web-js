import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context";
import "../assets/styles/Settings.css";

Settings.propTypes = {
  setUser: PropTypes.func,
};

export default function Settings({ setUser }) {
  const user = useContext(UserContext);

  const navigate = useNavigate();

  const handleSignout = (e) => {
    e.preventDefault();
    setUser(null);
    navigate("/");
  };

  return (
    <section className="settings">
      <div className="settings-container">
        <h2>Settings</h2>
        {user ? (
          <button className="btn" onClick={handleSignout}>
            Signout
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
