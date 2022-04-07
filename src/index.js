const axios = require('axios');
const searchButton = document.querySelector('button');
const userList = document.querySelector(".user-list");
const apiKey = '26533268-30a2ee0a159414a5d568a668e';

searchButton.addEventListener('click', getUser());
async function getUser() {
  try {
    const response = await axios.get(`https://pixabay.com/api/`,{
    params: {
      key: apiKey,
      q: 'yellow flowers',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true
    }
  })
    console.log(response);
    console.log(response.data);
    console.log(response.data.hits[0]);
    console.log(response.data.hits[0].id);
    console.log(response.data.hits[0].webformatURL);
    console.log(response.data.hits[0].largeImageURL);
    console.log(response.data.hits[0].tags);
    console.log(response.data.hits[0].likes);
    console.log(response.data.hits[0].views);
    console.log(response.data.hits[0].comments);
    console.log(response.data.hits[0].downloads);
  } catch (error) {
    console.error(error);
  }
}

//getUser();

