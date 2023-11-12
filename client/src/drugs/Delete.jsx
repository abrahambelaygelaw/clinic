import React, { useContext, useEffect } from "react";
import { DrugContext } from "../Context";
import axios from "axios";
import { URL } from "../Constants";
import { ToastContainer, toast } from "react-toastify";
const Delete = () => {
  const { itemToDelte, setItemToDelete } = useContext(DrugContext);
  // const showToast = (message, options) => {
  //   // Store toast information in local storage
  //   const storedToasts = JSON.parse(localStorage.getItem("toasts")) || [];
  //   localStorage.setItem(
  //     "toasts",
  //     JSON.stringify([...storedToasts, { message, options }])
  //   );
  //   toast(message, options);
  //   localStorage.removeItem("toasts");
  // };
  // const showStoredToasts = () => {
  //   const storedToasts = JSON.parse(localStorage.getItem("toasts")) || [];

  //   storedToasts.forEach(({ message, options }) => {
  //     toast(message, options);
  //   });

  //   // Clear stored toasts after displaying
  // };

  // useEffect(() => {
  //   showStoredToasts();
  // }, []);
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${URL}drug/${itemToDelte._id}`);
      // showToast("Item deleted successfully", { autoClose: 1000 });
      window.location.reload();
    } catch (error) {
      console.error(error);
      // showToast("Deletion failed", { autoClose: 3000 });
    }
    setItemToDelete(null);
  };

  return (
    <div
      id="info-popup"
      tabIndex="-1"
      className={`w-full h-full inset-0 ${
        itemToDelte ? "" : "hidden"
      } fixed bg-black bg-opacity-60 z-20 flex`}
    >
      <ToastContainer />
      {itemToDelte && (
        <div className={` m-auto  max-w-lg `}>
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
            <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Are you sure?
              </h3>
              <h2 className="text-lg font-bold">
                Item Name {itemToDelte.name}
              </h2>
              <p>
                Are you sure you want to delete this item? This action cannot be
                undone. Deleting the item will permanently remove it from your
                records. Please confirm whether you want to proceed with the
                deletion.
              </p>
            </div>
            <div className="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
              <div className="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                <button
                  onClick={() => {
                    setItemToDelete(null);
                  }}
                  id="close-modal"
                  type="button"
                  className="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  id="confirm-button"
                  type="button"
                  className="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delete;
