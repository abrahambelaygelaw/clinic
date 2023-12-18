import React, { useState } from "react";
import axiosWithAuth from "../../utility/axiosWithAuth";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import ChangePassword from "./ChangePassword";
const Profile = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosWithAuth.post("logout");
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
    } catch (err) {}
    navigate("/login");
    setLoading(false);
  };

  return (
    <>
      <div className=" max-w-screen-lg m-3 lg:mx-auto p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg
              fill="#000000"
              width="30px"
              height="30px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>user</title>
              <path d="M4 28q0 0.832 0.576 1.44t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.44q0-1.44-0.672-2.912t-1.76-2.624-2.496-2.144-2.88-1.504q1.76-1.088 2.784-2.912t1.024-3.904v-1.984q0-3.328-2.336-5.664t-5.664-2.336-5.664 2.336-2.336 5.664v1.984q0 2.112 1.024 3.904t2.784 2.912q-1.504 0.544-2.88 1.504t-2.496 2.144-1.76 2.624-0.672 2.912z"></path>
            </svg>
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {user.username}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <button
              onClick={(e) => {
                handleLogout(e);
              }}
              type="button"
              disabled={loading}
              className="px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 flex justify-center items-center"
            >
              <ClipLoader
                color="#ffffff"
                loading={loading}
                // cssOverride={override}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              <span className="mx-3">Logout</span>
            </button>
          </div>
        </div>
      </div>
      <ChangePassword />
    </>
  );
};

export default Profile;
