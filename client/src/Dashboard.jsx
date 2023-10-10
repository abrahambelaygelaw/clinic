import React, { useState } from "react";
import useFetch from "../useFetch";

const Dashboard = () => {
  const [tableData, setTableData] = useState();
  const { data } = useFetch("http://localhost:3500/all");
  if (data) {
    if (!tableData) {
      setTableData(data);
      console.log(data);
    }
  }
  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Medication name
              </th>
              <th scope="col" class="px-6 py-3">
                Catagory
              </th>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  {item.name}
                </th>
                <td class="px-6 py-4">{item.medType}</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  {item.price}
                </td>
                <td class="px-6 py-4">{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
