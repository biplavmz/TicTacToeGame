import React from "react";

const TikTakToe = () => {
  function Square({ value, onSqureClick }) {
    return (
      <button className="square" onClick={onSqureClick}>
        {value}
      </button>
    );
  }

  function Board({ xIsNext, square, onPlay }) {
    function handleClick(i) {
      if (calculateWinner(squre) || squre[i]) {
        return;
      }
    }
  }

  return <></>;
};

export default TikTakToe;
