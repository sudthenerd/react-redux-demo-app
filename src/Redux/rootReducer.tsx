import { combineReducers } from 'redux';
// -------------------------------------------- //
import { headerReducer } from '../Core/AppLayout/AppHeader';
import { sideNavReducer } from '../Core/AppLayout/SideNav';
import { toasterReducer } from '../Core';

import { toDoReducer } from '../ToDo';
import { loaderReducer } from '../Core';

export default combineReducers(
    {
        headerReducer,
        sideNavReducer,
        toDo: toDoReducer,
        toaster: toasterReducer,
        loader: loaderReducer
    }
);