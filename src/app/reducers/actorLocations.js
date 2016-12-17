export const LOAD_MAP = Symbol('LOAD_MAP');
export const SET_LOCATION = Symbol('SET_LOCATION');
export const ADD_ACTOR = Symbol('ADD_ACTOR');
export const MOVE_UP = Symbol('MOVE_UP');
export const MOVE_DOWN = Symbol('MOVE_DOWN');
export const MOVE_RIGHT = Symbol('MOVE_RIGHT');
export const MOVE_LEFT = Symbol('MOVE_LEFT');

const doOnArray = (array, action) => {
    return array.map(action);
}

export default function actorLocations( state = [ { title: 'player', x: 0, y: 0 } ], { type, actor, x, y, map } ) {
    switch(type) {
        case LOAD_MAP:
            return [ ...map ];

        case ADD_ACTOR:
            return [ ...state, { title: 'actor', x, y } ];

        case SET_LOCATION:
            return doOnArray(state, (item) => {
                if ( item.title === actor) {
                    item.y = y;
                    item.x = x;
                }
                return item;
            });

        case MOVE_UP:{
            return doOnArray(state, (item) => {
                if ( item.title === actor) {
                    item.y = item.y + 1;
                }
                return item;
            });
        }

        case MOVE_DOWN:{
            return doOnArray(state, (item) => {
                if ( item.title === actor) {
                    item.y = item.y - 1;
                }
                return item;
            });
        }

        case MOVE_RIGHT:{
            return doOnArray(state, (item) => {
                if ( item.title === actor) {
                    item.x = item.x - 1;
                }
                return item;
            });
        }

        case MOVE_LEFT:{
            return doOnArray(state, (item) => {
                if ( item.title === actor) {
                    item.x = item.x + 1;
                }
                return item;
            });
        }

        default:
            return state;
    }
}
