import styled from "styled-components";

export const Container = styled.div`
  z-index: 999;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 0.5px solid #c3c3c31c;

  background-color: ${props =>
    props.changeBackground ? "#000000ad;" : "transparent"};
  transition: background-color 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28);

  h1 {
    font-size: 4rem;
    color: transparent;
    background: linear-gradient(
      108deg,
      rgba(30, 50, 162, 1) 0%,
      rgba(32, 61, 218, 1) 50%,
      rgba(65, 187, 207, 1) 100%
    );
    background-clip: text;

    &:hover {
      filter: drop-shadow(0px 0px 11px #fff);
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;

  @media (max-width: 600px) {
    gap: 30px;
  }
`;

export const Li = styled.li`
  font-weight: 600;
  font-size: 28px;
  position: relative;

  a {
    text-decoration: none;
    color: #fff;
  }

  &::after {
    content: "";
    height: 3px;
    width: ${props => (props.isActive ? "100%" : 0)};
    background: linear-gradient(
      108deg,
      rgba(30, 50, 162, 1) 0%,
      rgba(32, 61, 218, 1) 50%,
      rgba(65, 187, 207, 1) 100%
    );
    position: absolute;
    bottom: -0.3rem;
    left: 0;
    transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  &:hover::after {
    filter: drop-shadow(0px 0px 11px #fff);
    width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
