import {take, put, call, fork, select, all} from 'redux-saga/effects';
import {FETCH_ALBUMS_PAGE, FETCH_PHOTOS_PAGE} from "../constants";
import {albums, photos} from '../actions';
import {getAlbums} from "../selectors";
import {api} from '../services';


/***************************** Subroutines ************************************/

// reusable fetch Subroutine
// entity :  user | repo | starred | stargazers
// apiFn  : api.fetchUser | api.fetchRepo | ...
// id     : login | fullName
// url    : next page url. If not provided will use pass id to apiFn
function* fetchEntity(entity, apiFn, page, url) {
    const {data, error} = yield call(apiFn, page);
    if (data) {
        yield put(entity.success(data))
    }
    else {
        yield put(entity.failure(error))
    }
}

const fetchAlbums = fetchEntity.bind(null, albums, api.fetchAlbums);
const fetchPhotos = fetchEntity.bind(null, photos, api.fethcPhotos);


function* watchLoadAlbumsPage() {
    while (true) {
        const action = yield take(FETCH_ALBUMS_PAGE);
        const {pageNumber} = action;

        yield fork(fetchAlbums, pageNumber);
    }
}

function* watchLoadPhotosPage() {
    while (true) {
        yield take(FETCH_PHOTOS_PAGE);

        yield fork(fetchPhotos)
    }
}

export default function* root() {
    yield all([
        fork(watchLoadAlbumsPage),
        fork(watchLoadPhotosPage),
    ])
}