import styled from "styled-components/native";

export const Header = styled.View`
  flex: 0.7;
`;

export const ImageContainer = styled.View`
  z-index: 10;
  align-items: center;
  top: 0;
  left: 0;
`;

export const Imaged = styled.Image`
  position: absolute;
  width: 250;
  height: 500;

  &::before {
    content: "When will i get a partner 😥";
    z-index: 30;
    width: 300px;
    height: 30px;
    position: absolute;
    top: 0;
    left: 0;
    background: red;
  }
`;
