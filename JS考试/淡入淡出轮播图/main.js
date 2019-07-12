var lists = document.getElementsByClassName("list"); //图片
var goPreBtn = document.getElementById("left-btn"); 
var goNextBtn = document.getElementById("right-btn");
var points = document.getElementsByClassName("point"); //点

var index = 0; //index表示第几张图片在展示 ---》第index张图片有active这个类名
//第几个点在展示


var clearActive = function() {
    for(var i=0; i<lists.length; i++) {
        lists[i].className = "list";
    }
    for(var i=0; i<lists.length; i++) {
        points[i].className = "point";
    }
}

var goIndex = function() {
    clearActive();
    points[index].className = "point active"
    lists[index].className = 'list active';
}

var goNext = function() {
    if (index < 3) {
        index ++;
    } else {
        index = 0;
    }
    goIndex();
}

var goPre = function() {
    if(index == 0) {
        index = 3;
    } else {
        index --;
    }
    goIndex();
}

goNextBtn.addEventListener("click", function(){
    goNext();
})
goPreBtn.addEventListener("click", function(){
    goPre();
})

for(var i=0; i<points.length; i++) {
    points[i].addEventListener("click", function(){
        var pointIndex = this.getAttribute('data-index');
        index = pointIndex;
        goIndex();
    })
}

   var mytime = null;

document.getElementsByClassName("remove")[0].addEventListener("click",function(){
    window.clearInterval(mytime);
})

document.getElementsByClassName("go")[0].addEventListener("click",function(){
    mytime = setInterval(goNext,2000);
})
