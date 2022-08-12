import "./tile-letters.css";

function TileLetters(titleMessage) {
  return (
    <div id="tile-letters-container">
      {titleMessage?.split("").map((letter, i) => (
        <h1
          className={
            letter !== " " ? `tile-letters-no-space` : `tile-letters-space`
          }
          id={letter !== " " ? `tile-letter-${i}` : `tile-letter-space`}
          key={`$tile-${i}-${letter}`}
          value={letter}
        >
          {letter}
        </h1>
      ))}
    </div>
  );
}

export default TileLetters;
