import { ToastContainer, toast } from "react-toastify";
import axiosWithAuth from "../../utility/axiosWithAuth";
import useUser from "../../hooks/useUser";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
const Delete = () => {
  const { itemToDelte, setItemToDelete } = useUser();
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    setLoading(true);
    try {
      await axiosWithAuth.delete(`user/${itemToDelte._id}`);
      window.location.reload();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred", {
        position: "top-right",
        autoClose: 2000, // Time in milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    setItemToDelete(null);
    setLoading(false);
  };

  return (
    <>
      <ToastContainer />
      <div
        id="info-popup"
        tabIndex="-1"
        className={`w-full h-full inset-0 fixed bg-black bg-opacity-60 z-20 flex ${
          itemToDelte ? "" : "hidden"
        }`}
      >
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
                  Are you sure you want to delete this item? This action cannot
                  be undone. Deleting the item will permanently remove it from
                  your records. Please confirm whether you want to proceed with
                  the deletion.
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
                    disabled={loading}
                    className="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center items-center"
                  >
                    <ClipLoader
                      color="#ffffff"
                      loading={loading}
                      // cssOverride={override}
                      size={20}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                    <span className="mx-3">Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Delete;
