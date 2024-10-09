// 21. Tạo một hàm đệ quy để tính giai thừa của một số.

function recursive(a) {
  if (a == 0) {
    return 1;
  }
  return a * recursive(a - 1);
}
console.log(recursive(5));
