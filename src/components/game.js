import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Square from './square';
import store from '../redux/store';

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

    const [grid, setGrid] = useState(initialGrid);

    const gameStart = () => {
        store.dispatch({ type: 'START' })
        store.dispatch({ type: 'QUESTION' })
        askQuestion();
    }

    useSelector(state => state);

    const askQuestion = () => {
        // store.dispatch({type: 'QUESTION'});
        const questionArray = store.getState().question;
      
        let interval, i = 0;
        const lightUp = () => {
            
            let realIndex = questionArray[i] - 1;
            let newlyLitGrid = [
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
            newlyLitGrid[realIndex].isLit = true;
            console.log(realIndex + 1);
            setGrid(newlyLitGrid);
            setTimeout(() => {
                newlyLitGrid[realIndex].isLit = false;
                setGrid(newlyLitGrid);
                console.log('changed') //https://tailwindcss.com/docs/transition-property
            }, 1000);
            if (i < questionArray.length - 1) i++;
            else clearInterval(interval);
        };

        interval = setInterval(lightUp, 750);
    };

    return (
        <div>
            <div className="text-3xl text-center">
                <button type="button" className="bg-blue-600 mt-2 mb-2" onClick={() => gameStart()}>Start!</button>
                <p className="text-3xl">Round: {store.getState().round}</p>
            </div>

            {/* DEV USE BUTTONS */}

            {/* <div className="text-3xl text-center mt-2 mb-2">
                <button type="button" className="bg-blue-600" onClick={() => console.log(store.getState())}>state!</button>
            </div> */}

            {/* <div className="text-3xl text-center mt-2 mb-2">
                <button type="button" className="bg-blue-600" onClick={() => askQuestion()}>QUESTION!</button>
            </div> */}

            {/* <div className="text-3xl text-center mt-2 mb-2">
                <button type="button" className="bg-blue-600" onClick={() => checkAnswer()}>check answer!</button>
            </div> */}

            <div className="flex flex-grow items-center justify-center">
                <div className="h-auto w-auto grid grid-cols-3 grid-flow-row gap-4 border-solid border-4 border-black text-center items-center p-4 justify-evenly">
                    {grid.map((item) => {
                        return <Square key={item.id} isLit={item.isLit} id={item.id} askQuestion={askQuestion} />
                    })}

                </div>
            </div>
        </div>
    );
};

export default Game;