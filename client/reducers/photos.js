import {FETCH_PHOTOS_PAGE, FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_FAIL} from '../constants';

let initialState = {
    pageInfo: {},
    items: []
}

export default function albums(state = initialState, action) {
    switch (action.type) {
        case FETCH_PHOTOS_PAGE:
            return state;
        case FETCH_PHOTOS_SUCCESS:
            return state;
        case FETCH_PHOTOS_FAIL:
            return state;
        default:
            return state
    }
}