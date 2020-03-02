import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-shadow: inset 0px 0px 200px 16px rgba(0,0,0,0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${({background}) => background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ClockWrapper = styled.div`
  padding: 50px;
  box-sizing: border-box;
`;
