import { useState } from 'react'
import { memo } from 'react';

function App() {

   const [firstTitle, setFirstTitle] = useState("my name is yash");

   function changeTitle() {
     setFirstTitle("My name is " + Math.random());
   }

  return (
    <div>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={firstTitle} />
      <br />
      <Header title="my name is ....." />
      <Header title="my name is ....." />
      <Header title="my name is ....." />
    </div>
  );
}

 const Header = memo(function({title}){
  return <div>
    {title}
  </div>
})

export default App
