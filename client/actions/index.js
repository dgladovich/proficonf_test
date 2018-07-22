import {
    FETCH_ALBUMS_FAIL,
    FETCH_ALBUMS_PAGE,
    FETCH_ALBUMS_SUCCESS, FETCH_PHOTOS_FAIL,
    FETCH_PHOTOS_PAGE,
    FETCH_PHOTOS_SUCCESS
} from "../constants";



function action(type, payload = {}) {
    return {type, ...payload}
}

export const albums = {
    request: () => action(FETCH_ALBUMS_PAGE),
    success: (response) => action(FETCH_ALBUMS_SUCCESS, {response}),
    failure: (error) => action(FETCH_ALBUMS_FAIL, {error}),
}
export const photos = {
    request: () => action(FETCH_PHOTOS_PAGE),
    success: (response) => action(FETCH_PHOTOS_SUCCESS, {response}),
    failure: (error) => action(FETCH_PHOTOS_FAIL, {error}),
}

export const loadAlbumsPage = (page)=> action(FETCH_ALBUMS_PAGE, {page});
export const loadPhotosPage = (page)=> action(FETCH_PHOTOS_PAGE, {page});