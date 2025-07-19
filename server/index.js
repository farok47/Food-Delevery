import express from "express";
import cors from "cors";
import { ConnectToDb } from "./config/db.js";
import foodRouter from "./Routes/foodRouter.js";
import userrouter from "./Routes/userrouter.js";
import cardRouter from "./Routes/CardController.js";
import "dotenv/config"
import orderRouter from "./Routes/orederRouter.js";

// config
const app = express();
const port = 5000;

// middlewares
app.use(express.json());
app.use(cors());

// connect to db
ConnectToDb();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images",express.static('uploads'))
app.use("/api/user",userrouter)
app.use("/api/card",cardRouter)
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`the server is running on http://localhost:${port}`);
});
