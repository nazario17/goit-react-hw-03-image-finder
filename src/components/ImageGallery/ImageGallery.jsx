import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css'

const ImageGallery = ({ images, onItemClick }) => {
  return (
      <ul className={css.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          onItemClick={() => onItemClick(image.largeImageURL)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
