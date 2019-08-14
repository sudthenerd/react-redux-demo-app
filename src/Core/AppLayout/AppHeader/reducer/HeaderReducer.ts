import { SHOW_SIDE_MENU_ITEMS } from "../actionConstant";

function headerReducer(state: any = {sideMenuItems: []}, action: any) {
    switch (action.type) {
        case SHOW_SIDE_MENU_ITEMS:
            return { ...state, sideMenuItems: action.payload };
        default:
            return state;
    }
}

export default headerReducer;