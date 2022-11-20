import React, { useEffect } from "react";

import * as S from "./GreetJack.styles";

const greetings = [
  "",
  ", whassaup!",
  `, how's it going?`,
  ", drunk yet?",
  ", get a drink?",
];

const renderGreetings = (showGreeting) => {
  return <S.GreetNode>Yo Jack{greetings[showGreeting]}</S.GreetNode>;
};

const GreetJack = ({ showGreeting, setShowGreeting }) => {
  useEffect(() => {
    if (showGreeting !== -1) {
      setTimeout(() => {
        setShowGreeting(-1);
      }, 2000);
    }
  }, [showGreeting]);
  return (
    <S.ContentContainer>
      {showGreeting !== -1 && renderGreetings(showGreeting)}
    </S.ContentContainer>
  );
};

export default GreetJack;
