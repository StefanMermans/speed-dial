import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  box-shadow: inset 0px 0px 200px 16px rgba(0,0,0,0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${({background}) => background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  box-sizing: border-box;
  height: 35%;
`;
