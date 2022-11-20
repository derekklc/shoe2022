import styled from "@emotion/styled";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: fit-content;
  border-left: 1px solid #d3d3d370;
  padding-left: 14px;
  height: fit-content;
`;

export const ListItem = styled.div`
    height: 44px;
    width: 44px;
    border-radius: 3px;
    box-shadow: 0 0 4px lightgrey;
    transition: box-shadow 0.3s;
    cursor: pointer;
    :hover{
        box-shadowL 0 0 4px white;
    }
`;
