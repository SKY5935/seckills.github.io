/**
 * Created by rensheng on 2017-03-02.
 */
$(document).ready(function(){
    $("#head_menu03_first").hover(function () {
       $("#head_menu03_second").slideToggle(300);
    });

    //$(".header_menue01_li").hover(function(){
    //    $(this).children(".header_menue01_li_ul").slideToggle(300);
    //});

})
window.onload=function() {
    var opt = document.getElementById("conter_body02_second03");
    var opt1 = document.getElementById("conter_body02_opaticy");
    opt.onmouseover = function () {
        opt1.style.display ="block";
    }
        opt.onmouseout=function(){
            opt1.style.display="none";
        }

}



function createCode() {
    var code = "";
    var codeLength = 6;
    var checkCode = document.getElementById("checkCode");

    var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
    for (var i = 0; i < codeLength; i++) {
        var charNum = Math.floor(Math.random() * 62);
        code += codeChars[charNum];
    }
    if (checkCode) {
        checkCode.innerHTML = code;
    }
}

function textInput(){
    var regphone = /^1+\d{10}$/;
    var phonename = document.getElementById("textval").value;
    var label04 = document.getElementById("label1");
    if (regphone.test(phonename) == false) {
        if (phonename == "" || phonename == null) {
            label04.innerHTML = "手机号码不能为空！";
            return false;
        }
        else {
            if (phonename.length < 11) {
                label04.innerHTML = "手机号码的长度不能小于11！";
                return false;
            } else {
                label04.innerHTML = "手机号码的格式错误,号码必须以1开头！";
                return false;
            }
        }
    }
    else {
        label04.innerHTML = "";

    }
    return true;
}

function checkInput(){
    var code01 = document.getElementById("inputCode").value;
    var code02 = document.getElementById("label02");
    if (code01 == "" || code01 == null) {
        code02.innerHTML = "验证码不能为空！";
        return false;
    }
    else {
        if (code01.length < 6||code01.length>6) {
            code02.innerHTML = "验证码的长度为6！";
            return false;
        }
        else {
            code02.innerHTML = "";
        }
    }
    return true;
}

function sub() {
    var valid = textInput() & checkInput();
    if (valid == 0) {
        return false;
    }
    else {
        alert("所提交的信息将由管理员处理。");
        return true;
    }
}

function ten(){
    var texval=document.getElementById("tex").value;
    var la=document.getElementById("label001");
    if (texval==""||texval==null){
        la.innerHTML="请输入手机号码！"
        return false;
    }
    else {
        la.innerHTML="";
        return true;
    }
}
function texpass(){
    var texval=document.getElementById("pass").value;
    var la=document.getElementById("label002");
    if (texval==""||texval==null){
        la.innerHTML="请输入密码！"
        return false;
    }
    else {
        la.innerHTML="";
        return true;
    }
}