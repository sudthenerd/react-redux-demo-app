export const ADD_TODO: string = 'ADD TODO';

export const addToDo: any = (payload: any) => ({
    type: ADD_TODO,
    payload: payload
})
