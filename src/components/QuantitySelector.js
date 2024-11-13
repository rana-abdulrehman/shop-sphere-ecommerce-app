import React from 'react';

const QuantitySelector = ({ quantity, handleIncrement, handleDecrement }) => (
  <div className="grid grid-cols-3 items-center border border-borderColor rounded-lg p-1">
    <button
      onClick={handleDecrement}
      className="text-buttonColor text-1xl font-bold p-1 border-r border-borderColor">
      -
    </button>
    <span className="text-center font-bold p-1">{quantity}</span>
    <button
      onClick={handleIncrement}
      className="text-buttonColor text-1xl font-bold p-1 border-l border-borderColor">
      +
    </button>
  </div>
);

export default QuantitySelector;