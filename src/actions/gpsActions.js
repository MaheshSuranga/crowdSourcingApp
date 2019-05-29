import {POSITION_CHANGED} from './types'

export const currentPositionChanged = (position) => ({
    type: POSITION_CHANGED,
    payload: position
});