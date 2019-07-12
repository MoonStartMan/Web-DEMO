var checkBtn = document.getElementsByClassName("check-container")[0];
var numLists = document.getElementsByClassName("select-container");
var showNum = document.getElementsByClassName("number-container")[0];
var btnLists = document.getElementsByClassName("btn-container");
var state = 0;
var numArray = [];
var musicArray = ["./music/music1.mp3","./music/music2.mp3","./music/music3.mp3"];

function innerNum() {
    for(let i=0; i<numLists.length; i++) {
        numArray[i] = numLists[i].innerHTML;
    }
    var randomNum = Math.random()*3;
    var num = Math.floor(randomNum);
    showNum.innerHTML = numArray[num];
}

function start(){
    var num = document.getElementsByClassName("number-container")[0].innerHTML;
    num--;
    document.getElementsByClassName("number-container")[0].innerHTML = num;
    if(num == 0){
        clearInterval(mytime);
    }
}

checkBtn.addEventListener("click", function(){
    innerNum();
})

btnLists[0].addEventListener("click", function(){
    state = 0;
    var value = document.getElementsByClassName("number-container")[0].innerHTML;
    if(value == 0) {
        alert("请先点击随机选择按钮!");
    }
    else if(state == 0) {
        mytime = window.setInterval(start,1000);
        state = 1;
    }
})

btnLists[1].addEventListener("click", function(){
    if(state == 1) {
        clearInterval(mytime);
    }
    state = 0;
})

btnLists[2].addEventListener("click", function(){
    clearInterval(mytime);
    state = 0;
    document.getElementsByClassName("number-container")[0].innerHTML = " ";
})

function selectMusic() {
    var source = document.getElementsByTagName("source")[0];
    var randomNum = Math.random()*3;
    var num = Math.floor(randomNum);
    source.src = musicArray[num];
}

function playMusic(){
    var music = document.getElementsByClassName("music")[0];
    selectMusic();
    music.load();
    music.play();
}

setTimeout(playMusic,2000);