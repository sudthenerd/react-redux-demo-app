import { ADD_TODO } from './ToDoAdd/actions/ToDoAddActions';
import { 
    DELETE_TODO, EDIT_TODO,
    UPDATE_TODO_LIST_PENDING,
    UPDATE_TODO_LIST_FULFILLED,
    UPDATE_TODO_LIST_REJECTED 
} from './ToDoList/actions/ToDoListActions';

const toDoReducer = (state: any = { editMode: false, list: [], toDoItem: {} }, action: any) => {
      switch (action.type) {
        case UPDATE_TODO_LIST_PENDING:
            return { ...state, fetching: true };
        case UPDATE_TODO_LIST_FULFILLED:
            return { ...state, list: action.payload, fetching: false };
        case UPDATE_TODO_LIST_REJECTED:
            return { ...state, fetching: false };
        case DELETE_TODO: {
            const list: any = [...state.list];
            list.splice(action.index, 1);
            return { ...state, list: list };
        }
        case ADD_TODO:
            const list: any = [...state.list];
            if (state.editMode) {
              list.splice(action.payload.index, 1, action.payload);
              return { ...state, list: list, editMode: false };
            }

            list.splice(0, 0, action.payload);
            return { ...state, list: list };
        case EDIT_TODO:
            return { ...state, toDoItem: action.payload, editMode: true };
        default: 
            return state;
      }
}

export default toDoReducer;
  