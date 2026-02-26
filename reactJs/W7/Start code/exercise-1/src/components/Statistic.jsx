import '../index.css'
export function Statistic({scores}) {
    let avg = average(scores);
    let min = Math.min(...scores.map(e=>{return e.score}))
    let max = Math.max(...scores.map(e=>{return e.score}))
    return (
        <div className="container">
           <div>Average:{avg}</div>
           <div>Min:{min}</div>
           <div>Max:{max}</div>
        </div>
    )
}

function average(scores) {
    let length = scores.length;
    let total = 0;
    scores.map(e=> {
        total += e.score
    })
    return (total / length).toFixed(2)
}
