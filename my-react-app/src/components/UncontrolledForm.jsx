import { useRef } from "react";

function UncontrolledForm() {

  const inputRef = useRef();

  function showText() {
    alert(inputRef.current.value);
  }

  return (
    <div>
      <h2>Uncontrolled Form</h2>

      <input
        type="text"
        ref={inputRef}
        placeholder="Write something..."
      />

      <button onClick={showText}>
        Show text
      </button>
    </div>
  );
}

export default UncontrolledForm;