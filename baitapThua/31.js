//31. Tạo một hàm lấy tất cả các "Key" từ một đối tượng và in chúng ra.
const user = {
    name: "long_kute",
    age: 24,
    residence: "Qn",
    work: 'home'

}

function take_object(a) {
    const profile = Object.keys(a)
    console.log(profile);
    
}


take_object(user)