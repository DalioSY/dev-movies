import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Container, Menu, Li } from "./styles";

export function Header() {
  const [changeBackground, setChangeBackground] = useState(false);
  const { pathname } = useLocation();

  window.onscroll = () => {
    if (window.scrollY > 50) {
      setChangeBackground(true);
    }
    if (window.scrollY <= 50) {
      setChangeBackground(false);
    }
  };

  return (
    <Container changeBackground={changeBackground}>
      <h1> Dev Movies</h1>
      <Menu>
        <Li isActive={pathname === "/"}>
          <Link to="/">Home</Link>
        </Li>
        <Li isActive={pathname.includes("filmes")}>
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li isActive={pathname.includes("series")}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  );
}
