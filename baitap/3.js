// Cho 1 mảng danh sách tổng tiền của bill trong ngày, 
// - Tính tổng tất cả các bill,
// - Tính trung bình trên mỗi bill
// - Trừ thuế VAT trên nmỗi bill và VAT là 10% 
var bill = [27000, 95000, 47000, 1253000, 320400, 145999, 23500, 43600, 87988, 135033, 25367, 777778];
var total=0;
console.log("day la tong tat ca cac")
for(var i=0; i < bill.length; i++){
    total += bill[i]

}
console.log(total + "\n")
console.log("day la day la tinh trung binh cong bill")
var average= total /bill.length;
console.log(average + '\n');
var VAT = 0.1;
var bill_vat = 0;
console.log("day la Bill sau khi tinh thue VAT 10% ")
for(var a = 0; a < bill[a]; a++){
    bill_vat = bill[a] *  VAT;
    console.log(bill_vat);
}
// average = total / total.length;
// for(var a = 0; a < bill.length; a++){
//     total += bill[a]
//    average
// }
// a

