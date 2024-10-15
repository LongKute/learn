// 28. Tạo một `Promise` để mô phỏng quá trình tải dữ liệu và trả về thành công sau 2 giây.

// Promise có 3 trạng thái: Hoàn Thành, Thất bại, đang xử lí (dùng then, catch, finally)
const mypromise = new Promise((complete, not_complete) => {
  let succes = false;
  if (succes) {
    complete("Tải dữ liệu thành công");
  } else {
    not_complete("Lỗi trong quá trình tải dữ liệu");
  }
});
mypromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(
      "Quá trình Promise hoàn thành dù thất bại hay thành công nếu dùng finally"
    );
  });
