//16. Sử dụng vòng lặp `while` để tính tổng các số từ 1 đến 100.
const a = 0;

function sum(b) {
  let total = 0;
  while (b <= 100) {
    total += b;
    b++;
  }
  return total;
}
console.log(sum(a));
