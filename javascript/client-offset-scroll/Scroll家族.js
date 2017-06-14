
* 滚动大小 (scroll 指的是包含滚动内容的元素的大小)  
* scrollHeight：在没有滚动条的情况下，元素内容的总高度(没有滚动条这句话可以忽略,具体情况再看)
* scrollWidth：在没有滚动条的情况下，元素内容的总宽度
* scrollLeft：被隐藏在内容区域左侧的像素数。通过设置这个属性可以改变元素的滚动位置
* scrollTop：被隐藏在内容区域上方的像素数。通过设置这个属性可以改变元素的滚动位置
* scrollTo(x, y); 把内容滚动到指定的坐标 window.scrollTo(15, 15);

//页面滚动事件 onscroll
window.onscroll = function() {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop
	|| document.body.scrollTop || 0;
        //兼容
        document.title = scrollTop;
        console.log(scrollTop);
    }


// 封装自己的scroll函数
function scroll() {
    if(window.pageYOffset != null) { //  ie9+ 和其他浏览器
    	
    	return {
    		left: window.pageXOffset,
    		top: window.pageYOffset
    	}
    }
    else if(document.compatMode == "CSS1Compat") { // 声明的了 DTD 声明<!DOCTYPE html>
    	return {
    		left: document.documentElement.scrollLeft,
    		top: document.documentElement.scrollTop
    	}
    }
    return { //  剩下的肯定是怪异模式的
    	left: document.body.scrollLeft,
    	top: document.body.scrollTop
    }
}