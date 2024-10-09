//29. Viết một chương trình đọc dữ liệu từ một API sử dụng `fetch` và hiển thị kết quả.
const axios = require("axios");
const post = "https://jsonplaceholder.typicode.com/posts";
fetch(post).then(reponsive);

// Gửi yêu cầu POST
// axios
//   .post("https://jsonplaceholder.typicode.com/posts/100", {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   })
//   .then((response) => {
//     console.log("Dữ liệu đã được gửi:", response.data);
//   })
//   .catch((error) => {
//     console.error("Có lỗi xảy ra:", error);
//   });
