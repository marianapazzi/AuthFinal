import { useState } from "react";
import { dialogues } from "../data/dialogue.js";

const DialogueBox = () => {
  const messages = ["First message.", "Second message.", "Third message."];
  const [current, setCurrent] = useState(0);

  return (
    <div className="p-4 border rounded">
      <div className="mb-4">{messages[current]}</div>
      <button
        onClick={() => current < messages.length - 1 && setCurrent(current + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Next
      </button>
    </div>
  );
};

export default DialogueBox;
