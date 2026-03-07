import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [onA, setOnA] = useState(0);
  const [onB, setOnB] = useState(0);
  const [result, setResult] = useState(0);
  const [isError, setIsError] = useState(false);

  /* You will need some function to handle the key pressed and button events */
  function handleKeyPressedA(event) {
    setOnA(event.target.value);
  }
  
  function handleKeyPressedB(event) {
    setOnB(event.target.value);
  } 
  function handleCompute() {
    if (isNaN(onA) || isNaN(onB)) {
      setIsError(true);
      setResult("Error: Please enter valid numbers");
    } else {
      setIsError(false);
      setResult(Number(onA) + Number(onB));
    }
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={handleKeyPressedA} />

      <label>B =</label>
      <input onKeyUp={handleKeyPressedB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input value={result} readOnly style={{color : isError ? 'red' : 'black'}}/>
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;
