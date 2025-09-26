import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Mess = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      name: '',
      studentId: '',
      email: '',
      roomNo: '',
      phone: '',
      date: '',
      issue: '',
      time:'',
      preferredDate: '',
      preferredTime: '',
      photo: ''
    });
  
    const handleChange = (e) => {
      const { name, value, files } = e.target;
      setFormData({
        ...formData,
        [name]: files ? files[0] : value
      });
    };
  
    const handleSubmit = async (e) => {
  e.preventDefault();

  const formToSend = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    formToSend.append(key, value);
  });

  try {
    const response = await axios.post('http://localhost:4000/api/complaints/submit', formToSend, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    alert(response.data.message || "Complaint submitted!");
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong.");
  }
};
  
  return (
    <div className="min-h-screen py-10 px-4 flex justify-center items-center" style={{ backgroundColor: "#E6E6FA" }}>
      <div className="flex gap-8 w-full max-w-6xl">
        
        {/* Sidebar */}
        <div className="w-1/4 p-6 rounded-lg shadow-md text-gray-700" style={{ backgroundColor: "#F0E6F0" }}>
          <p onClick={() => navigate('/my-profile')}
          className="mb-3 font-medium cursor-pointer">My Profile</p>
          <p className="mb-3 font-medium cursor-pointer">My Complaints</p>
          <p className="mb-3 font-medium cursor-pointer">My Cancellations</p>
          <p className="font-medium cursor-pointer">Track Complaint</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white px-8 py-10 border rounded-lg w-full" >
          <h2 className="text-2xl font-semibold text-center mb-6" style={{ color: "#452c63" }}>
            Report a Mess-Related Complaint
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
            <div className="flex-1 flex-col gap-1">
              <p>Name</p>
               <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="border rounded px-3 py-2 w-full" required />
            </div>

            <div className="flex-1 flex-col gap-1">
              <p>Student_Id</p>
               <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} placeholder="ID" className="border rounded px-3 py-2 w-full" required />
            </div>

            <div className="flex-1 flex-col gap-1">
               <p>Email</p>
               <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border rounded px-3 py-2 w-full" required />
            </div>

            <div className="flex-1 flex-col gap-1">
               <p>Room No</p>
               <input type="text" name="roomNo" value={formData.roomNo} onChange={handleChange} placeholder="Room No" className="border rounded px-3 py-2 w-full" required />
            </div>

            <div className="flex-1 flex-col gap-1">
               <p>Phone Number</p>
               <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="border rounded px-3 py-2 w-full" required />
            </div>

            <div className="flex-1 flex-col gap-1">
               <p>Date of Complaint</p>
               <input type="date" name="date" value={formData.date} onChange={handleChange} className="border rounded px-3 py-2 w-full" required />
            </div>

            <div className="md:col-span-2">
               <p>Meal Time When Issue Occurred</p>
               <select name="time"  onChange={handleChange} value={formData.time}className="border rounded px-3 py-2 w-full" required>
                  <option value="Breakfast ">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Snacks">Snacks</option>
                  <option value="Dinner">Dinner</option>
                </select>
            </div>

            <div>
               <p>Preferred Date</p>
               <input type="date" name="date" value={formData.preferredDay} onChange={handleChange} placeholder="Preferred Day" className="border rounded px-3 py-2 w-full" />
            </div>

            <div>
               <p>Preferred Time</p>
               <input type="text" name="preferredTime" value={formData.preferredTime} onChange={handleChange} placeholder="Preferred Time" className="border rounded px-3 py-2 w-full" />
            </div>

            <div className="md:col-span-2">
               <p>Issue Description</p>
               <textarea name="issue" value={formData.issue} onChange={handleChange} placeholder="Describe the issue" className="border rounded px-3 py-2 w-full" required />
            </div>

            <div className="md:col-span-2">
               <p>Upload Photos</p>
               <input type="file" name="photo" onChange={handleChange} className="border rounded px-3 py-2 w-full" />
            </div>

            <div className="md:col-span-2 flex justify-end gap-4">
              <button type="button" className="text-gray-600">Cancel</button>
              <button type="submit" className="text-white px-4 py-2 rounded" style={{ backgroundColor: "#452c63" }}>Save Changes</button>
            </div>
        </div>

        <div>
            <p className="text-sm mt-6" style={{ color: "#452c63" }}>
            🛠 Complaints are reviewed during mess staff working hours (9:00 AM – 7:00 PM).<br/>
            Please mention the meal time and day accurately for quick resolution.<br/>
            Requested slots are subject to availability.
          </p>
        </div>

        </form>
      </div>
    </div>
  )
}

export default Mess
