import React, { useContext } from 'react'
import { AppContext } from "./App"


function GameOver({ winner }) {

    // const { gameOver } = useContext(AppContext);

    return (
        <div className='game-over'>
            <h1>Game Over</h1>
            {winner !== "" ? <h2>Winner: {winner.toUpperCase()}</h2> : <h2>No Winner</h2>}
            <a href=""><button className='btn'>Play Again</button></a>
        </div>
    )
}

export default GameOver