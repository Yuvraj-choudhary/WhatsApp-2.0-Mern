import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import cors from "cors";

import Connection from "./database/db.js";
import routes from "./routes/Route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(
  bodyParser.json({
    extended: true,
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/", routes);

const PORT = 8000;
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

Connection(username, password);
app.listen(PORT, () =>
  console.log(`The server is running at http://localhost:${PORT} yay 😍`)
);
