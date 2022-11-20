import { useState } from "react";

import "./App.css";

import Header from "./organisms/Header";
import Body from "./organisms/Body";
import GreetJack from "./molecules/GreetJack";
import Background from "./molecules/Background";

function App() {
  const [showGreeting, setShowGreeting] = useState(-1);
  return (
    <div className="App">
      <Header updateGreetings={setShowGreeting} />
      <Body />
      <Background />
      <GreetJack
        showGreeting={showGreeting}
        setShowGreeting={setShowGreeting}
      />
    </div>
  );
}

export default App;
