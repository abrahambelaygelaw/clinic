import React, { createContext, useState } from "react";
const TransactionContext = createContext();
export const TransactionProvider = ({ children }) => {
  const [itemToDelte, setItemToDelete] = useState(null);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [drugData, setDrugData] = useState(null);
  const [transactionData, setTransactionData] = useState([]);

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
        transactionData,
        setTransactionData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
