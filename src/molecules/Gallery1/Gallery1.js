import React from "react";

import * as S from "./Gallery1.styles";

import { shoes } from "../../mocks/ShoesGallery";

const renderList = () => {
  return (
    <S.GalleryGrid>
      {shoes.items.map((item) => {
        return (
          <S.GalleryItem>
            <S.ItemImgContainer className="gallery1-img-container">
              <img src={item.url} alt={item.name} />
            </S.ItemImgContainer>
            <S.ItemDscp>
              <S.ItemTitle>
                <p>{item.name}</p>
              </S.ItemTitle>
              <S.ItemPrice>
                <p>AUD ${item.price}</p>
              </S.ItemPrice>
              <S.ItemBg className="gallery1-item-background" />
            </S.ItemDscp>
          </S.GalleryItem>
        );
      })}
    </S.GalleryGrid>
  );
};

const Gallery1 = () => {
  return <S.ContentContainer>{renderList()}</S.ContentContainer>;
};

export default Gallery1;
