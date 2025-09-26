import mongoose from "mongoose";
import { assets } from "../../frontend/src/assets/assets";

const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type: String, required:true, unique:true},
    password: {type:String, required:true},
    image: {type:String, default: assets.nouser},
    roomNo : {type:Number, required:true},
    hostel : {type:String, required:true},
    phone : {type:String, required:true}
})

const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel;