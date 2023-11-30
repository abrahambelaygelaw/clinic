import React, { useState } from "react";
import Navigation from "../Navigation";
import Table from "./Table";
import { TransactionContext } from "../Context";
import TransactionForm from "./TransactionForm";

const Transaction = () => {
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [drugData, setDrugData] = useState();
  return (
    <TransactionContext.Provider
      value={{
        showTransactionForm,
        setShowTransactionForm,
        drugData,
        setDrugData,
      }}
    >
      <TransactionForm />
      <Table />
    </TransactionContext.Provider>
  );
};

export default Transaction;
