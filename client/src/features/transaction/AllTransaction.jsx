import React, { useEffect, useState } from "react";
import useDataFetching from "../../hooks/useDataFetching";
import { dateFormatter } from "../../utility/dateFormatter";
import { useNavigate } from "react-router-dom";
import Pagination from "../../Components/Pagination";

const AllTransaction = () => {
  const [transactionData, setTransactionData] = useState();
  const [count, setCount] = useState(0);
  const { data } = useDataFetching(`transaction`);
  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      setTransactionData(data.data);
      setCount(data.count);
    }
  }, [data]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4 p-4">
            <h1>All transaction history</h1>
          </div>
          <div className="overflow-x-auto ">
            {transactionData && transactionData.length != 0 && (
              <>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Drug Name
                      </th>
                      <th scope="col" className="px-4 py-3">
                        From/To
                      </th>
                      <th scope="col" className="px-4 py-3">
                        in
                      </th>
                      <th scope="col" className="px-4 py-3">
                        out
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
                    {transactionData.map(
                      (item) =>
                        item.drug && (
                          <tr
                            key={item._id}
                            onClick={() => {
                              navigate(item.drug._id);
                            }}
                            className="border-b dark:border-gray-700 hover:bg-gray-100 "
                          >
                            <th
                              scope="row"
                              className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer"
                            >
                              {dateFormatter(item.date)}
                            </th>
                            <td className="px-4 py-3">{item.drug.name}</td>
                            <td className="px-4 py-3">{item.place}</td>
                            <td className="px-4 py-3">
                              {item.in ? item.in : "-"}
                            </td>
                            <td className="px-4 py-3">
                              {item.out ? item.out : "-"}
                            </td>
                            <td className="px-4 py-3">
                              {item.batchNo ? item.batchNo : "-"}
                            </td>
                            <td className="px-4 py-3">
                              {item.remark ? item.remark : "-"}
                            </td>
                          </tr>
                        )
                    )}
                  </tbody>
                </table>
              </>
            )}
            {transactionData && transactionData.length == 0 && (
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

export default AllTransaction;
