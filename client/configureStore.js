import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware, { END } from 'redux-saga'

import rootReducer from './reducers';


export default function configureStore(preloadedState) {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    );
    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return store;
}