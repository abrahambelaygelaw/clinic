import useUser from "../../hooks/useUser";
import axiosWithAuth from "../../utility/axiosWithAuth";
import { useFormik } from "formik";
import userInitialValues from "./userInitialValues";
import userValidationSchema from "./userValidationSchema";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
const UserForm = () => {
  const { showForm, setShowForm, itemToEdit, setItemToEdit } = useUser();
  const [loading, setLoading] = useState(false);
  const handleCreate = async () => {
    setLoading(true);
    try {
      await axiosWithAuth.post("/user", values);

      window.location.reload();
    } catch (error) {
      toast.error("Error creating user", {
        position: "top-right",
        autoClose: 2000, // Time in milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    setLoading(false);
    setShowForm(false);
  };
  const handleEdit = async () => {
    setLoading(true);
    try {
      await axiosWithAuth.put(`user/${itemToEdit._id}`, values);
      window.location.reload();
    } catch (error) {
      toast.error("Error updating", {
        position: "top-right",
        autoClose: 2000, // Time in milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    setLoading(false);
    setShowForm(false);
  };
  const { errors, touched, handleBlur, handleSubmit, handleChange, values } =
    useFormik({
      initialValues: userInitialValues(),
      validationSchema: userValidationSchema(itemToEdit),
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
          {" "}
          <div className="flex items-start justify-between p-4 mb-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {itemToEdit ? "Edit" : "Add"} User
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
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  for="firstName"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onBlur={handleBlur}
                  value={values.firstName}
                  onChange={handleChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
                {touched.firstName && errors.firstName ? (
                  <div style={{ color: "darkgreen" }}>{errors.firstName}</div>
                ) : null}
              </div>
              <div>
                <label
                  for="lastName"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  onBlur={handleBlur}
                  name="lastName"
                  id="lastName"
                  value={values.lastName}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
                {touched.lastName && errors.lastName ? (
                  <div style={{ color: "darkgreen" }}>{errors.lastName}</div>
                ) : null}
              </div>
              <div>
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="username"
                  onBlur={handleBlur}
                  id="username"
                  value={values.username}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
                {touched.username && errors.username ? (
                  <div style={{ color: "darkgreen" }}>{errors.username}</div>
                ) : null}
              </div>
              {!itemToEdit && (
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="password"
                    id="password"
                    onBlur={handleBlur}
                    value={values.password}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                  {touched.password && errors.password ? (
                    <div style={{ color: "darkgreen" }}>{errors.password}</div>
                  ) : null}
                </div>
              )}
              <div class="flex items-center my-4">
                <input
                  id="admin"
                  name="admin"
                  type="checkbox"
                  onBlur={handleBlur}
                  checked={values.admin}
                  onChange={handleChange}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="admin"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Admin
                </label>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <button
                disabled={loading}
                type="submit"
                class="flex justify-center items-center text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                {" "}
                <ClipLoader
                  color="#ffffff"
                  loading={loading}
                  // cssOverride={override}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
                <span className="mx-3"> Save</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default UserForm;
