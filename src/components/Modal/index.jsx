import { useEffect, useState } from "react";

import { getMovieVideos } from "../../services/getData";
import { Background, Container } from "./styles";

export function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState();

  window.onscroll = () => {
    setShowModal(false);
  };

  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovieVideos(movieId));
    }
    getMovies();
  }, []);

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie[0].key}`}
            title="Youtube Video Play"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  );
}
