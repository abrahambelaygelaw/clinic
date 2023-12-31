import React, { useContext } from "react";
import { TbEdit } from "react-icons/tb";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useDrug from "../../hooks/useDrug";

const DrugTable = ({ tableData }) => {
  const navigate = useNavigate();
  const { setItemToDelete, setShowForm, setItemToEdit } = useDrug();
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-4 py-3">
            name
          </th>{" "}
          <th scope="col" className="px-4 py-3">
            Strength
          </th>
          <th scope="col" className="px-4 py-3">
            Location
          </th>
          <th scope="col" className="px-4 py-3">
            item code
          </th>
          <th scope="col" className="px-4 py-3">
            Balance
          </th>
          <th scope="col" className="px-4 py-3">
            min
          </th>
          <th scope="col" className="px-4 py-3">
            max
          </th>
          <th scope="col" className="px-4 py-3">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => (
          <tr
            key={item._id}
            className="border-b dark:border-gray-700 hover:bg-gray-100 "
          >
            <th
              scope="row"
              onClick={() => {
                navigate(`/transaction/${item._id}`);
              }}
              className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer"
            >
              {item.name}
            </th>
            <td className="px-4 py-3">{item.strength}</td>
            <td className="px-4 py-3">{item.location ? item.location : "-"}</td>
            <td className="px-4 py-3">{item.itemCode ? item.itemCode : "-"}</td>
            <td className="px-4 py-3">{item.balance}</td>
            <td className="px-4 py-3">{item.min}</td>
            <td className="px-4 py-3">{item.max}</td>
            <td className="px-4 py-3 flex items-center justify-start">
              <ul className=" text-sm text-gray-700 dark:text-gray-200 flex justify-between">
                <li>
                  <button
                    onClick={() => {
                      setItemToEdit(item);
                      setShowForm(true);
                    }}
                  >
                    <TbEdit className=" hover:text-blue-600 text-lg mx-3" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setItemToDelete(item);
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
  );
};

export default DrugTable;
