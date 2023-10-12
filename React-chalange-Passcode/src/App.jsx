import { useEffect, useState } from "react";
import "./App.css";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const password = [4, 2, 9, 9];
function App() {
  const [Error, setError] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");
  const [pressedNumbers, setPressedNumbers] = useState([]);
  const [isCorrect, setCorrect] = useState(false);

  useEffect(() => {
    if (pressedNumbers.length === 1) {
      setError("");
    }
    if (pressedNumbers.length === password.length) {
      if (pressedNumbers.join("") === password.join("")) {
        setConfirmMessage("Correct");

        setCorrect(true);
      } else {
        setError("False");
      }
      setPressedNumbers([]);
    }
  }, [pressedNumbers]);

  return (
    <>
      <div>
        <h1>{pressedNumbers}</h1>
      </div>

      {isCorrect ? (
        <h1>{confirmMessage}</h1>
      ) : (
        <div>
          <div>
            <h1>{Error}</h1>
          </div>
          <div className="number-pad">
            {numbers.map((number, index) => {
              return (
                <button
                  className={number === 0 ? "zero" : "undefined"}
                  key={index}
                  onClick={() => {
                    setPressedNumbers((cur) => [...cur, number]);
                  }}
                >
                  {number}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
