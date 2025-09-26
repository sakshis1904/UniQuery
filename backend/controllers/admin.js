import complaintModel from "../models/complaintModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


// Get all complaints
export const getAllComplaints = async (req, res) => {
  try {
    const complaints = await complaintModel.find().sort({ date: -1 }); // sorted by latest
    res.status(200).json(complaints);
  } catch (error) {
    console.error("Error fetching complaints:", error);
    res.status(500).json({ message: "Failed to fetch complaints" });
  }
};

//api for admin login
const loginAdmin = async(req, res) =>{
    try{
       const {email, password} = req.body 

       if (email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD) {
          
         //token wala concept aayega
        const token = jwt.sign(email+password, process.env.JWT_SECRET);
        res.json({ success: true, token });

       } else{
         res.json({success:false, message:"Invalid credentials"})
       }
    } catch(error) {
      console.log(error)
      res.json({success:false, message:error.message})
    }
}

export {loginAdmin}