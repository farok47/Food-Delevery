import express from "express";
import { login, register } from "../controllers/usercontroller.js";

const userrouter =express.Router()


userrouter.post("/register",register)
userrouter.post("/login",login)

export default userrouter