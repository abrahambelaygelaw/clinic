import { useState, useEffect } from "react";
import { pharmacyItems, filteringFields } from "../Constants";
import queryString from "query-string";
import { useNavigate, useLocation } from "react-router-dom";
import useDataFetching from "../useDataFetching";
import { removeNullFields } from "../helper/removeNullFields";
const Utility = ({ tableData, setTableData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchType, setSearchType] = useState("Name");
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState();
  const [filter, setFilter] = useState({
    name: "",
  });
  const url = `http://localhost:5000/drug${location.search}`;
  console.log(location.search);
  const { data, error, loading } = useDataFetching(url);
  useEffect(() => {
    if (data) {
      setTableData(data);
    }
  }, [data]);

  const handleChange = (field, value) => {
    setFilter({ ...filter, [field]: value });
    console.log(filter);
  };
  const navigate = useNavigate();
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  const toggleFilterDD = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const selectField = (selected) => {
    setSearchType(selected);
    setIsFilterOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const query = queryString.stringify(filter, {
      skipEmptyString: true,
    });
    navigate(`?${query}`);
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
      <div className="flex w-full">
        <div className="">
          <button
            id="dropdownDefaultButton"
            onClick={toggleFilterDD}
            className=" text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center whitespace-nowrap w-full"
            type="button"
          >
            {searchType}
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdown"
            className={`z-10 ${
              isFilterOpen ? "" : "hidden"
            } bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 absolute w-44 m-3`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              {Object.keys(filteringFields).map((field) => (
                <li key={field}>
                  <a
                    onClick={() => {
                      selectField(field);
                    }}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {field}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative w-full">
          <input
            onChange={(e) => {
              handleChange(filteringFields[searchType], e.target.value);
            }}
            type="search"
            id="search"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search Drugs..."
            required
          />
        </div>
      </div>
      <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
        <div className="flex gap-2">
          <button
            onClick={toggleDropDown}
            id="filterDropdownButton"
            className="text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center whitespace-nowrap w-full z-20"
            type="button"
          >
            Catagories
            <svg
              className="-mr-1 ml-1.5 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              />
            </svg>
          </button>
          <button
            className="text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 font-medium text-sm px-3 py-2.5 text-center inline-flex items-center whitespace-nowrap w-full z-20"
            type="button"
            onClick={handleSubmit}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            id="filterDropdown"
            className={`z-30 ${
              isOpen ? "" : "hidden"
            } bg-white divide-y divide-gray-100 rounded-lg shadow h-48 p-3 overflow-y-scroll top-28 md:top-14 dark:bg-gray-700 absolute w-44 m-1`}
          >
            <ul
              className="space-y-2 py-2 text-sm"
              aria-labelledby="filterDropdownButton"
            >
              {pharmacyItems.map((item) => (
                <li key={item._id} className="flex items-center">
                  <input
                    id={item}
                    type="checkbox"
                    value={item}
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor={item}
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            setShowAdd(true);
          }}
          className="flex items-center justify-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
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
      </div>
    </div>
  );
};

export default Utility;
