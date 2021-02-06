import React from 'react';
import store from '../redux/store';

function Square(props) {

    const nextRound = () => {
        store.dispatch({ type: 'NEXT' });
        store.dispatch({type: 'QUESTION' });
        props.askQuestion();
    };

    const checkAnswer = () => {

        //Adds each user input into the answer array
        store.dispatch({ type: 'ADD', payload: {id: props.id} });

         //Retrieves the latest answer array
        const answerArray = store.getState().answer;

        //Retrieves the latest question array
        const questionArray = store.getState().question;

        //Blank verification array for checking later
        let verification = [];

        //Verifies the user's input as correct or incorrect
        for (let i = 0; i < answerArray.length; i++) {
            if(answerArray[i] === questionArray[i]) {
                verification.push(1);
            }
            else {
                store.dispatch({ type: 'LOST' });
            };
        };

        //Checks the number of answers the user got right to the number of questions. If they are equal, the user moves onto the next round.
        if(verification.length === questionArray.length) nextRound();

    };

    //Checks the status of the game in order to toggle the disabled property on the buttons
    let theStatus = () => {
        if(store.getState().status === 'answer') {
            return false;
        }
        else {
            return true;
        };
    };

    return (
        <button 
            type="button" 
            className="h-24 w-24 border-solid border-4 rounded-md border-gray-400 hover:bg-gray-600" 
            id={props.id} 
            disabled={theStatus()} 
            style={{cursor: theStatus() ? 'not-allowed' : ''}} //May have to remove this line if it causes issues
            onClick={() => checkAnswer()}
            >{props.id}</button>
    );
    
};

export default Square;