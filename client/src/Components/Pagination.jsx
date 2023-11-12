import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
const Pagination = ({ total, page, perPage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNext = (e) => {
    e.preventDefault();
    const parsed = queryString.parse(location.search);
    parsed.page = parseInt(page) + 1;
    const query = queryString.stringify(parsed, {
      skipEmptyString: true,
    });
    navigate(`?${query}`);
  };
  const handlePrev = (e) => {
    e.preventDefault();
    const parsed = queryString.parse(location.search);
    parsed.page = parseInt(page) - 1;
    const query = queryString.stringify(parsed, {
      skipEmptyString: true,
    });
    navigate(`?${query}`);
  };
  return (
    <div className="m-5">
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing
          <span className="font-semibold text-gray-900 dark:text-white">
            {" "}
            {(page - 1) * perPage + 1}{" "}
            {total > 1 && (
              <span className="font-semibold text-gray-900 dark:text-white">
                to {Math.min(total, page * perPage)}
              </span>
            )}
            <span className="font-semibold text-gray-900 dark:text-white">
              {" "}
              of{" "}
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {total}
            </span>{" "}
          </span>
          Results
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={(e) => {
              handlePrev(e);
            }}
            disabled={page == 1}
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Prev
          </button>
          <button
            onClick={(e) => {
              handleNext(e);
            }}
            disabled={total <= page * perPage}
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
