import styled from "styled-components";

export const Content = styled.div`
  background-color: white;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  margin-top: 15px;
  overflow: hidden;
  height: 65px;
  flex-shrink: 0;
  &:first-child {
    margin-top: 0;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  justify-content: center;
`;

export const Thumbnail = styled.img`
  height: 100%;
  width: 60px;
  object-fit: cover;
`;