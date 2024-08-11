import React, { useState, useMemo } from "react";

const ExpensiveCalculation = ({ value }) => {
  const expensiveResult = useMemo(() => {
    console.log("Calculating Expensive Result...");
    return value * 2;
  }, [value]);

  return (
    <div>
      <p>Value: {value}</p>
      <p>Expensive Result: {expensiveResult}</p>
    </div>
  );
};

const Memoization = () => {
  const [inputValue, setInputValue] = useState(5);
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <ExpensiveCalculation value={inputValue}/>
    </div>
  );
};

export default Memoization;
