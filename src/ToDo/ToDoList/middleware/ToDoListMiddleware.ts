import axios from 'axios';
// ----------------------------------------------- //
import { fetchToDos, deleteToDo } from "../actions/ToDoListActions";

export function getToDos() {
    return function(dispatch) {
        axios.get('https://api.github.com/users')
        .then(response => {
            const todoList: any = adaptResponse(response.data)
            dispatch(fetchToDos(todoList));
        })
    }
}

export function deleteToDoItem(index) {
    return function(dispatch, getState) {
        const todos: any = [...getState().toDo.list.todos];
        todos.splice(index, 1);
        dispatch(deleteToDo(todos))
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