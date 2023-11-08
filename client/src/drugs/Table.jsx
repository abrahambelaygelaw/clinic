import React, { useEffect, useState } from "react";
import Utility from "./Utility";
import { TbEdit } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Table = () => {
  const [tableData, setTableData] = useState([]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <Utility tableData={tableData} setTableData={setTableData} />

          <div className="overflow-x-auto">
            {tableData.length != 0 ? (
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-4 py-3">
                      item code
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-4 py-3">
                      min
                    </th>
                    <th scope="col" className="px-4 py-3">
                      max
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item) => (
                    <tr
                      key={item._id}
                      className="border-b dark:border-gray-700 hover:bg-gray-100"
                    >
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.name}
                      </th>
                      <td className="px-4 py-3">{item.DrugType}</td>
                      <td className="px-4 py-3">{item.itemCode}</td>
                      <td className="px-4 py-3">{item.quantity}</td>
                      <td className="px-4 py-3">{item.min}</td>
                      <td className="px-4 py-3">{item.max}</td>

                      <td className="px-4 py-3 flex items-center justify-end">
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 flex justify-between">
                          <li>
                            <Link>
                              {" "}
                              <TbEdit className=" hover:text-blue-600 text-lg mx-3" />
                            </Link>
                          </li>
                          <li>
                            <button>
                              <MdOutlineDeleteOutline className="hover:text-red-600 text-lg mx-3" />
                            </button>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex w-full">
                <h3 className=" my-10 mx-auto">No Results found</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
