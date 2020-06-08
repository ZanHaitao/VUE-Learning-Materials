# 开始使用 Vue

1. 引入 vue.js

    > 官网：vuejs.org

    > 开发版本：包含完整的警告和调试模式

    > 生产版本：删除了警告，体积更小

2. 引入 vue.js 后，给我们提供了一个构造函数 Vue

3. 在 js 中，`new Vue()`

4. `new Vue()` 后会返回一个 vue 实例对象，我们用变量接着它

5. `const vm = new Vue()`

6. 传递一个配置对象{} -- > `const vm = new Vue({})`

## el

> 类型： 字符串

> 全称：element（元素）

> 作用：配置控制的元素，表示 Vue 要控制的区域，值为 css 选择器
>
> ```html
> <!-- 被Vue控制的区域，我们称之为模板 -->
> <div id="app"></div>
> ```
>
> ```js
> const vm = new Vue({
>     el: '#app', // 控制id为app的元素
> });
> ```

## \$mount

-   作用和 el 一致，都是配置控制的元素，使用哪个都可以，二选一

    ```html
    <div id="app"></div>
    ```

    ```js
    const vm = new Vue({});
    vm.$mount('#app');
    ```

-   问：和 el 有什么不同？

    > 答：本质上没什么不同，\$mount 为手动挂载，在项目中有时要进行延迟挂载，比如有时要在挂载之前进行一些其他的操作，比如判断等等（但是，这样做的时候很少，比邓哥回家的次数还少，emmmmm）

## data

-   类型：对象

-   作用：存放要用到的数据，数据为响应式的

    ```js
    const vm = new Vue({
        el: '#app',
        data: {
            mrDeng: '风姿绰约、花枝招展',
        },
    });
    ```

## 插值表达式

-   使用方法： {{ }}

-   可以将 vue 中的数据填在插值表达式中，如：

    ```html
    <div id="app">{{ mrDeng }}</div>
    ```

    ```js
    const vm = new Vue({
        el: '#app',
        data: {
            mrDeng: '邓哥：风姿绰约、花枝招展',
        },
    });
    ```

-   除了填写 data 之外，还可以直接填写数据值（数字、字符串、布尔值、undefined、null、数组、对象），如:

    ```html
    <div id="app">
        {{ 5201314 }} {{ '婀娜多姿、亭亭玉立' }} {{ true }} {{ ['邓旭明', '小刘', '王小宝'] }} {{ {name: '邓旭明', age: 80, height: '140cm', weight: '100kg'} }}
    </div>
    ```

-   注意：在插值表达式中直接书写对象类型值时，不要将三个{}连在一起，这样会报错，如：

    ```html
    <div id="app">
        <!-- 这样可是不行滴 -->
        {{{name: '邓旭明', age: 80, height: '140cm', weight: '100kg'}}}
    </div>
    ```

-   还可在插值表达式中写表达式，如：

    ```html
    <div id="app">
        <!-- 运算表达式 -->
        {{ 'you' + 'me' }} {{ 10 - 5 }} {{ 100 * 7 }} {{ 1000 / 12 }}
        <!-- 逻辑表达式 -->
        {{ liu || li }} {{ deng && liu }} {{ !wang }}
        <!-- 三元表达式 -->
        {{ 1 + 1 === 3 ? '邓旭明' : '正常人' }}
        <!-- 函数调用也是表达式，也可以使用,这个以后再学哈... -->
    </div>
    ```

-   还可以填写其他的吗？不可以，No，以下这些都是不行滴：

    ```html
    <div id="app">
        <!-- 这是语句，不可以写在插值表达式中 -->
        {{ var Deng = 'shuaige'; console.log(deng) }}
        <!-- 流程控制也不可以 -->
        {{ if(Deng.looks === 'shuai'){ console.log('不可能')} }}
    </div>
    ```

-   <font color=#ba55d3>记住</font>：插值表达式中，可以写：data、js 数据、表达式，其他的想都不要想。

-   <font color=#ff4500>注意</font>，只要插值表达式中使用了数据，必须在 data 中声明过，否则会报错

    ```html
    <!-- 此时就报错啦，因为mrCheng，未在data中声明过 -->
    <div id="app">
        {{ mrCheng }}
    </div>
    ```

    ```js
    const vm = new Vue({
        el: '#app',
        data: {
            mrDeng: '邓哥：风姿绰约、花枝招展',
        },
    });
    ```

-   还有另外一种可能，使用了未被声明过的数据，不报错：

    ```html
    <!-- 此时不报错啦，why？ -->
    <!-- 在作用域上找不到，报错 -->
    <!-- 在原型链上找不到，值为undefined -->
    <!-- undefined为js基本类型值，所以就不报错啦 -->
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
    ```
