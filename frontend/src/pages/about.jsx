import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div style={{ backgroundColor: "#E6E6FA" }}>

      <div className='text-center text-2xl pt-10 text-gray-500 '>
        <p>ABOUT <span className='text-gray-700'>US</span></p>
      </div>

      <div className='px-30 my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-max-[200px] md:max-w-[500px]' src={assets.about_page} alt="" /> 

        <div className='text-center text-2xl pt-10 text-gray-700 '>
          <p>OUR <span className='text-gray-700'>Story</span></p>
        </div>

        <div className='flex flex-col justify-center gap-6 w-2/4 text-sm text-gray-600'>
         
         <p>Launched in 2025, the Hostel Complaint Management System is designed to streamline and simplify the complaint resolution process within hostels. From leaky taps and WiFi breakdowns to mess or housekeeping issues, we ensure every concern is addressed promptly and professionally.</p>

        </div>
      </div>

      <div className='flex flex-col md:flex-row mb-20 px-30 py-30'>
        <div className='border bg-white px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] text-gray-600 cursor-pointer'>
          <p><img className='w-full md:max-w-[360px]' src={assets.person1} alt="" /></p>
          <p className='flex justify-center gap-6 text-xl text-black'>Tom Cruise</p>
          <p className='flex justify-center gap-6 text-sm text-gray-600'>Technical Support Lead</p>
        </div>

        <div className='border bg-white px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] text-gray-600 cursor-pointer'>
          <p><img className='w-full md:max-w-[360px]' src={assets.person2} alt="" /></p>
          <p className='flex justify-center gap-6 text-xl text-black'>Emma Watson</p>
          <p className='flex justify-center gap-6 text-sm text-gray-600'>Hostel Admin Manager</p>
        </div>

        <div className='border bg-white px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] text-gray-600 cursor-pointer'>
          <p><img className='w-full md:max-w-[360px]' src={assets.person3} alt="" /></p>
          <p className='flex justify-center gap-6 text-xl text-black'>Will Smith</p>
          <p className='flex justify-center gap-6 text-sm text-gray-600'>Service Coordinator</p>
        </div>
      </div>

    </div>
  )
}

export default About