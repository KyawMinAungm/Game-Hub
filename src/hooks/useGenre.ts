import genre from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenre = () => ({ data: genre, isloading: false, error: null });

export default useGenre;
