import React, { useContext, useEffect } from 'react'
import Cell from './Cell'
import { initialBoard } from "./Game"
import { AppContext } from "./App"


function Board() {
    const { turn,
        setTurn,
        board,
        setBoard,
        gameOver,
        setGameOver,
        singlePlayer,
        setWinningCells,
        winningCells
    } = useContext(AppContext);


    const opponentPlay = () => {
        if (!singlePlayer) return;

        if (!gameOver.gameOver && turn === "o") {
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



    // run every turn change
    useEffect(() => {
        if (!board.includes("") && !gameOver.gameOver) {
            console.log(gameOver.winner)
            setGameOver({ gameOver: true, winner: "" })
        }

        let winner = false;
        let allWinningCells = [];
        for (let i = 0; i < board.length; i++) {
            if (board[i] !== "") {
                // Check for horizontal wins
                if (i === 0 || i === 3 || i === 6) {
                    if (board[i] === board[i + 1] && board[i] === board[i + 2]) {
                        allWinningCells.push(i, i + 1, i + 2);
                        setGameOver({ gameOver: true, winner: (turn === "x" ? "o" : "x") })
                        winner = true
                    }
                }

                // Check for vertical wins
                if (board[i] === board[i + 3] && board[i] === board[i + 6]) {
                    allWinningCells.push(i, i + 3, i + 6);
                    setGameOver({ gameOver: true, winner: (turn === "x" ? "o" : "x") })
                    winner = true
                }

                // Check for diagonal wins
                if (board[i] === board[i + 4] && board[i] === board[i + 8]) {
                    allWinningCells.push(i, i + 4, i + 8);
                    setGameOver({ gameOver: true, winner: (turn === "x" ? "o" : "x") })
                    winner = true;
                }
                if (board[2] !== "" && (board[2] === board[4] && board[2] === board[6])) {
                    allWinningCells.push(2, 4, 6);
                    setGameOver({ gameOver: true, winner: (turn === "x" ? "o" : "x") })
                    winner = true;
                }
            }
        }

        // set all possible wins if more than one not just the one win
        setWinningCells(allWinningCells);

        // if game ended dont move on to opponentPlay
        if (winner) return;

        (setTimeout(() => opponentPlay(), 500))

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