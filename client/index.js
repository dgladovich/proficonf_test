import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import Root from './root';
import rootSaga from './sagas';
import './index.css';


const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root'));
registerServiceWorker();
