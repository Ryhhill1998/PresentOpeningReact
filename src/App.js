import {useState} from "react";

import generateOrder from "./hooks/generateOrder";
import "./App.css";

const originalNames = [
    {name: "Aaron", colour: "orange"},
    {name: "Dad", colour: "pink"},
    {name: "Juliette", colour: "green"},
    {name: "Mum", colour: "blue"},
    {name: "Ryan", colour: "yellow"}
];

const App = () => {
    const [names, setNames] = useState(originalNames);
    const [firstPreviously, setFirstPreviously] = useState(null);

    const shuffleNames = () => {
        const shuffledNames = generateOrder(names, firstPreviously);
        setFirstPreviously(shuffledNames[0]);
        setNames(shuffledNames);
    }

  return (
    <div className="app-container">
      <h1>Opening Order</h1>
      <div className="main">
          <div className="names">
              {names.map((name, i) => (
                  <div key={i} className="row">
                      <p className="row-number">{i + 1}.</p>
                      <p className={`name ${name.colour}`}>{name.name}</p>
                  </div>
              ))}
          </div>
          <button onClick={shuffleNames}>Shuffle</button>
      </div>
    </div>
  );
};

export default App;
