import {POSITION_CHANGED, MIC_PERMISSION_SUCCESS, SENSOR_DATA_UPDATED, CURRENT_PLACE_CHANGED} from './types'
import {store} from '../App'

export const currentPositionChanged = (position) => ({
    type: POSITION_CHANGED,
    payload: position
});

export const mikePermissionGained = (gained) => ({
    type: MIC_PERMISSION_SUCCESS,
    payload: gained
});

export const sensorDataUpdate = (sensorData) => {
    store.dispatch({
        type: SENSOR_DATA_UPDATED,
        payload: sensorData
    })
}

export const updateCurrentPlace = (currentPlc) => {
    console.log("In action "+ currentPlc);
    store.dispatch({
        type: CURRENT_PLACE_CHANGED,
        payload: currentPlc
    })
}
// export const currentPlaceChanged = (currentPlace) => {console.log("action triggered"+ currentPlace);return{
//     type: CURRENT_PLACE_CHANGED,
//     payload: currentPlace
// }};