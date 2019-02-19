import app from './app';
import '../styles/index.scss';

const api = "https://api.unsplash.com/photos/random";
const apiKey =
  "?client_id=e3b87f06abb975fa7328d3cdebb73fbdce090e5581320fcbd497303e52ed5f40";
let query = "&query=beer";
// let limit = "&per_page=100"
const url = api + apiKey + query;
const imagebox = document.querySelector('.image-box');

fetch(url)
  .then(response => response.json())
  .then(data => {


    console.log(data);
    // const images = data.results.map(item => item.tags).map(item => item)
    // const imagesUrl = data.results.map(item => item.urls)

    // // const imagesTag = images.map(tag => {

    // //   console.log(tag[0].);
    // //   tag.title.includes('beer')
    // // })

    const image = document.createElement('img');

    // image.src = data.results[0].urls.small;
    image.src = data.urls.small;
    // console.log(data.results[0].tags);
    // if (data.results.tags )
    imagebox.appendChild(image);


    // console.log(images);








    // const images = data.results.map(item => {
    //   const taggar = item.tags.filter(tag => tag.title.includes('beer'))
    // // const taggar = item.tags.filter(tag => {
    // //     const tagName = tag.title;
    // //     if (tagName.includes('beer')) {
    // //       console.log('hej');
    // //     }
    // //   });

    //   // const taggar = item.tag
    //   // console.log(taggar);

    //   // return taggar;
    //   })
    //   console.log(images);
    //   const t = images.item.tags.filter(tag => tag.title.includes('beer'))

    //   console.log(t);

    //   const taggar = item.tags.map(tag => {
    //     if (tag.title = "beer"){
    //       let imageUrls = item.urls.small;
    //       // console.log(imageUrls);

    //       return imageUrls;
    //     //  console.log(data.results[0].tags);
    //      // if (data.results.tags )
    //   }
    // })

    // console.log(imageUrls);
    // return taggar;
  })
  // console.log(data);



// const beer = () => {

// }


// .then(data => {
//       const images = data.results.map(item => {
//         let imageUrls = item.urls.small;
//         // console.log(item);
//         item.map(tag => {
//           if (tag.title = "beer") {
//             //  console.log(data.results[0].tags);
//             // if (data.results.tags )
//           }
//         })

//         return imageUrls;
//         //  let desc = item.description.toString()
//         //  for(let i = 0; i < item.length; i++) {
//         //  console.log(item);
//         //  }
//         //  console.log(desc)
//         //  let beer ="beer"
//         // desc.includes(beer) ? console.log(desc) : null
//       })
//       // console.log(data);
