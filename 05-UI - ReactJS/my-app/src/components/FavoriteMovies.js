import React, { Component } from "react";


class FavoriteMovies extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit = (id) => {
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
                    {movie.director}
                  </p>
                  <div className="grid-container">
                  <button id="myBtn" className="grid-item myButton" onClick={() => this.handleEdit(movie.id)} >
                    Edit
                  </button>
                  <button className="grid-item myButtonR">
                    Delete
                  </button>
                  </div>
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
