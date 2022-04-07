const axios = require('axios');


//Read
axios
.get("https://jsonplaceholder.typicode.com/posts?_sort=id&-order=desc")
.then((posts) =>{
  console.log(posts);
})
.catch((error) => console.log(error));

//Create
axios
.post("https://jsonplaceholder.typicode.com/posts", {
  author: "Mango",
  body: "CRUD is awesome",
})
.then((post) => console.log(post))
.catch((error) => console.log(error));

//Update
const postToUpdate = {
  id: 1,
  body: "CRUD is really awesome",
};

axios
  .patch(
    `https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`
  )
  .then((post) => console.log(post))
  .catch((error) => console.log("ERROR" + error));

//Delete
const postIdToDelete = 1;

axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`)
    .then(() => console.log("Post deleted"))
    .catch((error) => console.log("Error:", error));


//fasada projektowa AXIOS
//tworzymy funkcję, która umozliwi podmiane fetcha na axiosa i odwrotnie
axios({
  method: "get",
  url: "https://jsonplaceholder.typicode.com/posts",
  params: {
    _sort: "id",
    _order: "desc",
  },

}).then((response) => {
  console.log(response);
});

function requestXhr(settings) {
  return axios(settings);
  // lub
  // return fetch(settings);
}