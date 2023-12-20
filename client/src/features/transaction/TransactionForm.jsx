import { useNavigate, useParams } from "react-router-dom";
import useTransaction from "../../hooks/useTransaction";
import axiosWithAuth from "../../utility/axiosWithAuth";
import { toast, ToastContainer } from "react-toastify";
import transactionValidationSchema from "./TransactionValidation";
import { useFormik } from "formik";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
const TransactionForm = () => {
  const { showForm, setShowForm, drugData } = useTransaction();
  const [loading, setLoading] = useState(false);
  const { setTransactionData } = useTransaction();
  const {
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleReset,
    handleChange,
    values,
  } = useFormik({
    initialValues: {
      place: "",
      documentRef: "",
      in: 0,
      out: 0,
      expDate: "",
      batchNo: "",
      remark: "",
    },
    validationSchema: transactionValidationSchema,
    enableReinitialize: true,
    onSubmit: async () => {
      setLoading(true);
      try {
        const res = await axiosWithAuth.post(`transaction`, {
          ...values,
          drug: drugData._id,
        });
        setTransactionData((prev) => {
          return [...prev, res];
        });
        toast.success("Transaction saved successfully", {
          position: "top-right",
          autoClose: 2000, // Time in milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setShowForm(false);
      } catch (error) {
        toast.error("Error submitting transaction", {
          position: "top-right",
          autoClose: 2000, // Time in milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div
      className={`w-full  inset-0 ${
        showForm ? "" : "hidden"
      } fixed  bg-black bg-opacity-60 z-10`}
    >
      <ToastContainer />
      <div className={`m-3 md:mx-auto mt-6 p-3 max-w-2xl bg-white rounded-lg`}>
        {" "}
        <div className="flex items-start justify-between p-4 mb-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Add Transaction For {drugData?.name}
          </h3>
          <button
            type="button"
            onClick={() => {
              setShowForm(false);
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
        </div>{" "}
        <form onSubmit={handleSubmit}>
          <div className="grid gap-5">
            <div>
              <label
                htmlFor="place"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                From / To
              </label>
              <input
                onChange={handleChange}
                value={values.place}
                type="text"
                id="place"
                name="place"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onBlur={handleBlur}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="documentRef"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Document Ref
                </label>
                <input
                  onChange={handleChange}
                  value={values.documentRef}
                  type="text"
                  id="documentRef"
                  name="documentRef"
                  onBlur={handleBlur}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>{" "}
              <div>
                <label
                  htmlFor="batchNo"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Batch No
                </label>
                <input
                  onChange={handleChange}
                  value={values.batchNo}
                  onBlur={handleBlur}
                  type="text"
                  id="batchNo"
                  name="batchNo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>{" "}
              <div>
                <label
                  htmlFor="in"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  In Quantity
                </label>
                <input
                  onChange={handleChange}
                  value={values.in}
                  type="Number"
                  id="in"
                  name="in"
                  onBlur={handleBlur}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>{" "}
              <div>
                <label
                  htmlFor="out"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Out Quantity
                </label>
                <input
                  onChange={handleChange}
                  value={values.out}
                  type="Number"
                  id="out"
                  name="out"
                  onBlur={handleBlur}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>{" "}
            </div>
            <div>
              <label
                htmlFor="expDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Expire Date
              </label>
              <input
                onChange={handleChange}
                value={values.expDate}
                type="date"
                id="expDate"
                name="expDate"
                onBlur={handleBlur}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="remark"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Remark
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="remark"
                onBlur={handleBlur}
                name="remark"
                value={values.remark}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-6 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 flex justify-center items-center"
          >
            {" "}
            <ClipLoader
              color="#ffffff"
              loading={loading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <span className="mx-3">Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;
