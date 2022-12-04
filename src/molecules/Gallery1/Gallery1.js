import React from "react";

import $ from "jquery";

import * as S from "./Gallery1.styles";

import { shoes } from "../../mocks/ShoesGallery";
import { FlyMe } from "./Bezier";

const FlyStart = (element) => {
  if (element.currentTarget) {
    const elementNode = $(element.currentTarget);
    const parent = elementNode.closest(".gallery1-gallery-item");
    const buttonFly = elementNode.siblings(".gallery1-button-fly");
    console.log("elementNode: ", elementNode);
    // if (parent.length && buttonFly.length) {
    //   console.log("debug 2");
    //   parent.clone().appendTo(buttonFly);
    // }
    FlyMe(buttonFly);
  }
};

const renderList = () => {
  return (
    <S.GalleryGrid>
      {shoes.items.map((item, index) => {
        return (
          <S.GalleryItem className="gallery1-gallery-item">
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
            <S.AddButton
              role="button"
              className="gallery1-item-add-button"
              onClick={FlyStart}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
              </svg>
            </S.AddButton>
            <S.FlyImg className="gallery1-button-fly" aria-hidden>
              <img src={item.url} alt={item.name} />
            </S.FlyImg>
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
