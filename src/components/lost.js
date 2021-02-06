import React from 'react';
import store from '../redux/store';

function Lost() {
    
    return (
        <div className="text-center block">
            <p>You lost on round {store.getState().question.length}</p>
            <p>You entered: {store.getState().answer.join(', ')}</p>
            <p>The correct answer was: {store.getState().question.join(', ')}</p>
            <button type="button" className="bg-blue-600 mt-2 mb-2" onClick={() => store.dispatch({ type: 'RESTART' })}>Click here to restart</button>
        </div>
    );

};

export default Lost;