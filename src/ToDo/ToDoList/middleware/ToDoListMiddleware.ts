import axios from 'axios';
// ----------------------------------------------- //
import { updateToDoList, deleteToDo, editToDo } from "../actions/ToDoListActions";
import { showToaster, showLoader, hideLoader } from '../../../Core';

export const getToDos = () => {
    return function(dispatch) {
        dispatch(showLoader())
        axios.get('https://api.github.com/users')
        .then(response => {
            const toDoList: any = adaptResponse(response.data)
            dispatch(updateToDoList(toDoList));
            dispatch(hideLoader())
        })
    }
}

export const deleteToDoItem = (index: number) => {
    return function(dispatch) {
        dispatch(deleteToDo(index))
        dispatch(showToaster('To Do Item Deleted Successfully')); 
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