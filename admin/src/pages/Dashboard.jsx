import React, {useContext} from 'react'
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const { setAToken } = useContext(AdminContext);
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem('aToken');
      setAToken(null);
      navigate('/login');
    };

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
          <p className="text-red-500 font-semibold mb-6">Dashboard</p>
          <ul className="flex flex-col gap-4 text-[#333]">
            <li onClick={() => navigate('/all-complaints')} className="hover:text-red-500 cursor-pointer">All Complaints</li>
            <li onClick={() => navigate('/pending-complaints')} className="hover:text-red-500 cursor-pointer">Pending Complaints</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10">
          {/* Top Cards */}
          <div className="flex gap-6 mb-10">
            <div className="bg-white shadow p-6 rounded-lg w-1/3 text-center">
              <p onClick={() => navigate('/all-complaints')} className="hover:text-sm text-red-500">All Complaints</p>
              <p className="text-2xl font-semibold mt-2"></p>
            </div>
            <div className="bg-white shadow p-6 rounded-lg w-1/3 text-center">
              <p onClick={() => navigate('/pending-complaints')} className="hover:text-sm text-red-500">Pending Complaints</p>
              <p className="text-2xl font-semibold mt-2"></p>
            </div>
          </div>

          {/* Latest Complaints Table */}
          <div className="bg-white shadow p-6 rounded-lg">
            <p className="text-red-500 font-semibold text-lg mb-4">Latest Complaints</p>
            <div className="bg-gray-100 p-4 rounded text-center text-gray-400">
              No latest complaints to show
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard