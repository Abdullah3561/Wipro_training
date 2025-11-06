import React from "react";

export interface NumberItem {
  value: number;
}

interface NumberListProps {
  numbers: NumberItem[];
  onReset: () => void; // new prop for resetting numbers
}

const NumberList: React.FC<NumberListProps> = ({ numbers, onReset }) => {
  return (
    <div>
      <h3>Number List:</h3>
      <button onClick={onReset}>All Numbers</button> {/* New Button */}
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
