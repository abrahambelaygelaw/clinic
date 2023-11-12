import { useState, useEffect } from "react";
import axios from "axios";
const UseGetCount = (url) => {
  const [count, setCount] = useState();
  const [countLoading, setCountLoading] = useState(true);
  const [countError, setCountEroor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setCount(response.data);
      } catch (err) {
        setCountEroor(err);
      } finally {
        setCountLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { count, countLoading, countError };
};

export default UseGetCount;
