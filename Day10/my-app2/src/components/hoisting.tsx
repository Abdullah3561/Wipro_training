import React from "react";

const HoistingDemo: React.FC = () => {
  // @ts-ignore
  console.log(a); // undefined due to hoisting
  var a = 10;

  sayHello(); // works because function declarations are hoisted
  function sayHello() {
    console.log("Hello from a hoisted function!");
  }

  return (
    <div>
      <h3>Hoisting Demo</h3>
      <p>Check the console to see hoisting in action!</p>
    </div>
  );
};

export default HoistingDemo;
