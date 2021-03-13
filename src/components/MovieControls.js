import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieToWatchList,
    addMovieToWatched,
    moveToWatchList,
    removeMovieToWatched,
  } = useContext(GlobalContext);
  return (
    <div className='inner-card-controls'>
      {type === 'watchlist' && (
        <div>
          <button className='ctrl-btn' onClick={() => addMovieToWatched(movie)}>
            <i className='fas fa-eye'></i>
          </button>

          <button
            className='ctrl-btn'
            onClick={() => removeMovieToWatchList(movie.id)}>
            <i className='fas fa-times'></i>
          </button>
        </div>
      )}

      {type === 'watched' && (
        <div>
          <button className='ctrl-btn' onClick={() => moveToWatchList(movie)}>
            <i className='fas fa-eye-slash'></i>
          </button>

          <button
            className='ctrl-btn'
            onClick={() => removeMovieToWatched(movie.id)}>
            <i className='fas fa-times'></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieControls;
