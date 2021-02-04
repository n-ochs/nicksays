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
const ADD = 'ADD';
const NEXT = 'NEXT';

//REDUCER
const reducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case START:
            return {
                ...state,
                round: 1,
            };
        case QUESTION:
            const randomNumbers = () => {
                let theQuestion = [];
                for(let i = 0; i < state.round; i++) {
                    theQuestion.push(Math.floor((Math.random() * 9) + 1));
                };
                return theQuestion;
            };
            return {
                ...state,
                question: state.question.concat(randomNumbers())
            };
        case ADD:
            return {
                ...state,
                answer: state.answer.concat(payload.id)
            };
        case NEXT:
            return {
                ...state,
                round: state.round + 1,
                question: [],
                answer: []
            };
        default:
            return state;
    };
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;