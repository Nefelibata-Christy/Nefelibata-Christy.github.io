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

    var usernameElt=document.getElementById("username");
    var usernameErrorSpan=document.getElementById("usernameError");
    //用户名正则表达式
    var usernameRegExp = /^[a-zA-Z0-9_-]{6,12}$/;

    //用户名验证开始
    //用户名验证,失去焦点验证
    usernameElt.onblur=function () {
        //判断username的value值是否为空
        //清除前后空白
        var username = usernameElt.value.trim();
        usernameElt.value = username;
        var usernameRetVal = usernameRegExp.test(username);

        //username不为空或全为空格开始验证
        if (!(usernameElt.value=="")) {
            if (!usernameRetVal) {
                usernameErrorSpan.innerHTML = "<font color="indianred">角色名格式错误</font>";
            }
        }
        else {
            usernameErrorSpan.innerHTML="<font color="indianred">角色名不能为空</font>"
        }
    }
    //获取焦点，清除span内容
    usernameElt.onfocus=function () {
        //如果username等于一个或多个空格
        //清空非法value,使用index函数，结果等于-1，则不含有该字符串
        if(!(usernameErrorSpan.innerText.indexOf("不")==-1)){
            //如果usernameError不为空串,字符串中含有"不"清空value
            usernameElt.value="";
        }
        //清空span内容
        usernameErrorSpan.innerText="";
    }
    
 

    //密码验证，失去焦点验证
    var passwordElt=document.getElementById("password");
    var passwordErrorSpan=document.getElementById("passwordError")
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

    //确认密码验证，失去焦点验证
    var confirmPwdElt=document.getElementById("confirmPwd");
    var confirmPwdErrorSpan=document.getElementById("confirmPwdError");

    //密码验证，失去焦点开始验证
    confirmPwdElt.onblur=function () {
        //清除验证密码中的前后空白
        var confirmPwd=confirmPwdElt.value.trim();
        confirmPwdElt.value=confirmPwd;
        //判断密码内容是否为空，不为空则开始验证
        if(!(confirmPwdElt.value=="")){
            //重复密码内容不为空，开始验证
            //判断密码是否为空，不为空则开始验证
            if(passwordElt.value==""){
                confirmPwdErrorSpan.innerHTML="<font color="indianred">密码不能为空</font>"
            }else{
                //判断密码和重复密码是否相等
                if(passwordElt.value===confirmPwdElt.value){
                }
                else {
                    confirmPwdErrorSpan.innerHTML="<font color="indianred">两次密码不一致</font>"
                }
            }
        }else{
            confirmPwdErrorSpan.innerHTML="<font color="indianred">确认密码不能为空</font>"
        }
    }
    //获取重复密码焦点时，清空span内数据，如果重复密码错误，则清空重复密码
    confirmPwdElt.onfocus=function () {
        //使用indexOf()方法判断span字符串中是否含有"失"字,结果等于-1，则不含有失字
        if(!(confirmPwdErrorSpan.innerHTML.indexOf("失")==-1)){
            //清空非法重复密码值
            confirmPwdElt.value="";
        }
        //获取焦点时清除span内值
        confirmPwdErrorSpan.innerText="";
    }

    
    var submitElt=document.getElementById("submitBtn");

    submitElt.onclick=function () {
            if(useridRetVal&&usernameRetVal&&passwordRetVal&&passwordElt.value===confirmPwdElt.value){
                    alert("注册成功!\n地球通行证编号:1333333333\n——Carbon-based Biological Association\n");
            }

            else if(useridErrorSpan.innerText==""){
                useridElt.focus();
                useridElt.blur();
            }
            else if(usernameErrorSpan.innerText==""){
                usernameElt.focus();
                usernameElt.blur();
            }
            else if(passwordErrorSpan.innerText==""){
                passwordElt.focus();
                passwordElt.blur();
            }
            else if (confirmPwdElt.innerText==""){
                confirmPwdElt.focus();
                confirmPwdElt.blur();
            }
            
 }
                        













