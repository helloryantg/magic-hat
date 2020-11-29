import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [partyCount, setPartyCount] = useState(2)

  const handleChangePartyCount = (partyCount) => {
    setPartyCount(partyCount)
  }

  return (
    <div className="App">
      <div className="header">
        <label>How many people are in your party?</label>
        <input
          type="number"
          min="2"
          max="20"
          value={partyCount}
          onChange={({ target }) => handleChangePartyCount(target.value)}
        />
      </div>
    </div>
  );
}

export default App;
