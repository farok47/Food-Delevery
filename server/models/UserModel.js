import mongoose from "mongoose"

const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,uniique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}
},{minimize:false})

const User=mongoose.model.User||mongoose.model("User",UserSchema)
export default User
