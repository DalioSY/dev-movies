import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { Slider } from "../../components/Slider";
import {
  getMovies,
  getTopMovies,
  getTopPeople,
  getTopSeries,
} from "../../services/getData";
import { getImages } from "../../utils/getImages";
import { Background, Container, ContainerButtons, Info, Post } from "./styles";

export function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [topPeople, setTopPeople] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      Promise.all([getMovies(), getTopMovies(), getTopSeries(), getTopPeople()])
        .then(([movie, topMovie, topSeries, topPeople]) => {
          setMovie(movie);
          setTopMovies(topMovie);
          setTopSeries(topSeries);
          setTopPeople(topPeople);
        })
        .catch(error => {
          console.error(error);
        });
    }

    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title} </h1>
              <p>{movie.overview} </p>
              {/* <p>{movie.original_title} </p>
              <p>Popularity {movie.popularity} </p>
              <p>Data de lançamento {movie.release_date} </p>
              <p>✔️{movie.vote_average} </p>
              <p>✖️{movie.vote_count} </p> */}
              <ContainerButtons>
                <Button
                  blue
                  onClick={() => {
                    navigate(`/detalhe/${movie.id}`);
                  }}
                >
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Post>
              <img src={getImages(movie.poster_path)} alt="capa do filme" />
            </Post>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={"Top Filmes"}></Slider>}
      {topSeries && <Slider info={topSeries} title={"Top Séries"}></Slider>}
      {topPeople && <Slider info={topPeople} title={"Top Artistas"}></Slider>}
    </>
  );
}
