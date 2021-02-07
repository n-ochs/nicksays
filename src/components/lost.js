import React, { useState } from 'react';
import store from '../redux/store';
import firebase from '../util/firebase';

function Lost() {
    const [ name, setName ] = useState('');

    const handleOnChange = (e) => {
        setName(e.target.value);
    };

    const addNameToLeaderboard = () => {
        const positionRef = firebase.database().ref("Position");
        const position = {
            name,
            highScore: store.getState().question.length
        };

        positionRef.push(position);
    };

    return (
        <div className="text-center block">
            <div>
                <p>You lost on round {store.getState().question.length}</p>
                <p>You entered: {store.getState().answer.join(', ')}</p>
                <p>The correct answer was: {store.getState().question.join(', ')}</p>
            </div>

            <div>
                <input className="border-solid border-4 rounded-md border-gray-400" type="text" onChange={handleOnChange} value={name}></input>
                <button onClick={addNameToLeaderboard}>Submit</button>
            </div>

            <div>
                <button type="button" className="bg-blue-600 mt-2 mb-2" onClick={() => store.dispatch({ type: 'RESTART' })}>Click here to restart</button>
            </div>
        </div>
    );

};

export default Lost;