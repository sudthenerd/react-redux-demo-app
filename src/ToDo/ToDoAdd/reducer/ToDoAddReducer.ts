import { ADD_TODO } from "../actions/ToDoAddActions";

function toDoAddReducer(state: any = { }, action: any) {
    switch(action.type) {
        case ADD_TODO:
            return { ...state };
        default:
            return state;
    }
}

export default toDoAddReducer;