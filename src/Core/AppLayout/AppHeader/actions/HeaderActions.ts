import { SHOW_SIDE_MENU_ITEMS } from '../actionConstant';

export const showSideMenuItems = (payload: any) => {
    return {
        type: SHOW_SIDE_MENU_ITEMS,
        payload: payload
    }
}