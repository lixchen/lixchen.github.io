# JavaScript 加载和执行

2017/07/01

由于 JavaScript 的阻塞特性，大多数浏览器在执行 JavaScript 代码时, 不能同时作其他任何事情。所以一个页面在加载时，JavaScript 执行过程越久，浏览器等待响应时间越长。

## 1、 js文件位置

`<script>`每出现一次，都会让页面的渲染和下载停下来等待脚本的解析和执行。由于脚本会阻塞页面和其他资源的下载，所以推荐将所有的`<script>`标签尽可能放在body的闭合标签 `</body>` 之前。

## 2、 合并js文件

如果页面中存在多个 JavaScript 文件，页面加载过程中会产生多次 HTTP 请求，同样会带来额外的消耗。因此尽可能将多个js文件合并为单个，使用一个 `<script>` 标签加载。

## 3、 无阻塞脚本

在页面加载完成后才加载 JavaScript 代码。

1.  `<script>`标签的defer属性，该属性用在有src属性的`<script>`标签上，表示该脚本会延迟到文档解析完成后才执行。(如果js脚本不会修改DOM，那么使用该属性可以更安全的延迟执行)

1.  async用于异步加载脚本，该属性对内联脚本没有作用(即没有src属性的脚本).

1.  带有defer属性和async属性的脚本都采用并行下载，在下载过程中不会产生阻塞。

1.  区别在与，defer 需要等待页面完成加载后执行，即DOM加载完成(onload事件触发前)，而 async 则会在文件加载完成后自动执行。

## 4、 XMLHttpRequest 脚本注入

``` js
var xhr = new XHRHttpRequest();
xhr.open('get', 'xxx.js', true);
xhr.onreadystatechange = function(){
   if(xhr.readyState === 4){
       if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
           var script = document.createElement('script');
           script.text = xhr.responseText;
           document.body.appendChild(script);
       }
   }
}
xhr.send(null);
```

-  使用这种方式加载的有点是，可以不用立即执行。 因为代码是`<script>`标签之外返回的，因此下载后不会自动执行。缺点是只能请求相同域中的文件，意味着 JavaScript 文件不能从 CDN 下载。

## 5、 动态加载脚本(最通用的方式)

```js
var script = document.createElement('script');
script.src = 'xxx.js';
document.head.appendChild(script);
```

使用该方法下载文件时，返回的代码会立即执行，但是当该文件中只包含供其他脚本调用的接口时，会出现问题，此时我们需要跟踪并确保脚本下载完成且准备就绪。

```js
// 使用动态<script>节点触发的事件来跟踪
// Firefox, Opera, Chrome, Safari  load事件
script.onload = function(){
    alert('Script loaded');
}
// IE  readystatechange事件
// uninitialized/初始状态、loading/开始下载、loaded/下载完成、interactive/数据完成下载但尚不可用、complete/所有数据已准备就绪
script.onreadystatechange = function(){
    if (script.readyState === 'loade' || script.readyState === 'complete'){
        alert('Script loaded');
    }
}
```


封装
```js

function loadScript(url, cb){
    var script = document.createElement('script');
    if (script.readyState){
        script.onreadystatechange = function(){
            if (script.readyState === 'loade' || script.readyState === 'complete'){
                script.onreadystatechange = null;
                cb();
            }
        };
    } else {
        script.onload = function(){
            cb();
        };
    }
    script.src = url;
    document.head.appendChild(script);
}
```

## 6、将脚本放在样式表的`<link>`标签后，会等待样式表下载完成。因此建议不要将脚本放在`<link>`标签后面。

## 总结

+ 向页面中动态添加大量 JavaScript 文件时:

    + 先添加动态加载所需代码(尽可能精简)

    + 然后加载初始化页面所需的剩余代码

- 使用`async`属性异步加载
