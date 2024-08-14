import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 1182px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    height: 100vh;

    .content {
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
}
`

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 120px;
  cursor: pointer;
  font-size: 16px;
  border: 1px solid transparent;
  margin-left: 407px;
  &:hover {
    background-color: #6d675b;
    border: 1px solid black;
    transition: 0.4s background ease-in;
  }
`;

const FrontPage = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices1.png" alt="" />
      </div>
      <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}

export default FrontPage