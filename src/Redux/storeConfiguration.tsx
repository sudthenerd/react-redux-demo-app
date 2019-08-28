import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension';
// ---------------------------------------------- //
import rootReducer from './rootReducer';

const store: any = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk, promise)
    )
);
console.log(store.getState());

export default store;