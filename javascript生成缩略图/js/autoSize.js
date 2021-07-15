(function(doc,win){
    var doc = doc.documentElement;
    doc.addEventListener('DOMContentLoaded', Resize, false);
    // 当DOM加载后执行
    win.addEventListener('resize', Resize, false);
    // 当屏幕发生变化时执行
    function Resize(){
        doc.style.fontSize=doc.clientWidth/120 +'px'; //屏幕宽度为1920时 html font-size=16px;
        //120为1920/16计算得出的值，当编写浏览器发生变化时可用编写的浏览器宽度/16得出这个固定值;
    }
})(document,window)