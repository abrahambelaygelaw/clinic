import React from "react";
import { dateFormatter } from "../../utility/dateFormatter";

const TransactionTable = ({ transactionData }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-4 py-3">
            Date
          </th>
          <th scope="col" className="px-4 py-3">
            From/To
          </th>
          <th scope="col" className="px-4 py-3">
            Document Ref
          </th>
          <th scope="col" className="px-4 py-3">
            in
          </th>
          <th scope="col" className="px-4 py-3">
            out
          </th>
          <th scope="col" className="px-4 py-3">
            Balance
          </th>
          <th scope="col" className="px-4 py-3">
            Batch No
          </th>
          <th scope="col" className="px-4 py-3">
            Remark
          </th>
        </tr>
      </thead>
      <tbody>
        {transactionData.map((item) => (
          <tr
            key={item._id}
            className="border-b dark:border-gray-700 hover:bg-gray-100 "
          >
            <th
              scope="row"
              className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer"
            >
              {item.date ? dateFormatter(item.date) : ""}
            </th>
            <td className="px-4 py-3">{item.place ? item.place : "-"}</td>
            <td className="px-4 py-3">
              {item.documentRef ? item.documentRef : "-"}
            </td>
            <td className="px-4 py-3">{item.in ? item.in : "-"}</td>
            <td className="px-4 py-3">{item.out ? item.out : "-"}</td>
            <td className="px-4 py-3">{item.balance ? item.balance : "-"}</td>
            <td className="px-4 py-3">{item.batchNo ? item.batchNo : "-"}</td>
            <td className="px-4 py-3">{item.remark ? item.remark : "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
