// 1:设置按钮的颜色：
//     1.1：获取当前元素应该变色的按钮的索引值（第几个按钮）
//     1.2：找到该元素并设置一个绿色
var index = 0; //默认情况下第一个按钮变成绿色
var aSpan = document.querySelectorAll("span");
var aLi = document.querySelectorAll("li");
var aListName = ["list1","list2","list3","list4","list5","list6"];

function seLineBcolor() {
    for(var i=0, len = aSpan.length; i<len; i++) {
        aSpan[i].style.backgroundColor = "#CCC";
    }
    aSpan[index].style.backgroundColor = "#45c17c";
}

seLineBcolor();

function nextPic() {
    aListName.unshift(aListName[5]);//把数组最后一个名字复制并插入到第一个位置;
    aListName.pop();//删除最后一个值
    for(var i=0, len=aLi.length; i<len; i++) {
        aLi[i].setAttribute("class",aListName[i]);
    }
    index = index + 1;
    if(index > 5){
        index = 0;
    }
    seLineBcolor();
}

function prePic() {
    aListName.push(aListName[0]);//把第一个值塞到数组的最后一个位置
    aListName.shift();//删除第一个值;
    for(var i=0, len=aLi.length; i<len; i++) {
        aLi[i].setAttribute("class", aListName[i]);
    }
    index = index - 1;
    if(index < 0){
        index = 5;
    }
    seLineBcolor();
}

var list1 = document.querySelector(".list1");
var list3 = document.querySelector(".list3");
// list3.onclick = function(){//时间绑定 绑定元素本身
//     nextPic();
// }

var imgList = document.querySelector(".imglist");

imgList.addEventListener("click", function(ev){
    console.log(ev.target.parentNode.getAttribute("class"));
    if(ev.target.parentNode.getAttribute("class") === "list3") {
        nextPic();
    } else if(ev.target.parentNode.getAttribute("class") === "list1") {
        prePic();
    }
})

var mytime = setInterval(nextPic,2000);
var content = document.querySelector(".content");
content.addEventListener("mouseover", function(){
    clearInterval(mytime);
})
content.addEventListener("mouseout", function(){
    mytime = setInterval(nextPic,2000);
})