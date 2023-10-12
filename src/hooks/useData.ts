import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchData<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint : string,requestConfig?:AxiosRequestConfig,dep ?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsloading(true);
    apiClient
    .get<FetchData<T>>(endpoint ,{signal: controller.signal ,...requestConfig})
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
  },dep? [...dep]:[]);

  return { data, error, isloading };
};

export default useData;
