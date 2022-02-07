import React, { useState, useEffect, useRef } from 'react';

export default function Search (props) {

  const {
    searchMovie = Function.prototype,
  } = props;

  const [search, setSearch] = useState('matrix');
  const [type, setType] = useState('all');

  const searchInput = useRef(null);

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      searchMovie(search, type);
    }
  }

  const handleFilter = (e) => {
  setType(e.target.dataset.type);
  searchMovie(search, e.target.dataset.type);
}

  useEffect (() => {
    searchMovie(search, type);
    searchInput.current.focus();
  }, []);

  return (
    <div className='row'>
      <div className='col s12'>
        <div className='input-field'>
          <input
            type='search'
            placeholder='Movie you are looking for'
            className='validate'
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={handleKey}
            ref={searchInput}
          />
          <button
            className='btn searchBtn'
            onClick={() => searchMovie(search, type)}
          >
            Search
          </button>
        </div>
        <div className='radioBtn'>
          <label>
            <input
              className='radio'
              name='movieType'
              type='radio'
              data-type='all'
              checked={type === 'all'}
              onChange={handleFilter}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className='radio'
              name='movieType'
              type='radio'
              data-type='movie'
              checked={type === 'movie'}
              onChange={handleFilter}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className='radio'
              name='movieType'
              type='radio'
              data-type='series'
              checked={type === 'series'}
              onChange={handleFilter}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    </div>
  );
}
