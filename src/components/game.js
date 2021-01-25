import React from 'react';
const gameGrid = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
];

function Game() {
    return (
        <div>
            <div>
                <p className="text-3xl text-center">Round: 0</p>
            </div>

            <div className="flex flex-grow items-center justify-center">
                <div className="h-auto w-auto grid grid-cols-3 grid-flow-row gap-4 border-solid border-4 border-black text-center items-center p-4 justify-evenly">

                    {gameGrid.map((i) => {
                        return <button type="button" id={i} key={i} className="h-24 w-24 border-solid border-4 border-gray-400 rounded-md">{i}</button>
                    })}
                    
                    {/* <div>
                        <button type="button" id="1" className="h-28 w-28 border-solid border-4 border-gray-400 rounded-md">1</button>
                    </div>

                    <div>
                        <button type="button" id="2" className="h-28 w-28 border-solid border-4 border-gray-400 rounded-md">2</button>
                    </div>

                    <div>
                        <button type="button" id="3" className="h-28 w-28 border-solid border-4 border-gray-400 rounded-md">3</button>
                    </div>

                    <div>
                        <button type="button" id="4" className="h-28 w-28 border-solid border-4 border-gray-400 rounded-md">4</button>
                    </div>

                    <div>
                        <button type="button" id="5" className="h-28 w-28 border-solid border-4 border-gray-400 rounded-md">5</button>
                    </div>

                    <div>
                        <button type="button" id="6" className="h-28 w-28 border-solid border-4 border-gray-400 rounded-md">6</button>
                    </div>

                    <div>
                        <button type="button" id="7" className="h-28 w-28 border-solid border-4 border-gray-400 rounded-md">7</button>
                    </div>
                    
                    <div>
                        <button type="button" id="8" className="h-28 w-28 border-solid border-4 border-gray-400 rounded-md">8</button>
                    </div>
                    
                    <div>
                        <button type="button" id="9" className="h-28 w-28 border-solid border-4 border-gray-400 rounded-md">9</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Game;