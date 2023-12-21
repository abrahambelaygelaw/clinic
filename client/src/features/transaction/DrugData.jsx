import React, { useContext, useEffect, useState } from "react";
import useDataFetching from "../../hooks/useDataFetching";
import { useParams } from "react-router-dom";
import useTransaction from "../../hooks/useTransaction";
const DrugData = () => {
  const { id } = useParams();
  const { drugData, setDrugData } = useTransaction();
  const { data, error, loading } = useDataFetching(`drug/${id}`);
  const [isExpanded, setExpanded] = useState(false);
  const handleTouch = () => {
    setExpanded(!isExpanded);
  };
  useEffect(() => {
    if (data) {
      setDrugData(data);
    }
  }, [data]);
  return (
    <>
      {drugData && (
        <div
          onClick={handleTouch}
          className={`border shadow bg-white cursor-pointer  px-5 py-2  mb-3 rounded-lg overflow-hidden ${
            isExpanded ? "h-auto" : "h-14"
          }`}
        >
          <h1 className="font-medium text-lg mt-1 mb-3">
            {drugData.name}({drugData.strength})
          </h1>
          <div className="text-sm">
            <h1>Item Code - {drugData.itemCode}</h1>
            <h1>Stock Card Number - {drugData.stockCardNo}</h1>
            <h1>Location - {drugData.location}</h1>
            <h1>Min - {drugData.min}</h1>
            <h1>Max - {drugData.max}</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default DrugData;
