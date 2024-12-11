/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, profileUser } from "../../store/authThunk";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  const dispatch: Dispatch<any> = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(profileUser());
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
      <div className="bg-gradient-to-r from-indigo-50 p-12 shadow-md rounded-lg">
        <div className="flex items-center justify-start my-4">
          <img 
            src="https://res.cloudinary.com/ddpbwjjfz/image/upload/v1706756352/profile/dqfxsphjjtbfwt4v62gv.jpg" 
            alt="profile" 
            className="w-32 h-32 rounded-full"
            />
        </div>
        <div className="grid grid-cols-2 items-center">
          <div className="my-4">
            <h2 className="font-medium">Nama :</h2>
          </div>
          <div>
            <p className="text-gray-800 font-medium">{user?.name}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center">
          <div className="my-4">
            <h2 className="font-medium">Email :</h2>
          </div>
          <div>
            <p className="text-gray-800 font-medium">{user?.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center">
          <div className="my-4">
            <h2 className="font-medium">Jenis Kelamin :</h2>
          </div>
          <div>
            <p className="text-gray-800 font-medium">{user?.gender}</p>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button onClick={handleLogout} className="bg-gray-900 text-white rounded-md px-8 py-2.5 text-base font-medium hover:bg-gray-700">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;