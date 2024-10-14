//38. Tạo một hàm nhận vào một chuỗi và trả về số lượng từ trong chuỗi đó.
const chuoi = 'Long rat la dep trai'

// console.log(chuoi.length);

function check_length(a) {
    const kiem_Tra =a.split("/\s+/")
   console.log(kiem_Tra);
      return kiem_Tra.length;
      
    
    
}


console.log(check_length(chuoi));

