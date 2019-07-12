function submit() {
    let btn1 = document.getElementById("input1").value;
    let btn2 = document.getElementById("input2").value;
    let btn3 = document.getElementById("input3").value;
    let btn4 = document.getElementById("input4").value;
    let btn5 = document.getElementById("input5").value;
    let num1 = new RegExp(/^2016\d{5}$/);
    let youxiang = new RegExp(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/);
    let num2 = new RegExp(/^[0-9]*$/);
    if(!num1.test(btn1)) {
        alert("输入有误,必须以2016开头的9位数字")
    }
    else if(btn2.length <6 || btn2.length >16){
        alert("请输入6至16位的密码!")
    }
    else if( btn2 != btn3) {
        alert("所输入的两次密码不同!")
    }
    else if(!youxiang.test(btn4)) {
        alert("您所输入的邮箱号有误,请重新输入!")
    }
    else if (!num2.test(btn5)) {
        alert("请在年龄栏输入数字!");
    } else {
        alert("学号为:"+btn1+"的同学信息提交成功!");
        for(let i=0;i<4;i++) {
            document.getElementById("input1").value = null
            document.getElementById("input2").value = null
            document.getElementById("input3").value = null
            document.getElementById("input4").value = null
        }
    }
}
document.getElementsByClassName("button-box-btn")[0].addEventListener("click",function(){
    submit()
})



