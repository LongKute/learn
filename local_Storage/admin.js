// const image =document.getElementById("img")
// const imagesrc =document.getElementById("imgsrc")
// const sumbit = document.getElementById("product_submit")
// sumbit.onclick = ()=> {
// image.src = imagesrc.value
// }

var admin_elements = {};
var admin_elementIDs = [
  "product_quantity",
  "product_price",
  "product_submit",
  "product_name",
  "message",
  "imgsrc",
  "product_list",
  "sort_name",
  "sort_price",
  "sort_quantity",
  "edit",
  "confirm",
];
var idEdit = null;
admin_elementIDs.forEach(function (item) {
  var element = document.getElementById(item);
  admin_elements[item] = element;
});
var a = 0;

let Product = JSON.parse(localStorage.getItem("product")) ?? [];

// admin_elements.imgsrc.oninput = function(){
// }
// let  flag = admin_elements.edit;

// hàm làm sạch input
function clearInput() {
  admin_elements.product_name.value = "";
  admin_elements.product_quantity.value = "";
  admin_elements.product_price.value = "";
  admin_elements.imgsrc.value = "";
}

// hàm render ra màn hình
function render(arr) {
  if (arr.length > 0) {
    admin_elements.product_list.innerHTML = arr
      .map((pro, i) => {
        return `<div class = 'product'>
            <div class = 'img'>
           
                <img width="100px" height="100px" class="mb-10" src=${pro.img} alt=${pro.name}/>
                 
            </div>
                <div class = 'product_information'>
                <button class='button_X' onclick="admin_delete(${pro.id})">X</button>
                <h3>Tên: ${pro.name}</h3>
                <h3>Số lượng: ${pro.quantity}</h3>
                <h3>Giá: ${pro.price}</h3>
                </div>
                <button onclick="admin_Edit(${pro.id})" class ="button_Edit" id="edit">Sửa</button>
               
            </div>
           
              
          
            </div>
            `;
      })
      .join("");
  } else {
    admin_elements.product_list.innerHTML = "Không có sản phẩm";
  }
}
render(Product);

// Hàm xoá sản phẩm
function admin_delete(id) {
  Product = Product.filter((a) => {
    return a.id != id;
  });
  localStorage.setItem("product", JSON.stringify(Product));

  if (Product.length > 0) {
    render(Product);
  } else {
    admin_elements.product_list.innerHTML = "Không có sản phẩm";
  }
}

// Click Submit khi sản phẩm chưa có
admin_elements.product_submit.onclick = function () {
  console.log(idEdit);
  if (
    !admin_elements.product_quantity.value ||
    !admin_elements.product_name.value ||
    !admin_elements.product_price.value ||
    !admin_elements.imgsrc.value
  ) {
    admin_elements.message.innerText =
      "Vui lòng nhập đầy đủ các trường thông tin";
  } else {
    if (!idEdit && idEdit != 0) {
      let id = null;
      if (Product.length >= 1) {
        id = Product[Product.length - 1].id + 1;
      } else {
        id = 0;
      }

      var data_product = {
        name: admin_elements.product_name.value,
        quantity: admin_elements.product_quantity.value,
        price: admin_elements.product_price.value * 1000,
        img: admin_elements.imgsrc.value,
        id: id,
      };
      console.log(Product);
      Product.push(data_product);
      render(Product);
      clearInput();

      localStorage.setItem("product", JSON.stringify(Product));
    } else {
      const item = Product.find((item) => item.id === idEdit);
      if (item) {
        (item.name = admin_elements.product_name.value),
          (item.quantity = admin_elements.product_quantity.value),
          (item.price = admin_elements.product_price.value * 1000),
          (item.img = admin_elements.imgsrc.value);
      }

      clearInput();
      render(Product);
      localStorage.setItem("product", JSON.stringify(Product));
    }
  }
};

// hàm lọc theo tên
admin_elements.sort_name.onclick = function () {
  Product.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  render(Product);
};

// hàm lọc theo giá
admin_elements.sort_price.onclick = function () {
  Product.sort((a, b) => {
    return a.price - b.price;
  });
  render(Product);
};

// hàm lọc theo số lượng
admin_elements.sort_quantity.onclick = function () {
  Product.sort((a, b) => {
    return a.quantity - b.quantity;
  });

  render(Product);
};

// hàm sửa rồi mới submit
function admin_Edit(id) {
  idEdit = id;
  let productEdit = Product.filter((a) => {
    return a.id === id;
  });
  admin_elements.product_name.value = productEdit[0].name;
  admin_elements.product_quantity.value = productEdit[0].quantity;
  admin_elements.product_price.value = productEdit[0].price / 1000;
  admin_elements.imgsrc.value = productEdit[0].img;

  // admin_delete(id);
}

// admin_elements.confirm.onclick = function(){
//   if(!admin_elements.product_quantity.value || !admin_elements.product_name.value||!admin_elements.product_price.value||!admin_elements.imgsrc.value){
//     admin_elements.message.innerText = 'Vui lòng nhập đầy đủ các trường thông tin'
// }else{
//     var data_product = {
//         name:admin_elements.product_name.value ,
//         quantity:admin_elements.product_quantity.value,
//         price:admin_elements.product_price.value *1000,
//         img: admin_elements.imgsrc.value,
//         id: Product.length + Math.random(10)*100 ?? 0

//     }
//     Product.push(data_product)
//     // Product.filter((a) => ){
//     //     return a.id !=
//     //     // Product = Product.filter((a)=> {
//     //     //   return a.id != id
//     // }
//     render(Product)
//     clearInput()

//     localStorage.setItem('product', JSON.stringify((Product)))

// }

// }
