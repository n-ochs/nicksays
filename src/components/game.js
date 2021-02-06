import React from 'react';
import { useSelector } from 'react-redux';
import Square from './square';
import Lost from './lost';
import store from '../redux/store';

function Game() {

    const initialGrid = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9}
    ];

    useSelector(state => state);

    const gameStart = () => {
        store.dispatch({ type: 'START' });
        store.dispatch({ type: 'QUESTION' });
        askQuestion();
    };

    const askQuestion = () => {
        store.dispatch({ type: 'STATUS_QUESTION' });

        const questionArray = store.getState().question;

        let interval, i = 0;
        const lightUp = () => {
            let flash = document.getElementById(questionArray[i]);
            setTimeout(() => {
                flash.className = "h-24 w-24 border-solid border-4 rounded-md border-red-800";
            }, 500);
            setTimeout(() => {
                flash.className = "h-24 w-24 border-solid border-4 rounded-md border-gray-400";
            }, 1000);
            if (i < questionArray.length - 1) i++;
            else {
                store.dispatch({ type: 'STATUS_ANSWER' });
                clearInterval(interval);
            };
        };

        interval = setInterval(lightUp, 750);

    };

    return (
        <div>

            {
                store.getState().status === 'pre' ? 
                    <div className="text-3xl text-center">
                        <button type="button" className="bg-blue-600 mt-2 mb-2" onClick={() => gameStart()}>Start!</button>
                    </div> : 

                store.getState().status === 'playing' || store.getState().status === 'question' || store.getState().status === 'answer' ? 
                    <div>
                        <p className="text-3xl text-center">Round: {store.getState().round}</p>
                        <div className="flex flex-grow items-center justify-center">
                            <div className="h-auto w-auto grid grid-cols-3 grid-flow-row gap-4 border-solid border-4 border-black text-center items-center p-4 justify-evenly">
                                {initialGrid.map((item) => {
                                    return <Square key={item.id} id={item.id} playable={item.playable} askQuestion={askQuestion} />
                                })}
                            </div>
                        </div>
                    </div> : 

                store.getState().status === 'over' ? 
                    <Lost /> : 
                console.log('')
            }

        </div>
    );
    
};

export default Game;