import { useEffect, useState } from "react";
import movieDB from "../api/mobieDB";

export const useMoviesDetail = (movieId) => {

    const [state, setState] = useState({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async() => {
        const movieDetailsPromise = movieDB.get(`/${movieId}`)
        const castDetailsPromise = movieDB.get(`/${movieId}/credits`)
        const [movieDetailResponse,castPromiseResponse] = await Promise.all([movieDetailsPromise,castDetailsPromise])
        setState({
            isLoading: false,
            movieFull : movieDetailResponse.data,
            cast: castPromiseResponse.data.cast
        })
    }
    useEffect(() => {
        getMovieDetails();
        // eslint-disable-next-line
    },[movieId])
    return {
        ...state
    }

}