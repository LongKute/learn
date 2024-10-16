//38. Tạo một hàm nhận vào một chuỗi và trả về số lượng từ trong chuỗi đó.
const chuoi = "Long rat la dep trai";



function check_length(a) {
  const kiem_Tra = a.trim().split(/\s+/); 
  return kiem_Tra.length;
}

console.log(check_length(chuoi));
