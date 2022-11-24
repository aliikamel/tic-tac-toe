import React, { useContext, useEffect } from 'react'
import Cell from './Cell'
import { initialBoard } from "./Game"
import { AppContext } from "./App"


function Board() {
    const { turn, setTurn, board, setBoard, gameOver, setGameOver, singlePlayer } = useContext(AppContext);


    const opponentPlay = () => {
        if (!singlePlayer) return;

        if (!gameOver.gameOver && turn === "o") {
            console.log(gameOver.gameOver)
            let rand = Math.floor(Math.random() * board.length);
            while (board[rand] !== "") {
                rand = Math.floor(Math.random() * board.length);
            }
            board[rand] = turn;
            let newBoard = board;
            setBoard(newBoard);
            setTurn("x");
            console.log('in')
        }

    }


    useEffect(() => {
        if (!gameOver.gameOver) { (setTimeout(opponentPlay, 500)) }
    }, [turn])

    return (
        <div className='board'>
            {initialBoard.map((value, index) => {
                return <Cell
                    key={index}
                    cellNum={index}
                />
            })}
        </div>
    )
}

export default Board