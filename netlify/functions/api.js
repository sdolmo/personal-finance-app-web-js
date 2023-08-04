import express from "express";
import * as dotenv from "dotenv";
import serverless from "serverless-http";
import bodyParser from "body-parser";
dotenv.config();

const api = express();

api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

api.get("/hello", (req, res) => res.json({ data: "Hello World!" }));

export const handler = serverless(api);
