import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import Search from '../components/Search';
import Preloader from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends Component {
  state = {
    movies: [],
    loading: false,
  };

  searchMovie = (movie, type = 'all') => {
    this.setState({loading: true});
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search, loading: false}))
      .catch((err) => {
        console.error(err);
        this.setState({loading: false});
      })
  }

  render() {
    const {movies, loading} = this.state;

    return (
      <main className="container content">
        <Search searchMovie={this.searchMovie} />
        {
          loading
            ? <Preloader />
            : <MoviesList movies={movies} />
        }
      </main>
    )
  }
}
