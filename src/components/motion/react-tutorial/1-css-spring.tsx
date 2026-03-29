import { spring } from "framer-motion";
import { useState } from "react";

export default function CSSGeneration() {
  const [state, setState] = useState(false);

  return (
    <div className="example-container min-h-screen">
      <div className="box" data-state={state} />
      <button type="button" onClick={() => setState(!state)}>
        Toggle position
      </button>
      <style>{`.example-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 20px;
            }

            .example-container .box {
              width: 100px;
              height: 100px;
              background-color: #8df0cc;
              border-radius: 10px;
              transition: transform ${spring(0.5, 0.8)};
              transform: translateX(-100%)
            }

            .example-container .box[data-state="true"] {
              transform: translateX(100%) rotate(180deg);
            }

            .example-container button {
              background-color: #8df0cc;
              color: #0f1115;
              border-radius: 10px;
              padding: 10px;
              margin: 10px;
            }
`}</style>
    </div>
  );
}
