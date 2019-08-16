import { combineReducers } from 'redux';
// -------------------------------------------- //
import  toDoListReducer from './ToDoList/reducer/ToDoListReducer';

export default combineReducers({ list: toDoListReducer });