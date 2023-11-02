import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import AddMedication from "./AddMedication";
import { pharmacyItems } from "./Constants";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Delete from "./Delete";
const Test = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [tableData, setTableData] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [visibleData, setVisibleData] = useState([]);
  const [query, setQuery] = useState();
  const [deleted, setDeleted] = useState();
  const [filter, setFilter] = useState([]);
  const { data } = useFetch("http://localhost:5000/all");
  if (data) {
    if (!tableData) {
      setTableData(data);
    }
  }
  useEffect(() => {
    if (tableData && tableData.length > 0) {
      let filterArray;
      if (query) {
        filterArray = [
          ...tableData.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          ),
        ];
      } else {
        filterArray = [...tableData];
      }
      if (!filter.length == 0) {
        filterArray = [
          ...filterArray.filter((item) => filter.includes(item.medType)),
        ];
      }
      setVisibleData(filterArray);
    }
  }, [query, tableData, filter]);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleFilter = (e) => {
    if (e.target.checked) {
      if (!filter.includes(e.target.value)) {
        setFilter([...filter, e.target.value]);
      }
    } else {
      const filterd = filter.filter((item) => item != e.target.value);
      setFilter(filterd);
    }
  };
  console.log(showDelete);
  return (
    <div>
      <Delete
        show={showDelete}
        modal={setShowDelete}
        list={visibleData}
        deleted={deleted}
      />
      <AddMedication
        show={showAdd}
        closeModal={setShowAdd}
        list={visibleData}
        added={setVisibleData}
      />
      <div className="w-full">
        <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
          <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div className="w-full md:w-1/2">
                  <form className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">
                      Search
                    </label>

                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                      </div>
                      <input
                        onChange={(e) => {
                          setQuery(e.target.value);
                        }}
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Search"
                        required=""
                      />
                    </div>
                  </form>
                </div>
                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                  <div className="">
                    <button
                      onClick={toggleDropDown}
                      id="filterDropdownButton"
                      className="text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center whitespace-nowrap w-full z-20"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="h-4 w-4 mr-2 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Filter
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
                    <div
                      id="filterDropdown"
                      className={`z-30 ${
                        isOpen ? "" : "hidden"
                      } bg-white divide-y divide-gray-100 rounded-lg shadow h-48 p-3 overflow-y-scroll dark:bg-gray-700 absolute w-44 m-1`}
                    >
                      <ul
                        className="space-y-2 py-2 text-sm"
                        aria-labelledby="filterDropdownButton"
                      >
                        {pharmacyItems.map((item) => (
                          <li key={item._id} className="flex items-center">
                            <input
                              id="apple"
                              onChange={handleFilter}
                              type="checkbox"
                              value={item}
                              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              htmlFor="apple"
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
                    Add Medication
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                {visibleData.length > 0 ? (
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-4 py-3">
                          Product name
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Category
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Quantity
                        </th>
                        <th scope="col" className="px-4 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {visibleData.map((item) => (
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
                          <td className="px-4 py-3">{item.medType}</td>
                          <td className="px-4 py-3">{item.price}</td>
                          <td className="px-4 py-3">{item.quantity}</td>
                          <td className="px-4 py-3 flex items-center justify-end">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 flex justify-between">
                              <li>
                                <Link>
                                  {" "}
                                  <TbEdit className=" hover:text-blue-600 text-lg mx-3" />
                                </Link>
                              </li>
                              <li>
                                <button
                                  onClick={() => {
                                    setShowDelete(true);
                                    setDeleted(item);
                                  }}
                                >
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
        </section>
      </div>
    </div>
  );
};

export default Test;
