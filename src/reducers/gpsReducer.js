import {POSITION_CHANGED} from '../actions/types';

const INITIAL_STATE = {
    position: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POSITION_CHANGED:
            return {...state, position: action.payload};
        default:
            return state;
    }
}