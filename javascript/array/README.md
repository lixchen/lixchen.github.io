# Array

### 使用

``` javascript
// 创建数组
let nums = [1, 2, 3, 4];    // [1, 2, 3, 4]

// 访问数组元素
console.log(nums[0]);       // 1

//  添加数组元素
nums[4] = 5;                // [1, 2, 3, 4, 5]

// 替换数组元素
nums[0] = 0;                // [0, 2, 3, 4, 5]

// 更改数组长度(没有内容默认用undefined代替)
nums.length = 10;           // [0, 2, 3, 4, 5, undefined × 5]
```

## 属性

- Array.length  返回一个数组中的元素个数(属性特性: 可写、不可枚举、不可配置)。

- Array.prototype 表示Array构造函数的原型，可以通过它添加新方法和属性来扩展Array(不过不推荐)。

> Array.prototype本身也是一个数组

## 方法

### Array.from() 
> 方法可以通过一个类数组或可迭代的对象中创建一个新的数组实例。

``` javascript
     const bar = ["a", "b", "c"];
     Array.from(bar);   // ["a", "b", "c"]

     Array.from('foo');     // ["f", "o", "o"]

     Array.from('123', x => x * 2);   // [2, 4, 6]

     // 相当于 
     Array.from('123').map(x => x*2);

    // Array.from方法会根据第一参数的length值指定第二参数的运行次数
     Array.from({length: 3}, () => 'from'); // ['from', 'from', 'from']
```

> 参数: Array.from()函数可以有三个参数，后两个为可选的。
> 
> arrayLike: 想要转成真实数组的类数组对象或可遍历对象
> 
> mapFn: 该参数是一个函数，最后生成的数组会经过该函数的加工处理再返回(等同于map方法中的函数参数)。
> 
> thisArg: 执行mapFn函数时的this值。


### Array.isArray()

> 用于确定传入的值是否为数组(如果是返回true, 否则返回false)

### Array.of()

> 用于创建数组，弥补了new Array() 和 Array()的不足, 总是返回由参数组成的数组，参数可以是任意个数

``` javascript
    Array(3);   // [undefined × 3]
    Array.of(3);    // [3]
```

### copyWithin()

> 在当前数组内部, 将指定位置的成员赋值到其他位置(覆盖掉原有成员), 返回当前数组。这个方法会修改当前数组
> 
> 参数: (target, start, end)
> 
> target(必需): 从该位置开始替换
> 
> start(可选): 默认为0, 从该位置开始读取数据，如果为负值, 表示倒数
> 
> end(可选): 默认为当前数组的length值, 到该位置停止读取数据(不包括该位置), 如果为负值，表示倒数

``` javascript
   [1, 2, 3, 4, 5, 6, 7, 8, 9].copyWithin(0,3); 
   // [4, 5, 6, 7, 8, 9, 7, 8, 9]
   [1, 2, 3, 4, 5, 6, 7, 8, 9].copyWithin(0,3,4);
   // [4, 2, 3, 4, 5, 6, 7, 8, 9]
   [1, 2, 3, 4, 5, 6, 7, 8, 9].copyWithin(0,-2,-1);
   // [8, 2, 3, 4, 5, 6, 7, 8, 9]
   [1, 2, 3, 4, 5, 6, 7, 8, 9].copyWithin(2,5,8);
   // [1, 2, 6, 7, 8, 6, 7, 8, 9]
```

### entries()

> 返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对, 可以使用for-of循环

``` javascript
    var arr = ["a", "b", "c"];
    var iterator = arr.entries();
    // undefined

    console.log(iterator);
    // Array Iterator {}

    console.log(iterator.next().value); 
    // [0, "a"]
    console.log(iterator.next().value); 
    // [1, "b"]
    console.log(iterator.next().value); 
    // [2, "c"]
    
    // 使用for-of 循环
    for (let e of iterator) {
        console.log(e);
    }
    // [0, "a"] 
    // [1, "b"] 
    // [2, "c"]
    
```

### keys()

> keys() 方法返回一个新的Array迭代器，它包含数组中每个索引的键

``` javascript
    let arr = ["a", "b", "c"];

    let iterator = arr.keys();
    // undefined

    console.log(iterator);
    // Array Iterator {}

    console.log(iterator.next()); 
    // Object {value: 0, done: false}

    console.log(iterator.next()); 
    // Object {value: 1, done: false}

    console.log(iterator.next()); 
    // Object {value: 2, done: false}

    console.log(iterator.next()); 
    // Object {value: undefined, done: true}    
    
    for(let k of iterator) {
        console.log(k);
    }
    // 0
    // 1
    // 2
```


### values()

> 返回一个新的Array Iterator对象，该对象包含数组中每个索引的值

``` javascript
    // chrome未实现
    let arr = ['w', 'y', 'k', 'o', 'p'];
    let eArr = arr.values();
    // 您的浏览器必须支持 for..of 循环
    // 以及 let —— 将变量作用域限定在 for 循环中
    for (let letter of eArr) {
      console.log(letter);
    }

    let arr = ['w', 'y', 'k', 'o', 'p'];
    let eArr = arr.values();
    console.log(eArr.next().value); // w
    console.log(eArr.next().value); // y
    console.log(eArr.next().value); // k
    console.log(eArr.next().value); // o
    console.log(eArr.next().value); // p
```

### fill()

> fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素, 返回修改后的数组
> 
> 参数: (value, start, end)
> 
> value: 用来填充数组元素的值
> 
> start: (可选) 起始索引, 默认为0
> 
> end: (可选) 终止索引(不包含该位置), 默认为this.length

``` javascript
    [1, 2, 3].fill(4)            // [4, 4, 4]
    [1, 2, 3].fill(4, 1)         // [1, 4, 4]
    [1, 2, 3].fill(4, 1, 2)      // [1, 4, 3]
    [1, 2, 3].fill(4, 1, 1)      // [1, 2, 3]
    [1, 2, 3].fill(4, -3, -2)    // [4, 2, 3]
    [1, 2, 3].fill(4, NaN, NaN)  // [1, 2, 3]
    Array(3).fill(4);            // [4, 4, 4]
    [].fill.call({length: 3}, 4) // {0: 4, 1: 4, 2: 4, length: 3}
```

### find()、findIndex()

> find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
> 
> findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
> 
> 参数: 这两个方法都有两个参数(callbck, thisArg)
> 
> callback: 在数组每一项上执行的函数，接收三个参数(element: 当前遍历到的元素; index: 当前遍历到的索引; array: 数组本身)
> 
> thisArg: (可选的)。执行callback时作为this对象的值


``` javascript
    function isBigEnough(element) {
      return element >= 15;
    }

    [12, 5, 8, 130, 44].find(isBigEnough); // 130

    // 这两个方法都可以发现NaN, 弥补了indexof方法的不足
    [NaN].indexOf(NaN)
    // -1
    
    [NaN].findIndex(y => Object.is(NaN, y))
    // 0        通过Object.is()方法
```

### includes()

> includes() 方法用来判断一个数组是否包含一个指定的值，如果是，酌情返回 true或 false。
> 
> 参数: (searchElement, fromIndex)
> 
> searchElement: 要查找的元素值
> 
> fromIndex: 可选, 从该索引处开始查找searchElement

``` javascript
    [1, 2, 3].includes(2)     // true
    [1, 2, 3].includes(4)     // false
    [1, 2, NaN].includes(NaN) // true
```

### push()
> push() 方法可以接收任意数量的参数, 把它们逐个添加到数组的`末尾`, 并`返回修改后数组的长度`。

```javascript
var colors = ["red", "blue"];
var count1 = colors.push("green");
var count2 = colors.push("black", "white");
console.log(count1, count2);  // 3 5
```
### pop()
> pop()方法从数组的末尾移除最后一项, 减少数组的length值, 然后`返回移除的项`

```javascript
var person = ["lxc", "cl", "lv"];
var item = person.pop();
console.log(item);   // "lv"
console.log(person.length);  // 2
```

### unshift()
> unshift()方法是在数组的头部(前端)添加任意个项并`返回数组的长度`

```javascript
var numbers = [1, 2, 3, 4, 5];
var count1 = numbers.unshift(-1, 0);
var count2 = numbers.unshift(-2);
console.log(count1, count2, numbers); // 7 8 [-2, -1, 0, 1, 2, 3, 4, 5]
```

### shift()
> shift()方法是移除数组的第一个项, 同时将数组的成都减少1, 并`返回移除的项`

```javascript
var city = ["beijing", "shanghai", "tianjin", "guangzhou"];
var item = city.shift();
console.log(item, city.length, city);
// beijing 3 ["shanghai", "tianjin", "guangzhou"]
```

### reverser()
> reverse()方法会反转数组的顺序, `返回经过排序之后的数组`

```javascript
var lxc = [1, 2, 3, 4];
lxc.reverse();
console.log(lxc);  // [4, 3, 2, 1]
```

### sort()
> sort()方法按升序排列数组项, 即最小的值排在最前面, 最大的值排在最后面。为了实现排序， sort()方法会对用每个数组项的toString()方法， 然后比较得到的字符串，以确定如何排序。即使数组的每一项都是数值， sort()方法比较的也是字符串。`该方法返回的也是经过排序之后的数组`

```javascript
var values = [0, 1, 5, 10, 15];
values.sort();
console.log(values);  // 0, 1, 10, 15, 5
```
上面的例子很多情况下不是我们想要的, 所以sort()方法 可以接收一个比较函数作为参数, 以便我们制定哪个值在哪个值前面. 比较参数接收两个参数, 如果第一个参数应该位于第二个参数之前则返回一个负数, 如果两个参数相等则返回0, 如果第一个参数应该位于第二个参数之后则返回一个正数.

```javascript
function compare(value1, value2) {
    if (value1 > value2) {
        return 1;
    } else if (value1 < value2) {
        return -1;
    } else {
        return 0;
    }
}
var numbers = [1, 2, 4, 12, 43, 3, -8, 5];
numbers.sort(compare);
console.log(numbers); // [-8, 1, 2, 3, 4, 5, 12, 43]
```
对于数值类型或者其valueOf()方法会返回数值类型的对象类型, 可以使用一个更简单的比较函数.

```javascript
function compare(value1, value2) {
    return value1 - value2;
}
var lxc = [1, 10, 3, 23, 2];
lxc.sort(compare);  // [1, 2, 3, 10, 23]
```

### concat()
> concat()方法可以基于当前数组中的所有项创建一个新数组. 具体来说, 这个方法会先创建当前数组的一个副本, 然后将接受到的参数添加到这个副本的末尾, 最后`返回新构建的数组`
如果传递给concat()方法的参数是一个或多个数组, 则该方法会将这些数组中的`每一项`都添加到结果数组中.


```javascript
var colors1 = ["red", "green", "blue"];
var colors2 = colors1.concat("yellow", ["black", "brown", ["white"]]);
console.log(colors1);   // ["red", "green", "blue"]
console.log(colors2);   // ["red", "green", "blue", "yellow", "black", "brown", Array[1]]
```

### slice()
> slice() 方法基于当前数组中的一个或多个项创建一个新数组并返回, 接收一或两个参数, 即要返回项的起始位置和结束位置. 在只有一个参数的情况下, slice()方法返回该参数指定位置开始到当前数组末尾的所有项. 如果有两个参数, 该方法返回起始位置和结束位置之间的项(`不包含结束位置的项`)
如果slice()方法的参数中有一个是负数, 则用数组长度加上该参数来确定相应的位置.(也可以这样理解,最后一项的索引为-1,往前推为-2,-3...)


```javascript
var colors1 = ["red", "green", "blue", "yellow", "black", "brown"];
var colors2 = colors1.slice(2);
var colors3 = colors1.slice(1,4);
var colors4 = colors1.slice(-1);
var colors5 = colors1.slice(-4,-2);
console.log(colors2);  // ["blue", "yellow", "black", "brown"]
console.log(colors3);  // ["green", "blue", "yellow"]
console.log(colors4);  // ["brown"]
console.log(colors5);  // ["blue", "yellow"]
```

### splice()方法
> splice()方法有多种用法: **删除** **插入** **替换**, 该方法始终返回一个数组, 该数组包含从原始数组中删除的项(如果没有删除的项, 则返回一个空数组)

 - 删除: 可以删除任意数量的项, 只需指定2个参数,即**起始位置**和**要删除的项数**.例如, `splice(0, 2)`会删除数组的前两项
 - 插入: 可以向指定位置插入任意数量的项, 只需指定三个参数, 即 **起始位置** **0(要删除的项数)** **要插入的项**. 如果要插入多个项, 可以再传入第四、第五... 任意多个项. 例如, `splice(2, 0, "red", "blue")`会从当前数组的位置2开始插入字符串"red"和"blue".
 - 替换: 可以向指定位置插入任意数量的项, 且同时删除任意数量的项, 只需指定三个参数, 即**起始位置**、**要删除的项数**、**要插入的任意数量的项**.插入的项数不必与删除的项数相等. 例如, splice(2, 1, "red", "blue")会删除当前数组位置2的项, 然后再从位置2开始插入字符串"red"和"blue"

综上所述, splice()方法接收任意多个参数, 第一个参数是要执行操作的起始位置, 第二个参数是要删除的项数, 从第三个参数以及往后的参数都是要插入的项(从起始位置开始插入)

```javascript
var colors = ["red", "green", "blue", "yellow", "black", "brown"];
var removed = colors.splice(0,1);
console.log(colors);  // ["green", "blue", "yellow", "black", "brown"]
console.log(removed);  // ["red"]

removed = colors.splice(1, 0, "white");
console.log(colors);  // ["green", "white", "blue", "yellow", "black", "brown"]
console.log(removed);  // []

removed = colors.splice(1, 1, "red", "purple");
console.log(colors);  //  ["green", "red", "purple", "blue", "yellow", "black", "brown"]
console.log(removed);  // ["white"]
```

### indexOf()方法和lastIndexOf()方法
> 这两个方法都接收两个参数, 要查找的项和(可选的)表示查找起点位置的索引. indexOf()方法从数组的开头(位置0)开始向后查找, lastIndexOf()方法从数组的末尾向前查找
这两个方法都`返回要查找的项在数组中的位置`, 或者在没找到的情况下,返回-1.在比较第一个参数与数组中的每一项时,采用的是全等操作符(===).
```javascript
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(numbers.indexOf(4));   // 3
console.log(numbers.lastIndexOf(4));   // 11
console.log(numbers.indexOf(4, 4));   // 11
console.log(numbers.lastIndexOf(4, 4));   // 3

var person = { name: "lxc" };
var people = [{ name: "lxc" }];
var morePeople = [person];
console.log(people.indexOf(person));  // -1 (person变量保存的是引用类型的值, 所以返回的是-1)
console.log(morePeople.indexOf(person));  // 0
```

### 数组的迭代方法
> JavaScript 中为数组定义了5个迭代方法. 每个方法接收两个参数: 要在每一项上运行的函数和(可选的)运行该函数的作用域对象----影响this的值.传入这些方法中的函数会接收三个参数: 数组项的值、该项在数组中的位置和数组对象本身. 根据使用的方法不同, 这个函数执行后的返回值可会也可能不会影响方法的返回值

 - every() : 对数组中的每一项运行给定函数, 如果该函数对每一项都返回true, 则返回true.
 - filter() : 对数组中的每一项运行给定函数, 返回该函数会返回true的项组成的数组.
 - forEach() : 对数组中的每一项运行给定函数, 这个方法没有返回值.
 - map() : 对数组中的每一项运行给定函数, 返回每次函数调用的结果组成的数组.
 - some() : 对数组中的每一项运行给定函数, 如果该函数对任一项返回true, 则返回true

以上方法都不会修改数组中的包含的值.

```javascript
// every
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var everyResult = numbers.every(function (item, index, array) {
    return (item > 2);
});
console.log(everyResult);  // false

// some
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var someResult = numbers.some(function (item, index, array) {
    return (item > 2);
});
console.log(someResult);  // true

// filter
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var filterResult = numbers.filter(function (item, index, array) {
    return (item > 2);
});
console.log(filterResult);  // [3, 4, 5, 4, 3]

// map
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var mapResult = numbers.map(function (item, index, array) {
    return (item * 2);
});
console.log(mapResult);  // [2, 4, 6, 8, 10, 8, 6, 4, 2]

// forEach 本质上与使用for循环迭代数组一样
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.forEach(function (item, index, array) {
    // 执行某些操作
});
```


### reduce()方法和reduceRight()方法
> 这两个方法都会迭代数组中的所有项, 然后构建一个最终返回的值. 其中, reduce() 方法从数组的第一项开始, 逐个遍历到最后. 而reduceRight()则从数组的最后一项开始, 向前遍历到第一项
这两个方法都接收两个参数: 一个在每一项调用的函数和(可选的)作为归并基础的初始值. 传入的函数接收4个参数: 前一个值、当前值、项的索引和数组对象. 这个函数返回的任何值都会作为第一个参数自动传给下一项. 第一次迭代发生在数组的第二项上, 因此第一个参数是数组的第一项, 第二个参数就是数组的第二项.

```javascript
var values = [1, 2, 3, 4, 5];
var sum = values.reduce(function (prev, cur, index, array) {
    return prev + cur;
});
console.log(sum);   // 15
```


 

