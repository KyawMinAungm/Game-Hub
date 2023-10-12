import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface FetchData<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint : string) => {
  const [Data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsloading(true);
    apiClient
      .get<FetchData<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setIsloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsloading(false);
      });
    return () => controller.abort();
  }, []);

  return { Data, error, isloading };
};

export default useData;
