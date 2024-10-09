//20. Tạo một hàm nhận vào một mảng và trả về mảng đã sắp xếp theo thứ tự giảm dần.
const arr = [2, 6, 3, 7, 4, 5, 8, 9];
function giam_dan(a, b) {
  return b - a;
}
console.log(arr.sort(giam_dan));
