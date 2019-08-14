import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// ---------------------------------------------- //
import rootReducer from './rootReducer';

const store: any = createStore(rootReducer, applyMiddleware(thunk));
console.log(store.getState());

export default store;