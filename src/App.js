import "./styles.css";
import Headline from "./components/Headline";
import AddToDo from "./components/AddToDo";
import ToDo from "./components/ToDo";

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <Headline />
        <AddToDo />
      </header>
      <main className="main">
        <ToDo text="Do laundry" status="Done" number="1" />
        <ToDo text="Take dog out" status="Done" number="2" />
        <ToDo text="Study React" status="Done" number="3" />
        <ToDo text="Do Facebook clone" status="Undo" number="4" />
      </main>
    </div>
  );
}
