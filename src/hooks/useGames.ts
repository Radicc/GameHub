import { GameQuery } from "../App";
import useData from "./useData";

export interface Game {
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  id: number;
  publisher: string;
  release_date: string;
  short_description: string;
  thumbnail: string;
  title: string;
  platform: string;
  genre: string;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        category: gameQuery.genre,
        platform: gameQuery.platform,
        "sort-by": gameQuery.order,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );
export default useGames;
