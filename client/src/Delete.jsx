import React from "react";

const Delete = ({ show, modal, list, deleted }) => {
  const handleDelete = () => {};
  return (
    <div
      id="info-popup"
      tabindex="-1"
      class={`w-full h-full inset-0 ${
        show ? "" : "hidden"
      } fixed bg-black bg-opacity-60 z-20 flex`}
    >
      {deleted && (
        <div className={` m-auto  max-w-lg `}>
          <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
            <div class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
              <h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Are you sure?
              </h3>
              <h2 className="text-lg font-bold">Item Name{deleted.name}</h2>
              <p>
                Are you sure you want to delete this item? This action cannot be
                undone. Deleting the item will permanently remove it from your
                records. Please confirm whether you want to proceed with the
                deletion.
              </p>
            </div>
            <div class="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
              <div class="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                <button
                  onClick={() => {
                    modal(false);
                  }}
                  id="close-modal"
                  type="button"
                  class="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  id="confirm-button"
                  type="button"
                  class="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
