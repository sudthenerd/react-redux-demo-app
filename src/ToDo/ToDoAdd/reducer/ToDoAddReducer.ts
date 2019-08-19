import { ADD_TODO } from "../actions/ToDoAddActions";

function toDoAddReducer(state: any = { data: null }, action: any) {
    switch(action.type) {
        case ADD_TODO:
            const toDoItem: any = {index: action.payload.index, name: action.payload.name };
            return { ...state, data: {...toDoItem}, editMode: action.payload.editMode };
        default:
            return state;
    }
}

export default toDoAddReducer;