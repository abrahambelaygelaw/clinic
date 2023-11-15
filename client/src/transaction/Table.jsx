import { useState, useEffect, useContext } from "react";
import queryString from "query-string";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import useDataFetching from "../hooks/useDataFetching";
import { URL } from "../Constants";
import TransactionTable from "./TransactionTable";
import Pagination from "../Components/Pagination";
import DrugData from "./DrugData";
import { TransactionContext } from "../Context";

const Table = () => {
  const { setShowTransactionForm } = useContext(TransactionContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const parsed = queryString.parse(location.search);
  const [filter, setFilter] = useState(parsed);
  const [transactionData, setTransactionData] = useState([]);
  const [count, setCount] = useState(0);
  const [perPage, setPerPage] = useState(15);
  const currentPage = parsed.page || 1;
  const { data, error, loading } = useDataFetching(
    `${URL}transaction/${id}/${location.search}`
  );

  useEffect(() => {
    if (data) {
      setTransactionData(data.data);
      setCount(data.count);
    }
  }, [data]);
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <DrugData />
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <button
              type="button"
              className="flex items-center justify-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 md:min-w-fit min-w-full"
              onClick={() => {
                setShowTransactionForm(true);
              }}
            >
              <svg
                className="h-3.5 w-3.5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                />
              </svg>
              Transaction
            </button>
            {/* <select
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option defaultValue={filter.type}>All</option>
              <option value="under">Under Min</option>
              <option value="over">Over Max</option>
            </select> */}
          </div>
          {transactionData.length != 0 && (
            <div className="overflow-x-auto">
              <TransactionTable transactionData={transactionData} />
              <Pagination page={currentPage} total={count} perPage={perPage} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
