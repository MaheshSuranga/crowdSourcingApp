import {POSITION_CHANGED} from './types'

export const currentPositionChanged = (position) => ({
    type: POSITION_CHANGED,
    payload: position
});

// export const currentPlaceChanged = (currentPlace) => {console.log("action triggered"+ currentPlace);return{
//     type: CURRENT_PLACE_CHANGED,
//     payload: currentPlace
// }};