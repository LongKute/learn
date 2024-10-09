//22. Tạo một hàm đệ quy để tính dãy Fibonacci tại vị trí n.
function fibonacci(num) {
  if (num <= 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(10));
