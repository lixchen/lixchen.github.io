# 箭头函数

ES6可以使用"箭头"(`=>`)来定义函数

## 用法

``` javascript
    var f = v => v;
    // 等同于
    var f = function(v) {
        return v;
    }
```

箭头函数没有参数或多个参数时，使用`()`来代表参数部分。

``` javascript
    var f = () => 5;
    // 等同于
    var f = function() { return 5 };

    var sum = (num1, num2) => num1 + num2;
    // 等同于
    var sum = function(num1, num2) { return num1 + num2; };
```

如果箭头函数代码块部分多于一条语句，就要使用`{}`括起来
``` javascript
    var sum = (num1, num2) => { var num = num1 + num2; return num; };
```

如果箭头函数返回一个对象，那么必须在对象外面加上`()`，因为`{}`会被解释为代码块
``` javascript
    var getTempItem = id => ({ id: id, name: "Temp" });
```

可以与[变量解构]()结合使用
``` javascript
    const full = ({first, last}) => first + ' ' + last;
    // 等同于
    function full(person) {
        return person.first + ' ' + person.last;
    }
```

简化回调函数
``` javascript
    let arr = [1, 2, 3];
    // 正常函数
    arr.map(function (x) {
        return x * x;
    });

    // 箭头函数 (箭头函数匿名函数写法)
    arr.map(x => x * x);
    
    // 正常函数    
    var result = arr.sort(function(a, b) {
        return a - b;
    });

    // 箭头函数
    var result = arr.sort((a, b) => a - b);
```


与[rest参数]()结合，可以代替`arguments`对象
``` javascript
    const numbers = (...nums) => nums;
    numbers(1, 2, 3, 4); // [1, 2, 3, 4]

    const arrs = (arr1, ... arr2) => [arr1, arr2];
    arrs(1, 2, 3, 4);   // [1, [2, 3, 4]]

```

## 注意事项
箭头函数使用时的注意事项

- 函数体内的`this`对象, 就是定义时所在的对象，而不是使用时所在的对象。
- 不可以当做构造函数，即不可以使用`new`命令。
- 不可以使用`arguments`对象, 该对象在箭头函数体内不存在。可以使用 `rest参数`代替
- 不可以使用`yield`命令，所以箭头函数不能用作`Generator`函数

### this 指向
箭头函数中`this`的指向是固定的(总是指向定义时所在的对象)

``` javascript
    function foo() {
        setTimeout(() => console.log('id:', this.id), 1000);
    }

    var id = 20;
    foo.call({id: 40});     //id: 40
    // 在普通函数中, this的指向是在运行时确定的
    // setTimeout中的函数在1秒后运行时, 如果是普通函数, 执行时this的指向是window对象, 所以输出是20
    // 而在箭头函数中, this总是指向函数定义生效时所在的对象(在这里是{id:40}), 所以输出是40
    // 而普通函数如果也要输出40 需要提前将this保存起来
    function foo() {
        var that = this;
        setTimeout(function() {
            console.log('id:', that.id);
            }, 1000);
    }
    foo.call({id: 40});     // id: 40
```
