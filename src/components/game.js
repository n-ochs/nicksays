import React from 'react';

function Game() {

    const gameGrid = [
        1, 2, 3, 4, 5, 6, 7, 8, 9
    ];

    let lit = 'bg-transparent';

    // const randomSquare = () => {
    //     return Math.floor((Math.random() * 9) + 1);
    // };

    return (
        <div>
            <div className="text-3xl text-center">
                <button type="button" className="bg-blue-600">Start!</button>
                <p className="text-3xl">Round: 0</p>
            </div>

            <div className="flex flex-grow items-center justify-center">
                <div className="h-auto w-auto grid grid-cols-3 grid-flow-row gap-4 border-solid border-4 border-black text-center items-center p-4 justify-evenly">

                    {gameGrid.map((i) => {
                        return <button type="button" id={i} key={i} className={`h-24 w-24 border-solid border-4 border-gray-400 rounded-md ${lit}`}>{i}</button>
                    })}

                </div>
            </div>
        </div>
    );
};

export default Game;