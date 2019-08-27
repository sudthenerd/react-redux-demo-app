import { addContact } from "../actions/ContactAddActions";

export const addContactDetail = (payload) => {
    return (dispatch) => {
        dispatch(addContact(payload))
    }
}