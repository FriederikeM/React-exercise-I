import "./Delete.css";

export default function Delete({ status, number }) {
  function handleClick() {
    console.log(`The task nr ${number} would be deleted`);
  }
  return (
    <button className="deleteButton" onClick={handleClick}>
      {status}
    </button>
  );
}
