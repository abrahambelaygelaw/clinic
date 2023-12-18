import Table from "./Table";
import TransactionForm from "./TransactionForm";
import { TransactionProvider } from "../../context/TransactionProvider";

const Transaction = () => {
  return (
    <TransactionProvider>
      <TransactionForm />
      <Table />
    </TransactionProvider>
  );
};

export default Transaction;
