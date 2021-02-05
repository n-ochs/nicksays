import React from 'react';
import store from '../redux/store';

function Lost() {
    return (
        <div className="text-3xl text-center">
            <p>You lost on round {store.getState().question.length}</p>
            <button type="button" className="bg-blue-600 mt-2 mb-2" onClick={() => store.dispatch({ type: 'RESTART' })}>Click here to restart</button>
            <p>Placeholder for leaderboard form</p>
        </div>
    );
};

export default Lost;