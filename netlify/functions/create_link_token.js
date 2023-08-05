import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";
import express, { Router } from "express";
import serverless from "serverless-http";
dotenv.config();

const api = express();
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_ENV = process.env.PLAID_ENV || "sandbox";
const PLAID_PRODUCTS = process.env.PLAID_PRODUCTS.split(",");
const PLAID_COUNTRY_CODES = process.env.PLAID_COUNTRY_CODES.split(",");

const config = new Configuration({
  basePath: PlaidEnvironments[PLAID_ENV],
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": PLAID_CLIENT_ID,
      "PLAID-SECRET": PLAID_SECRET,
      "Plaid-Version": "2020-09-14",
    },
  },
});

const client = new PlaidApi(config);

const router = Router();
router.get("/create_link_token", async (req, res) => {
  const request = {
    user: {
      client_user_id: "user-id",
    },
    client_name: "Personal Finance App",
    products: PLAID_PRODUCTS,
    country_codes: PLAID_COUNTRY_CODES,
    language: "en",
  };

  try {
    const tokenResponse = await client.linkTokenCreate(request);
    const linkTokenData = tokenResponse.data;
    const linkToken = linkTokenData.link_token;
    process.env.TOKEN = linkToken;
    res.send({
      statusCode: 200,
      body: { linkToken },
    });
  } catch (error) {
    console.log(
      `An error occured during plaid API call: ${error.response.data.error_message}`
    );
    console.log(`Error Code: ${error.response.data.error_code}`);
  }
});

api.use("/.netlify/functions", router);

export const handler = serverless(api);
