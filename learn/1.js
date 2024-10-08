const user = {
  ten: 'tung',
  tuoi: 20,
  banBe:['vy', 'tung', 'tuan'],
  diaChi:{
      so_nha: '22LehongPhong',
      tinh: 'HCM',
      quan:'Q1'
    }
  }

function friends(a) {
  const newa_Friend = [a.banBe]
  console.log(a.banBe)

  console.log(a.banBe.slice(-1));
  console.log([a.diaChi])
  
  
  
  
}

friends(user)