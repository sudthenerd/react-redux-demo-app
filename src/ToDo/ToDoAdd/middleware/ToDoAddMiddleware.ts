import { addToDo } from "../actions/ToDoAddActions";

export const addToDoItem = (data: any) => {
    return (dispatch: any) => {
        dispatch(addToDo(data));
    }
}