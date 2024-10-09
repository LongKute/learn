// 25. Viết một hàm nhận vào một mảng chuỗi và trả về mảng đã sắp xếp theo thứ tự chữ cái.

const a = "qwsadfthyg";
function sort1(b) {
  let c = [...b];
  return c.sort();
}
console.log(sort1(a));
