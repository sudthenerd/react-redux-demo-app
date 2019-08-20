export const UPDATE_TODO_LIST = 'UPDATE TODO LIST';
export const DELETE_TODO = 'DELETE TODO ITEM';
export const EDIT_TODO = 'EDIT TODO ITEM';

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