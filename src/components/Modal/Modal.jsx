import React from 'react';
import css from './Modal.module.css'

const Modal = ({ largeImageURL, onClose }) => {
  return (
      <div className={css.overlay} onClick={onClose}>
          <div className={css.modal}>
        <img src={largeImageURL} alt="modal" />
      </div>
    </div>
  );
};

export default Modal;
