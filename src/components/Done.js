import "./Done.css";

export default function Done({ status, text }) {
  function handleClick() {
    console.log(`The task: ${text} was clicked done`);
  }
  return (
    <button className="doneButton" onClick={handleClick}>
      {status}
    </button>
  );
}
