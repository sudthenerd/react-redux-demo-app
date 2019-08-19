import { FETCH_TODOS, DELETE_TODO, EDIT_TODO } from '../ActionConstants';

export const fetchToDos = (payload: any) => {
    return {
        type: FETCH_TODOS,
        payload: payload
    }
}

export const deleteToDo = (payload: any) => {
    return {
        type: DELETE_TODO,
        payload: payload
    }
}

export const editToDo = (payload: any) => {
    return {
        type: EDIT_TODO,
        payload: payload
    }
}