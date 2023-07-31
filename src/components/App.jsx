import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import { fetchImages } from 'services/api';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: '',
    currentPage: 1,
    showModal: false,
    largeImageURL: '',
  };

  handleSearchSubmit = query => {
    this.setState(
      { images: [], isLoading: true, query, currentPage: 1 },
      () => {
        this.fetchImages();
      }
    );
  };

  fetchImages = () => {
    const { query, currentPage } = this.state;

    fetchImages(query, currentPage)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          isLoading: false,
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        this.setState({ isLoading: false });
      });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  handleItemClick = largeImageURL => {
    this.setState({ showModal: true, largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {isLoading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} onItemClick={this.handleItemClick} />
        )}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore}>Load more</Button>
        )}
        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

export default App;
