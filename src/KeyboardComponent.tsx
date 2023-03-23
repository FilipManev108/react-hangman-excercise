import classes from "./KeyboardComponent.module.css";
const KEYS: string[] = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

type KeyboardComponentProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const KeyboardComponent = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardComponentProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(70px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${classes.btn} ${isActive ? classes.active : ""} ${
              isInactive ? classes.inactive : ""
            }`}
            key={key}
            disabled={isActive || isInactive}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default KeyboardComponent;
