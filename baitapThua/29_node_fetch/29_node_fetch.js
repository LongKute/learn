// const fetch = require('node-fetch');
const urlAPI = "https://jsonplaceholder.typicode.com/posts/1";

fetch(urlAPI)
  .then((reponse) => reponse.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("error" + err));
