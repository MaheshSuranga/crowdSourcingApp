import {combineReducers} from 'redux';
import GpsReducer from './gpsReducer';
import RestaurantReducer from './restaurantReducer';

export default combineReducers({
    gps: GpsReducer,
    restaurants: RestaurantReducer
});