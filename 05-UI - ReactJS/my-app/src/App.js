import React, { Component } from 'react';
import logo from './logo.svg';
// components
import CreateForm from './components/CreateForm';
import FavoriteMovies from './components/FavoriteMovies';
// styles
import './App.css';
import './movies.css';
import './CreateForm.css';

import { movies } from './movies.json';
console.log(movies);

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies
    };
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleAddMovie(movie) {
    this.setState({
      movies : [...this.state.movies, movie]
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my first React App</h1>
        </header>
        <div className="form-container">
          < CreateForm onAddMovie={this.handleAddMovie} />
        </div>
        <div className="grid-container">
          < FavoriteMovies movies={this.state.movies}/>
        </div>
      </div>
    );
  }
}

export default App;
