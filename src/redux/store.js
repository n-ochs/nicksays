import { createStore } from 'redux';

//DEFAULT STATE
export const defaultState = {
    round: 0,
    question: [],
    answer: []
};

//ACTIONS
const START = 'START';
const QUESTION = 'QUESTION';
const ADD_MOVE = 'ADD';
const NEXT = 'NEXT';

//REDUCER
const reducer = (state = defaultState, action) => {
    const { type } = action;
    switch (type) {
        case START:
            return {
                ...state,
                round: 1,
                question: Array(1).fill(Math.floor((Math.random() * 9) + 1))
            }
        case QUESTION:
            return {
                ...state,
                question: Array(state.round).fill(Math.floor((Math.random() * 9) + 1))
            }
        case ADD_MOVE:
            return {

            }
        case NEXT:
            return {

            }
        default:
            return state
    };
};

const store = createStore(reducer);

export default store;