import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 20rem;

  img {
    border-radius: 1rem;
    width: 10rem;
    height: auto;

    &:hover {
      filter: drop-shadow(0px 0px 11px #fff);
    }
  }
  h3 {
    width: 10rem;
    color: #fff;
    font-size: 1rem;
    margin-top: 15px;
  }
`;
