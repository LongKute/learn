//33. Tạo một hàm nhận vào một chuỗi và trả về chuỗi đã loại bỏ tất cả các ký tự không phải chữ cái.
const test_String = "qwsazx23dfertyhgfc45mjuhlop22";

function just_Character(a) {
  const arr = a
    .split("")
    .filter((x) => (x >= "a" && x <= "z") || (x >= "A" && x <= "Z"))
    .join("");
  return arr;
}
console.log(just_Character(test_String));
