import app from './app';
import '../styles/index.scss';

const apiKey =
  "?client_id=e3b87f06abb975fa7328d3cdebb73fbdce090e5581320fcbd497303e52ed5f40";
const api = "https://api.unsplash.com/photos/random";
let query = "&query=water";
const url = api + apiKey + query;

