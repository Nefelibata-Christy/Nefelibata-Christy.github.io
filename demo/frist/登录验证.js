var retVal=true;
var useridElt=document.getElementById("userid");
var useridErrorSpan=document.getElementById("useridError");
//id正则表达式
var useridRegExp = /^[a-zA-Z0-9_-]{6,12}$/;

//id验证开始
//id验证,失去焦点验证
useridElt.onblur=function () {
    //判断username的value值是否为空
    //清除前后空白
    var userid = useridElt.value.trim();
    useridElt.value = userid;
    var useridRetVal = useridRegExp.test(userid);
    //username不为空或全为空格开始验证
    if (!(useridElt.value=="")) {
        if (!useridRetVal) {
            useridErrorSpan.innerHTML="<font color="indianred">id格式错误</font>";
        } 
    }
    else{
        useridErrorSpan.innerHTML="<font color="indianred">id不能为空</font>"
    }
}
//获取焦点，清除span内容
useridElt.onfocus=function () {
    //如果userid等于一个或多个空格
    //清空非法value,使用index函数，结果等于-1，则不含有该字符串
    if(!(useridErrorSpan.innerText.indexOf("不")==-1)){
        //如果useridError不为空串,字符串中含有"不"清空value
        useridElt.value="";
    }
    //清空span内容
    useridErrorSpan.innerText="";
}


//密码验证，失去焦点验证
var passwordElt=document.getElementById("password");
var  passwordErrorSpan=document.getElementById("passwordError")
var passwordRegExp=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z\\W]{6,18}$/
//密码验证，失去焦点开始验证
passwordElt.onblur=function () {
    //去除前后空白
    var password=passwordElt.value.trim();
    passwordElt.value=password;
    //password不为空开始验证
    if(!(passwordElt.value=="")){
        //密码格式验证
        var passwordRetVal=passwordRegExp.test(password);
        if(passwordRetVal){
        }
        else{
            passwordErrorSpan.innerHTML="<font color="indianred">格式错误：请使用数字和字母结合</font>"
        }
    }else{
        //密码不能为空
        passwordErrorSpan.innerHTML="<font color="indianred">密码不能为空</font>"
    }
}

//密码获得焦点，重复密码span内容清空
passwordElt.onfocus=function () {
    //清空非法value,使用index函数，结果等于-1，则不含有该字符串
    if(!(passwordErrorSpan.innerText.indexOf("不")==-1)){
        //如果passwordErrorSpan不为空串,字符串中含有"不"清空value
        passwordElt.value="";
    }
    //清空span内容
    passwordErrorSpan.innerText="";

}

var submitElt=document.getElementById("submitBtn");

submitElt.onclick=function () {
        if(useridErrorSpan.innerText==""){
            useridElt.focus();
                useridElt.blur();
        }
        if(passwordErrorSpan.innerText==""){
            passwordElt.focus();
            passwordElt.blur();
        }
}