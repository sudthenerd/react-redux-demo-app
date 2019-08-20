import { FETCH_TODOS, DELETE_TODO } from '../ActionConstants';

function toDoListReducer(state: any = {todos: []}, action: any) {
    switch(action.type) {
        case FETCH_TODOS:
            return { ...state, todos: action.payload };
        case DELETE_TODO:
            return { ...state, todos: action.payload };
        default:
            return state;
    }
}

export default toDoListReducer;