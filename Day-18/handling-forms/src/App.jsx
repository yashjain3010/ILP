import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [myCar, setMyCar] = useState("Ford"); // Default value for the select input

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  const handleChange = (event) => {
    setMyCar(event.target.value); // Update the state for the select input
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <form>
        <select value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
    </div>
  );
}

export default MyForm;
