import React from 'react';
import store from '../redux/store';

function Square(props) {

    const checkAnswer = () => {

        //Adds each user input into the answer array
        store.dispatch({ type: 'ADD', payload: {id: props.id} });

         //Retrieves the latest answer array
        const answerArray = store.getState().answer;

        //Retrieves the latest question array
        const questionArray = store.getState().question;

        //Verifies the user's input as correct or incorrect
        for (let i = 0; i < answerArray.length; i++) {
            if(answerArray[i] === questionArray[i]) {
                console.log('correct');
            }
            else {
                console.log('incorrect');
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