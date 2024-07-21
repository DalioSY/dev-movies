import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${props => props.img});
  height: 90vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 90vh;
    background: #00000070;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 3rem;
    color: #fff;
    font-weight: 700;
  }
  p {
    font-size: 1.25rem;
    color: #fff;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    margin-top: 120px;
    width: 90%;

    h1 {
      margin: 20px 20px;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    p {
      display: none;
    }
  }
`;

export const Post = styled.div`
  z-index: 2;
  img {
    width: 18rem;
    border-radius: 2rem;

    &:hover {
      filter: drop-shadow(0px 0px 11px #fff);
    }
  }
  @media (max-width: 600px) {
    img {
      width: 14rem;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;
