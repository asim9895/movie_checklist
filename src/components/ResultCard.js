import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchList,
    watchlist,
    watched,
    addMovieToWatched,
  } = useContext(GlobalContext);

  const item_in_watchlist =
    watchlist && watchlist.find((item) => item.id === movie.id);

  const item_in_watched =
    watched && watched.find((item) => item.id === movie.id);

  const disableWatchList = item_in_watchlist ? true : false;

  const disableWatched = item_in_watched ? true : false;
  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className='filler-poster'></div>
        )}
      </div>

      <div className='info'>
        <div className='header'>
          <h3 className='title'>{movie.title}</h3>
          <h4 className='release-date'>
            {movie.release_date ? movie.release_date.substring(0, 4) : '-'}
          </h4>
        </div>

        <div className='controls'>
          <button
            className='btn'
            onClick={() => addMovieToWatchList(movie)}
            disabled={disableWatchList}>
            {disableWatchList ? 'Already Added' : ' Add To WatchList'}
          </button>

          <button
            className='btn'
            onClick={() => addMovieToWatched(movie)}
            disabled={disableWatched}>
            {disableWatched ? 'Already Added' : ' Add To Watched'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
