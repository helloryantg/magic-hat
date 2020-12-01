import "./App.css"
import { useState, useEffect } from "react"

const partyCountChoices = [2, 3, 4, 5, 6, 7, 8, 9]

function App() {
  const [partyCount, setPartyCount] = useState(2)
  const [isAddingCustomCount, setAddingCustomCount] = useState(false)
  
  const handleChoiceClick = ({ target }) => {
    setPartyCount(target.textContent)
  }

  console.log(partyCount)

  return (
    <div className="App">
      <div className="header">
        <label>How many people are in your party?</label>
        <div className="choices">
          {partyCountChoices.map((count) => {
            return <span className="choice" onClick={handleChoiceClick}>{count}</span>
          })}
          <span className="choice">10+</span>
        </div>
      </div>
    </div>
  )
}

export default App
