function YHMonblus() {
    var username = document.getElementById("username");

    // var reN =/^\d{6,18}$/;
    var re = /^[a-zA-Z_]{6,18}$/;
    if (username.value == "") {
        console("1");
        document.getElementById('YHMerror').innerText = "请输入用户名";
    } else if (username.value.length < 6 || username.value.length > 14) {
        console.log(username.value);
        document.getElementById('YHMerror').innerText = "格式错误,长度应为6-18个字符";
    } else if (!re.test(username.value)) {

        document.getElementById('YHMerror').innerText = "格式错误,只能包含英文字母和下划线";
    } else {
        document.getElementById('YHMerror').innerText = "";
    }
}

function YHMonfocu() {
    document.getElementById('YHMerror').innerText = "";
}


//电话
function LXDHonblus() {
    var phone = document.getElementById("phone");
    var re = /^1\d{10}$/;
    if (phone.value == "") {
        document.getElementById('LXDHerror').innerText = "手机号不能为空";
    } else if (!re.test(phone)) {
        document.getElementById('LXDHerror').innerText = "电话格式输入错误";
    } else {
        document.getElementById('LXDHerror').innerText = "";
    }
}

function LXDHonfocu() {
    document.getElementById('LXDHerror').innerText = "";
}


//   密码
function MMonblus() {
    var password = document.getElementById("pwd");
    var re = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z]{6,}$/;
    // var reg=/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;

    if (password.value == "") {
        document.getElementById('MMerror').innerText = "请输入密码";
    } else if (password.value.length < 6) {
        document.getElementById('MMerror').innerText = "格式错误,,密码长度至少为6位";
    } else if (!re.test(password.value)) {
        document.getElementById('MMerror').innerText = "格式错误,必须包含英文字母大小写和数字";
    } else {
        document.getElementById('MMerror').innerText = "";
    }
}

function MMonfocu() {
    document.getElementById('MMerror').innerText = "";
}

//验证码
function YZonblus() {
    var yz=document.getElementById("yzm");
    if(yz.value==""){
        document.getElementById('YYerror').innerText = "请输入验证码";
    }else if (yz.value.length < 4 || yz.value.length>6) {
        document.getElementById('YYerror').innerText = "请输入正确长度验证码";
    }
}
function YZonfocu() {
    document.getElementById('YYerror').innerText = "";
}

var btn = document.getElementById("btn");
btn.onclick = function () {
    countdown = 60;
    var timer = setInterval(function () {
        if (countdown == 0) {
            btn.removeAttribute("disabled");
            btn.value = "获取验证码";
            countdown = 60;
            return;
        } else {
            btn.setAttribute("disabled", true);
            btn.value = "重新发送(" + countdown + ")";
            countdown--;
        }
    }, 1000)
}
