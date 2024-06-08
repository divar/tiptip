import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.jikan.moe/',
  timeout: 9000, // Timeout if necessary
  headers: {
    'Content-Type': 'application/json',
  },
});
