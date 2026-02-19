import React from "react";
import { ALL_CARS } from "./data.js";

function App() {
  return (
    <div className="cards-view">
      <header>
        <h1>Car Collection</h1>
      </header>
      <div className="cards-grid">
        {ALL_CARS.map(car => (
          <div key={car.id} className="card">
            <img src={car.image} alt={`${car.brand} ${car.model}`} />
            <h2>{car.brand} {car.model}</h2>
            <p>Year: {car.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
