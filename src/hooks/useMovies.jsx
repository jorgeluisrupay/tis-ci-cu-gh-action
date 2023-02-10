import {useEffect, useState} from 'react';
import movieDB from '../api/mobieDB';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get('/now_playing');
    const popularPromise = movieDB.get('/popular');
    const topRatedPromise = movieDB.get('/top_rated');
    const upComingPromise = movieDB.get('/upcoming');

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upComingPromise,
    ]);

    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upComing: response[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
