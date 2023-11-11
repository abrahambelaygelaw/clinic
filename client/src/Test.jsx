import { useEffect, useState } from "react";
import AddMedication from "./AddMedication";

import Delete from "./Delete";
import Utility from "./drugs/Utility";
import Navigation from "./Navigation";
import Table from "./drugs/Table";
const Test = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [tableData, setTableData] = useState();

  const [query, setQuery] = useState();
  const [deleted, setDeleted] = useState();

  return (
    <div className=" h-screen">
      <Delete show={showDelete} modal={setShowDelete} deleted={deleted} />
      <AddMedication show={showAdd} closeModal={setShowAdd} />
      <Navigation />
      <Table />
    </div>
  );
};

export default Test;
