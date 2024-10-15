//37. Sử dụng `try...catch` để xử lý lỗi trong một hàm tính toán với dữ liệu không hợp lệ.

const axios = require("axios");
const urlAPI = "https://jsonplaceholder.typicod.com/posts/2";

async function fetchData() {
  try {
    const reponse = await axios.get(urlAPI);
    console.log(reponse.data);
  } catch (error) {
    console.log(error);
  }
}
fetchData();
