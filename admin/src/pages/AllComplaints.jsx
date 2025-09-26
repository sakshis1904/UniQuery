import React, {useContext, useState, useEffect} from 'react'
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AllComplaints = () => {
  const { setAToken, backendUrl} = useContext(AdminContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('aToken');
    setAToken(null);
    navigate('/login');
  };

  const [complaints, setComplaints] = useState([]);

   useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const { data } = await axios.get(backendUrl + '/api/complaints/all');
        if (data.success) {
          setComplaints(data.complaints);
        }
      } catch (err) {
        console.error('Error:', err);
      }
    };

    fetchComplaints();
  }, [backendUrl]);

  return (
    <div className="min-h-screen bg-[#E5E5E5] text-[#333]">
      {/* Top Nav */}
      <div className="bg-gray-600 text-white flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold">UniQuery <span className="text-sm font-normal ml-2">Admin</span></div>
        <button onClick={handleLogout} className="text-white hover:underline">Logout</button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/5 bg-white shadow h-screen p-6">
          <ul className="flex flex-col gap-4 text-[#333]">
            <li onClick={() => navigate('/dashboard')} className="hover:text-red-500 cursor-pointer">Dashboard</li>
            <li onClick={() => navigate('/all-complaints')} className="text-red-500 font-semibold mb-6">All Complaints</li>
            <li onClick={() => navigate('/pending-complaints')} className="hover:text-red-500 cursor-pointer">Pending Complaints</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10">
          {/* all Complaints Table */}
          <div className="bg-white shadow p-6 rounded-lg">
            <p className="text-red-500 font-semibold text-lg mb-4">All Complaints</p>
            {complaints.length === 0 ? (
              <div className="bg-gray-100 p-4 rounded text-center text-gray-400">
              No complaints to show
            </div>)
            : (
              <table className="w-full text-sm text-left">
                <thead>
                  <tr>
                    <th className="border px-3 py-2">Name</th>
                    <th className="border px-3 py-2">Student ID</th>
                    <th className="border px-3 py-2">Room</th>
                    <th className="border px-3 py-2">Date</th>
                    <th className="border px-3 py-2">Issue</th>
                    <th className="border px-3 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.map((c, i) => (
                    <tr key={i}>
                      <td className="border px-3 py-2">{c.name}</td>
                      <td className="border px-3 py-2">{c.studentId}</td>
                      <td className="border px-3 py-2">{c.roomNo}</td>
                      <td className="border px-3 py-2">{new Date(c.date).toLocaleDateString()}</td>
                      <td className="border px-3 py-2">{c.issue}</td>
                      <td className="border px-3 py-2">
                        {c.cancelled ? 'Cancelled' : c.isComplete ? 'Completed' : 'Pending'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default AllComplaints