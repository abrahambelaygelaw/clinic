import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import axiosWithAuth from "../../utility/axiosWithAuth";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosWithAuth.put(`changePassword/${user._id}`, {
        oldPassword,
        newPassword,
      });

      setNewPassword("");
      setConfirmPassword("");
      setOldPassword("");
    } catch (error) {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 2000, // Time in milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    setLoading(false);
  };
  return (
    <div className=" max-w-screen-lg m-3 lg:mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <ToastContainer />
      <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
        Change Password
      </h5>
      <div className="grid lg:grid-cols-3 gap-3">
        <form onSubmit={handleChangePassword}>
          <div className="mb-5">
            <label
              htmlFor="oldPassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Old password
            </label>
            <input
              onChange={(e) => {
                setOldPassword(e.target.value);
              }}
              type="password"
              value={oldPassword}
              id="oldPassword"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              New password
            </label>
            <input
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              type="password"
              value={newPassword}
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Repeat password
            </label>
            <input
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              type="password"
              value={confirmPassword}
              id="repeat-password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className="px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 flex justify-center items-center"
          >
            <ClipLoader
              color="#ffffff"
              loading={loading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <span className="mx-2">Change password</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
