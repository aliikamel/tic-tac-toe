import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from "./App"
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { fontSize } from '@mui/system';



function Cell({ cellNum }) {
    const {
        turn,
        setTurn,
        board,
        setBoard,
        gameOver,
        setGameOver,
        singlePlayer,
        winningCells,
        setWinningCells
    } = useContext(AppContext);


    const handleClick = () => {
        if (board[cellNum] === "" && !gameOver.gameOver) {
            board[cellNum] = turn;
            let newBoard = board;
            setBoard(newBoard);
            setTurn(turn === "x" ? "o" : "x")
        }
    }

    const handleClickSingle = () => {
        if (board[cellNum] === "" && !gameOver.gameOver && turn === "x") {
            board[cellNum] = turn;
            let newBoard = board;
            setBoard(newBoard);
            setTurn("o")
        }
    }


    return (
        <div className='cell' id={winningCells.includes(cellNum) ? "winningCells" : ''} onClick={singlePlayer ? handleClickSingle : handleClick}>
            {board[cellNum] === "x" ? <CloseIcon id="x" /> : board[cellNum] === "o" && <RadioButtonUncheckedIcon id="o" />}
        </div>
    )
}

export default Cell