import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.module.css';

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onOverlayClick: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }



  render() {
    const { onOverlayClick, largeImageURL } = this.props;
    return (
      <div className="overlay" onClick={onOverlayClick}>
        <div className="modal">
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
