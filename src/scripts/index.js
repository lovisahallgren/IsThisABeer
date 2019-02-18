import app from './app';
import '../styles/index.scss';

const api = "https://api.unsplash.com/search/photos/";
const apiKey =
  "?client_id=e3b87f06abb975fa7328d3cdebb73fbdce090e5581320fcbd497303e52ed5f40";
let query = "&query=beer";
let limit = "&per_page=100"
const url = api + apiKey + query + limit;

fetch(url)
  .then(response => response.json())
  .then(data => {
   data.results.map(item => {
     let desc = item.description.toString()
    //  console.log(desc)
     let beer ="beer"
    desc.includes(beer) ? console.log(desc) : null
   })
    })

