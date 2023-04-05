import axios from "axios";

export default axios.create({
  method: "GET",
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  headers: {
    "X-RapidAPI-Key": "b6fa1d0134msh24115e0ee988c0dp18178fjsndbf50438b615",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
});
