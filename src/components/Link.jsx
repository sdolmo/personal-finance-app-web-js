import React, { useCallback, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';

const SimplePlaidLink = () => {
    const [token, setToken ] = useState(null)

    React.useEffect(() => {
        const createLinkToken = async () => {
            const response = await fetch('/api/create_link_token', { method: 'POST' });
            const { link_token } = await response.json();
            setToken(link_token);
        };
        createLinkToken();
    }, []);

    const onSuccess = useCallback(async (publicToken) => {
        await fetch("/api/exchange_public_token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ public_token: publicToken }),
        });
      }, []);

    // useCallback((publicToken, metadata) => {
    //     // send public_token to your server
    //     // https://plaid.com/docs/api/tokens/#token-exchange-flow
    //     console.log(publicToken, metadata);
    // }, []);

    const { open, ready } = usePlaidLink({
        token,
        onSuccess
    });

    return (
        <>
        <button onClick={() => open()} disabled={!ready}>
            Connect Link
        </button>
        </>
    )
}

export default SimplePlaidLink;
