//import React
import React, { Component } from 'react';
//Library
import idGenerator from '../lib/idGenerator';

class CreateForm extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      director: '',
      sinopsis: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddMovie(this.state);
    this.setState({
      id: idGenerator(),
      title: '',
      director: '',
      sinopsis: ''
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  }
  

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3> Add a new movie </h3>
        </div>
        <form onSubmit={this.handleSubmit} className="card-body">
          <div>
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Title"
              />
          </div>
          <div>
            <input
              type="text"
              name="director"
              className="form-control"
              value={this.state.director}
              onChange={this.handleInputChange}
              placeholder="Director"
              />
          </div>
          <div>
            <textarea
              type="text"
              name="sinopsis"
              className="form-control"
              value={this.state.sinopsis}
              onChange={this.handleInputChange}
              placeholder="Sinopsis"
              />
          </div>
          <div className="card-footer">
            <button type="submit" className="myButton">
              Save
            </button>
          </div>
        </form>
      </div>
    )
  }

}

export default CreateForm;