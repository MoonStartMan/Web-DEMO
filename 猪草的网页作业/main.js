var loadCheck =  function() {
    var userAgent = navigator.userAgent;  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1
    if (isEdge || isIE11) {
        alert("老师当前使用的是IE浏览器体验不佳,请换火狐、谷歌等其他浏览器浏览");
    }
}

function clickTrue() {
    var btn = document.getElementsByClassName("fixed-box-bottom")[0];
    var cover = document.getElementsByClassName("cover")[0];
    var fixedBox = document.getElementsByClassName("fixed-box")[0];
    btn.addEventListener("click", function(){
        cover.style.display = "none";
        fixedBox.style.display = "none";
    })
}

window.onload = function() {
    loadCheck();
    clickTrue();
}