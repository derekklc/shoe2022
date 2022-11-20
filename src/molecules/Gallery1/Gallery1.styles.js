import styled from "@emotion/styled";

export const ContentContainer = styled.div`
  width: 100%;
`;

export const GalleryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 48px;
  column-gap: 28px;
  padding-inline: 56px;
  margin-top: 80px;
  margin-bottom: 40px;
  margin-right: 120px;
`;

export const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
  :hover {
    transform: scale(1.03);
    .gallery1-img-container {
      opacity: 1;
    }
    .gallery1-item-background {
      height: 100%;
    }
  }
`;

export const ItemImgContainer = styled.div`
  height: 230px;
  width: 140px;
  background: #ffffff;
  padding: 5px 14px;
  opacity: 0.8;
  cursor: pointer;
  border-radius: 2px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const ItemDscp = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding-top: 14px;
  padding-bottom: 14px;
  row-gap: 14px;
  border-radius: 0 0 3px 3px;
`;

export const ItemTitle = styled.div`
  width: 100%;
  z-index: 1;
  p {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const ItemPrice = styled.div`
  width: 100%;
  z-index: 1;
  p {
    font-size: 14px;
    margin: 0;
  }
`;

export const ItemBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: lightgrey;
  opacity: 0.3;
  transition: 0.3s;
`;
