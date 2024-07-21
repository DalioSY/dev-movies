import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 1rem;

  span {
    padding: 8px 18px;
    border: 1px solid #fff;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    background-color: transparent;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      box-shadow: 0px 0px 11px #fff;
    }
  }
  @media (max-width: 600px) {
    span {
      font-size: 0.8rem;
    }
  }
`;
