import React from "react";
import Navbar from "../components/layout/Navbar";

const Profile: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 min-h-screen">
      <Navbar/>
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;