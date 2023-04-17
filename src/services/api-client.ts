import axios from "axios";

export default axios.create({
  method: "GET",
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  headers: {
    "X-RapidAPI-Key": "29a0da5e72msh50afe1dd575047bp1cb395jsnbb31b48a6817",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
});
