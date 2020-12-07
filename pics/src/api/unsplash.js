import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID -H3AmX7KYgjHi6_CmFYoPN8XU6QOqP0rKh9zWe-zrr4',
  },
});
