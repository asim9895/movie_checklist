import React, { useState } from 'react';
import ResultCard from './ResultCard';

const Add = () => {
  const [query, setquery] = useState('');
  const [results, setresults] = useState([]);

  const onChangeQuery = (e) => {
    e.preventDefault();

    setquery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ea75196d30d2e902d68ba181fecb09db&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!data.errors) {
          setresults(data.results);
        } else {
          setresults([]);
        }
      });
  };

  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input
              type='text'
              placeholder='Search a movie'
              value={query}
              onChange={onChangeQuery}
            />
          </div>

          {results.length > 0 ? (
            <ul className='results'>
              {results.map((result) => {
                return (
                  <li key={result.id}>
                    <ResultCard movie={result} />
                    <hr />
                  </li>
                );
              })}
            </ul>
          ) : (
            <h1>Search Movies To Add In A List</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
