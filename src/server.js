import express from "express";
import { testConnection } from "./database/connection.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.SV_SERVER;

app.use(express.json());

app.listen(port, () => {
  testConnection();
  console.log("Servidor rodando com sucesso!");
});
