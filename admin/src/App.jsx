import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Login from "./pages/login";
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from "./context/AdminContext";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from 'react-router-dom';
import AllComplaints from "./pages/AllComplaints";
import PendingComplaints from "./pages/PendingComplaints";

const App = () => {
  
  const {aToken } = useContext(AdminContext)

  return aToken ? (
    <div>
       <ToastContainer />
       <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/all-complaints" element={<AllComplaints />} />
          <Route path="/pending-complaints" element={<PendingComplaints />} />
       </Routes>
    </div>
      
  ) : (
    <>
       <Login />
       <ToastContainer />
    </>
  )
};

export default App;
