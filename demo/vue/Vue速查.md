1. 创建Vue实例
```js
new Vue({
  el: '#some-element',
  // options
})
```

2. 注册全局组件
```js
// 语法
Vue.component(tagName, options)

// 1、注册组件
Vue.component('my-component', {
  template: '<div>A custom component</div>'
})

// 2、创建根实例
new Vue({
  el: '#example'
})
```
```html
// 3、使用
<div id="example">
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
