import React, { Component } from "react";

class FavoriteMovies extends Component {
  render() {
    const { movies } = this.props;
    return movies.map((movie, i) => {
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
                    {movie.category} - {movie.director}{" "}
                  </p>
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
