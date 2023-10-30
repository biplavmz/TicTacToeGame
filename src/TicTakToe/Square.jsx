import { useState } from "react";

const Square = ({ value, onSquareClick }) => {
  // const [value,setValue] = useState(null);

  return (
    <>
      <button onClick={onSquareClick} className="square">
        {value}
      </button>
    </>
  );
};

export default Square;
