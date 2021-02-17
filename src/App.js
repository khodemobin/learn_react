import "./App.css";
import Greeting from "./Greeting";
import PeopleList from "./PeopleList";

const people = [
  {
    name: "mobin",
    age: 20,
    hairColor: "black",
  },
  {
    name: "amir",
    age: 19,
    hairColor: "black",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="hello" />
        <PeopleList people={people} />
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
    </div>
  );
}

export default App;
