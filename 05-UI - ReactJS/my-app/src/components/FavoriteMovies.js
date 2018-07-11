import React, { Component } from "react";


class FavoriteMovies extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(id) {
    debugger
    this.props._handleEdit(id);
  }


  render() {
    const { movies } = this.props;
    return movies.map(movie => {
      return (
        <div className="grid-item">
          <div className="card-container">
            <div className="card">
              <div className="card-body">
                <div className="card-header">
                  <h3> {movie.title} </h3>
                </div>
                <div className="card-sinopsis">
                  <p> {movie.sinopsis} </p>
                </div>
                <div className="card-footer">
                  <p>
                    {movie.category} - {movie.director}
                  </p>
                  <button id="myBtn" className="myButton" onClick={() => this.handleEdit(movie.id)} >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default FavoriteMovies;
