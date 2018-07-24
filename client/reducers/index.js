import {combineReducers} from 'redux';
import {routerReducer} from "react-router-redux";
import albumsReducer from './albums';
import photosReducer from './photos';


const reducers = combineReducers({albumsReducer, photosReducer, routerReducer});

export default reducers;