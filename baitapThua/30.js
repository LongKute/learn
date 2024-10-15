//30. Sử dụng `async`/`await` để gọi một API và xử lý dữ liệu trả về.
const axios = require("axios");
const urlAPI = "https://jsonplaceholder.typicode.com/posts/2";

async function fetchData() {
  try {
    const reponse = await axios.get(urlAPI);
    console.log(reponse.data);
  } catch (error) {
    console.log(error);
  }
}
fetchData();
