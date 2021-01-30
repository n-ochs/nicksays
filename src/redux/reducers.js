import { START, ADD_MOVE } from './actions';
import store from './store';
import defaultState from './store';

export const start = (state = defaultState, action) => {
    const { type } = action;
    switch (type) {
        case START:
            return {
                ...defaultState,
                round: round + 1,
            }
        default:
            return state
    };
};