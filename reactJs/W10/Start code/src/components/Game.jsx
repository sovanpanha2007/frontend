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
  const [count, setCount] = useState(0);
  // ----------------------------------------------------------------------------------------------------------
  // BUTTONS EVENT FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  function attackHandler() {
    if (!isGameActive) {
      return;
    }
    const monsterDamageTaken = getRandomValue(5, 12);
    const playerDamageTaken = getRandomValue(5, 25);

    setMonsterHealth(prevMonsterHealth => Math.max(0, prevMonsterHealth - monsterDamageTaken))
    setPlayerHealth(prevPlayerHealth => Math.max(0, prevPlayerHealth - playerDamageTaken))
    setCount(prev => prev + 1);

    setLogMessages(prevLogs => [
      createLogAttack(true, playerDamageTaken),
      createLogAttack(false, monsterDamageTaken),
      ...prevLogs
    ]);
  }

  function healHandler() {
    const healingtaken = getRandomValue(8, 15)
    if (!isGameActive || playerHealth === 100) {
      return
    }
    setPlayerHealth(prevPlayerHealth => Math.min(100, prevPlayerHealth + healingtaken))
    setLogMessages(prevLogs => {
      return [
        createLogHeal(healingtaken),
        ...prevLogs
      ]
    })
  }
  function specialAttackHandler() {
    if (!isGameActive) {
      return
    }
    const monsterDamageTaken = getRandomValue(8, 25);
    const playerDamageTaken = getRandomValue(8, 25);
    setMonsterHealth(prevMonsterHealth => Math.max(0, prevMonsterHealth - monsterDamageTaken))
    setPlayerHealth(prevPlayerHealth => Math.max(0, prevPlayerHealth - playerDamageTaken))
    setCount(0);

    setLogMessages(prevLogs => [
      createLogAttack(true, playerDamageTaken),
      createLogAttack(false, monsterDamageTaken),
      ...prevLogs
    ]);
  }
  function surrenderHandler() {
    if (!isGameActive) {
      return
    }
    setPlayerHealth(0)
    setIsGameActive(false)
  }
  // ----------------------------------------------------------------------------------------------------------
  // JSX FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  function restartGame() {
    setPlayerHealth(100)
    setMonsterHealth(100)
    setLogMessages([])
    setIsGameActive(true)
    setCount(0)
  }
  // ----------------------------------------------------------------------------------------------------------
  // MAIN  TEMPLATE
  // ----------------------------------------------------------------------------------------------------------
  return (
    <>
      <Entity name="Your Health" health={playerHealth}></Entity>
      <Entity name="Monster Health" health={monsterHealth}></Entity>
      {isGameActive && playerHealth > 0 && monsterHealth > 0 &&
        <section id="controls">
          <button onClick={attackHandler}>ATTACK</button>
          <button disabled={count < 3} onClick={specialAttackHandler}>SPECIAL !</button>
          <button onClick={healHandler}>HEAL</button>
          <button onClick={surrenderHandler}>KILL YOURSELF</button>
        </section>
      }
      {(!isGameActive || playerHealth <= 0 || monsterHealth <= 0) && <GameOver title={playerHealth <= 0 ? "You Lose!" : "You Win!"} restartGame={restartGame}></GameOver>}
      <section id="log" className="container">
        <h2>Battle Log</h2>
        {logMessages.map((msg, index) => (
          <Log key={index} logMessage={msg} />
        ))}
      </section>
    </>
  );
}

export default Game;
