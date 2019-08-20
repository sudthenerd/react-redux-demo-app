import axios from 'axios';
// ----------------------------------------------- //
import { updateToDoList, deleteToDo, editToDo } from "../actions/ToDoListActions";

export const getToDos = () => {
    return function(dispatch) {
        axios.get('https://api.github.com/users')
        .then(response => {
            const toDoList: any = adaptResponse(response.data)
            dispatch(updateToDoList(toDoList));
        })
    }
}

export const deleteToDoItem = (index: number) => {
    return function(dispatch) {
        dispatch(deleteToDo(index))
    }
}

export const editToDoItem = (data: any) => {
    return (dispatch) => {
        dispatch(editToDo(data));
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