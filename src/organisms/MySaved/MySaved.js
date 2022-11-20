import React from "react";

import * as S from "./MySaved.styles";

import ShortList from "./ShortList";
import Bag from "./Bag";

const MySaved = () => {
  return (
    <S.ContentContainer>
      <S.SavedLists className="my-saved-lists">
        <ShortList />
        <Bag />
      </S.SavedLists>
    </S.ContentContainer>
  );
};

export default MySaved;
