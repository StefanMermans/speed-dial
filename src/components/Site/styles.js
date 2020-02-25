import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Link = styled.a`
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 0 8px rgb(80, 80, 80);
  width: 125px;
  height: 125px;
  text-decoration: none;
  color: black;
  display: block;
`;

export const Icon = styled.img`
  width: 90px;
  height: 90px
`;
