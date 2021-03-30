import "./ToDo.css";
import Delete from "./Delete";
import Done from "./Done";

export default function ToDo({ text, status, number }) {
  return (
    <div className="ToDoComponent">
      <h3>{text}</h3>
      <div className="buttons">
        <Delete status="Delete" text={text} number={number} />
        <Done status={status} text={text} number={number} />
      </div>
    </div>
  );
}
