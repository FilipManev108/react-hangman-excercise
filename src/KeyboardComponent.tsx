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

const KeyboardComponent = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(70px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        return (
          <button className={classes.btn} key={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default KeyboardComponent;
