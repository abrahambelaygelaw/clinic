import { createContext, useState } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {

  const [itemToDelte, setItemToDelete] = useState(null);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [showForm, setShowForm] = useState(false);
  return (
    <UserContext.Provider
      value={{
        itemToDelte,
        setItemToDelete,
        showForm,
        setShowForm,
        itemToEdit,
        setItemToEdit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
