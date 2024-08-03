import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Credits } from "../../components/Credits";
import { Slider } from "../../components/Slider";
import { SpanGenres } from "../../components/SpanGenres";
import {
  getSerieById,
  getSerieCredits,
  getSerieSimilar,
  getSerieVideos,
} from "../../services/getData";
import { getImages } from "../../utils/getImages";
import { Background, Container, ContainerMovies, Cover, Info } from "./styles";

export function DetailSeries() {
  const [serie, setSerie] = useState();
  const [serieVideos, setSerieVideos] = useState();
  const [serieCredits, setSerieCredits] = useState();
  const [serieSimilar, setSerieSimilar] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getSerieById(id),
        getSerieVideos(id),
        getSerieCredits(id),
        getSerieSimilar(id),
      ])
        .then(([serie, videosSeries, creditsSeries, similarSeries]) => {
          setSerie(serie);
          setSerieVideos(videosSeries);
          setSerieCredits(creditsSeries);
          setSerieSimilar(similarSeries);
        })
        .catch(err => console.error(err));

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    getAllData();
  }, [id]);

  return (
    <>
      {serie && (
        <>
          <Background img={getImages(serie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(serie.poster_path)} />
            </Cover>
            <Info>
              <h2>{serie.name}</h2>
              <SpanGenres genres={serie.genres} />
              <p>{serie.overview}</p>
              <Credits credits={serieCredits} />
            </Info>
          </Container>
          <ContainerMovies>
            {serieVideos &&
              serieVideos.map(video => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="80%"
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {serieSimilar && (
            <Slider
              info={serieSimilar}
              title={"Series Similares"}
              route={"/detalhe-serie/"}
            />
          )}
        </>
      )}
    </>
  );
}
