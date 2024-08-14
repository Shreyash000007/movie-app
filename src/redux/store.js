// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Correct import for redux-thunk
import movieReducer from './movieReducer'; // Ensure this path is correct

const store = createStore(movieReducer, applyMiddleware(thunk));

export default store;
