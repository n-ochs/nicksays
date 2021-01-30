import { createStore } from 'redux';

export const defaultState = {
    round: 0,
    question: [],
    answer: []
};

const reducer = (state = defaultState, action) => {
    return state;
};

const store = createStore(reducer);

export default store;