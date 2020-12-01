import "./App.css"
import { useState, useEffect } from "react"

const partyCountChoices = [2, 3, 4, 5, 6, 7, 8, 9, 10]

function App() {
  const [partyCount, setPartyCount] = useState(2)

  return (
    <div className="App">
      <div className="header">
        <label>How many people are in your party?</label>
        <div className="choices">
          {partyCountChoices.map((count) => {
            return <span className="choice">{count}</span>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
