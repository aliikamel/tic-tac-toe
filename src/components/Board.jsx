import React, { useContext, useEffect } from 'react'
import Cell from './Cell'
import { initialBoard } from "./Game"
import { AppContext } from "./App"


function Board() {

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