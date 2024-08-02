import { useEffect, useState } from "react";

import { Slider } from "../../components/Slider";
import {
  getPopularSeries,
  getSeries,
  getTopSeries,
} from "../../services/getData";
import { Nav } from "./styles";

export function Series() {
  const [series, setSeries] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();

  useEffect(() => {
    async function getAllData() {
      Promise.all([getSeries(), getPopularSeries(), getTopSeries()])
        .then(([series, topSeries, popularSeries]) => {
          setSeries(series);
          setTopSeries(topSeries);
          setPopularSeries(popularSeries);
        })
        .catch(err => console.error(err));
    }

    getAllData();
  }, []);

  return (
    <>
      <Nav></Nav>
      {series && (
        <Slider info={series} title={"Series"} route={"/detalhe-serie/"} />
      )}
      {topSeries && (
        <Slider
          info={topSeries}
          title={"Top Series"}
          route={"/detalhe-serie/"}
        />
      )}
      {popularSeries && (
        <Slider
          info={popularSeries}
          title={"Series Populares"}
          route={"/detalhe-serie/"}
        />
      )}
    </>
  );
}
