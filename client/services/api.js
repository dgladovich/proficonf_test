import axios from 'axios';


export const fetchAlbums = (page) => {
    let url = `/api/albums`;
    if(page !== 1){
        url = url + `?page=${page}`
    }
    return axios
        .get(url)
        .then(response => ({data: response.data}))
        .catch(error => ({error}))
};