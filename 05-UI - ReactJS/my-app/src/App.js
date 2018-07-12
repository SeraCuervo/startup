//import React
import React, { Component } from 'react';
import logo from './logo.svg';

// components
import CreateForm from './components/CreateForm';
import FavoriteMovies from './components/FavoriteMovies';
import EditMovie from './components/EditMovie';

// styles
import './App.css';
import './movies.css';
import './CreateForm.css';

//import Json of Movies
import { movies } from './movies.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies,
      id: null,
      showModal: false,
      movie : null
    };
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this._handleEditing = this._handleEditing.bind(this);
    this.ModalView = this.ModalView.bind(this);
    this.MovieEdit = this.MovieEdit.bind(this);
    this.RemoveMovie = this.RemoveMovie.bind(this);

  }

  handleAddMovie(movie) {
    this.setState({
      movies : [...this.state.movies, movie]
    })
  }
  _handleEditing(idMovie) {
    let data
    this.state.movies.forEach(movie => {
      if (movie.id === idMovie) {
        data = movie;
      }
    });
    
    this.setState({
      id: idMovie,
      showModal: true,
      movie: data
    });
  }
  ModalView(boolean) {
    this.setState({
      showModal: boolean
    });
  }
  MovieEdit(movie) {
    let dataMovies = this.state.movies;
    dataMovies.forEach((data, i) => {
      if (data.id === movie.id) {
        dataMovies[i] = movie
      }
    })
    this.setState({
      movies : dataMovies
    }) 
  }

  RemoveMovie(idMovie) {
    let auxArray = this.state.movies
    auxArray.forEach((movie, i) => {
      if (movie.id === idMovie) {
        auxArray.splice(i, 1);
      }
    });
    this.setState({
      movies : auxArray
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
          {this.state.showModal &&
            <EditMovie 
              movies={this.state.movies} 
              ModalShow={this.state.showModal}
              ModalView={this.ModalView}
              MovieEdit={this.MovieEdit}
              movie={this.state.movie}
            />
          }
          <FavoriteMovies 
            movies={this.state.movies} 
            _handleEdit={this._handleEditing}
            remover={this.RemoveMovie}
          />
        </div>
      </div>
    );
  }
}

export default App;
