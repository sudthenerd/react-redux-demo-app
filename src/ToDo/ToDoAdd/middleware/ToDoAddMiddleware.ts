import { addToDo } from "../actions/ToDoAddActions";

export const addToDoItem = (data: any) => {
    return (dispatch: any, getState: any) => {
        let toDos: any = getState().toDo.list.todos;

        if (data.editMode) {
            const toDoItem: any = { index: data.index, name: data.name };
            toDos.splice(data.index, 1, toDoItem);

            const payload: any = { list: {todos: toDos}, editMode: !data.editMode }
            dispatch(addToDo(payload))
            return;
        }

        const newToDo = [data, ...toDos];
        const payload = { list: {todos: [...newToDo]} }
        dispatch(addToDo(payload));
    }
}