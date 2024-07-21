import { getImages } from "../../utils/getImages";
import { Container, Title } from "./styles";

export function Credits({ credits }) {
  return (
    <>
      <Title>Créditos</Title>
      {credits && (
        <Container>
          {credits.slice(0, 5).map(artist => (
            <div key={artist.id}>
              <img src={getImages(artist.profile_path)} />
              <p>{artist.original_name}</p>
            </div>
          ))}
        </Container>
      )}
    </>
  );
}
