import React, { Component } from 'react';
import logo from './logo.svg';
// components
import './App.css';
import './movies.css';
import { movies } from './movies.json';
console.log(movies);

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies
    }
  }
  
  render() {
    const movies = this.state.movies.map((movie, i) => {
      return (
        <div className="grid-item">
          <div className="card-container">
            <div className="card">
              <div className="card-body">
                <div className="card-header">
                  <h3> { movie.title } </h3>
                </div>
                <div className="card-sinopsis">
                  <p> { movie.sinopsis } </p>
                </div>
                <div className="card-footer">
                  <p>{movie.category} - {movie.director} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
      
    
    return (
      <div className="App">
        <nav className="navbar">
          <a href="#">
            Movies
          </a>
        </nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my first React App</h1>
        </header>
        <div className="grid-container">
          {movies}
        </div>
      </div>
    );
  }
}

export default App;
