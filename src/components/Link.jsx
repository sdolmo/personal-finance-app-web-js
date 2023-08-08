import React, { useCallback, useState, useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";
import PropTypes from "prop-types";

SimplePlaidLink.propTypes = {
  setTransactions: PropTypes.func,
};

export default function SimplePlaidLink({ setTransactions }) {
  const [token, setToken] = useState(null);

  const createLinkToken = useCallback(async () => {
    const response = await fetch("/.netlify/functions/create_link_token").then(
      (response) => response.json()
    );

    const { linkToken } = response.body;

    setToken(linkToken);

    localStorage.setItem("linkToken", linkToken);
  }, [setToken]);

  const onSuccess = useCallback(async (publicToken) => {
    await fetch("/.netlify/functions/exchange_public_token", {
      method: "POST",
      body: JSON.stringify({ public_token: publicToken }),
    }).then((response) => response.json());

    setTimeout(() => {
      getTransactions();
    }, 1000);
  }, []);

  const getTransactions = useCallback(async () => {
    const response = await fetch("/.netlify/functions/get_transactions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await response.json();
    const { body: allTransactions } = data;

    setTransactions(allTransactions);
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
      <button
        className="btn btn-white"
        onClick={() => open()}
        disabled={!ready}
      >
        Link Account
      </button>
    </>
  );
}
