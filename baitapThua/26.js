// 26. Viết một hàm nhận vào một mảng số và trả về phần tử nhỏ nhất trong mảng.

const arr = [3, 5, 7, 8, 2, 4];

function smallest_Value(a) {
  const min = Math.min(...a);

  const smallest = a.filter((x) => x === min);

  return smallest[0];
}
console.log(smallest_Value(arr));
