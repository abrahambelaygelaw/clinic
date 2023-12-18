import React, { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const roles = JSON.parse(localStorage.getItem("user")).role;

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
            {roles.includes("admin") && (
              <NavLink to="/users" className=" hover:text-gray-500">
                Users
              </NavLink>
            )}
            <NavLink to="/me" className=" hover:text-gray-500">
              Me
            </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
