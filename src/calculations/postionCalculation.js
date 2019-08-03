import {updateRestaurant} from '../actions';

const currentPlace=[null];
const previousPlace=null;

export const checkPlace = (restaurantDetail, currentPosition) => {
    console.log(restaurantDetail[1].position.longitude, currentPosition);
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
            updateRestaurant(restaurantDetail[0], restaurantDetail[1], currentPlace[0]).then(value => {
                console.log('return value'+ value);
                currentPlace[0] = value;
            });
        } else {
            return console.log("i am in same"+ restaurantDetail[0]);
            // return updateRestaurant(restaurantDetail[0], restaurantDetail[1], currentPlace);
        }      
    }else {
        return console.log("i am not in here");
        // return updateRestaurant(restaurantDetail[0], restaurantDetail[1], currentPlace);
    }
}
