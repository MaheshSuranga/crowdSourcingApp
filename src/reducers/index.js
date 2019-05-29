import {combineReducers} from 'redux';
import GpsReducer from './gpsReducer';

export default combineReducers({
    gps: GpsReducer
});