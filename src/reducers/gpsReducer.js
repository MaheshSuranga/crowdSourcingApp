import {POSITION_CHANGED,
        CURRENT_PLACE_CHANGED} from '../actions/types';

const INITIAL_STATE = {
    position: null,
    // currentPlace: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case CURRENT_PLACE_CHANGED:
        //     console.log("current placed changed in action")
        //     return {...state, currentPlace: action.payload};
        case POSITION_CHANGED:
            return {...state, position: action.payload};
        default:
            return state;
    }
}