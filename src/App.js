import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

import Header from "./organisms/Header";
import GreetJack from "./molecules/GreetJack";

function App() {
  const [showGreeting, setShowGreeting] = useState(-1);
  return (
    <div className="App">
      <Header updateGreetings={setShowGreeting} />
      <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GreetJack
        showGreeting={showGreeting}
        setShowGreeting={setShowGreeting}
      />
    </div>
  );
}

export default App;
