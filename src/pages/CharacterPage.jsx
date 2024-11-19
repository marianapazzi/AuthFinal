import { useState } from "react";
import { dialogues } from "../data/dialogue.js";

const characterPage = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="p-4 border rounded">
      <div className="mb-4">{dialogues[current]}</div>
      <button
        onClick={() => current < dialogues.length - 1 && setCurrent(current + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Next
      </button>
      {current == dialogues.length - 1 &&
      <div>youre done</div>
      }
    </div>
  );
};

export default characterPage;
