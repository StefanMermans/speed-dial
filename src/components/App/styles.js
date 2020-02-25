import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background-image: url(${({background}) => background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
