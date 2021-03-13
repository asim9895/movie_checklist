import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'> My WatchList</h1>

          {watchlist.length > 0 && (
            <span className='count-pill'>
              {watchlist && watchlist.length}&nbsp;
              {watchlist.length === 1 ? 'Movie' : 'Movies'}
            </span>
          )}
        </div>

        {watchlist.length > 0 ? (
          <div className='movie-grid'>
            {watchlist.map((movie) => {
              return (
                <MovieCard movie={movie} type='watchlist' key={movie.id} />
              );
            })}
          </div>
        ) : (
          <h2 className='no-movies'>No Movies Added</h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;
