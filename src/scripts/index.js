import app from './app';
import '../styles/index.scss';

const api = "https://api.unsplash.com/photos/random";
const apiKey =
  "?client_id=e3b87f06abb975fa7328d3cdebb73fbdce090e5581320fcbd497303e52ed5f40";
let query = "&query=beerç";
// let limit = "&per_page=100"
const url = api + apiKey + query;
const imagebox = document.querySelector('.image-box');

fetch(url)
  .then(response => response.json())
  .then(data => {


    console.log(data);


    const image = document.createElement('img');

    image.src = data.urls.small;

    imagebox.appendChild(image);

  })
