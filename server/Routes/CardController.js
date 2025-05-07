import express from "express";
import { addToCard, getCard, removeFromcard } from "../controllers/cardController.js";
import { authMiddleware } from "../middlewares/auth.js";

const cardRouter=express.Router()

cardRouter.post("/add",authMiddleware,addToCard)
cardRouter.post("/remove",authMiddleware,removeFromcard)
cardRouter.post("/get",authMiddleware,getCard)

export default cardRouter