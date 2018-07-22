import axios from 'axios';

const fullUrl = '/api/albums';

export const fetchAlbums = () => {
    return axios
        .get(fullUrl)
        .then(response => ({response}))
        .catch(error => ({error: error.message || 'Something bad happened'}))
};