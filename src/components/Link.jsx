import React, { useCallback, useState, useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";

const SimplePlaidLink = () => {
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
  }, []);

  const { open, ready } = usePlaidLink({
    token,
    onSuccess,
  });

  useEffect(() => {
    if (token == null) {
      console.log("NO TOKEN");
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
};

export default SimplePlaidLink;
