import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware, { END } from 'redux-saga'
import {routerReducer} from "react-router-redux";
import rootReducer from './reducers';


export default function configureStore(preloadedState) {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        routerReducer,
        applyMiddleware(sagaMiddleware)
    );
    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return store;
}