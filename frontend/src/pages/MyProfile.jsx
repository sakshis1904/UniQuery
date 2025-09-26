import React, { useState } from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';


const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Halelulia',
    email: 'halelulia@example.com',
    phone: '1234567890',
    roomNo: '206',
    image: assets.person1 
  });

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const updateUserProfileData = () => {
    if (image) {
      setUserData(prev => ({ ...prev, image: URL.createObjectURL(image) }));
    }
    setIsEdit(false);
  };

  return (
    <div className="min-h-screen flex px-40 items-start py-10" style={{ backgroundColor: "#E6E6FA" }}>
    <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow">
      {isEdit ? (
        <label htmlFor='image'>
          <div className='inline-block relative cursor-pointer'>
            <img
              className='w-36 rounded opacity-75'
              src={image ? URL.createObjectURL(image) : userData.image}
              alt=""
            />
            <img className='w-10 absolute bottom-12 right-12' src={image ? '' : assets.person1} alt="" />
          </div>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden />
        </label>
      ) : (
        <img className='w-36 rounded' src={userData.image} alt="" />
      )}

      {isEdit ? (
        <input
          className='bg-gray-50 text-3xl font-medium max-w-60 mt-4'
          type="text"
          value={userData.name}
          onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
        />
      ) : (
        <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      )}

      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p style={{ color: "#452c63" }}>{userData.email}</p>

          <p className='font-medium'>Phone:</p>
          {isEdit ? (
            <input
              className='bg-gray-100 max-w-52'
              type="text"
              value={userData.phone}
              onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
            />
          ) : (
            <p style={{ color: "#452c63" }}>{userData.phone}</p>
          )}

          <p className='font-medium'>Room No:</p>
          {isEdit ? (
            <input
              className='bg-gray-100 max-w-52'
              type="text"
              value={userData.roomNo}
              onChange={e => setUserData(prev => ({ ...prev, roomNo: e.target.value }))}
            />
          ) : (
            <p style={{ color: "#452c63" }}>{userData.roomNo}</p>
          )}

        </div>
      </div>

      <div className='mt-10'>
        {isEdit ? (
          <button
            className='border border-red-500 px-8 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all'
            onClick={updateUserProfileData}
          >
            Save Information
          </button>
        ) : (
          <button
            className='border border-purple-900 px-8 py-2 rounded-full hover:bg-purple-900 hover:text-white transition-all'
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
    </div>
  );
};

export default MyProfile;
