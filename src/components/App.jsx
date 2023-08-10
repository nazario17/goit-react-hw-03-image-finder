import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
// import { fetchImages } from 'services/api';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: '',
    currentPage: 1,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const APIKEY = '38573662-3e20df9f693fcf1720c6655b4';
    const perpage = 12;
    if (
      prevState.query !== this.state.query ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.setState({ isLoading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.currentPage}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=${perpage}`
      )
        .then(response => response.json())
        .then(image => {
          if (!image.total) {
            return alert('Нічого не знайдено');
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...image.hits],
          }));
        })
        .catch(error => error)
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }
  handleSearchSubmit = query => {
    if (this.state.query === query || !query.length) {
      return alert(`Ви вже увели ${query}`);
    }
    this.setState({ query: query.toLowerCase(), images: [], currentPage: 1 });
  };

  handleItemClick = largeImageURL => {
    this.setState({ showModal: true, largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };

  // handleModalOverlayClick = event => {
  //   if (event.target === event.currentTarget) {
  //     this.handleCloseModal();
  //   }
  // };

  // handleKeyDown = event => {
  //   if (event.code === 'Escape') {
  //     this.handleCloseModal();
  //   }
  // };

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
            // onOverlayClick={this.handleModalOverlayClick}
            // onKeyDown={this.handleKeyDown}
          />
        )}
      </div>
    );
  }
}

export default App;
