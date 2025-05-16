import { useState } from 'react'
import './App.css'

export default function App() {

  return (
    
      <Board />
   
  )
}

function Square({ value, onSquareClick }) {

  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

    function handleRestart() {
        setSquares (Array(9).fill(null));
    // Reset the game state here
    // For example, reset the score, level, etc.
    // You can also reset any other game-related variables
    // to their initial values.
    // This function will be called when the restart button is clicked
  }
  //const winner = calculateWinner(squares);
  function handleSquareClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

  }
  return (
    <>
         <button className='btn' onClick={() => handleRestart()}>
        Restart the game
      </button>

      <div className="board">
        <div   >
          <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
          <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
        </div>
        <div   >
          <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
          <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
        </div>
        <div >
          <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
          <Square value={squares[9]} onSquareClick={() => handleSquareClick(9)} />
        </div>
      </div>
    </>)
}

