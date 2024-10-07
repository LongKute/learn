var register_elements = {};
var register_elementIDs = [
  "account_register",
  "password_register",
  "re_password_register",
  "submit_register",
  "check_register",
];

register_elementIDs.forEach(function (item) {
  var element = document.getElementById(item);
  register_elements[item] = element;
});
const User = JSON.parse(localStorage.getItem("user")) ?? [];
// console.log(User);
register_elements.submit_register.onclick = function () {
  if (
    !register_elements.account_register.value ||
    !register_elements.password_register.value ||
    !register_elements.re_password_register.value
  ) {
    register_elements.check_register.innerHTML = "Vui lòng không để trống";
  } else {
    if (
      register_elements.password_register.value !=
      register_elements.re_password_register.value
    ) {
      register_elements.check_register.innerHTML =
        "mật khẩu và nhập lại mật khẩu không trùng nhau";
    } else {
      var data_user = {
        acc: register_elements.account_register.value,
        pass: register_elements.password_register.value,
      };
      //Truthy và Falsy
      if (User.some((user) => user.acc == data_user.acc)) {
        register_elements.check_register.innerHTML = "Tài khoản đã tồn tại";
      } else {
          User.push(data_user);
          localStorage.setItem("user", JSON.stringify(User));
          register_elements.check_register.innerHTML = "Đăng ký thành công";
          window.location = "/login.html"
      }
    }
    
  }
};
