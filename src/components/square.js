import React from 'react';
import store from '../redux/store';

function Square(props) {

    const checkAnswer = () => {
        store.dispatch({ type: 'ADD', payload: {id: props.id} });
        const answerArray = store.getState().answer;
        const questionArray = store.getState().question;
        for (let i = 0; i < answerArray.length; i++) {
            if(answerArray[i] === questionArray[i]) {
                console.log('correct');
            }
            else {
                console.log('wrong');
            };
        };
    };

    return (
        <button 
            type="button" 
            className={`h-24 w-24 border-solid border-4 rounded-md ${props.isLit ? 'border-red-800' : 'border-gray-400'}`}
            onClick={() => checkAnswer()}
        >{props.id}</button>
    )
    
};

export default Square;