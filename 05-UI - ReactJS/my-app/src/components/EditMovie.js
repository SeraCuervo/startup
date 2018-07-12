//import React
import React, {Component} from 'react';
//import Styles
import '../EditMovie.css';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      modal : this.props.ModalShow,
      movies : this.props.movies,
      movie : this.props.movie 
    };
    
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let movie = Object.assign({}, this.state.movie); 
        movie[e.target.name] = e.target.value;
        if (this.props.movie) {
          this.setState({movie});
        }
  }
  handleSubmit() {
    
    this.props.MovieEdit(this.state.movie);
    this.handleClose();
  }
  handleClose() {
    this.setState({
      modal: !this.props.ModalShow
    });
    this.props.ModalView(!this.props.ModalShow);
  }
  render() {
    const StylesModal = this.state.modal ? "visible" : "invisible"
      return (
        <div className={StylesModal}>
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.handleClose}>&times;</span>
              <div className="modal-header">
                <h2>Edit the movie</h2>
              </div>
              <div className="modal-body">
                <div>
                  <input 
                    type="text"
                    name="title"
                    className="form-control"
                    value={this.state.movie.title}
                    onChange={this.handleChange}
                  />
                  <input 
                    type="text"
                    name="sinopsis"
                    className="form-control"
                    value={this.state.movie.sinopsis}
                    onChange={this.handleChange}
                  />
                  <input 
                    type="text"
                    name="director"
                    className="form-control"
                    value={this.state.movie.director}
                    onChange={this.handleChange}
                  />
                  <button className="myButton" onClick={() => {this.handleSubmit()}}>
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default EditMovie;