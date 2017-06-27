# Javascript 对象之间的关系
<time id="timer">s</time>
JavaScript 有 *"一切皆为对象"* 的说法。

```js
var lxc = 1;
console.log(lxc);
```

想要缕清 JavaScript 中对象之间的关系，我们先从数据类型说起。

## JavaScript中的数据类型

JavaScript 数据类型一共有7种( 6 种基本数据类型和 Object 对象):

### 基本数据类型:

- **Boolean：**   布尔值，`true`和`false`。

- **null：**      一个表明`null`值的特殊关键字。注意大小写(Null、NULL等与null是完全不同的)。

- **undefined：** 变量未定义时的属性

- **Number：**    表示数字

- **String：**    表示字符串(用引号或双引号包起来)

- **Symbol：**    ECMAScript6 中新添加的一种数据类型， 它的实例是唯一且不可改变的。

### Object对象(又可以分为以下几种对象):

- **Function：** 函数

- **Array：** 数组

- **RegExp：** 正则表达式

- **Date：** 日期

- **Error：** 错误

- **Map：** 简单的键/值映射

- **Set：** 集合对象

## 方法和属性

在研究对象之间的关系时，需要用到下面的方法和属性，它们是定义在原型上的，所以所有的对象都会继承。

- **Object.prototype.toString()**： 检测数据类型。

- **Object.prototype.hasOwnProperty()**： 检测对象是否具有属于自身的（非继承）属性。

- **Object.prototype.constructor** ：指向创建了该对象原型的函数引用。


## 开始测试

首先我们从 `Object` 构造函数开始

首先，在 JavaScript 中函数是一个特殊的对象，因为它与对象是包含与被包含的关系。就像先有蛋还是先有鸡。

JavaScript 中的对象可以使用 `new` + `构造函数`创建。而函数又是对象。所以需要先弄清函数与对象之间的关系。



所有的对象都通过__proto__属性链接到它的构造器的prototype上一直链接到Object.prototype
所有的构造器都通过__proto__属性链接到f(), 然后f()再通过__proto__属性链接到Object.prototype, 并且f()的构造器是Function()
所有的构造器都通过prototype属性链接到它的原型对象上

Function的__proto__和prototype属性都链接到f()