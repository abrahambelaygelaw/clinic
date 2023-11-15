import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DrugContext } from "../Context";
import { URL } from "../Constants";
const AddDrug = () => {
  const { itemToEdit, setItemToEdit, showDrugForm, setShowDrugForm } =
    useContext(DrugContext);
  const [name, setName] = useState("");
  const [strength, setStrength] = useState("");
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");
  const [stockCardNo, setStockCardNo] = useState("");
  const [location, setLocation] = useState("");
  const [itemCode, setItemCode] = useState("");
  const addedSuccussfully = () => toast("Item added succesfully");
  useEffect(() => {
    if (itemToEdit) {
      setName(itemToEdit.name);
      setItemCode(itemToEdit.itemCode);
      setStrength(itemToEdit.strength);
      setLocation(itemToEdit.location);
      setMax(itemToEdit.max);
      setMin(itemToEdit.min);
      setStockCardNo(itemToEdit.stockCardNo);
    }
  }, [itemToEdit]);

  const handleAdd = async (event) => {
    event.preventDefault();
    const formData = {};

    formData.name = name;
    formData.itemCode = itemCode;
    formData.max = max;
    formData.min = min;
    formData.location = location;
    formData.strength = strength;
    formData.stockCardNo = stockCardNo;

    try {
      const response = await axios.post(`${URL}drug`, formData, {});
      console.log("Form submitted successfully.", response.data);
      window.location.reload();
      addedSuccussfully();
    } catch (error) {
      console.error("Form submission failed.", error);
    }
    setShowDrugForm(false);
  };
  const handleEdit = async (event) => {
    event.preventDefault();
    const formData = {};

    formData.name = name;
    formData.itemCode = itemCode;
    formData.max = max;
    formData.min = min;
    formData.location = location;
    formData.strength = strength;
    formData.stockCardNo = stockCardNo;
    try {
      await axios.put(`${URL}drug/${itemToEdit._id}`, formData);
      console.log("Record updated successfully");
      navigate("/drug");
    } catch (error) {
      console.error("Error updating record:", error);
    }
    setItemToEdit(null);
    setShowDrugForm(false);
  };
  return (
    <>
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <div
        className={`w-full  inset-0 ${
          showDrugForm ? "" : "hidden"
        } fixed  bg-black bg-opacity-60 z-10`}
      >
        <div
          className={`m-3 md:mx-auto mt-6 p-3 max-w-2xl bg-white rounded-lg`}
        >
          <div className="flex items-start justify-between p-4 mb-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {itemToEdit ? "Edit" : "Add"} Drug
            </h3>
            <button
              type="button"
              onClick={() => {
                setShowDrugForm(false);
                setItemToEdit(null);
                setName("");
                setItemCode("");
                setStrength("");
                setLocation("");
                setMax("");
                setMin("");
                setStockCardNo("");
              }}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <form>
            <div className="grid gap-6 ">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Drug Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  value={name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="strength"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Strength
                </label>
                <input
                  onChange={(e) => setStrength(e.target.value)}
                  type="text"
                  id="strength"
                  value={strength}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex gap-2 ">
                <div className="flex-grow">
                  <label
                    htmlFor="itemCode"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Item code
                  </label>
                  <input
                    onChange={(e) => setItemCode(e.target.value)}
                    type="text"
                    id="itemCode"
                    value={itemCode}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex-grow">
                  <label
                    htmlFor="max"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Max
                  </label>
                  <input
                    onChange={(e) => setMax(e.target.value)}
                    type="number"
                    id="max"
                    value={max}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>{" "}
                <div className="flex-grow">
                  <label
                    htmlFor="min"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Min
                  </label>
                  <input
                    onChange={(e) => setMin(e.target.value)}
                    type="number"
                    id="min"
                    value={min}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-2 ">
                <div className="flex-grow">
                  <label
                    htmlFor="stockCardNo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Stock card Number
                  </label>
                  <input
                    onChange={(e) => setStockCardNo(e.target.value)}
                    type="text"
                    id="stockCardNo"
                    value={stockCardNo}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex-grow">
                  <label
                    htmlFor="location"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Location
                  </label>
                  <input
                    onChange={(e) => setLocation(e.target.value)}
                    type="text"
                    id="location"
                    value={location}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            </div>
            {itemToEdit ? (
              <button
                onClick={handleEdit}
                type="submit"
                className="mt-6 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleAdd}
                type="submit"
                className="mt-6 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Add
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDrug;
