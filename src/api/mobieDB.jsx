import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: "ff1740f8a1d9c071719d351159bd4399",
        language: 'es-ES'
    }
});

export const searchMovieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search',
    params: {
        api_key: "ff1740f8a1d9c071719d351159bd4399",
        language: 'es-ES'
    }
});

export default movieDB;