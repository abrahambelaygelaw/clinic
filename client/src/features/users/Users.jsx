import React, { useEffect, useState } from "react";
import useDataFetching from "../../hooks/useDataFetching";
import { MdDelete, MdEdit } from "react-icons/md";
import useUser from "../../hooks/useUser";
import UserForm from "./UserForm";
import Delete from "./Delete";
const Users = () => {
  const [users, setUsers] = useState();
  const { data, error } = useDataFetching("user");
  const user = JSON.parse(localStorage.getItem("user"));
  const { setShowForm, setItemToEdit, setItemToDelete } = useUser();
  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  return (
    <>
      <Delete setUsers={setUsers} />
      <UserForm setUsers={setUsers} />
      <div className=" dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-xl tracking-tight font-old text-gray-900 dark:text-white">
              Pharmacy Staffs
            </h2>
          </div>
          {users && (
            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              {users.map((item) => (
                <div
                  key={item._id}
                  className="text-center text-gray-500 dark:text-gray-400 border rounded-lg "
                >
                  <div className="m-auto flex justify-center py-2 bg-gray-100">
                    <svg
                      fill="#000000"
                      width="100px"
                      height="100px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>user</title>
                      <path d="M4 28q0 0.832 0.576 1.44t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.44q0-1.44-0.672-2.912t-1.76-2.624-2.496-2.144-2.88-1.504q1.76-1.088 2.784-2.912t1.024-3.904v-1.984q0-3.328-2.336-5.664t-5.664-2.336-5.664 2.336-2.336 5.664v1.984q0 2.112 1.024 3.904t2.784 2.912q-1.504 0.544-2.88 1.504t-2.496 2.144-1.76 2.624-0.672 2.912z"></path>
                    </svg>
                  </div>
                  <div className=" ">
                    <h3 className="m-1  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item?.firstName} {item?.lastName}{" "}
                    </h3>
                    <p>{item?.role} </p>
                    <p>{item?.username} </p>
                    <div className="text-2xl  flex p-2 bg-gray-100">
                      {" "}
                      <button
                        className="flex-1 flex justify-center border-r-2"
                        onClick={() => {
                          setItemToEdit(item);
                          setShowForm(true);
                        }}
                      >
                        {" "}
                        <MdEdit />
                      </button>
                      <button
                        className="flex-1 flex justify-center disabled:cursor-not-allowed"
                        disabled={item.username === user.username}
                        onClick={() => {
                          setItemToDelete(item);
                        }}
                      >
                        {" "}
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={() => {
                  setShowForm(true);
                }}
              >
                <div className="cursor-pointer">
                  <div className="m-auto  max-w-fit">
                    <svg
                      fill="#000000"
                      width="100px"
                      height="100px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>plus-user</title>
                      <path d="M2.016 28q0 0.832 0.576 1.44t1.408 0.576h14.016v-0.352q-1.792-0.608-2.912-2.176t-1.088-3.488q0-2.016 1.184-3.584t3.072-2.112q0.384-1.216 1.216-2.176t2.016-1.504q0.512-1.376 0.512-2.624v-1.984q0-3.328-2.368-5.664t-5.632-2.336-5.664 2.336-2.336 5.664v1.984q0 2.112 1.024 3.904t2.784 2.912q-1.504 0.544-2.912 1.504t-2.496 2.144-1.76 2.624-0.64 2.912zM18.016 24q0 0.832 0.576 1.44t1.408 0.576h2.016v1.984q0 0.864 0.576 1.44t1.408 0.576 1.408-0.576 0.608-1.44v-1.984h1.984q0.832 0 1.408-0.576t0.608-1.44-0.608-1.408-1.408-0.576h-1.984v-2.016q0-0.832-0.608-1.408t-1.408-0.576-1.408 0.576-0.576 1.408v2.016h-2.016q-0.832 0-1.408 0.576t-0.576 1.408z"></path>
                    </svg>
                  </div>
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Add User
                  </h3>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Users;
