// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World!",
    }),
  };
};
