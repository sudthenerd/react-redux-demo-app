import axios from 'axios';
// ----------------------------------------------- //
import { fetchToDos, deleteToDo, editToDo } from "../actions/ToDoListActions";

export const getToDos = () => {
    return function(dispatch) {
        axios.get('https://api.github.com/users')
        .then(response => {
            const todoList: any = adaptResponse(response.data)
            dispatch(fetchToDos(todoList));
        })
    }
}

export const deleteToDoItem = (index: number) => {
    return function(dispatch, getState) {
        const todos: any = [...getState().toDo.list.todos];
        todos.splice(index, 1);
        dispatch(deleteToDo(todos))
    }
}

export const editToDoItem = (data: any) => {
    return (dispatch) => {
        const payload: any = { 
            toDoItem: { ...data },
            editMode: true 
        };
        dispatch(editToDo(payload));
    }
}

function adaptResponse(responseData: any) {
    let adaptedResponse: any = [];
    responseData.forEach((responseDataItem: any, index: number) => {
        const todoItem: any = {index: index, name: responseDataItem.login};
        adaptedResponse.push(todoItem);
    })

    return adaptedResponse;
}