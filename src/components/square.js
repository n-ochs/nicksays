import React from 'react';
import store from '../redux/store';

function Square(props) {

    return (
        <button 
            type="button" 
            className={`h-24 w-24 border-solid border-4 rounded-md ${props.isLit ? 'border-red-800' : 'border-gray-400'}`}
            onClick={() => store.dispatch({ type: 'ADD', payload: {id: props.id} })}
            // onClick={() => console.log(props.id)}
        >{props.id}</button>
    )
    
};

export default Square;