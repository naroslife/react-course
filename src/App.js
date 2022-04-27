import logo from "./logo.svg";
import "./App.css";

import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { id: "e1", title: "item 1", amount: 294, date: new Date(2021, 2, 28) },
    { id: "e2", title: "item 2", amount: 300, date: new Date(2000, 5, 5) },
    { id: "e3", title: "item 3", amount: 450, date: new Date(1995, 2, 25) },
    { id: "e4", title: "item 4", amount: 2, date: new Date(2022, 3, 15) },
  ];

  return (
    <div className="App">
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
        <Expenses expenses={expenses} />
      </header>
    </div>
  );
}

export default App;
