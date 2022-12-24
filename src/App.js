import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>Present Opening Order Generator</h1>
      <div className="main">
          <div className="names">
              <input className="name name-1" type="text"/>
              <input className="name name-1" type="text"/>
              <input className="name name-1" type="text"/>
              <input className="name name-1" type="text"/>
              <input className="name name-1" type="text"/>
          </div>
          <button>Shuffle</button>
      </div>
    </div>
  );
};

export default App;
