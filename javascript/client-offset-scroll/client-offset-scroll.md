## Client(客户端)、Scroll(滚动)

`client` 和 `scroll` 系列属性为 `Element` 对象的属性

## Offset(偏移)

`offset`系列属性为`HTMLElement` 接口属性

### client 指的是元素内容(可视区)及其内边距所占的空间大小，(不包括边框、外边距、滚动条)，该系列属性返回值都为只读属性，并且返回值会四舍五入

- `element.clientHeight` 元素内部的高度(`CSS height + CSS padding - 水平滚动条(如果存在)`)，返回一个整数(不带单位)

- `element.clientWidth` 元素内部的宽度(`CSS width + CSS padding - 垂直滚动条(如果存在)`), 返回一个整数(不带单位)

- `element.clientLeft` 表示一个元素的左边框的宽度，以像素表示。如果元素的文本方向是从右向左（RTL, right-to-left），并且由于内容溢出导致左边出现了一个垂直滚动条，则该属性包括滚动条的宽度。clientLeft 不包括左外边距和左内边距

- `element.clientTop` 一个元素顶部边框的宽度（以像素表示）。不包括顶部外边距或内边距。

- 如果需要使用小数值，可以使用`Element.getBoundingClientRect()`方法
#### 示例
![Alt client](client.png)





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