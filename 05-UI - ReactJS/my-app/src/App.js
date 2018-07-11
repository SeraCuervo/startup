import React, { Component } from 'react';
import logo from './logo.svg';

// components
import CreateForm from './components/CreateForm';
import FavoriteMovies from './components/FavoriteMovies';
import idGenerate from './lib/idGenerator';
import EditMovie from './components/EditMovie';

// styles
import './App.css';
import './movies.css';
import './CreateForm.css';

import { movies } from './movies.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies,
      id: null,
      showModal: false
    };
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this._handleEditing = this._handleEditing.bind(this);
  }

  handleAddMovie(movie) {
    this.setState({
      movies : [...this.state.movies, movie]
    })
  }
  _handleEditing(idMovie) {
    this.setState({
      id: idMovie,
      showModal: true
    });

  }
  
  render() {
    console.log(idGenerate());
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
          {this.state.showModal &&  < EditMovie ModalShow={this.state.showModal}/>}
          < FavoriteMovies movies={this.state.movies} _handleEdit={this._handleEditing} />
        </div>
      </div>
    );
  }
}

export default App;
