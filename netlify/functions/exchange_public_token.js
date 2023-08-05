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

router.post("/exchange_public_token", async (req, res) => {
  const b = Buffer.from(req.body);
  const { public_token: publicToken } = JSON.parse(b.toString());

  const request = {
    public_token: publicToken,
  };

  try {
    const exchangeResponse = await client.itemPublicTokenExchange(request);
    const ACCESS_TOKEN = exchangeResponse.data.access_token;
    console.log(ACCESS_TOKEN);
    res.json({
      statusCode: 200,
      body: true,
    });
  } catch (error) {
    console.log(
      `An error occured during Plaid API call ${error.response.data.error_message}`
    );
  }
});

api.use("/.netlify/functions", router);

export const handler = serverless(api);
