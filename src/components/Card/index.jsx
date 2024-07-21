import { getImages } from "../../utils/getImages";
import { Container } from "./styles";

export function Card({ item }) {
  return (
    <Container>
      <img
        src={getImages(item.poster_path || item.profile_path || "")}
        alt={`Imagem ${item.title || item.name}`}
      />
      <h3>{item.title || item.name} </h3>
    </Container>
  );
}
