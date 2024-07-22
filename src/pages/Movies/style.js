import styled from "styled-components";

export const Nav = styled.div`
  max-width: 100vw;
  height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-bottom: 0.1rem solid #ffffff45;

  input {
    background: #c3c3c3;
    border-radius: 0.5rem;
    color: #000;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border: none;

    &:focus {
      outline: none;
    }
    &:hover {
      box-shadow: 0px 0px 11px #fff;
    }
  }

  ul {
    max-width: 100vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    li {
      list-style: none;
      text-decoration: none;
      color: #fff;
      border: 0.1rem solid #fff;
      padding: 5px 10px;
      border-radius: 0.5rem;

      &:hover {
        border: none;
        background: linear-gradient(
          108deg,
          rgba(30, 50, 162, 1) 0%,
          rgba(32, 61, 218, 1) 50%,
          rgba(65, 187, 207, 1) 100%
        );

        filter: drop-shadow(0px 0px 11px #fff);
      }
    }
  }
`;

export const Container = styled.div`
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin: 10px 20px;
`;
