import useData from "./useData";

interface Genre {
  id: number;
  name: string;
  background_image: string;
}
const useGenre = () => useData<Genre>("/genres");

export default useGenre;
