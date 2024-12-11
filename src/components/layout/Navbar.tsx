import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    setAccessToken(sessionStorage.getItem("accessToken"));
  }, []);

  return (
    <nav>
      <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="flex items-center justify-between">
          <div></div>
          {accessToken ? (
            <Link
              to="/profile"
              className="text-gray-900 rounded-3xl border-2 border-gray-900 px-8 py-2.5 text-base font-medium hover:bg-gray-900 hover:text-white"
            >
              Profile
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-gray-900 text-white rounded-md px-8 py-2.5 text-base font-medium hover:bg-gray-700"
            >
              Masuk
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;