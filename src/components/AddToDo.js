import "./AddToDo.css";

export default function AddToDo() {
  function handleClick() {
    console.log("A new task would have been added");
  }
  return (
    <button className="addToDo" onClick={handleClick}>
      Add To Do
    </button>
  );
}
