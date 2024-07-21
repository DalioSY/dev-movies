import axios from "axios";

const movieApiKey = import.meta.env.VITE_MOVIE_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: movieApiKey,
    language: "pt-BR",
    page: 1,
  },
});

export default api;
