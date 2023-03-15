import React, { useEffect, useCallback, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';

const SimplePlaidLink = () => {
    const [token, setToken ] = useState(null)

    const createLinkToken = useCallback(async () => {
        const response = await fetch('/api/create_link_token', { method: 'POST' });
        const { link_token } = await response.json();
        setToken(link_token);
        localStorage.setItem("link_token", link_token);
    }, [setToken])

    const onSuccess = useCallback(async (publicToken) => {
        console.log(publicToken)
        await fetch("/api/exchange_public_token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({public_token: publicToken}),
        });
      }, []);


    const { open, ready } = usePlaidLink({
        token,
        onSuccess
    });

    useEffect(() => {
        if (token == null) {
          createLinkToken();
        }
        if (ready) {
          open();
        }
      }, [token, ready, open, createLinkToken]);

    return (
        <>
        <button onClick={() => open()} disabled={!ready}>
            Connect Link
        </button>
        </>
    )
}

export default SimplePlaidLink;
