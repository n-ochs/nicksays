import React from 'react';

function Square(props) {
    return (
        <button 
            type="button" 
            className={`h-24 w-24 border-solid border-4 rounded-md ${props.isLit ? 'border-red-800' : 'border-gray-400'}`}
            // onClick={(props) => console.log(props.id)}
        >{props.id}</button>
    )
};

export default Square;