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