import styled from "@emotion/styled";

export const ContentContainer = styled.div`
  height: 100vh;
  min-width: 150px;
  position: static;
  top: 0;
  transition: 0.5s;
  background-color: transparent;
  :hover {
    background-color: #d3d3d324;
    .my-saved-lists {
      transform: translateX(0);
    }
  }
`;

export const SavedLists = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  justify-content: center;
  gap: 14px;
  transition: transform 0.5s;
  transform: translateX(100%);
  padding: 14px;
`;
