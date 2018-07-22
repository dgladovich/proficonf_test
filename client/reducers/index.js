import {combineReducers} from 'redux';
import albumsReducer from './albums';
import photosReducer from './photos';


const reducers = combineReducers({albumsReducer, photosReducer});

export default reducers;