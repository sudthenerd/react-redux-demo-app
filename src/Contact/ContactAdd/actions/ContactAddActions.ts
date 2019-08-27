export const ADD_CONTACT: string = 'ADD_CONTACT';

export const addContact = (payload: any) => ({
    type: ADD_CONTACT,
    payload: payload
})