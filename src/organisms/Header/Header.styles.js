import styled from "@emotion/styled";

export const ContentContainer = styled.div`
  width: 100%;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  display: grid;
  grid-template-columns: 40% auto 40%;
`;

export const HeaderMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: calc(100vw - 60px);
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (width < 500px) {
    width: fit-content;
    overflow: auto;
  }
`;

export const NavNode = styled.div`
  padding: 10px 15px;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  user-select: none;
  :hover {
    color: lightgrey;
  }
`;

export const HeaderLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    cursor: pointer;
    transition: 0.5s;
    :hover {
      fill: red;
    }
  }
  @media (width < 1000px) {
    svg {
      visibility: none;
      opacity: 0;
    }
  }
`;

export const HeaderMore = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const BurgerContainer = styled.div`
  height: 24px;
  width: 24px;
  padding: 10px 15px;
  cursor: pointer;
  svg {
    transition: 1s;
    height: 100%;
    width: 100%;
  }
  :hover {
    svg {
      fill: white;
    }
  }
  @media (width < 1000px) {
    svg {
      fill: white;
    }
  }
`;
