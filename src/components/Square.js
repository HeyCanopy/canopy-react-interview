import React, {useState} from "react";

const Square = ({ value, onClick, xIsNext, winner, squareKey }) => {
  const [hovering, setHovering] = useState(false)
  let style = value ? `squares ${value}` : `squares`;

  let hover;

  if (value == null) {
    hover = xIsNext ? 'X' : 'O'
  } else {
    hover = null
  }

  if (winner != null && winner[1].includes(squareKey)) {
    style = value ? `squares-winner ${value}` :  `squares-winners`
  }
  
  return (
    <button
      className={style}
      onClick={onClick} 
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {setHovering(false)}}
    >
      {value}
      {hovering && hover}
    </button>
  );
};

export default Square;