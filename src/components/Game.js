import React, { useState, useEffect } from "react";
import Board from "./Board";
import Undo from "../media/undo.png";
import Redo from "../media/redo.png";

const Game = () => {
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { player: squares[a], winningSquares: [a, b, c] };
      }
    }
    return { player: null, winningSquares: null };
  };

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  var winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner.player || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const undoMove = () => {
    //sets game one turn back if available
    if (stepNumber === 0) {
      return;
    } else if (history.length > 1) {
      jumpTo(stepNumber - 1);
    }
  };

  const redoMove = () => {
    //sets game one turn forward if available
    let difference = history.length - stepNumber;
    if (difference > 1) {
      jumpTo(stepNumber + 1);
    } else {
      console.log("theres no moves to redo!");
    }
  };

  const resetGame = () => {
    //resetting game variables for a new game
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXisNext(true);
    winner = { player: null, winningSquares: null };
    return winner;
  };

  const buttonSwitcher = () => {
    //dynamically renders button based on game status
    if (winner.player) {
      return (
        <button id="playAgainButton" onClick={resetGame}>
          Play Again
        </button>
      );
    } else
      return (
        <button id="resetButton" onClick={resetGame}>
          Reset Game
        </button>
      );
  };

  const gameStatusSwitcher = () => {
    //dynamically renders game status information
    if (winner.player) {
      return <h3 className="winnerStatus">Winner: {winner.player}</h3>;
    } else return <h3 className="gameStatus">Player {xO}'s turn</h3>;
  };

  return (
    <div id="gameContainer">
      <div className="info-wrapper">{gameStatusSwitcher()}</div>
      <div id="leftMenu">
        <img src={Undo} onClick={undoMove} id="undoButton" alt="undo"></img>
      </div>
      <Board
        squares={history[stepNumber]}
        onClick={handleClick}
        winner={winner}
      />
      <div id="rightMenu">
        <img src={Redo} onClick={redoMove} id="undoButton" alt="undo"></img>
      </div>
      {buttonSwitcher()}
    </div>
  );
};

export default Game;
