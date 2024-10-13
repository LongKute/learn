//33. Tạo một hàm nhận vào một chuỗi và trả về chuỗi đã loại bỏ tất cả các ký tự không phải chữ cái.
 const test_String = 'qwsazx23dfertyhgfc45mjuhlop22'

//  console.log( test_String[6]);
 
function just_Character(a) {
    // const arr = [...a]
    // console.log(typeof arr[6]);
    

    const arr = a
    .split("")
    .filter((x) => (x >= 'a' &&  x <= 'z') || (x >= 'A' &&  x <= 'Z'))
    .join("")
    console.log(arr);
    

    // const check = arr.filter((x) =>  x == "string")
    // console.log(  check[6]);
    
    
    
}
just_Character(test_String)

