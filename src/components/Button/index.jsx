import { BlueButton, WhiteButton } from "./styles";

export function Button({ children, blue, ...resf }) {
  return (
    <>
      {blue ? (
        <BlueButton {...resf}>{children} </BlueButton>
      ) : (
        <WhiteButton {...resf}>{children} </WhiteButton>
      )}
    </>
  );
}
