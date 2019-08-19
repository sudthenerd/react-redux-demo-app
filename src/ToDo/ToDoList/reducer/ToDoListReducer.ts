import { FETCH_TODOS, DELETE_TODO, EDIT_TODO } from '../ActionConstants';

function toDoListReducer(state: any = {todos: []}, action: any) {
    switch(action.type) {
        case FETCH_TODOS:
            return { ...state, todos: action.payload };
        case DELETE_TODO:
            const todos: any = [...state.todos];
            todos.splice(action.index, 1);
            return { ...state, todos: todos };
        default:
            return state;
    }
}

export default toDoListReducer;