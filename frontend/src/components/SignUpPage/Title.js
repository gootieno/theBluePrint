import { useState } from "react";
import "./title.css";

function Title() {
  const [title, setTitle] = useState("It all starts here!");
  return (
    <div id="signup-form-page-title-container">
      {title.split("").map((letter, i) => (
        <h1
          className={
            letter !== " " ? `title-letters-no-space` : `title-letters-space`
          }
          id={letter !== " " ? `title-letter-${i}` : `title-letter-space`}
          key={`$title-${i}-${letter}`}
          value={letter}
        >
          {letter}
        </h1>
      ))}
    </div>
  );
}

export default Title;
