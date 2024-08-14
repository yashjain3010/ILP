import React, { useState } from 'react' 
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'


const GamePlay = () => {
 const [currentDice, setCurrentDice] = useState(1);
  return (
    <MainContainer>
        <div className='top_section'>
            <TotalScore />
            <NumberSelector selectNumber={currentDice} setSelectNumber={setCurrentDice}/>
        </div>
        <RoleDice />
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 150px;
        margin-left: 100px;
        padding-top: 70px;


    }
`