import React, { useState, useEffect } from "react";

import * as S from "./Header.styles";

import * as Icons from "../../resources/svgs";

const headerContent = {
  nodes: ["New", "Outerwear", "Jackets", "Shoes", "Bags"],
};

const Logo = Icons.Tesla;
const Burger = Icons.Burger;

const renderNodes = (nodes, clickHandler) => {
  return nodes.map((node) => {
    return <S.NavNode onClick={clickHandler}>{node}</S.NavNode>;
  });
};

const getRandom = () => {
  return Math.floor(Math.random() * 5);
};

const Header = ({ updateGreetings }) => {
  const clickHandler = () => {
    updateGreetings(getRandom());
  };

  return (
    <S.ContentContainer>
      <S.HeaderMenu>
        {renderNodes(headerContent.nodes, clickHandler)}
      </S.HeaderMenu>
      <S.HeaderLogo>
        <Logo />
      </S.HeaderLogo>
      <S.HeaderMore>
        <S.BurgerContainer onClick={clickHandler}>
          <Burger />
        </S.BurgerContainer>
      </S.HeaderMore>
    </S.ContentContainer>
  );
};

export default Header;
