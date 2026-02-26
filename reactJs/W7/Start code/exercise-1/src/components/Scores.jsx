import { Statistic } from "./Statistic"
export function Scores({courseName, scores}) {
    return (
        <div className="scores">
          <h1>{courseName}</h1>
          <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            {scores.map(e => (
            <tbody>
                <tr>
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td className= {e.score < 50 ? "warning" : ""}>{e.score}</td>
                </tr>
            </tbody>
            ))}
            <Statistic scores={scores}/>
          </table>
        </div>
    )
}

