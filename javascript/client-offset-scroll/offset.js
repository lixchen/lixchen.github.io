
* 偏移量(offset) 通过下列四个属性可以获取到元素的偏移量
* offsetHeight: 元素在垂直方向上占用的空间大小，以像素计。offsetHeight = height + border(上下) + padding(上下)
包括元素的高度、 （可见的） 水平滚动条的高度、上边框高度和下边框高度
* offsetWidth: 元素在水平方向上占用的空间大小，以像素计。 offsetWidth = width + border(左右) + padding(左右)
包括元素的宽度、 （可见的）垂 直滚动条的宽度、左边框宽度和右边框宽度
* offsetLeft: 元素的左外边框至包含元素的左内边框之间的像素距离(包含元素指的是最近的带有定位的元素,所以不一定是父亲元素)
* offsetTop：元素的上外边框至包含元素的上内边框之间的像素距离(包含元素指的是最近的带有定位的元素,所以不一定是父亲元素)
* 即:offsetWidth和offsetHeight 获取的是元素自身的尺寸(跟其他元素没关系) offsetLeft和offsetTop在计算距离时,包含元素的边框不计算在内
* 这些属性在使用的时候尽量保存在一个变量中以提过性能(因为每次访问它们都需要重新计算)
* 上面这些概念的介绍可以看demo1
* offsetParent 返回对象的父级(但是不一定是亲父亲,而是最近的带有定位的父亲/爷爷/爷爷的爷爷,如果没有那么就是body)


//缓动公式 leader 起始位置  target 目标位置
var leader = 0, target = 0;
setInterval(function () {
        leader = leader + (target - leader) / 10;
}, 100)
//用法在筋斗云案例中

//alert(elem.offsetParent.tagName)  tagName(标签名字)

*不能使用width和height left和top 的原因是只有在行内的才能获取到
*<div id="box" style="width: 300px"></div> 只能得到这些
*所以不使用 还有就是offset家族返回的是数字(并且是只读的) 所以更好用
*因为height等值是可读写的,所以综合上面就是 使用offset家族来获取数据 使用height等来改写