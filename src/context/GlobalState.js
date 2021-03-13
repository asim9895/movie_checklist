import { createContext, useReducer, useEffect } from 'react';
import { appReducer } from './appReducer';

const initialState = {
  watchlist: localStorage.getItem('watchList')
    ? JSON.parse(localStorage.getItem('watchList'))
    : [],
  watched: localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched'))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(state.watchlist));
    localStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatchList = (movie) => {
    dispatch({
      type: 'ADD_MOVIE_TO_WATCHLIST',
      payload: movie,
    });
  };

  const removeMovieToWatchList = (id) => {
    dispatch({
      type: 'REMOVE_MOVIE_TO_WATCHLIST',
      payload: id,
    });
  };

  const removeMovieToWatched = (id) => {
    dispatch({
      type: 'REMOVE_MOVIE_TO_WATCHED',
      payload: id,
    });
  };

  const addMovieToWatched = (movie) => {
    dispatch({
      type: 'ADD_MOVIE_TO_WATCHED',
      payload: movie,
    });
  };

  const moveToWatchList = (movie) => {
    dispatch({
      type: 'MOVE_TO_WATCHLIST',
      payload: movie,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList,
        removeMovieToWatchList,
        addMovieToWatched,
        moveToWatchList,
        removeMovieToWatched,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
