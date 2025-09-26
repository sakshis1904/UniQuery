import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
    name: {type: String, required: true },
    studentId: {type: String, required: true},
    issue: {type:String, required:true},
    roomNo: {type:String, required: true },
    preferredTime: {type:String, required:true},
    preferredDate: {type:String, required:true},
    date: {type:Date, required:true},
    cancelled: {type:Boolean, default:false},
    isComplete: {type:Boolean, default:false}
})

const complaintModel = mongoose.models.complaint || mongoose.model('complaint', complaintSchema)

export default complaintModel;