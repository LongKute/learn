// 10. Sử dụng `filter()` để lọc ra các số lẻ từ mảng `[1, 2, 3, 4, 5, 6, 7]`.

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = a.filter((x) => x % 2 !== 0);
console.log(b);
