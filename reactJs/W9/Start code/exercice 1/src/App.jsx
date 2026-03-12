import React from "react";
import {useState} from "react"


export default function App() {
  //Input as string
  const [score, setScore] = useState("0")
  const [color, setColor] = useState("f3bc47");

  
  function handleScore(e) {
    let result = parseInt(e.target.value);
    if (result > 10){
      setScore(0)
    } else {
    setScore(e.target.value);
          }
  }


const getScoreBarStyle = () => {
  // 1- Compute width
  const scoreWidth = `${score * 10}%`;

  // 2- Compute color directly (no setColor!)
  let scoreColor;
  if (score <= 2) {
    scoreColor = "blue";
  } else if (score <= 7) {
    scoreColor = "purple";
  } else {
    scoreColor = "red";
  }

  // 3 - Return the style object
  return {
    width: scoreWidth,
    backgroundColor: scoreColor,
  };
}

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={score} onChange={handleScore} ></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}