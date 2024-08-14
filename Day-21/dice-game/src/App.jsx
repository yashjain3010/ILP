import React, { useState } from 'react'
import './App.css'
import FrontPage from './Components/FrontPage'
import GamePlay from './Components/GamePlay';

const App = () => {
  const [isGameStarted,setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => (!prev))
  }

  return (
    <>
    {
      isGameStarted ? <GamePlay /> : <FrontPage toggle={toggleGamePlay}/>
    }
    </>
  )
}

export default App