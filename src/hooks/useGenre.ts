import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

 interface Genre {
  id: number;
  name: string;
  background_image: string;


}
interface FetchGameResult {
  count: number;
  results: Genre[];
}
const useGenre = () => {
  const [genres, setGames] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsloading(true);
    apiClient
      .get<FetchGameResult>("/genres", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setIsloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsloading(false);
      });
    return () => controller.abort();
  }, []);

  return { genres, error, isloading };
};

export default useGenre;
