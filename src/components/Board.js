import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick, xIsNext, winner }) => (
  <div className="board">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => {onClick(i)}} xIsNext={xIsNext} winner={winner} squareKey={i} />
    ))}
  </div>
);

export default Board;