## CSS3hover抖动效果部分知识点
#### CSS3 transition-timing-function 属性:transition-timing-function属性指定切换效果的速度。
+ linear：规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
	 ease	规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。
	 ease-in	规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
	 ease-out	规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
	 ease-in-out	规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。
	 cubic-bezier(n,n,n,n)	在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。

#### CSS3 perspective 属性
+ number元素距离视图的距离，以像素计。
+ none默认值。与 0 相同。不设置透视。

#### CSS3 backface-visibility 属性
+ visible背面是可见的。
+ hidden背面是不可见的。

#### CSS3 animation-fill-mode 属性
+ none	默认值。动画在动画执行之前和之后不会应用任何样式到目标元素。
+ forwards在动画结束后（由 animation-iteration-count 决定），动画将应用该属性值
+ backwards	动画将应用在 animation-delay 定义期间启动动画的第一次迭代的关键帧中定义的属性值。这些都是 from 关键帧中的值（当 animation-direction 为 "normal" 或 "alternate" 时）或 to 关键帧中的值（当 animation-direction 为 "reverse" 或 "alternate-reverse" 时）。
+ both	动画遵循 forwards 和 backwards 的规则。也就是说，动画会在两个方向上扩展动画属性。
+ nitial	设置该属性为它的默认值。请参阅 initial。
+ nherit	从父元素继承该属性。请参阅 inherit。