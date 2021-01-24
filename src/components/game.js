import React from 'react';

function Game() {
    return (
        <div>
            <div>
                <p className="text-3xl text-center">Round: 0</p>
            </div>
            <div className="flex items-center justify-center">
                
            <div className="h-80 w-80 grid grid-cols-3 grid-flow-row gap-4 border-solid border-4 border-gray-500 text-center items-center">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                </div>
            </div>
        </div>
    )
}

export default Game;