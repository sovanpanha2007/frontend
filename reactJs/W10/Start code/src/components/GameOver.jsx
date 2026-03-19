
function GameOver({title, restartGame}) {
    return (
        <section className="container">
            <h2>Game Over!</h2>
            <h3>{title}</h3>
            <button onClick={restartGame}>Play Again</button>
        </section>
    )
}

export default GameOver;