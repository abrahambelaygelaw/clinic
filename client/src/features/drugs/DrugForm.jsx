import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useDrug from "../../hooks/useDrug";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "../../utility/axiosWithAuth";
import drugInitialValues from "./drugInitialValues";
import drugValidationSchema from "./drugValidation";
import ClipLoader from "react-spinners/ClipLoader";
const AddDrug = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { showForm, setShowForm, itemToEdit, setItemToEdit } = useDrug();
  const handleCreate = async () => {
    setLoading(true);
    try {
      const response = await axiosWithAuth.post(`drug`, values);
      console.log("Form submitted successfully.", response.data);
      toast.success("Drug saved successfully", {
        position: "top-right",
        autoClose: 2000, // Time in milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setShowForm(false);
      navigate("/drugs");
    } catch (error) {
      console.error("Form submission failed.", error);
      toast.error("Drug is not saved", {
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
  const handleEdit = async () => {
    setLoading(true);
    try {
      await axiosWithAuth.put(`drug/${itemToEdit._id}`, values);
      console.log("Record updated successfully");
      toast.success("Drug saved successfully", {
        position: "top-right",
        autoClose: 2000, // Time in milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setShowForm(false);
      navigate("/drugs");
    } catch (error) {
      console.error("Error updating record:", error);
      toast.error("Drug is not saved", {
        position: "top-right",
        autoClose: 2000, // Time in milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    setItemToEdit(null);
    setShowForm(false);
    setLoading(false);
  };
  const {
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleReset,
    handleChange,
    values,
  } = useFormik({
    initialValues: drugInitialValues(),
    validationSchema: drugValidationSchema,
    enableReinitialize: true,
    onSubmit: itemToEdit ? handleEdit : handleCreate,
  });

  return (
    <>
      <ToastContainer />
      <div
        className={`w-full  inset-0 ${
          showForm ? "" : "hidden"
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
                setShowForm(false);
                setItemToEdit(null);
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

          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 ">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Drug Name
                </label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  id="name"
                  value={values.name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {touched.name && errors.name ? (
                  <div style={{ color: "darkgreen" }}>{errors.name}</div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="strength"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Strength
                </label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  id="strength"
                  value={values.strength}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {touched.strength && errors.strength ? (
                  <div style={{ color: "darkgreen" }}>{errors.strength}</div>
                ) : null}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    id="itemCode"
                    value={values.itemCode}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {touched.itemCode && errors.itemCode ? (
                    <div style={{ color: "darkgreen" }}>{errors.itemCode}</div>
                  ) : null}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="number"
                    id="max"
                    value={values.max}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {touched.max && errors.max ? (
                    <div style={{ color: "darkgreen" }}>{errors.max}</div>
                  ) : null}
                </div>{" "}
                <div className="flex-grow">
                  <label
                    htmlFor="min"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Min
                  </label>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="number"
                    id="min"
                    value={values.min}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {touched.min && errors.min ? (
                    <div style={{ color: "darkgreen" }}>{errors.min}</div>
                  ) : null}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    id="stockCardNo"
                    value={values.stockCardNo}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {touched.stockCardNo && errors.stockCardNo ? (
                    <div style={{ color: "darkgreen" }}>
                      {errors.stockCardNo}
                    </div>
                  ) : null}
                </div>
                <div className="flex-grow">
                  <label
                    htmlFor="location"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Location
                  </label>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    id="location"
                    value={values.location}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {touched.location && errors.location ? (
                    <div style={{ color: "darkgreen" }}>{errors.location}</div>
                  ) : null}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 flex justify-center items-center"
            >
              <ClipLoader
                color="#ffffff"
                loading={loading}
                // cssOverride={override}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              <span className="mx-2"> Save</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDrug;
