import complaintModel from "../models/complaintModel.js";

export const submitComplaint = async (req, res) => {
  try {
    const {
      name,
      studentId,
      issue,
      preferredTime,
      preferredDate,
      date,
      roomNo,
      photo
    } = req.body;


    // fields check
    if (!name || !studentId || !issue || !preferredTime || !preferredDate || !roomNo || !date) {
      return res.json({ message: "All fields are required." });
    }

    // Creating new complaint
    const newComplaint = new complaintModel({
      name,
      studentId,
      issue,
      preferredTime,
      preferredDate,
      roomNo,
      date,
    });

    await newComplaint.save();

    res.json({
      message: "Complaint submitted successfully.",
      complaint: newComplaint,
    });
  } catch (error) {
    console.error("Error submitting complaint:", error);
    res.json({ message: "Internal Server Error." });
  }
};

export const getAllComplaints = async (req, res) => {
  try {
    const complaints = await complaintModel.find().sort({ date: -1 });
    res.json({ success: true, complaints });
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};