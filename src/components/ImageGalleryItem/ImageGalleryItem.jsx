import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, onItemClick }) => {
  return (
    <li className={css.gallery} onClick={onItemClick}>
      <img className={css.img} src={src} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
