import React from "react";
import { NumberItem } from "./numberList";

const logger: React.FC<{ numbers: NumberItem[] }> = ({ numbers }) => {
  const handleLog = () => {
    numbers.forEach((num) => console.log("Number:", num.value));
    alert("Numbers logged to console!");
  };

  return <button onClick={handleLog}>Log Numbers</button>;
};

export default logger;
