# Vue 速查

## 引入

```js
<script src="https://unpkg.com/vue"></script>
```
## 用法

使用模板语法声明式的将数据渲染进 DOM

```html
<div id="app">
  {{ message }}
</div>
```
```js
// 创建实例 语法
new Vue(elem, options)

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue'
  }
})
```
常用的 `options` 

- data  数据

- methods  方法

- filters  过滤器

- computed  计算属性

- watch 观察

- 

## 属性和方法

每个 Vue 实例都会代理 data 对象里的所有属性

```js
var data = { message: 'Hello Vue' }
var app = new Vue({
  el: '#app',
  data: data
})

// 注意这里是直接指向 data 对象里的属性
app.message === data.message  // true
data.message = 'Hello'
app.message   // 'Hello'
```

Vue 实例有一些实例属性和方法，相当于 js 中 `var arr = new Array()` arr 实例的属性和方法，跟上面的代理是不一样的

```js
var data = { message: 'Hello Vue' }
var app = new Vue({
  el: '#app',
  data: data
})

app.$data === data; // true
app.$data.message === data.message;   // true
app.$el === document.getElementById('app'); // true
```
不要在实例属性和方法中使用箭头函数，因为箭头函数中的 this 并不会指向实例，箭头函数绑定的是父级上下文

## 实例生命周期

生命周期钩子可以为我们提供自定义逻辑的机会

```js
var data = { message: 'Hello Vue' }
var app = new Vue({
  el: '#app',
  data: data,
  // created 就是生命周期钩子，这个钩子会在实例被创建后调用
  created: function() {
    console.log('实例已经创建好了')
  }
})
```

## 模板语法

### 插值

- 文本: Mustache 语法（双大括号）

```html
<span>Message: {{ msg }}</span>
```
- html: `v-html` 指令，相当于 `innerHTML`

```html
<!-- 将会使用someHTML值作为内容 -->
<div v-html='someHTML'></div>
```

- 属性: Mustache 不能在 HTML 属性中使用，应该使用 `v-bind` 指令

```html
<div v-bind:id='dataId'></div>
```

- javascript 表达式

```html
{{ message + '!' }}
{{ ok ? 'yes' : 'no' }}
{{ message.split('').reverse().join('') }}
<div v-bind:id="'list-' + id"></div>
<!-- 注意区分表达式与语句的区别 -->
{{ var a = 1 }}
{{ if (ok) {  return message } }}
```

### 指令

当指令的值发生改变时，将某些行为应用到 DOM 元素上

- v-bind： 绑定 Vue 实例数据到 DOM 元素属性，缩写 `:`

- v-if： 控制元素显示

- v-for： 绑定数组数据来渲染一个项目列表

- v-on： 绑定事件监听器，缩写 `@`

- v-model： 表单输入和应用状态之间的双向绑定

#### 参数

某些指令可以接收参数，在指令后面以冒号指明。比如 `v-bind:href`

#### 修饰符

用于指出一个指令应该以特殊的方式绑定。比如 `.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`

```js
<form v-on:submit.prevent="onSubmit"></form>
```

### 过滤器

用作常见的文本格式化。 过滤器只能用在两个地方: mustache 和 v-bind 表达式。放在 JavaScript 表达式的尾部，使用 "|" 指示
```html
{{ message | capitalize }}
<div v-bind:id="rawId | formatId"></div>
```
过滤器函数总是接收表达式的值作为第一个参数，因为过滤器是函数，所以可以接收参数，并且可以串联

```html
{{ message | filterA('arg1', arg2) }}
{{ message | filterA | filterB }}
```

### 示例

```html
<div id="app">
  <a v-bind:href="url">Vue china</a>
  <br>
  <span v-if="seen">控制台输入"app.seen=false"隐藏我
  </span>
  <div v-on:click="alert">click me</div>
  <ul v-for="item in list">
    <li>{{ item.text }}</li>
  </ul>
  <input v-model="message"></input>
  <br>
  <span>{{ message }}</span>
  <br>
  <span>{{ filterTest | capitalize }}</span>
</div>
```
```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'change text',
    url: 'https://cn.vuejs.org/',
    seen: true,
    list: [
      {text: 'item1'},
      {text: 'item2'},
      {text: 'item3'}
    ],
    filterTest: 'filtertest'
  },
  methods: {
    alert: function() {
      alert('you clicked me')
    }
  },
  filters: {
    capitalize: function (value) {
      if(!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})
```

## 计算属性

对于复杂逻辑，应该使用计算属性，而不是表达式

```html
<!-- 表达式 -->
<div id="app">
  {{ message.split('').reverse().join('') }}
</div>
```
```html
<!-- 计算属性 -->
<div id="app">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'computed test'
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    }
  }
})

```

### computed vs methods

```html
<!-- methods -->
<p>Reversed message: "{{ reversedMessage() }}"</p>
```
```js
methods: {
  reversedMessage: function() {
    return this.message.split('').reverse().join('')
  }
}
```

通过 methods 也可以实现相同的效果， 不同的是 methods 方法只要发生渲染，就会执行函数，而 computed 则不会，只要数据没有发生改变，多次访问 reversedMessage 计算属性， 返回的都是之前的计算结果(有缓存)，所以这种方式更好些。

### computed vs watched

```js
<!-- watch -->
var app = new Vue({
  el: '#app',
  data {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function(val) {
      this.fullName = val + ' ' + this.lastName 
    },
    lastName: function(val) {
      this.fullName = val + ' ' + this.firstName 
    }
  }
})
```

```js
<!-- computed -->
var app = new Vue({
  el: '#app',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
```

### 计算 setter

计算属性默认只有 getter，可以自己提供 setter

```js
computed: {
  fullName: {
    get: function() {
      this.firstName + ' ' + this.lastName
    },
    set: function(val) {
      var names = val.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```

## Watchers

计算属性在大多数情况下更适合， 但是有时也需要 watcher，比如在数据变化响应时，执行异步操作或开销较大的操作

## 绑定 HTML class

- 传给 `v-bind:class` 一个对象，以动态切换 class

```html
<div v-bind:class="{ active: isActive }">
<!-- 可以与原生class共存，可以在对象中传入更多属性来动态切换多个class -->
<div class="static" v-bind:class="{ active: isActive, 'text-danger': hadError }">
```

```js
data: {
  isActive: true,
  hasError: false
}
```

- 直接绑定数据里的一个对象

```html
<div v-bind:class="classObject"></div>
```

```js
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```

- 绑定对象的计算属性

```html
<div v-bind:class="classObject"></div>
```

```js
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function() {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```
- 数组语法

```html
<div v-bind:class="[activeClass, errorClass]"></div>
```
```js
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

- 根据条件切换列表中的 class

```html
<div v-bind:class="[isActive ? activeClass : '', errorClass]">
```

- 在数组中使用对象写法

```html
<div v-bind:class="[{ active: isActive }, errorClass]">
```

## 组件

```js
// 注册组件 语法
Vue.component(tagName, options)

Vue.component('my-component', {
  template: '<span>A custom component</span>'
})

// 创建根实例
new Vue({
  el: '#app'
})
```
```html
<!-- 使用 -->
<div id="app">
  <my-component></my-component>
</div>
```


3. 局部注册
```js
// 通过实例选项注册
var Child = {
  template: '<div>A custom component!</div>'
}

new Vue({
  el: '#example',
  components: {
    // <my-component> 将只在父模板可用
    'my-component': Child
  }
})
```
4. 组件中 `data` 选项必须是函数，看示例理解为什么
```html
<div id="example">
  <simple-counter></simple-counter>
  <simple-counter></simple-counter>
  <simple-counter></simple-counter>
</div>
```

```js
var data = { counter: 0 }

Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{counter}}</button>',
  // 虽然这里的 `data` 是一个函数，但是其实他们引用的都是同一个 `data` 对象，相当于 data: data
  data: function () {
    return data
  }
})

new Vue({
  el: '#example'
})
```

```js
// 正确的形式
Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{counter}}</button>',
  data: function () {
    return {
      counter: 0
    }
  }
})
```

5. 父子组件通信，父组件 `props down`， 子组件 `events up`
```js
// 子组件通过 props 选项声明期望使用的父组件的数据
Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 就像 data 一样，prop 可以用在模板内
  // 同样也可以在 vm 实例中像“this.message”这样使用
  template: `<span>{{ message }}</span>
})
```
```html
// 使用
<child message:"hello"></child>
```

6. 动态 prop
```html
<div>
  <input v-model="parentMsg">
  <br>
  <child v-bind:my-message="parentMsg"></child>
</div>

```