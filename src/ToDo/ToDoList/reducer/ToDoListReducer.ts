import { FETCH_TODOS } from '../ActionConstants';

function toDoListReducer(state: any = [], action: any) {
    switch(action.type) {
        case FETCH_TODOS:
            return { ...state, todos: action.payload };
        default:
            return state;
    }
}

export default toDoListReducer;