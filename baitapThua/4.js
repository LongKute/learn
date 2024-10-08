// 4. Viết một hàm kiểm tra số chẵn hay lẻ.

function check_odd_even(a) {
    if(a %2 == 0){
        console.log("Số" + " " + a + " là số chẵn");
        
    }else{
        console.log("Số " + " " + a + " là số lẻ");
    }
}

check_odd_even()