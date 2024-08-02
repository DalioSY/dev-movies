import { Route, Routes } from "react-router-dom";

import { DetailMovies } from "../pages/DetailMovies";
import { DetailSeries } from "../pages/DetailSeries";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { Series } from "../pages/Series";
import { DefaultLayout } from "./../layout/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe-filme/:id" element={<DetailMovies />} />
        <Route path="/detalhe-serie/:id" element={<DetailSeries />} />
      </Route>
    </Routes>
  );
}
