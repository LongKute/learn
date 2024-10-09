// Tạo một hàm nhận vào một chuỗi và trả về chuỗi với các ký tự đã được đảo ngược.
const a = "long_Dep_Trai";

function reverse(a) {
  let b = "";
  for (let i = a.length - 1; i >= 0; i--) {
    b += a[i];
  }
  return b;
}
console.log(reverse(a));
