import axios from 'axios';
// ----------------------------------------------- //
import { FETCH_TODOS } from '../ActionConstants';

export const fetchToDos = (payload: any) => {
    return {
        type: FETCH_TODOS,
        payload: payload
    }
}

export function getToDos() {
    return function(dispatch) {
        axios.get('https://api.github.com/users')
        .then(response => {
            const todoList: any = adaptResponse(response.data)
            dispatch(fetchToDos(todoList));
        })
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