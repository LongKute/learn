//34. Viết một hàm đếm số lần xuất hiện của từng phần tử trong một mảng.

const arr = [2, 2, 5, 4, 6, 9, 9, 10, 12, 3, 7];
const counts = {};

function count(a) {
  a.forEach((item) => {
    if (counts[item]) {
      counts[item]++;
    } else {
      counts[item] = 1;
    }
  });

  return counts;
}

console.log(count(arr));
