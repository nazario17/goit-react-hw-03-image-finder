import axios from 'axios';

const API_KEY = '38573662-3e20df9f693fcf1720c6655b4';
const BASE_URL = 'https://pixabay.com/api/';

const fetchImages = (query, page = 1, perPage = 12) => {
  return axios
    .get(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then(response => response.data.hits)
    .catch(error => {
      console.error('Error fetching images:', error);
      return [];
    });
};

export { fetchImages };
