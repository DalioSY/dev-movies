import { styled } from "styled-components";

export const Title = styled.h4`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  border-bottom: 1px solid #49cafa;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 10px;
  width: 7rem;

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    color: #fff;
  }

  img {
    width: 7rem;
    height: 10rem;
    border-radius: 0.5rem;

    &:hover {
      filter: drop-shadow(0px 0px 11px #fff);
    }
  }

  @media (max-width: 600px) {
    p {
      font-size: 0.7rem;
    }

    img {
      width: 4.5rem;
      height: 7rem;
    }
  }
`;
