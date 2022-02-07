import React, { useState } from 'react';
import MoviesList from '../components/MoviesList';
import Search from '../components/Search';
import Preloader from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Main () {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);


  const searchMovie = (movie, type = 'all') => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      })
  }

    return (
      <main className="container content">
        <Search searchMovie={searchMovie} />
        {
          loading
            ? <Preloader />
            : <MoviesList movies={movies} />
        }
      </main>
    )
}
