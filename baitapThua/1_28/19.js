// 19. Tạo một hàm trả về tổng của tất cả các số nguyên trong một mảng bất kỳ.
const arr = [2, 6, 3, 7, 4, 5, 8, 9];

function sum_arr(a) {
  let total = 0;
  a.forEach((element) => {
    total += element;
  });
  return total;
}
console.log(sum_arr(arr));
