import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

Login.propTypes = {
  setUser: PropTypes.object,
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
    <section>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <h5>Login</h5>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}
