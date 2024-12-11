import React from "react";
import Navbar from "../components/layout/Navbar";
import Main from "../components/layout/Profile";

const Profile: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 min-h-screen">
      <Navbar/>
      <Main/>
    </div>
  );
};

export default Profile;