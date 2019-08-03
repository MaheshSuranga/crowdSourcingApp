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

// export const updateRestaurant = (restName, details, currentPlace) => {
//     console.log("in update function")
//     return (dispatch) => {
//         console.log("in disptach function")
//         const count = details.count + 1;
//         if(currentPlace != null) {
//             console.log("In not null")
//             firebase.database().ref(`/restaurant/${currentPlace}/count`)
//                 .on('value', snapshot => {
//                     firebase.database().ref(`/restaurant/${currentPlace}/count`)
//                         .set(snapshot.val()-1)
//                 })
//                 .then(() => {
//                     firebase.database().ref(`/restaurant/${restName}`)
//                         .set({...details, count: count})
//                         .then(() => {
//                             dispatch({type: CURRENT_PLACE_CHANGED, payload: restName})
//                         })
//                 })
//         }else {
//             console.log("In null")
//             firebase.database().ref(`/restaurant/${restName}`)
//                 .set({...details, count: count})
//                 .then(() => {
//                     dispatch({type: CURRENT_PLACE_CHANGED, payload: restName})
//                 })
//         }
//     }
// }

export const updateRestaurant = (restName, details, currentPlace) => {
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
                        .set({...details, count: count})
                        .then(() => {
                            resolve(restName);
                        })
                })
        } else {
            firebase.database().ref(`/restaurant/${restName}`)
            .set({...details, count: count})
            .then(() => {
                console.log("4444444444"+restName)
                resolve(restName);
            }
            )
        }
    })
}