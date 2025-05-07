import express from "express"
import { addfood, listfood, onefood, removefood } from "../controllers/foodController.js"
import multer from "multer"

const foodRouter=express.Router()

// Image Storage Engine

const Storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload =multer({storage:Storage})

foodRouter.post("/add",upload.single("image"),addfood) 
foodRouter.get("/list",listfood)
foodRouter.get("/list/:id",onefood)
foodRouter.delete("/remove/:id",removefood)



export default foodRouter