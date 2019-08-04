import firebase from 'react-native-firebase';
import {RESTAURANTS_FETCH_SUCCESS} from './types';


export const restaurantsFetch = () => {
    console.log('restaurant action method called')
    return (dispatch) => {
        firebase.database().ref(`/restaurant`)
            .on('value', snapshot => {
                // console.log(snapshot.val())
                dispatch({type: RESTAURANTS_FETCH_SUCCESS, payload: snapshot.val()})
            });
    }
};


export const updateRestaurant = (restName, details, currentPlace, sensorData) => {
    return new Promise((resolve, reject) => {
        console.log("in update function",currentPlace)
        const count = details.count + 1;
        if(currentPlace != null) {
            console.log("In not null")
            firebase.database().ref(`/restaurant/${currentPlace}/count`)
                .on('value', snapshot => {
                    firebase.database().ref(`/restaurant/${currentPlace}/count`)
                        .set(snapshot.val()-1)
                })
                .then(() => {
                    firebase.database().ref(`/restaurant/${restName}`)
                        .set({...details, count: count, ...sensorData})
                        .then(() => {
                            resolve(restName);
                        })
                })
        } else {
            console.log("sensordata ", sensorData)
            firebase.database().ref(`/restaurant/${restName}`)
            .set({...details, count: count, ...sensorData})
            .then(() => {
                console.log("4444444444"+restName)
                resolve(restName);
            }
            )
        }
    })
}

export const updateRestaurantSensorDataOnly = (restName, details, currentPlace, sensorData) => {
    return new Promise((resolve, reject) => {
        console.log("in update sensor only function",currentPlace)
        if(currentPlace != null) {
            console.log("In not null")
            firebase.database().ref(`/restaurant/${restName}`)
                        .set({...details, ...sensorData})
                        .then(() => {
                            resolve(restName);
                        })

        } else {
            console.log("Not null");
        }
    })
}
