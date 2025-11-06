import React, { useState } from "react";
import NumberList, { NumberItem } from "./components/numberList";
import FilterControls from "./components/filterControls";
import Logger from "./components/logger";
import HoistingDemo from "./components/hoisting";
import ConstructorDemo from "./components/constructor";

const App: React.FC = () => {
  const initialNumbers: NumberItem[] = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];

  const [numbers, setNumbers] = useState<NumberItem[]>(initialNumbers);

  const filterEven = () => {
    setNumbers(numbers.filter((num) => num.value % 2 === 0));
  };

  const mapDouble = () => {
    setNumbers(numbers.map((num) => ({ value: num.value * 2 })));
  };

  const resetNumbers = () => {
    setNumbers(initialNumbers);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>JavaScript Concepts Demo</h2>
      <FilterControls onFilter={filterEven} onMap={mapDouble} />
      <NumberList numbers={numbers} onReset={resetNumbers} />
      <Logger numbers={numbers} />
      <HoistingDemo />
      <ConstructorDemo />
    </div>
  );
};

export default App;
