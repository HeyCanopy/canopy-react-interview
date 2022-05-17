import React, { useState, useEffect } from "react";

const Square = ({ value, onClick, winner, index }) => {
  const [winningSquare, setWinningSquare] = useState(false);
  const [buttonClassName, setButtonClassName] = useState("squares");

  useEffect(() => {
    if (winner.winningSquares) {
      console.log(winner.winningSquares);
      for (let i = 0; i < 3; i++) {
        if (index === winner.winningSquares[i]) {
          setWinningSquare(true);
          return;
        }
      }
      return setWinningSquare(false);
    } else setWinningSquare(false);
  }, [winner]);

  const style = () => {
    if (value) {
      if (winningSquare) {
        return `squares ${value} winningSquare`;
      } else return `squares`;
    } else return "squares";
  };

  return (
    <button onClick={onClick} className={style()}>
      {value}
    </button>
  );
};

export default Square;
