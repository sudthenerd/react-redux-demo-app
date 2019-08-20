import { ADD_TODO } from './ToDoAdd/actions/ToDoAddActions';
import { UPDATE_TODO_LIST, DELETE_TODO, EDIT_TODO } from './ToDoList/actions/ToDoListActions';

const toDoReducer = (state: any = { editMode: false, list: [], toDoItem: {} }, action: any) => {
      switch (action.type) {
        case UPDATE_TODO_LIST:
            return { ...state, list: action.payload };
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
  