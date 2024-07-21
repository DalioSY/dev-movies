import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from "../Card";
import { Container } from "./styles";

export function Slider({ info, title }) {
  return (
    <Container>
      <h2>{title} </h2>
      <Swiper
        grabCursor
        spaceBetween={10}
        slidesPerView={"auto"}
        className="swiper"
      >
        {info.map((item, i) => (
          <SwiperSlide key={i}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
