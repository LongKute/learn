//14. Viết một hàm nhận vào một số nguyên dương và tính tổng các số từ 1 đến số đó.
let b = 10;

function sum(a) {
  let total = 0;
  for (let i = 0; i <= a; i++) {
    total += i;
    console.log(total);
  }
  console.log(total);
}
console.log(sum(b));
