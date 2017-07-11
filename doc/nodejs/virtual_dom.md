# 实现 Virtual Dom

[参考链接](https://github.com/livoras/blog/issues/13)
[参考链接](https://github.com/livoras/simple-virtual-dom)
[参考链接](https://github.com/livoras/blog/issues/11)

1、使用 JavaScript 对象表示 DOM 树。

```js
let element = {
    tagName: 'ul',
    props: {
        id: 'list'
    },
    children: [
        {
            tagName: 'li',
            props:{
                class: 'item'
            },
            children: ['Item 1']
        },
        {
            tagName: 'li',
            props:{
                class: 'item'
            },
            children: ['Item 2']
        },
        {
            tagName: 'li',
            props:{
                class: 'item'
            },
            children: ['Item 3']
        },
    ]
}
```

```html
<ul id="list">
    <li class="item">Item1</li>
    <li class="item">Item2</li>
    <li class="item">Item3</li>
</ul>
```

2、实现

```js
// element.js
function Element(tagName, props, children){
    this.tagName = tagName;
    this.props = props;
    this.children = children;
}

Element.prototype.render = function(){
    let el = document.createElement(this.tagName);
    let props = this.props;

    for(let propName in props) {
        let propValue = props[propName];
        el.setAttribute(propName, propValue);
    }

    let children = this.children || [];

    // 如果子节点也是虚拟DOM，递归构建DOM节点
    // 如果字符串，只构建文本节点
    children.forEach(function(child) {
        let childEl = (child instanceof Element)?child.render():document.createTextNode(child);
        el.appendChild(childEl);
    });
    return el;
}
module.exports  = function(tagName, props, children) {
    return new Element(tagName, props, children);
}
```

```js
// 使用
let el = require('./element');

let ul = el('ul',{id: 'list'}, [
    el('li',{class: 'item'},['item1']),
    el('li',{class: 'item'},['item2']),
    el('li',{class: 'item'},['item3'])
]);

var ulRoot = ul.render();
document.body.appendChild(ulRoot);
```

```js
// diff 函数
function diff(oldTree, newTree){
    var index = 0;
    var patches = {};
    dfsWalk(oldTree, newTree, index, patches);
    return patches;
}

// dfsWalk
function dfsWalk(oldTree, newTree, index, patches){
    patches[indx] = 
}
```