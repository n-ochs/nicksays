import React from 'react';
import { useState } from 'react';
import Square from './square';
import { store } from '../redux/store';

function Game() {

    const initialGrid = [
        {id: 1, isLit: false}, 
        {id: 2, isLit: false}, 
        {id: 3, isLit: false},
        {id: 4, isLit: false},
        {id: 5, isLit: false},
        {id: 6, isLit: false}, 
        {id: 7, isLit: false},
        {id: 8, isLit: false},
        {id: 9, isLit: false}
    ];

    // let lit = 'bg-transparent';

    // const randomSquare = () => {
    //     return Math.floor((Math.random() * 9) + 1);
    // };

    // const randomLit = (grid) => {
    //     // grid[0].id
    //     grid[randomSquare]
    //     setLit(true);
    // };

    const [grid, setGrid] = useState(initialGrid);
    // useEffect(() => {
    //     renderGrid();
    //   }, [grid, renderGrid]);

    // const randomLit = () => {
    //     const randomIndex = Math.floor((Math.random() * 9) + 1);
    //     initialGrid[randomIndex].isLit = !initialGrid[randomIndex].isLit;
    //     console.log('pressed')
    //     console.log(initialGrid)
    //     setGrid(initialGrid)
    // };

    console.log(store)

    return (
        <div>
            <div className="text-3xl text-center">
                <button type="button" className="bg-blue-600">Start!</button>
                <p className="text-3xl">Round: 0</p>
            </div>

            <div className="flex flex-grow items-center justify-center">
                <div className="h-auto w-auto grid grid-cols-3 grid-flow-row gap-4 border-solid border-4 border-black text-center items-center p-4 justify-evenly">
                    {grid.map((item) => {
                        return <Square key={item.id} isLit={item.isLit} id={item.id}/>
                    })}

                </div>
            </div>
        </div>
    );
};

export default Game;