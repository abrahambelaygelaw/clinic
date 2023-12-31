import { useState, useEffect } from "react";
import axiosWithAuth from "../utility/axiosWithAuth";
const useDataFetching = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axiosWithAuth.get(url);
      setData(response.data);
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
