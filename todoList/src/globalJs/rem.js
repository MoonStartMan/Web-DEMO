(function(doc,win){
    var doc = doc.documentElement;
    window.onload = function() {
        Resize();
    }
    // 当DOM加载后执行
    win.addEventListener('resize', Resize, false);
    // 当屏幕发生变化时执行
    function Resize(){
        doc.style.fontSize=doc.clientWidth/120 +'px';
    }
})(document,window)