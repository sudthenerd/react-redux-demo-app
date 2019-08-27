import { ADD_CONTACT } from "../actions/ContactAddActions";

const contactAddReducer = (state: any = {}, action: any) => {
    switch(action.type) {
        case ADD_CONTACT:
            return { ...state, contactDetail: action.payload }
        default:
            return state;
    }
}

export default contactAddReducer;