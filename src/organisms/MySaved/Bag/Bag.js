import React from "react";

import * as S from "./Bag.styles";

import { bag as bagItems } from "../../../mocks/Bag";

const renderList = () => {
  return (
    <>
      {bagItems.items.map((item) => (
        <S.ListItem />
      ))}
    </>
  );
};

const Bag = () => {
  return <S.ContentContainer>{renderList()}</S.ContentContainer>;
};

export default Bag;
