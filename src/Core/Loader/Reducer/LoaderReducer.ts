import { SHOW_LOADER, HIDE_LOADER } from "../actions/LoaderActions";

const loaderReducer = (state: any = { loaderVisibility: false}, action: any ) => {
    switch(action.type) {
        case SHOW_LOADER:
            return { ...state, loaderVisibility: action.loaderVisibility }
        case HIDE_LOADER:
            return { ...state, loaderVisibility: action.loaderVisibility }
        default:
            return state;
    }
}

export default loaderReducer;