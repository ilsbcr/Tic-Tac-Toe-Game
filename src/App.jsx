import { useState } from 'react'
import './App.css'

function App() {
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
      <button onClick={() => handleRestart()}>
        Restart the game
      </button>

      <button onClick={() => setCount(count => count + 1)}>
        Click me
      </button>

      <div>you click {count} </div>

    </>
  )
}

export default App
