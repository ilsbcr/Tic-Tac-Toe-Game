import { useState } from 'react'
import './App.css'

export default function App() {

  return (

    <Game />

  )
}

function Square({ value, onSquareClick }) {

  return <button className="square" onClick={onSquareClick}>{value}</button>;
}


function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];


  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);

  }

      function jumpTo(nextMove) {
      // TODO:
    }
    const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = 'Go to move #' + move;
      } else {
        description = 'Go to game start';
      }
      return (
        <li >
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
       
      </div>
    </div>
  );
}

function Board({ xIsNext, squares, onPlay }) {

  function handleRestart() {
    onPlay(Array(9).fill(null));
  }
  //const winner = calculateWinner(squares);
  function handleSquareClick(i) {

    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    //TODO:no winner case 
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);

  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }


  return (
    <>
      <button className='btn' onClick={() => handleRestart()}>
        Restart the game
      </button>
      <div>{status}</div>
      <div className="board">
        <div   >
          <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
        </div>
        <div   >
          <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
        </div>
        <div >
          <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
        </div>
      </div>
    </>)
}


function calculateWinner(squares) {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }


  return null;

}
