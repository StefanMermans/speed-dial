import styled from "styled-components";

export const ShowListWrapper = styled.div`
  color: black;
  width: 70%;
  max-width: 70%;
  flex-grow: 0;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  padding-left: 50px;

  /* Hide scrollbar */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;
