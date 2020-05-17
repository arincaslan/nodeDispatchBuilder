import dotenv from "dotenv";
dotenv.config()

import express from "express";
import bodyParser from "body-parser";
const app = express();
import router from "./routes/index";

app.use(bodyParser.json()).use("/", router)

app.listen(process.env.PORT, () => console.log("I AM LISTENINGss..."))
