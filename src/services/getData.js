import api from "./api";

export async function getNowPlayingMovies() {
  const {
    data: { results },
  } = await api.get("/movie/now_playing");

  return results;
}

export async function getMovies() {
  const {
    data: { results },
  } = await api.get("/movie/popular");

  return results;
}

export async function getTopMovies() {
  const {
    data: { results },
  } = await api.get("/movie/top_rated");

  return results;
}

export async function getUpcomingMovies() {
  const {
    data: { results },
  } = await api.get("/movie/upcoming");

  return results;
}

export async function getTopSeries() {
  const {
    data: { results },
  } = await api.get("/tv/top_rated");

  return results;
}

export async function getTopPeople() {
  const {
    data: { results },
  } = await api.get("/person/popular");

  return results;
}

export async function getMovieVideos(movieId) {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/videos`);

  return results;
}

export async function getMovieCredits(movieId) {
  const {
    data: { cast },
  } = await api.get(`/movie/${movieId}/credits`);

  return cast;
}

export async function getMovieSimilar(movieId) {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/similar`);

  return results;
}

export async function getMovieById(movieId) {
  const { data } = await api.get(`/movie/${movieId}`);

  return data;
}
// Serie
export async function getSerieById(serieId) {
  const { data } = await api.get(`/tv/${serieId}`);
  return data;
}

export async function getSerieVideos(serieId) {
  const {
    data: { results },
  } = await api.get(`/tv/${serieId}/videos`);
  return results;
}

export async function getSerieCredits(serieId) {
  const {
    data: { cast },
  } = await api.get(`/tv/${serieId}/credits`);
  return cast;
}

export async function getPopularSeries() {
  const {
    data: { results },
  } = await api.get("/tv/popular");
  return results;
}
/////////////////////////////////////////////////////////////////////////////////
export async function getSerieSimilar(serieId) {
  const {
    data: { results },
  } = await api.get(`tv/${serieId}/similar`);
  return results;
}

export async function getAiringTodaySeries() {
  const {
    data: { results },
  } = await api.get("/tv/airing_today");

  return results;
}

export async function getSeries() {
  const {
    data: { results },
  } = await api.get("/tv/popular");

  return results;
}
