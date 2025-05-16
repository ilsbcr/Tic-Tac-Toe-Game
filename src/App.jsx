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

function Square({ value1 }) {

    const [value, setValue] = useState(null);

    function handleClick() {
      setValue('X');
  }
  return <button className="square" onClick={handleClick}>{value}</button>;
}

function Board() {
  return (
    <>
      <div className="board">
        <div >
          <Square value={1} />
          <Square value={2} />
          <Square value={3} />
        </div>
        <div >
          <Square value={4} />
          <Square value={5} />
          <Square value={6} />
        </div>
        <div>
          <Square value={7} />
          <Square value={8} />
          <Square value={9} />
        </div>
      </div>
    </>)
}

