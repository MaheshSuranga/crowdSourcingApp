import {updateRestaurant, updateRestaurantSensorDataOnly, updateCurrentPlace} from '../actions';
import {store} from '../App';

// const currentPlace=[null];
// const previousPlace=null;

export const checkPlace = (restaurantDetail, currentPosition, sensorData) => {
    const currentPlace = store.getState().gps.currentPlace
    console.log("((((((((",restaurantDetail[1].position.longitude, currentPosition, store.getState().gps);
    restaurantLong = restaurantDetail[1].position.longitude;
    restaurantLat = restaurantDetail[1].position.latitude;

    currentLong = currentPosition.longitude;
    currentLat = currentPosition.latitude;

    const p = 0.017453292519943295;
    const c = Math.cos;
    const a = 0.5 - c((restaurantLat-currentLat)*p)/2 + c(currentLat*p)*c(restaurantLat*p)*(1-c((restaurantLong-currentLong)*p))/2;

    const distanceKM = 12742 * Math.asin(Math.sqrt(a));
    const distanceM = distanceKM * 1000;

    if(distanceM < 20) {
        console.log('Place '+currentPlace + restaurantDetail[0]);
        if(restaurantDetail[0] != currentPlace) {
            console.log("i am in "+ restaurantDetail[0]);
            updateRestaurant(restaurantDetail[0], restaurantDetail[1], currentPlace, sensorData).then(value => {
                console.log('return value'+ value);
                updateCurrentPlace(value);
            });
        } else {
            console.log("i am in same "+ restaurantDetail[0]);
            updateRestaurantSensorDataOnly(restaurantDetail[0], restaurantDetail[1], currentPlace, sensorData).then(value => {
                console.log('return value'+ value);
                updateCurrentPlace(value);
            });
        }      
    }else {
        return console.log("i am not in here");
        // return updateRestaurant(restaurantDetail[0], restaurantDetail[1], currentPlace);
    }
}
