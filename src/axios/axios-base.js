import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://articles-fcd33-default-rtdb.firebaseio.com/'
});

export default instance;