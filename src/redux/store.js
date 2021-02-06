import { createStore } from 'redux';

//DEFAULT STATE
export const defaultState = {
    round: 0,
    question: [],
    answer: [],
    status: 'pre' //Status can be one of four values: pre, question, answer, over
};

//ACTIONS
const START = 'START';
const QUESTION = 'QUESTION';
const ADD = 'ADD';
const NEXT = 'NEXT';
const LOST = 'LOST';
const RESTART = 'RESTART';
const STATUS_QUESTION = 'STATUS_QUESTION';
const STATUS_ANSWER = 'STATUS_ANSWER';

//REDUCER
const reducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case START:
            return {
                ...state,
                round: 1,
                status: 'playing'
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
        case LOST:
            return {
                ...state,
                status: 'over'
            };
        case RESTART:
            return {
                ...state,
                round: 0,
                question: [],
                answer: [],
                status: 'pre'
            };
        case STATUS_QUESTION:
            return {
                ...state,
                status: 'question'
            };
        case STATUS_ANSWER:
            return {
                ...state,
                status: 'answer'
            };
        default:
            return state;
    };
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;