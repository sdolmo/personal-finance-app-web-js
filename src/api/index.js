import * as dotenv from "dotenv";
import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";
import express from "express";
import bodyParser from "body-parser";
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const APP_PORT = process.env.APP_PORT || 4000;
const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_ENV = process.env.PLAID_ENV || "sandbox";
const PLAID_PRODUCTS = process.env.PLAID_PRODUCTS.split(",");
const PLAID_COUNTRY_CODES = process.env.PLAID_COUNTRY_CODES.split(",");

// Temp
/*
eslint no-unused-vars: ["error", { "varsIgnorePattern": "[_]" }]
*/
let ACCESS_TOKEN = null;
let PUBLIC_TOKEN = null;
let ITEM_ID = null;

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

app.post("/api/create_link_token", async (req, res) => {
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
    res.json(linkToken);
  } catch (error) {
    console.log(
      `An error occured during plaid API call: ${error.response.data.error_message}`
    );
    console.log(`Error Code: ${error.response.data.error_code}`);
  }
});

app.post("/api/exchange_public_token", async (req, res) => {
  PUBLIC_TOKEN = req.body.public_token;

  const request = {
    public_token: PUBLIC_TOKEN,
  };

  try {
    const exchangeResponse = await client.itemPublicTokenExchange(request);
    ACCESS_TOKEN = exchangeResponse.data.access_token;
    ITEM_ID = exchangeResponse.data.item_id;
    res.json(true);
  } catch (error) {
    console.log(
      `An error occured during Plaid API call ${error.response.data.error_message}`
    );
  }
});

/* eslint-disable camelcase */
app.get("/api/get_transactions", async (req, res) => {
  try {
    // Get transactions to be cached
    const response = await client.transactionsSync({
      access_token: ACCESS_TOKEN,
    });
    const transactions = response.data.added;

    const transArr = [];
    for (const transaction of transactions) {
      const {
        transaction_id,
        date,
        amount,
        merchant_name,
        category: categories,
      } = transaction;

      const category = categories ? categories[0] : "Other";

      transArr.push(
        new Transaction(transaction_id, date, amount, merchant_name, category)
      );
    }

    res.json({ transArr });
  } catch (error) {
    console.log(
      `An error occured during Plaid API call ${error.response.data.error_message}`
    );
  }
});

/* eslint-disable no-unneeded-ternary */
class Transaction {
  constructor(id, date, amount, merchant, category) {
    this.id = id;
    this.date = date;
    this.amount = Math.abs(amount); // calcualte amount for negatives
    this.merchant = merchant ? merchant : "Unknown";
    this.category = category;
  }
}

app.listen(APP_PORT, () => {
  console.log(`Example app listening on port ${APP_PORT}`);
});
