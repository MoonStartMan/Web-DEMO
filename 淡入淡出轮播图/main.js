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
    if (index < 4) {
        index ++;
    } else {
        index = 0;
    }
    goIndex();
}

var goPre = function() {
    if(index == 0) {
        index = 4;
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

var mytime = setInterval(goNext,2000);

document.getElementsByClassName("box")[0].addEventListener("mouseover",function(){
    window.clearInterval(mytime);
})

document.getElementsByClassName("box")[0].addEventListener("mouseout",function(){
    mytime = setInterval(goNext,2000);
})

// getAttribute() 方法通过名称获取属性的值。