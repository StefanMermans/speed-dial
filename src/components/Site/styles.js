import styled from "styled-components";

export const Container = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: ${({ color }) => color};

  overflow: hidden;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Link = styled.a`
  border-radius: 20px;
  overflow: hidden;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 0 0 8px rgb(80, 80, 80);
  width: 100px;
  padding-top: 5px;
  box-sizing: border-box;
  height: 100px;
  text-decoration: none;
  color: inherit;
  display: block;
`;

export const Icon = styled.img`
  width: 90px;
  height: 90px
`;
