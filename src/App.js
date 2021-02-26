import "./App.css";
import Greeting from "./Greeting";
import PeopleList from "./PeopleList";
import CounterButton from "./CounterButton";

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

        <CounterButton />
      </header>
    </div>
  );
}

export default App;
