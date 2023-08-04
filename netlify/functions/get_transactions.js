// import * as dotenv from "dotenv";
// import bodyParser from "body-parser";
// import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";
// import express, { Router } from "express";
// import serverless from "serverless-http";
// dotenv.config();

// const api = express();
// api.use(bodyParser.urlencoded({ extended: false }));
// api.use(bodyParser.json());

// const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
// const PLAID_SECRET = process.env.PLAID_SECRET;
// const PLAID_ENV = process.env.PLAID_ENV || "sandbox";
// const PLAID_PRODUCTS = process.env.PLAID_PRODUCTS.split(",");
// const PLAID_COUNTRY_CODES = process.env.PLAID_COUNTRY_CODES.split(",");

// const config = new Configuration({
//   basePath: PlaidEnvironments[PLAID_ENV],
//   baseOptions: {
//     headers: {
//       "PLAID-CLIENT-ID": PLAID_CLIENT_ID,
//       "PLAID-SECRET": PLAID_SECRET,
//       "Plaid-Version": "2020-09-14",
//     },
//   },
// });

// const client = new PlaidApi(config);

// const router = Router();

// router.post("/exchange_public_token", async (req, res) => {
//   res.json({ transArr: ["new_data"] });
// });

// api.use("/.netlify/functions", router);

// export const handler = serverless(api);
