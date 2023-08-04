import React, { useCallback, useState, useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";
import PropTypes from "prop-types";

SimplePlaidLink.propTypes = {
  setTransactions: PropTypes.func,
};

export default function SimplePlaidLink({ setTransactions }) {
  const [token] = useState(null);

  const createLinkToken = async () => {
    const response = await fetch("/.netlify/functions/create_link_token").then(
      (response) => response.json()
    );

    const data = response;

    // setToken(linkToken);

    console.log(data);
    // localStorage.setItem("linkToken", linkToken);
  };

  const onSuccess = useCallback(async (publicToken) => {
    console.log(typeof publicToken);
    const response = await fetch("/.netlify/functions/exchange_public_token", {
      method: "POST",
      body: JSON.stringify({ public_token: publicToken }),
    }).then((response) => response.json());

    console.log(response);
  }, []);

  // const getTransactions = useCallback(async () => {
  //   const response = await fetch("/.netlify/functions/get_transactions", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   });
  //   const { transArr: data } = await response.json();

  //   console.log(data);
  //   setTransactions(data);
  // }, []);

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
