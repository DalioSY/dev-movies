import { styled } from "styled-components";

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  max-width: 75rem;

  iframe {
    border: none;
  }

  button {
    width: 30px;
    border: transparent;
    position: absolute;
    background-color: black;
    font-size: 20px;
    color: #ffffff;
    top: 0;
    right: 0;
    cursor: pointer;

    &:hover {
      background-color: red;
    }
  }
`;
