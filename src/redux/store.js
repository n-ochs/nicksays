import createStore from 'react-redux';

const defaultState = {
    round: 0,
    question = [],
    answer = []
};

export const store = createStore(round, question, answer, defaultState);