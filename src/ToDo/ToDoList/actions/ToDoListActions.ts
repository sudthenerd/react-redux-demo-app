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
            dispatch(fetchToDos(response.data))
        })
    }
}