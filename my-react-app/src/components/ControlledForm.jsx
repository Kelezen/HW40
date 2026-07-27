import { useState } from "react";

function ControlledForm() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Controlled Form</h2>

      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Write something..."
      />

      <p>You wrote: {text}</p>
    </div>
  );
}

export default ControlledForm;