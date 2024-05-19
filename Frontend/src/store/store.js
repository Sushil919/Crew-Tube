import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
const store = createStore(rootReducer); // Create the Redux store

export default store;
