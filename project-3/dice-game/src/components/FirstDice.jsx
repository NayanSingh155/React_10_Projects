import React from 'react'
import styled from "styled-components"
const FirstDice = () => {
    return (
        <>
            <Container>

                <img src="/images/dice.png" alt="dice-img" />

                <div className='text_btn'>
                    <h1>DICE GAME</h1>
                    <Button>Play Now</Button>
                </div>
            </Container>
        </>
    )
}

export default FirstDice;

const Container = styled.div`
    /* max-width:1280px ; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

  .text_btn{
    h1{

        font-weight: 700;
        font-size: 96px;
        white-space: nowrap;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`

const Button = styled.button`
    display: flex;
    width: 220px;
    padding: 10px 18px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    background: #000;
    color:#fff;
    font-size: 16px;
    font-weight: 600;
    border:none;
    cursor: pointer;
    transition: 0.4s background ease-in;
    
    &:hover{
        background-color: #fff;
        color: #000;
        cursor: pointer;
        border:1px solid black;
        transition: 0.3s background ease-in;
    }
`