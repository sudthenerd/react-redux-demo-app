import { SHOW_TOASTER, HIDE_TOASTER } from "../actions/ToasterActions";

const toasterReducer = (state: any = { message: '' }, action: any) => {
    switch(action.type) {
        case SHOW_TOASTER:
            console.log('SHOW_TOASTER', action.payload);
            return { ...state, ...action.payload };
        case HIDE_TOASTER:
            console.log('HIDE_TOASTER', action.payload);
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default toasterReducer;