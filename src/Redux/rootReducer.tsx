import { combineReducers } from 'redux';
// -------------------------------------------- //
import { headerReducer } from '../Core/AppLayout/AppHeader';
import { sideNavReducer } from '../Core/AppLayout/SideNav';

export default combineReducers({headerReducer, sideNavReducer });