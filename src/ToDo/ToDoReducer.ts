import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
// -------------------------------------------- //
import  { toDoListReducer } from './ToDoList';
import { toDoAddReducer } from './ToDoAdd';
import { ADD_TODO } from './ToDoAdd/actions/ToDoAddActions';
import { EDIT_TODO } from './ToDoList/ActionConstants';

// export default combineReducers({ list: toDoListReducer, toDoItem: toDoAddReducer });

export default reduceReducers(
    combineReducers({ list: toDoListReducer, toDoItem: toDoAddReducer }),
    // cross-cutting concerns because here `state` is the whole state tree
    (state: any = { editMode: false }, action: any) => {
      switch (action.type) {
        case ADD_TODO:
          {
            if (state.toDoItem.editMode) {
              const todos: any = [...state.list.todos];
              todos.splice(state.toDoItem.data.index, 1, state.toDoItem.data);

              const toDoItem: any = { ...state.toDoItem, editMode: false };

              return { ...state, list: {todos: todos}, editMode: false, toDoItem: toDoItem };
            }

            const todos = [state.toDoItem.data, ...state.list.todos];
            return { ...state, list: {todos: todos} };
          }
        case EDIT_TODO:
            const toDoItem = { data: action.payload }
            return { ...state, toDoItem: toDoItem, editMode: true };
        default: 
            return state;
      }
    }
  );