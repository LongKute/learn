// 17. Tạo một hàm kiểm tra xem một mảng có chứa một giá trị nhất định hay không (sử dụng `includes()`).

// Syntax: includes(searchElement, fromIndex)
let a = [1, 2, 3, 4, , 5, 6, 7, 8, 9, 10];
function check_Include(b, c) {
  return b.includes(c);
}

console.log(check_Include(a, 2));
