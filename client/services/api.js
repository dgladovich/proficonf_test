import axios from 'axios';

const fullUrl = '/api/albums';

export const fetchAlbums = () => {
    return axios
        .get(fullUrl)
        .then(response => ({data: response.data}))
        .catch(error => ({error}))
};