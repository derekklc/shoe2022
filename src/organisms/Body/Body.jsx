import React from "react";

import * as S from "./Body.styles";

import Gallery1 from "../../molecules/Gallery1";
import MySaved from "../MySaved";

const Body = () => {
  return (
    <S.ContentContainer>
      <S.BodyLeftSection>
        <Gallery1 />
      </S.BodyLeftSection>
      <MySaved />
    </S.ContentContainer>
  );
};

export default Body;
