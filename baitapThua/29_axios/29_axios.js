//29. Viết một chương trình đọc dữ liệu từ một API sử dụng `fetch` và hiển thị kết quả.
const axios = require("axios");
const post = "https://jsonplaceholder.typicode.com/posts/1";
axios
  .get(post)
  .then((reponse) => {
    console.log("lấy dữ liệu thành công");
    console.log(reponse.data);
  })
  .catch((err) => {
    console.log("lỗi tải dữ liệu" + " " + err);
  });
