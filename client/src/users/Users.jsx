import React, { useEffect, useState } from "react";
import useDataFetching from "../hooks/useDataFetching";
import { URL } from "../Constants";

const Users = () => {
  const [users, setUsers] = useState();
  const { data, error } = useDataFetching(`${URL}users`);
  useEffect(() => {
    if (data) {
      setUsers(data);
      console.log(data);
    }
  }, [data]);

  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 class="mb-4 text-xl tracking-tight font-old text-gray-900 dark:text-white">
            Pharmacy Staffs
          </h2>
        </div>
        {users && (
          <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {users.map((item) => (
              <div
                key={item._id}
                class="text-center text-gray-500 dark:text-gray-400"
              >
                <img
                  src="../assets/imgs/avatar.jpg"
                  class="mx-auto mb-4 w-36 h-36 rounded-full"
                  alt="Bonnie Avatar"
                />
                <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.firstName} {item.lastName}
                </h3>
                <p>{item.role} </p>
                <p>{item.email} </p>
                <button></button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Users;
