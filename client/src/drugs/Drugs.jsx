import DrugForm from "./DrugForm";
import Delete from "./Delete";
import { DrugContext } from "../Context";
import Table from "./Table";
import { useState } from "react";
const Drugs = () => {
  const [itemToDelte, setItemToDelete] = useState(null);
  const [showDrugForm, setShowDrugForm] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);
  return (
    <DrugContext.Provider
      value={{
        itemToDelte,
        setItemToDelete,
        showDrugForm,
        setShowDrugForm,
        itemToEdit,
        setItemToEdit,
      }}
    >
      <Delete />
      <DrugForm />
      <Table />
    </DrugContext.Provider>
  );
};

export default Drugs;
