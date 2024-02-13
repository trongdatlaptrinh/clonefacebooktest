// Button đăng nhập
var facebookElement=
    document.querySelector('input#facebook');
// console.log(facebookElement);
facebookElement.onkeydown=function(e){
    console.log(e.target.value);
};
var passElement=
    document.querySelector('input#pass');
// console.log(passElement);
passElement.onkeydown=function(e){
    console.log(e.target.value);
};

var buttonElement=
    document.querySelector('button');
setTimeout(function(){
    buttonElement.onclick=function(){
        alert('Bạn đã đăng nhập tài khoản thành công')
    };
},1000);

var button2Element =
    document.querySelector('a.button2');

setTimeout(function(){
    button2Element.onclick = function(){
        alert('Bạn quên mật khẩu sao. Hãy liên hệ với admin để tạo tài khoản')
    };
},2000)

var button4Element =
    document.querySelector('button.button4');

setTimeout(function(){
    button4Element.onclick = function(){
        alert('Hiện giờ chúng tôi chưa cập nhật chức năng này. Vui lòng liên hệ với admin để tạo tài khoản')
    };
},3000)

var button5Element =
    document.querySelector('a.create');

console.log(button5Element)

setTimeout(function(){
    button5Element.onclick = function(){
        alert('Hiện giờ chúng tôi chưa cập nhật chức năng này. Vui lòng liên hệ với admin để tạo tài khoản')
    };
},4000)