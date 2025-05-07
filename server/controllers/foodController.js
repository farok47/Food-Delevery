import Food from "../models/FoodModel.js";
import fs from "fs"

// add food item 

const addfood =async (req,res)=>{
    let image=`${req.file.filename}`
    const {name,description,price,category}=req.body
    const food=new Food({
        name,description,price,category,image
    })
    const result =await food.save()
    res.status(200).json(result)
}

const listfood=async(req,res)=>{
   try {
    const food=await Food.find()
    res.status(200).json({success:true,data:food})
   } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
   }
}

const onefood=async(req,res)=>{
   try {
    const food=await Food.findById(req.params.id)
    if (food)
    res.status(200).json(food)
    else
    res.json({message:"food not found"})
   } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
   }
}
const removefood=async(req,res)=>{
    try {
        const food=await Food.findById(req.params.id)
        fs.unlink(`uploads/${food.image}`,()=>{})
        if(food) {
        await Food.findByIdAndDelete(req.params.id)
        res.status(200).json("food has been deleted")}
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {addfood,listfood,onefood,removefood}