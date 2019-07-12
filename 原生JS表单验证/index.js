function go() {
    let time = new Date()
    let year = time.getFullYear()
    let mon = time.getMonth()+1
    let day = time.getDate()
    let xq = time.getDay()
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    let xqArray = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
    let timeBox2 = document.getElementsByClassName("time-box")[0]
    if(mon>0 && min<10) {
        mon = "0" + time.getMonth();
    }
    if (day>0 && day<10) {
        day = "0" + time.getDate();
    }
    if (hour>0 && hour<10) {
        hour = "0" + time.getHours();
    }
    if(min>0 && min<10) {
        min = "0" + time.getMinutes();
    }
    if(sec>0 && sec<10) {
        sec = "0" + time.getSeconds();
    }
    timeBox2.innerHTML = year + "年" + mon + "月" + day + "日" + xqArray[xq] + hour + ":" + min + ":" + sec
}
setInterval(go,1000);

let div = document.createElement("div");
document.getElementsByClassName("out-box")[0].appendChild(div);
div.className = "out-box2";
div.innerText = "WangXiao's 201640806"
let colorArray = ["#00FFFF","#00008B","#00BFFF","#FF00FF"]
div.addEventListener("mouseover",function(){
    div.style.color = colorArray[3]
})
div.addEventListener("mouseout",function(){
    div.style.color = colorArray[2]
})

function submit() {
    let btn1 = document.getElementById("input1").value;
    let btn2 = document.getElementById("input2").value;
    let btn3 = document.getElementById("input3").value;
    let btn4 = document.getElementById("input4").value;
    let num1 = new RegExp(/^2016\d{5}$/);
    let youxiang = new RegExp(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/);
    if(!num1.test(btn1)) {
        alert("输入有误,必须以2016开头的9位数字")
    }
    if(btn2.length <6 || btn2.length >16){
        alert("请输入6至16位的密码!")
    }
    if( btn2 != btn3) {
        alert("所输入的两次密码不同!")
    }
    if(!youxiang.test(btn4)) {
        alert("您所输入的邮箱号有误,请重新输入!")
    }
    else {
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



