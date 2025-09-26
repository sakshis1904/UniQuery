import express from "express";
import { getAllComplaints, loginAdmin } from "../controllers/admin.js";
import authAdmin from '../middlewares/authAdmin.js'


const adminRoute = express.Router();

adminRoute.get("/complaints", authAdmin , getAllComplaints);
adminRoute.post("/login", loginAdmin);

export default adminRoute;
