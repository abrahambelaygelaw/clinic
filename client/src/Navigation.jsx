import React, { useContext } from "react";
import { URL } from "./Constants";
import axios from "axios";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AiFillMedicineBox } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { PiUsersFill } from "react-icons/pi";
import { MdOutlineLogout } from "react-icons/md";
import axiosWithAuth from "./Utility/axiosWithAuth";
import { UserContext } from "./Context";

const Navigation = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axiosWithAuth.post("logout");
    } catch (err) {}
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <>
      {" "}
      <nav className="p-4 bg-gray-50 w-full ">
        <div className="  flex justify-between items-center text-gray-800 ">
          <div className="flex items-center">
            {" "}
            <img
              src="../assets/imgs/clinicLogo.png"
              className="h-8 mr-3"
              alt="clinic Logo"
            />
            <span className="elf-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Pharmacy
            </span>
          </div>

          <div className="space-x-4 flex jusify-center items-center">
            <NavLink to="/drugs" className="  hover:text-gray-500">
              Drugs
            </NavLink>
            <NavLink to="/transaction" className=" hover:text-gray-500">
              Transactions
            </NavLink>
            {user.roles == "admin" && (
              <NavLink to="/users" className=" hover:text-gray-500">
                Users
              </NavLink>
            )}
            <button
              type="button"
              onClick={handleLogout}
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
