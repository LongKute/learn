// 8. Viết một chương trình kiểm tra xem một chuỗi có phải là chuỗi đảo ngược của chuỗi khác không.
const a = "Hello";
const b = "olleH";
// console.log(a[0]);

for (let i = 0, j = b.length - 1; i < a.length; i++, j--) {
  if (a[i] !== b[j]) {
    console.log("Đây không phải là chuỗi đảo ngược");
    break;
  }
}
