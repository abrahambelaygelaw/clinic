import React from "react";
import { UserProvider } from "../context/UserProvider";
import Users from "../features/users/Users";
const usersPage = () => {
  document.title = "Users";

  return (
    <UserProvider>
      <Users />
    </UserProvider>
  );
};

export default usersPage;
