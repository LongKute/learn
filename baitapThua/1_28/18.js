// 18. Tạo một đối tượng "người dùng" với các phương thức `getFullName()` và `getAge()`

const user = {
  fullName: "Lê Văn Phát",
  age: 17,
};

function getFullName(a) {
  return a.fullName;
}
function getAge(b) {
  return b.age;
}

console.log(getFullName(user));
console.log(getAge(user));
