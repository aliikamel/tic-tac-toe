import React, { useContext, useState, createContext } from "react"
import ReactDOM from "react-dom"
import { initialBoard } from "./Game"
import './App.css'
import Board from "./Board"
import GameOver from "./GameOver"
import Grid3x3Icon from '@mui/icons-material/Grid3x3';

export const AppContext = createContext();

function App() {
    const [turn, setTurn] = useState("x"); // setTurn either "x" or "o"
    const [board, setBoard] = useState(initialBoard);
    const [gameOver, setGameOver] = useState(
        {
            gameOver: false,
            winner: ""
        })
    const [singlePlayer, setSinglePlayer] = useState();
    const [winningCells, setWinningCells] = useState([]);



    return (
        <div className="main-container">
            <nav>
                <h1> Chamel Tic-Tac-Toe <Grid3x3Icon id="h-icon" /> </h1>
            </nav>
            {!singlePlayer && <button className="btn playmode" onClick={() => { setSinglePlayer(true) }}>Play Against Computer</button>}
            {singlePlayer && <button className="btn playmode" onClick={() => { setSinglePlayer(false) }}>Play with Friend</button>}
            <div className="container">
                <AppContext.Provider value={{
                    turn,
                    setTurn,
                    board,
                    setBoard,
                    gameOver,
                    setGameOver,
                    singlePlayer,
                    winningCells,
                    setWinningCells
                }}>
                    <Board />
                </AppContext.Provider>
                {gameOver.gameOver && <GameOver winner={gameOver.winner} />}
            </div>
        </div>
    )
}

export default App



// import {AppContext} from "./App"
// const {.....} = useContext(AppContext)