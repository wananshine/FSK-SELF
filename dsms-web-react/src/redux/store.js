import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import logger from 'redux-logger';
import promise from 'redux-promise'
import thunk from "redux-thunk";
// import { createLogger } from 'redux-logger';
// const logger = createLogger();
// const initialState = window.INITIAL_STATE || {};

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, promise, logger)
);

export default store;