import { useState } from "react";
import words from "./wordList.json";

import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import KeyboardComponent from "./KeyboardComponent";
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  console.log(wordToGuess);
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>win/lose</div>
      <HangmanDrawing />
      <HangmanWord />
      <div style={{ alignSelf: "stretch" }}>
        <KeyboardComponent />
      </div>
    </div>
  );
}

export default App;
