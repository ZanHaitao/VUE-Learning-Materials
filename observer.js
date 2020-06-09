const data = {
    name: '张三',
    age: 19,
    likes: {
        book: ['老人与海', '三国演义', '水浒传'],
        eat: ['鸡腿', '牛奶', '火腿'],
        test: 'aaa',
    },
};

const arrayPrototype = Array.prototype;
const arrayMetheds = Object.create(arrayPrototype);
['push', 'pop', 'shift', 'unshift', 'sort', 'splice', 'reverse'].forEach((method) => {
    arrayMetheds[method] = function () {
        arrayPrototype[method].call(this, ...arguments);
        render();
    };
});

function $set(data, key, value) {
    if (Array.isArray(data)) {
        data.splice(key, 1, value);
        return;
    }
    defineReactive(data, key, value);
    render();
}

function $delete(data, key) {
    if (Array.isArray(data)) {
        data.splice(key, 1);
        return;
    }
    delete data[key];
    render();
}

function defineReactive(data, key, value) {
    observer(value);
    Object.defineProperty(data, key, {
        get() {
            console.log('读取');
            return value;
        },
        set(val) {
            console.log('设置');
            value = val;
            render();
        },
    });
}

function observer(data) {
    if (Array.isArray(data)) {
        data.__proto__ = arrayMetheds;
        return;
    }
    if (typeof data === 'object') {
        for (const key in data) {
            defineReactive(data, key, data[key]);
        }
    }
}

function render() {
    console.log('页面渲染了！');
}

observer(data);

data.name = '李四';
console.log(data.name);

data.likes.test = '哈哈';
console.log(data.likes.test);

data.likes.book[1] = 'hh';
console.log(data);

data.likes.book.unshift('123');
console.log(data.likes.book);

$set(data.likes.book, 2, '哈哈哈');
console.log(data.likes.book);

$set(data.likes, 'test', '哈哈');
console.log(data.likes);

$delete(data.likes.book, 0);
console.log(data.likes.book);

$delete(data.likes, 'test');
console.log(data.likes);
