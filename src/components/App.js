import './App.css'

function App() {
  return (
    <div className="App">
      <div className="header">
        <label>How many people are in your party?</label>
        <input type="number" min="2" max="20" />
      </div>
    </div>
  );
}

export default App;
