import "../index.css";
function Log({logMessage}) {
    const {isPlayer, isDamage, text} = logMessage;
    return (
            <ul>
                <li>
                    {isPlayer ? (
                        <span className="log--player">Player </span>
                    ) : (
                        <span className="log--monster">Monster </span>
                    )}
                    {isDamage ? (
                        <span className="log--damage">{text}</span>
                    ) : (
                        <span className="log--heal">{text}</span>
                    )}
                </li>
            </ul>
    )
}

export default Log;