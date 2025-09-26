import express from "express";
import { submitComplaint, getAllComplaints } from "../controllers/complaint.js";
import upload from "../middlewares/multer.js"

const complaintRoute = express.Router();

complaintRoute.post("/submit", upload.single("photo") ,submitComplaint);
complaintRoute.get('/all', getAllComplaints);

export default complaintRoute;
