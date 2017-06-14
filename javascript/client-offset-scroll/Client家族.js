* 客户区大小 可视区域大小 (client指的是元素内容及其内边距所占的空间大小,不包括边框)
* clientWidth 和 clientHeight
* 案例中有对比


* 封装client函数
function client() {
        if(window.innerWidth != null)  // ie9 +  最新浏览器
        {
        	return {
        		width: window.innerWidth,
        		height: window.innerHeight
        	}
        }
        else if(document.compatMode === "CSS1Compat")  // 标准浏览器
        {
        	return {
        		width: document.documentElement.clientWidth,
        		height: document.documentElement.clientHeight
        	}
        }
        return {   // 怪异浏览器
        	width: document.body.clientWidth,
        	height: document.body.clientHeight

        }
    }
    //用法
    document.write(client().width);

    
* 检查屏幕宽度
* clientWidth 返回的是可视区域的大小 浏览器内部的大小
* window.screen.width 返回的是电脑屏幕分辨率大小