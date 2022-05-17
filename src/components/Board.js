import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick, winner }) => (
  <div className="board">
    {squares.map((square, i) => (
      <Square
        key={i}
        value={square}
        onClick={() => onClick(i)}
        winner={winner}
        index={i}
      />
    ))}
  </div>
);

export default Board;
