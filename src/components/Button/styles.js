import { css, styled } from "styled-components";

const MainButton = css`
  color: #fff;
  border: 3px solid #fff;
  background: transparent;
  border-radius: 0.5rem;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;

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

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const WhiteButton = styled.button`
  ${MainButton}
`;

export const BlueButton = styled.button`
  ${MainButton}
  color: #fff;
  background: #008eff;
  border: 4px solid transparent;
`;
