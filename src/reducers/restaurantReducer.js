import {RESTAURANTS_FETCH_SUCCESS} from '../actions/types';

const INITIAL_STATE = {
    restaurantDetails: ''
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case RESTAURANTS_FETCH_SUCCESS:
            return {...state, restaurantDetails: action.payload}
        default:
            return state
    }
}