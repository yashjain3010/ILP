import WrapperComponent from "./Wrapper"
import {useState} from 'react';
const App = () => {
  const [name,setName] = useState('');
  const [myCar,setMyCar] = useState("Ford");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  const handleChange = (event) => {
    setMyCar(event.target.value);
  }

  return (
    <div>
      <WrapperComponent>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">
            Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>
        <form action="">
          <select value={myCar} onChange={handleChange}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Toyota">Toyota</option>
          </select>
        </form>
      </WrapperComponent>
    </div>
  );
}

export default App;