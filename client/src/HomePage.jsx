import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilterDD = () => {
    setIsOpen(!isFilterOpen);
    console.log(isFilterOpen);
  };
  return <div className="max-w-screen-xl mx-auto flex flex-col"></div>;
};

export default HomePage;
