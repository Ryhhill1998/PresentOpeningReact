import {useState} from "react";

import generateOrder from "./hooks/generateOrder";
import "./App.css";

const originalNames = ["Aaron", "Dad", "Juliette", "Mum", "Ryan"];

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
      <h1>Present Opening Order Generator</h1>
      <div className="main">
          <div className="names">
              {names.map((name, i) => (
                  <div key={i} className="row">
                      <p>{i + 1}.</p>
                      <p className={`name name-${i + 1}`}>{name}</p>
                  </div>
              ))}
          </div>
          <button onClick={shuffleNames}>Shuffle</button>
      </div>
    </div>
  );
};

export default App;
