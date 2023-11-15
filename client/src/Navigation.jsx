import React from "react";
import { URL } from "./Constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${URL}logout`,
        {},
        { withCredentials: true }
      );
    } catch (err) {}
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <nav className=" bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center p-4">
        <a href="#" className="flex items-center">
          <img
            src="../assets/imgs/clinicLogo.png"
            className="h-8 mr-3"
            alt="clinic Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Clinic
          </span>
        </a>
        <div className="flex items-center">
          <button
            type="button"
            onClick={handleLogout}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
