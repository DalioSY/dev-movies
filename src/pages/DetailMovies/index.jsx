import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Credits } from "../../components/Credits";
import { Slider } from "../../components/Slider/index";
import { SpanGenres } from "../../components/SpanGenres";
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from "../../services/getData";
import { getImages } from "../../utils/getImages";
import { Background, Container, ContainerMovies, Cover, Info } from "./styles";

export function DetailMovies() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieSimilar, setMovieSimilar] = useState();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id),
      ])
        .then(([movie, videos, credits, similar]) => {
          setMovie(movie);
          setMovieVideos(videos);
          setMovieCredits(credits);
          setMovieSimilar(similar);
        })
        .catch(error => {
          console.error(error);
        });
    }
    getAllData();
  }, [id]);

  return (
    <>
      {movie && (
        <>
          <Background img={getImages(movie.backdrop_path)}></Background>
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} />
            </Cover>
            <Info>
              <h2>{movie.title} </h2>
              <SpanGenres genres={movie.genres}></SpanGenres>
              <p>{movie.overview} </p>
              <Credits credits={movieCredits}> </Credits>
            </Info>
          </Container>
          <ContainerMovies>
            {movieVideos &&
              movieVideos.map(video => (
                <div key={video.id}>
                  <h4>{video.name} </h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Play"
                    height="500px"
                    width="100%"
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {movieSimilar && (
            <Slider
              info={movieSimilar}
              title={"Filmes Similares"}
              route={"/detalhe-filme/"}
            ></Slider>
          )}
        </>
      )}
    </>
  );
}
