import DrugForm from "./DrugForm";
import Delete from "./Delete";
import Table from "./Table";
import { DrugProvider } from "../../context/DrugProvider";
const Drugs = () => {
  return (
    <DrugProvider>
      <Delete />
      <DrugForm />
      <Table />
    </DrugProvider>
  );
};

export default Drugs;
