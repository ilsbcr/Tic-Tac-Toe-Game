import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  function handleRestart() {
    setCount(0);
    // Reset the game state here
    // For example, reset the score, level, etc.
    // You can also reset any other game-related variables
    // to their initial values.
    // This function will be called when the restart button is clicked


  }

  return (
    <>
      <button className='btn' onClick={() => handleRestart()}>
        Restart the game
      </button>

      <button className='btn' onClick={() => setCount(count => count + 1)}>
        Click me
      </button>

      <div>you click {count} </div>

      <Board />

    </>
  )
}
function Board() {
  return (
    <>
    <div className="board">
      <div >
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div >
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div>
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
 </div>
    </>)
}

