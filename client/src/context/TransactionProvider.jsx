import React, { createContext, useState } from "react";
const TransactionContext = createContext();
export const TransactionProvider = ({ children }) => {
  const [itemToDelte, setItemToDelete] = useState(null);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [drugData, setDrugData] = useState(null);
  return (
    <TransactionContext.Provider
      value={{
        itemToDelte,
        setItemToDelete,
        showForm,
        setShowForm,
        itemToEdit,
        setItemToEdit,
        drugData,
        setDrugData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
