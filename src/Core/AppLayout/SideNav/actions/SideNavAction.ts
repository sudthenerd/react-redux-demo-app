import { SHOW_SIDE_MENU_ITEMS } from '../SideNavConstants';

export const showSideMenuItems = (payload: any) => {
    return {
        type: SHOW_SIDE_MENU_ITEMS,
        payload: payload
    }
}