var win = document.querySelector(".cantiner");
var imgs = document.querySelector(".imgs");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var point = document.getElementsByClassName("point")[0].children;
var index = 0;
var Wnum = win.offsetWidth;
var times;
var time;
var Crun = true;
var startBtn = document.getElementsByClassName("start")[0];
var endBtn = document.getElementsByClassName("end")[0];
function run(){
	var start = imgs.offsetLeft;
	var end = index*Wnum*(-1);
	var runD = end - start;
	var px = 30;
	var t = 0;
	clearInterval(times);
	times = setInterval(function(){
		t++;
		if(t>=px){
		clearInterval(times);
		Crun = true;
		}
		imgs.style.left = runD/px*t+start+'px';
		if(index>=point.length&&t>=px){
			imgs.style.left = 0;
			index = 0;
		}
		pointIn();
		if(index>=point.length){
			point[0].className = 'on';
		}else{
			point[index].className = 'on';
		}
	},20);
}
function pointIn(){
	for(var i = 0;i<point.length;i++){
		point[i].className = '';
	}
}
	for(var i = 0;i<point.length;i++){
		(function(idx){  
			point[idx].onclick = function(){
				index = idx;
				run();
			}
		})(i);
	}
// time = setInterval(function(){
// 	index++;
// 	run();
// },1000);
endBtn.onclick = function(){
	clearInterval(time)
}
startBtn.onclick = function(){
	time = setInterval(function(){
		index++;
		run();
	},1000);
}
right.onclick = function(){
	if(Crun){
		index++;
		run();
	}
	Crun = false;
}
left.onclick = function(){
	if(Crun){
		if(index==0){
		index = point.length; 
		imgs.style.left = index*Wnum*(-1)+'px';
	}
	index--;
	run();
	}
	Crun = false;
}