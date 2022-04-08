import Notiflix from 'notiflix';



const axios = require('axios');
const searchButton = document.querySelector('button');
let inputValue = document.querySelector('input').value;
const gallery = document.querySelector(".gallery");
const userList = document.querySelector(".user-list");
const apiKey = '26533268-30a2ee0a159414a5d568a668e';

searchButton.addEventListener('click', getUser());

// searchButton.addEventListener("click", async () => {
//   try {
//     const elements = await getUser();
//     //renderUserListItems(elements);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

console.log(inputValue);
async function getUser() {
  try {
    const response = await axios.get(`https://pixabay.com/api/`,{
    params: {
      key: apiKey,
      q: `horse`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true
    }
  })
  let elements = response.data.hits;
    //console.log("This is users" + elements);  
  const arrayOfPromises = elements.map(function(elem){
    return `${elem.tags}`;
    
  })
  console.log("dlugosc tablicy " + elements.length)
  let totalFound = response.data.total;
  // console.log(arrayOfPromises);
  
     console.log(response);
     console.log(response.data.total);
  //   console.log(response.data.hits[0]);
  //   console.log(response.data.hits[0].id);
  //   console.log(response.data.hits[0].webformatURL);
  //   console.log(response.data.hits[0].largeImageURL);
  //   console.log(response.data.hits[0].tags);
  //   console.log(response.data.hits[0].likes);
  //   console.log(response.data.hits[0].views);
  //   console.log(response.data.hits[0].comments);
  //   console.log(response.data.hits[0].downloads);

if (elements.length > 0)
       {Notiflix.Notify.success(`Found ${totalFound} matches`);
         
        const markup = elements
           .map(
           
          //  (elem) => `<ul class="item">
          //      <p><b>webformatURL</b>: ${elem.webformatURL}</p>
          //      <p><b>largeImageUrl</b>: ${elem.largeImageUrl}</p>
          //      <p><b>tags</b>: ${elem.tags}</p>
          //      <p><b>likes</b>: ${elem.likes}</p>
          //      <p><b>views</b>: ${elem.views}</p>
          //      <p><b>comments</b>: ${elem.comments}</p>
          //      <p><b>downloads</b>: ${elem.downloads}</p>
          //    </ul>`
          //  )
           (elem) => `<div class="photo-card">
           <img src="${elem.webformatURL}" alt="${elem.tags}" loading="lazy" />
           <div class="info">
             <p class="info-item">
               <b>Likes</b>: ${elem.likes} 
             </p>
             <p class="info-item">
               <b>Views</b>: ${elem.views}
             </p>
             <p class="info-item">
               <b>Comments</b>: ${elem.comments}
             </p>
             <p class="info-item">
               <b>Downloads</b>: ${elem.downloads}
             </p>
           </div>
         </div>`
           )
           .join("");
         gallery.innerHTML = markup;}
    else {
      console.log("Nic nie znaleziono");
      Notiflix.Notify.failure('"Sorry, there are no images matching your search query. Please try again."');
    }
     
 
    
  } catch (error) {
    console.error(error);
    
  }
  
}




//getUser();

// function renderUserListItems(elements) {
//   const markup = elements
//     .map(
    
//     (elem) => `<ul class="item">
//         <p><b>Name</b>: ${elem.id}</p>
//         <p><b>Email</b>: ${elem.tags}</p>
//         <p><b>Company</b>: ${elem.likes}</p>
//       </ul>`
//     )
//     .join("");
//   userList.innerHTML = markup;
// }

