export const SET_LOCATION = Symbol('SET_LOCATION');
export const MOVE_UP = Symbol('MOVE_UP');
export const MOVE_DOWN = Symbol('MOVE_DOWN');
export const MOVE_RIGHT = Symbol('MOVE_RIGHT');
export const MOVE_LEFT = Symbol('MOVE_LEFT');


export default function playerMovement( state = { player: { x: 0, y: 0 } }, { type, actor, x, y } ) {
    switch(type) {
        case SET_LOCATION:
            return { [actor]: { x, y } };

        case MOVE_UP:{
            let{ x: actorx, y: actory } = state[actor];
            return { [actor]: { x: actorx, y: actory + 1 } };
        }

        case MOVE_DOWN:{
            let{ x: actorx, y: actory } = state[actor];
            return { [actor]: { x: actorx, y: actory - 1 } };
        }

        case MOVE_RIGHT:{
            let{ x: actorx, y: actory } = state[actor];
            return { [actor]: { x: actorx + 1, y: actory } };
        }

        case MOVE_LEFT:{
            let{ x: actorx, y: actory } = state[actor];
            return { [actor]: { x: actorx - 1, y: actory } };
        }

        default:
            return state;
    }
}
