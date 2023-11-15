import { useState, useEffect } from "react";
import axios from "axios";
const useDataFetching = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem("accessToken");
  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });
      setData(response.data);
      console.log(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useDataFetching;
