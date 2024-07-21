import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 1rem;
    width: 10rem;
    height: 100%;

    &:hover {
      filter: drop-shadow(0px 0px 11px #fff);
    }
  }
  h3 {
    color: #fff;
    font-size: 1rem;
    margin-top: 15px;
  }
`;
