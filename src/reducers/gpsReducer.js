import {POSITION_CHANGED,
    MIC_PERMISSION_SUCCESS,
    SENSOR_DATA_UPDATED,
    CURRENT_PLACE_CHANGED} from '../actions/types';

const INITIAL_STATE = {
    position: null,
    mikePermission: false,
    sensorData: '',
    currentPlace: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POSITION_CHANGED:
            return {...state, position: action.payload};
        case MIC_PERMISSION_SUCCESS:
            return {...state, mikePermission: action.payload}
        case SENSOR_DATA_UPDATED:
            return {...state, sensorData: action.payload}
        case CURRENT_PLACE_CHANGED:
            return {...state, currentPlace: action.payload}
        default:
            return state;
    }
}