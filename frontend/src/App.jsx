import React from 'react'
import Index from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoomMaintenance from './pages/roomMaintenance';
import Mess from './pages/mess';
import Laundry from './pages/laundry';
import Wifi from './pages/wifi';
import Washroom from './pages/washroom';
import HouseKeeping from './pages/houseKeeping';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import MyProfile from './pages/MyProfile';

const App = () => {
  
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/room-maintenance" element={<RoomMaintenance />} />
          <Route path= "/mess" element={<Mess />} />
          <Route path="/laundry" element={<Laundry/>} />
          <Route path="/wifi" element={<Wifi/>} /> 
          <Route path="/washroom" element={<Washroom/>} />
          <Route path="/housekeeping" element={<HouseKeeping/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/my-profile" element={<MyProfile/>} />
        </Routes>

        <ToastContainer />
      </BrowserRouter>

    </div>
  )
}

export default App