import { use, useState } from 'react'
import './App.css'

export default function App() {

  return (
    <div className="main-container">
      <Game />
    </div>


  )
}

function Square({ color, value, onSquareClick }) {

  return <button className={`${color ? 'game-over' : ''} square `} onClick={onSquareClick}>{value}</button>;

}


function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <div>
          <button className='btn' onClick={() => jumpTo(move)}>{description}</button>
        </div>
      </li>
    );
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol className='list-number'>{moves}</ol>
      </div>
    </div>
  );
}

function Board({ xIsNext, squares, onPlay }) {


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

  const winnerInfo = calculateWinner(squares);
  let status;
  if (winnerInfo?.winner) {
    status = "Winner : " + winnerInfo?.winner;
  }
  else if (!squares.includes(null)) {
    status = "Draw !!";
  } else {
    status = "Next player : " + (xIsNext ? "X" : "O");
  }


  function handleWinSquareColorChange(SquareId, winnerExists) {
    return winnerExists ? calculateWinner(squares)?.line.includes(SquareId) : false;
  };

  return (
    <>
      <div className={`${!squares.includes(null) && !winnerInfo?.winner ? 'draw' : 'game-over'} status `}>{status}</div>
      <div className={`${!squares.includes(null) && !winnerInfo?.winner ? 'draw':''} board`}>
        <div   >
          <Square color={handleWinSquareColorChange(0, winnerInfo?.winner)} value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
          <Square color={handleWinSquareColorChange(1, winnerInfo?.winner)} value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
          <Square color={handleWinSquareColorChange(2, winnerInfo?.winner)} value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
        </div>
        <div   >
          <Square color={handleWinSquareColorChange(3, winnerInfo?.winner)} value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
          <Square color={handleWinSquareColorChange(4, winnerInfo?.winner)} value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
          <Square color={handleWinSquareColorChange(5, winnerInfo?.winner)} value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
        </div>
        <div >
          <Square color={handleWinSquareColorChange(6, winnerInfo?.winner)} value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
          <Square color={handleWinSquareColorChange(7, winnerInfo?.winner)} value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
          <Square color={handleWinSquareColorChange(8, winnerInfo?.winner)} value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
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
      return {
        winner: squares[a],
        line: [a, b, c]
      };

    }
  }


  return null;

}
