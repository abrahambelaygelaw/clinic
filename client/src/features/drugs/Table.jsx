import { useState, useEffect } from "react";
import queryString from "query-string";
import { useNavigate, useLocation } from "react-router-dom";
import useDataFetching from "../../hooks/useDataFetching";
import Pagination from "../../Components/Pagination";
import DrugTable from "./DrugTable";
import { makeQueryString } from "../../utility/makeQueryString";
import { TfiReload } from "react-icons/tfi";
import useDebounce from "../../hooks/useDebounce";
import useDrug from "../../hooks/useDrug";
const Table = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const [filter, setFilter] = useState(parsed);
  const [tableData, setTableData] = useState();
  const [perPage, setPerPage] = useState(10);
  const currentPage = parsed.page || 1;
  const [searchTerm, setSearchTerm] = useState(parsed.name ? parsed.name : "");
  const [count, setCount] = useState();
  const { setShowForm } = useDrug();
  const { data, error, loading } = useDataFetching(`drug${location.search}`);
  const debouncedInput = useDebounce(searchTerm, 300);
  useEffect(() => {
    if (data) {
      setTableData(data.data);
      setCount(data.count);
    }
  }, [data]);
  const handleChange = (field, value) => {
    setFilter({ ...filter, [field]: value });
    const query = makeQueryString({
      ...filter,
      [field]: value,
      ["page"]: 1,
    });

    navigate(`?${query}`);
  };
  useEffect(() => {
    handleChange("name", searchTerm);
  }, [debouncedInput]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <button
              type="button"
              onClick={() => {
                setShowForm(true);
              }}
              className="flex items-center justify-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 md:min-w-fit min-w-full"
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
              Add Drug
            </button>
            <div className="flex w-full flex-grow">
              <div className="relative w-full flex gap-2">
                <input
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                  type="search"
                  id="search"
                  value={searchTerm}
                  className="block p-2.5 w-full  text-sm text-gray-900 bg-gray-50 rounded-lg  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Search Drugs..."
                  required
                />
              </div>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center md:space-x-3 flex-shrink-0 ">
              <div className="flex gap-2 ">
                <select
                  id="type"
                  onChange={(e) => {
                    handleChange("type", e.target.value);
                  }}
                  className="bg-gray-50 border flex-grow border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option defaultValue={filter.type}>All</option>
                  <option value="under">Under Min</option>
                  <option value="over">Over Max</option>
                </select>
                <select
                  id="sorted-by"
                  onChange={(e) => {
                    handleChange("sortedBy", e.target.value);
                  }}
                  className="bg-gray-50 border flex-grow border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option defaultValue={filter.sortedBy}>Sorted by</option>
                  <option value="name">Name</option>
                  <option value="timestamp">Time</option>
                </select>
                <select
                  id="order"
                  onChange={(e) => {
                    handleChange("order", e.target.value);
                  }}
                  className="bg-gray-50 border flex-grow border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option defaultValue={filter.order}>Order</option>
                  <option value="asc">Asc</option>
                  <option value="desc">Des</option>
                </select>
                <button
                  onClick={() => {
                    setFilter({
                      name: "",
                      type: "all",
                      order: "asc",
                      sortedBy: "timestamp",
                    });
                    navigate("?page=1");
                  }}
                  className="bg-gray-50 border flex-grow-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <TfiReload />
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            {tableData && tableData.length != 0 && (
              <>
                <DrugTable tableData={tableData} />
                <Pagination
                  page={currentPage}
                  total={count}
                  perPage={perPage}
                />
              </>
            )}
            {tableData && tableData.length == 0 && (
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
