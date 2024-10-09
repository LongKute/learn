//13. Tạo một hàm nhận vào một mảng số và trả về mảng mới chứa các số lớn hơn 5.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function named(a) {
  return a.filter((x) => x > 5);
}
console.log(named(arr));
