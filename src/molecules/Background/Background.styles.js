import styled from "@emotion/styled";

export const ContentContainer = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  img {
    height: 100%;
    object-fit: scale-down;
    object-position: middle;
  }
`;
