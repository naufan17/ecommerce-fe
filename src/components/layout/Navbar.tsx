import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-end">
          <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:items-stretch lg:justify-end">
            <div className="hidden lg:ml-6 lg:block">
              <div className="flex space-x-4">
                <Link
                  to="/login"
                  className="bg-gray-900 text-white rounded-md px-6 py-2 text-sm font-medium hover:bg-gray-700"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;