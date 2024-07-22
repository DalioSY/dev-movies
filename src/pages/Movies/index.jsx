import { useEffect, useState } from "react";

import { Slider } from "../../components/Slider";
import {
  getMovies,
  getNowPlayingMovies,
  getTopMovies,
  getUpcomingMovies,
} from "./../../services/getData";
import { Nav } from "./style";

export function Movies() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState();
  const [movies, setMovies] = useState();
  const [topMovies, setTopMovies] = useState();
  const [upcomingMovies, setUpcomingMovies] = useState();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getNowPlayingMovies(),
        getMovies(),
        getTopMovies(),
        getUpcomingMovies(),
      ])
        .then(([nowPlayingMovie, movie, topMovie, upcomingMovies]) => {
          setNowPlayingMovies(nowPlayingMovie);
          setMovies(movie);
          setTopMovies(topMovie);
          setUpcomingMovies(upcomingMovies);
        })
        .catch(error => {
          console.error(error);
        });
    }
    getAllData();
  }, []);

  return (
    <>
      <Nav>
        <input type="text" placeholder="Digite aqui" />
        <ul>
          <li>Comédia</li>
          <li>Ação</li>
          <li>Romance</li>
          <li>Anime</li>
          <li>Avendura</li>
        </ul>
      </Nav>
      {nowPlayingMovies && (
        <Slider info={nowPlayingMovies} title={"Novos Filmes"}></Slider>
      )}
      {movies && <Slider info={movies} title={"Popular Filmes"}></Slider>}
      {topMovies && <Slider info={topMovies} title={"Top Filmes"}></Slider>}
      {upcomingMovies && (
        <Slider info={upcomingMovies} title={"Próximos Filmes"}></Slider>
      )}
    </>
  );
}
