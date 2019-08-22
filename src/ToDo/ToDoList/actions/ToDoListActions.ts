export const UPDATE_TODO_LIST = 'UPDATE_TODO_LIST';
export const UPDATE_TODO_LIST_PENDING = 'UPDATE_TODO_LIST_PENDING';
export const UPDATE_TODO_LIST_FULFILLED = 'UPDATE_TODO_LIST_FULFILLED';
export const UPDATE_TODO_LIST_REJECTED = 'UPDATE_TODO_LIST_REJECTED';
export const DELETE_TODO = 'DELETE_TODO_ITEM';
export const EDIT_TODO = 'EDIT_TODO_ITEM';

export const updateToDoList = (payload: any) => {
    return {
        type: UPDATE_TODO_LIST,
        payload: payload
    }
}

export const deleteToDo = (index: number) => {
    return {
        type: DELETE_TODO,
        index: index
    }
}

export const editToDo = (payload: any) => {
    return {
        type: EDIT_TODO,
        payload: payload
    }
}