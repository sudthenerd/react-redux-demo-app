import { addToDo } from "../actions/ToDoAddActions";
import { showToaster } from "../../../Core";

export const addToDoItem = (data: any) => {
    return (dispatch: any) => {
        dispatch(addToDo(data));
        dispatch(showToaster('To Do Item Added Successfully'));
    }
}