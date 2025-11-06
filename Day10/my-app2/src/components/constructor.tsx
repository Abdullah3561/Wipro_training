import React, { useState } from "react";

interface PersonType {
  name: string;
  sayHi: () => void;
}

const ConstructorDemo: React.FC = () => {
  const [people, setPeople] = useState<string[]>([]);

  function Person(this: PersonType, name: string) {
    this.name = name;
    this.sayHi = function () {
      alert(`Hi, I am ${this.name}`);
    };
  }

  const handleCreate = () => {
    const name = prompt("Enter a name:") || "Unknown";
    const p1 = new (Person as any)(name);
    p1.sayHi();
    setPeople((prev) => [...prev, name]);
  };

  return (
    <div>
      <h3>Constructor Demo</h3>
      <button onClick={handleCreate}>Create Person</button>

      <h4>People Created:</h4>
      <ul>
        {people.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConstructorDemo;
