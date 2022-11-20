import React from "react";

import * as S from "./ShortList.styles";

import { shortList as listItems } from "../../../mocks/ShortList";

console.log("listItems", listItems);

const renderShortList = () => {
  return (
    <>
      {listItems.items.map((item) => (
        <S.ListItem />
      ))}
    </>
  );
};

const ShortList = () => {
  return <S.ContentContainer>{renderShortList()}</S.ContentContainer>;
};

export default ShortList;
