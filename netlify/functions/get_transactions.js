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

const router = Router();

/* eslint-disable camelcase */
router.get("/get_transactions", async (req, res) => {
  try {
    const response = await client.transactionsSync({
      access_token: process.env.ACCESS_TOKEN,
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

    res.json({
      statusCode: 200,
      body: transArr,
    });
  } catch (error) {
    console.log(
      `An error occured during Plaid API call ${error.response.data.error_message}`
    );
  }
});

api.use("/.netlify/functions", router);

export const handler = serverless(api);
