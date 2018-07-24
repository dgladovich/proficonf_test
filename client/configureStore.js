import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from './reducers';
import { routerMiddleware } from 'react-router-redux'

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        //applyMiddleware(routerMiddleware),
        applyMiddleware(sagaMiddleware)
    );
    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return store;
}