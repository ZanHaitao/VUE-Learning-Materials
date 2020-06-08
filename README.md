# vue 的响应式-1

-   数据变化，页面就会重新渲染

-   怎么更改数据？so easy

```html
<div id="app">
    {{ mrDeng }}
</div>
```

```js
const vm = new Vue({
    el: '#app',
    data: {
        mrDeng: '邓哥：风姿绰约、花枝招展',
    },
});
vm.mrDeng = '手如柔荑、肤如凝脂'; // 见证奇迹的时刻，页面变化啦
```

-   问：为什么 data 会直接出现在 vm 实例对象中咧？

> 答：当创建 vue 实例时，vue 会将 data 中的成员代理给 vue 实例，目的是为了实现响应式，监控数据变化，执行某个监听函数（怎么实现的？想一想，提示：Object.defineProperty，试着实现一下）

-   问：实例中除了 data 数据外，其他东西是啥子？

> 为了防止名称冲突。因为会将 data 中数据代理给 vue，假如说我们自己写的 data 名称和 vue 中自带的属性冲突了，那么就会覆盖 vue 内部的属性，所以 vue 会把自己内部的属性成员名称前加上\$或\_，如果加上的是\$，代表是我们可以使用的，如果加上的是\_，是 vue 自己内部使用的方法或属性，我们不需要调用

-   更改的数据必须是存在的数据，否则不能重新渲染页面，因为他监听不到，如：

```html
<!-- 即使更改了数据，也不会重新渲染页面 -->
<div id="app">
    {{ mrDeng.wife }}
</div>
```

```js
const vm = new Vue({
    el: '#app',
    data: {
        mrDeng: {
            name: '邓旭明',
            age: 80,
            height: '140cm',
            weight: '100kg',
        },
    },
});

vm.mrDeng.wife = 'liu';
```

-   更改的数据必须已渲染过的数据，否则从性能角度考虑，不会重新渲染页面，如：

```html
<!-- 即使更改了数据，也不会重新渲染页面 -->
<div id="app">
    {{ mrDeng.wife }}
</div>
```

```js
const vm = new Vue({
    el: '#app',
    data: {
        msg: '邓哥：风姿绰约、花枝招展',
        mrDeng: {
            name: '邓旭明',
            age: 80,
            height: '140cm',
            weight: '100kg',
        },
    },
});

vm.mrDeng.wife = 'liu';
vm.msg = '邓哥：手如柔荑、肤如凝脂';
```

-   更改数据后，页面会立刻重新渲染吗？

> vue 更新 DOM 的操作是异步执行的，只要侦听到数据变化，将开启一个异步队列，如果一个数据被多次变更，那么只会被推入到队列中一次，这样可以避免不必要的计算和 DOM 操作。

> 同步执行栈执行完毕后，会执行异步队列

```html
<div id="app">{{ msg }}</div>
```

```js
const vm = new Vue({
    el: '#app',
    data: {
        msg: '杉杉',
    },
});
vm.msg = '杉杉超美的';
console.log(vm.msg); // 杉杉超美的，此时数据已更改
console.log(vm.$el.innerHTML); // 杉杉。此时页面还未重新渲染
```

## vm.\$el

-   值为被 Vue 控制的元素（或者说，Vue 挂载的元素）

## vm.\$nextTick & Vue.nextTick

-   如何在更改数据后，看到渲染后的页面上的值？

> 答：利用 vm.\$nextTick 或 Vue.nextTick，在页面重新渲染，DOM 更新后，会立刻执行 vm.\$nextTick

```html
<div id="app">{{ msg }}</div>
```

```js
const vm = new Vue({
    el: '#app',
    data: {
        msg: '杉杉',
    },
});
vm.msg = '杉杉超美的';
console.log(vm.msg); // 杉杉超美的，此时数据已更改
// 1. 使用vm.$nextTick
vm.$nextTick(() => {
    console.log(vm.$el.innerHTML); // 杉杉超美的
});
// 2. 使用Vue.nextTick
Vue.nextTick(() => {
    console.log(vm.$el.innerHTML); // 杉杉超美的
});
```

-   vm.nextTick 和 Vue.nextTick 还可以作为 Promise 使用

```html
<div id="app">{{ msg }}</div>
```

```js
const vm = new Vue({
    el: '#app',
    data: {
        msg: '杉杉',
    },
});
vm.msg = '杉杉超美的';
// 1. 使用vm.$nextTick
vm.$nextTick().then(() => {
    console.log(vm.$el.innerHTML); // 杉杉超美的
});
// 2. 使用Vue.nextTick
Vue.nextTick().then(() => {
    console.log(vm.$el.innerHTML); // 杉杉超美的
});
```

-   vm.\$nextTick 和 Vue.nextTick 的区别？

> Vue.nextTick 内部函数的 this 指向 window

```js
Vue.nextTick(function () {
    console.log(this); // window
});
```

> vm.\$nextTick 内部函数的 this 指向 Vue 实例对象

```js
vm.$nextTick(function () {
    console.log(this); // vm实例
});
```

-   好奇 nextTick 是怎么实现的吗？

-   异步任务分为宏任务（macro）和微任务（micro）

-   宏任务比较慢（如 setTimeout 等），微任务比较快（如 Promise.then()等）

-   微任务在前，宏任务在后（eventloop，事件环）

    ```js
    // 控制台打印顺序：promise > timeout
    setTimeout(() => {
        console.log('timeout');
    }, 0);
    Promise.resolve().then(() => {
        console.log('promise');
    });
    ```

-   在 nextTick 的实现源码中，会先判断是否支持微任务，不支持后，才会执行宏任务

    ```js
    if (typeof Promise !== 'undefined') {
        // 微任务
        // 首先看一下浏览器中有没有promise
        // 因为IE浏览器中不能执行Promise
        const p = Promise.resolve();
    } else if (typeof MutationObserver !== 'undefined') {
        // 微任务
        // 突变观察
        // 监听文档中文字的变化，如果文字有变化，就会执行回调
        // vue的具体做法是：创建一个假节点，然后让这个假节点稍微改动一下，就会执行对应的函数
    } else if (typeof setImmediate !== 'undefined') {
        // 宏任务
        // 只在IE下有
    } else {
        // 宏任务
        // 如果上面都不能执行，那么则会调用setTimeout
    }
    ```

-   曾经 vue 用过的宏任务

    -   MessageChannel 消息通道 宏任务
