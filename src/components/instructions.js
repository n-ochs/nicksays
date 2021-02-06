import React from 'react'

function Instructions() {
    return (
        <div className="m-4">
            <h1 className="text-4xl text-center">Welcome to NickSays</h1>
            <p className="text-3xl mt-5">How To Play</p>
            <p>
            Nick will ask you a simple question on the game board, which is a 3x3 grid. After the question is asked, you must remember the answer and click on the corresponding squares! Every round will increase in difficulty. Good luck!
            </p>
        </div>
    );
};

export default Instructions;