import React, {Component} from 'react';
import '../EditMovie.css';

class EditMovie extends Component {
  constructor(props) {
    super(props);
  }

  handleClose() {
    this.props.ModalShow = false;
  }

  render() {
    const { ModalShow } = this.props;
    if (ModalShow) {
      return (
        <div>
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.handleClose}>&times;</span>
              <p>Some text in the Modal..</p>
            </div>
          </div>
        </div>
      )
    };
  }
}

export default EditMovie;