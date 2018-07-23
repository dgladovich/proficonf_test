import {FETCH_ALBUMS_PAGE, FETCH_ALBUMS_SUCCESS, FETCH_ALBUMS_FAIL} from '../constants';

let initialState = {
    pageInfo: {
        pageNumber: 1
    },
    items: []
}

export default function albums(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALBUMS_PAGE:
            console.log('start', state, action);
            return state;
        case FETCH_ALBUMS_SUCCESS:
            return Object.assign({}, state, {items: action.items, pageInfo: action.pageInfo});
        case FETCH_ALBUMS_FAIL:
            return state;
        default:
            return state
    }
}