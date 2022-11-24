import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from "./App"
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { fontSize } from '@mui/system';



function Cell({ cellNum }) {
    const { turn, setTurn, board, setBoard, gameOver, setGameOver, singlePlayer } = useContext(AppContext);
    const [winningCells, setWinningCells] = useState([]);


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



    useEffect(() => {
        for (let i = 0; i < board.length; i++) {
            if (board[i] !== "") {
                // Check for horizontal wins
                if (i === 0 || i === 3 || i === 6) {
                    if (board[i] === board[i + 1] && board[i] === board[i + 2]) {
                        setWinningCells([i, i + 1, i + 2]);
                        setGameOver({ gameOver: true, winner: (turn === "x" ? "o" : "x") })
                    }
                }

                // Check for vertical wins
                if (board[i] === board[i + 3] && board[i] === board[i + 6]) {
                    setWinningCells([i, i + 3, i + 6]);
                    setGameOver({ gameOver: true, winner: (turn === "x" ? "o" : "x") })
                }

                // Check for diagonal wins
                if (board[i] === board[i + 4] && board[i] === board[i + 8]) {
                    setWinningCells([i, i + 4, i + 8]);
                    setGameOver({ gameOver: true, winner: (turn === "x" ? "o" : "x") })
                }
                if (board[2] !== "" && (board[2] === board[4] && board[2] === board[6])) {
                    setWinningCells([2, 4, 6]);
                    setGameOver({ gameOver: true, winner: (turn === "x" ? "o" : "x") })
                }
            }
        }

        // Check if game is over with no winner
        if (!board.includes("") && !gameOver.gameOver) {
            setGameOver({ gameOver: true, winner: "" })
        }

    }, [turn])


    return (
        <div className='cell' id={winningCells.includes(cellNum) ? "winningCells" : ''} onClick={singlePlayer ? handleClickSingle : handleClick}>
            {board[cellNum] === "x" ? <CloseIcon id="x" /> : board[cellNum] === "o" && <RadioButtonUncheckedIcon id="o" />}
        </div>
    )
}

export default Cell