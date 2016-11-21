import { SET_LOCATION, MOVE_UP, MOVE_DOWN, MOVE_RIGHT, MOVE_LEFT } from '../reducers/playerMovement.js';

export const setLocation = ({actor, x, y}) => ({ type: SET_LOCATION, actor, x, y });

export const moveUp = actor => ({ type: MOVE_UP, actor });
export const moveDown = actor => ({ type: MOVE_DOWN, actor });
export const moveRight = actor => ({ type: MOVE_RIGHT, actor });
export const moveLeft = actor => ({ type: MOVE_LEFT, actor });
