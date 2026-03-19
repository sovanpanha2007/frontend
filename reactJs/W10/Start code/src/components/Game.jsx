import React, { useState } from "react";
import Entity from "./Entity";
import GameOver from "./GameOver"
import Log from "./Log"

// ----------------------------------------------------------------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------------------------------------------------------------

// Generate a random values in the range {min, max}
// Attack 5-12
// Heal 8-15
// Special Attack 8-25
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Create an attack log
function createLogAttack(isPlayer, damage) {
  return {
    isPlayer: isPlayer,
    isDamage: true,
    text: ` takes ${damage} damages`,
  };
}

// Create a healing log
function createLogHeal(healing) {
  return {
    isPlayer: true,
    isDamage: false,
    text: ` heal ${healing} life points`,
  };
}

function Game() {
  // ----------------------------------------------------------------------------------------------------------
  // STATES & VARIABLES
  // ----------------------------------------------------------------------------------------------------------
  const [playerHealth, setPlayerHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [logMessages, setLogMessages] = useState([]);
  const [isGameActive, setIsGameActive] = useState(true);
  // ----------------------------------------------------------------------------------------------------------
  // BUTTONS EVENT FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  function attackHandler() {
    if (!isGameActive) {
      return;
    }
    setMonsterHealth(monsterHealth - getRandomValue(5,12))
    setPlayerHealth(playerHealth - getRandomValue(5,25))
  }

  function healHandler() {
    if (!isGameActive) {
      return
    }
    setPlayerHealth(playerHealth + getRandomValue(8,15))
  }
  // ----------------------------------------------------------------------------------------------------------
  // JSX FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------
  // MAIN  TEMPLATE
  // ----------------------------------------------------------------------------------------------------------
  return (
  <>
  <Entity name="Your Health" health={100}></Entity>
  <Entity name="Monster Health" health={100}></Entity>
  <section id="controls">
    <button>ATTACK</button>
    <button>SPECIAL !</button>
    <button>HEAL</button>
    <button>KILL YOURSELF</button>
  </section>
  //<GameOver title="You Win!" restartGame={() => {}}></GameOver>
  <section id="log" className="container">
    <h2>Battle Log</h2>
    <Log logMessage={createLogAttack(true, 10)}/>
    <Log logMessage={createLogHeal(10)}/>
  </section>
  </>
  );
}

export default Game;
