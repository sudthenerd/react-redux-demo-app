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
            return { ...state, ...action.payload };
        case EDIT_TODO:
            return { ...state, ...action.payload };
        default: 
            return state;
      }
    }
  );