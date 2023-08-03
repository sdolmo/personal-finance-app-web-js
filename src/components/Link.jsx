import React, { useCallback, useState, useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";
import PropTypes from "prop-types";

SimplePlaidLink.propTypes = {
  setTransactions: PropTypes.func,
};

export default function SimplePlaidLink({ setTransactions }) {
  const [token, setToken] = useState(null);

  const createLinkToken = useCallback(async () => {
    const response = await fetch("/api/create_link_token", { method: "POST" });
    const linkToken = await response.json();
    setToken(linkToken);
    localStorage.setItem("linkToken", linkToken);
  }, [setToken]);

  const onSuccess = useCallback(async (publicToken) => {
    await fetch("/api/exchange_public_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ public_token: publicToken }),
    });
    getTransactions();
  }, []);

  const getTransactions = useCallback(async () => {
    const response = await fetch("/api/get_transactions", { method: "GET" });
    const { transArr: data } = await response.json();

    setTransactions(data);
  }, []);

  const { open, ready } = usePlaidLink({
    token,
    onSuccess,
  });

  useEffect(() => {
    if (token == null) {
      createLinkToken();
    }
  }, [token, ready, open, createLinkToken]);

  return (
    <>
      <button onClick={() => open()} disabled={!ready}>
        Connect Link
      </button>
    </>
  );
}
