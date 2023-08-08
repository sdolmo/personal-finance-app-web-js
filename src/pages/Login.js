import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Login.css";

Login.propTypes = {
  setUser: PropTypes.func,
};

export default function Login({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name, email });
    navigate("/accounts");
  };

  return (
    <section className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="name">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="email">
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </section>
  );
}
