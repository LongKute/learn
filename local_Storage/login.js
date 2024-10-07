var login_elements ={};
var login_elementIDs = [
    "account_login",
    "password_login",
    "re_password_login",
    "submit_login",
    "check_login",
]

 
login_elementIDs.forEach(function (item) {
    var element = document.getElementById(item);
    login_elements[item] = element;
  });

  const login_User = JSON.parse(localStorage.getItem('user'))
  login_elements.submit_login.onclick = function(){
    var data_user = {
        acc: login_elements.account_login.value,
        pass: login_elements.password_login.value
    }
    if(!login_elements.account_login.value || !login_elements.password_login.value){
         login_elements.check_login.innerHTML ='Vui lòng không để trống'
    }else{
        if(login_User.some((user) => user.acc == data_user.acc && user.pass == data_user.pass)){
            login_elements.check_login.innerHTML ='Đăng nhập tài khoản thành công'
        }else{
            login_elements.check_login.innerHTML= 'Đăng nhập tài khoản không thành công'
        }
    }
    
    console.log(data_user)
  }



