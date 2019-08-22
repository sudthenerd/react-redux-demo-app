import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'
// ---------------------------------------------- //
import rootReducer from './rootReducer';

const store: any = createStore(rootReducer, applyMiddleware(thunk, promise));
console.log(store.getState());

export default store;