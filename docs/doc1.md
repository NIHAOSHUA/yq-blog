---
id: doc1
title: JS相关面试题
sidebar_label: JS
---
下一篇文章 [next passage.](doc2.md) 




---

### 延迟加载JS的方式有哪些？

* 设置`<script>`属性 defer="defer" （脚本将在页面完成解析时执行）
* 动态创建 script DOM：document.createElement('script');
* XmlHttpRequest 脚本注入
* 延迟加载工具 LazyLoad

---


### 异步加载JS的方式有哪些？

* 设置`<script>`属性 async="async" （一旦脚本可用，则会异步执行）
* 动态创建 script DOM：document.createElement('script');
* XmlHttpRequest 脚本注入
* 异步加载库 LABjs
* 模块加载器 Sea.js

### JavaScript 中，调用函数有哪几种方式？

* 方法调用模式          Foo.foo(arg1, arg2);
* 函数调用模式          foo(arg1, arg2);
* 构造器调用模式        (new Foo())(arg1, arg2);
* call/applay调用模式   Foo.foo.call(that, arg1, arg2);
* bind调用模式          Foo.foo.bind(that)(arg1, arg2)();


### 简单实现 Function.bind 函数？

```javascript
  if (!Function.prototype.bind) {
    Function.prototype.bind = function(that) {
      var func = this, args = arguments;
      return function() {
        return func.apply(that, Array.prototype.slice.call(args, 1));
      }
    }
  }
  // 只支持 bind 阶段的默认参数：
  func.bind(that, arg1, arg2)();

  // 不支持以下调用阶段传入的参数：
  func.bind(that)(arg1, arg2);
```

###  列举一下JavaScript数组和对象有哪些原生方法？

* 数组：
  - arr.concat(arr1, arr2, arrn);
  - arr.join(",");
  - arr.sort(func);
  - arr.pop();
  - arr.push(e1, e2, en);
  - arr.shift();
  - unshift(e1, e2, en);
  - arr.reverse();
  - arr.slice(start, end);            
  - arr.splice(index, count, e1, e2, en);  
  - arr.indexOf(el);
  - arr.includes(el);   // ES6

* 对象：
  -  object.hasOwnProperty(prop);     
  -  object.propertyIsEnumerable(prop);
  -  object.valueOf();                 
  -  object.toString();                
  -  object.toLocaleString();          
  -  Class.prototype.isPropertyOf(object);  

### Array.splice() 与 Array.splice() 的区别？

* slice -- “读取”数组指定的元素，不会对原数组进行修改
  - 语法：arr.slice(start, end)
  - start 指定选取开始位置（含）
  - end 指定选取结束位置（不含）

 * splice 
   - “操作”数组指定的元素，会修改原数组，返回被删除的元素
   - 语法：arr.splice(index, count, [insert Elements])
   - index 是操作的起始位置
   - count = 0 插入元素，count > 0 删除元素
   - [insert Elements] 向数组新插入的元素

### JavaScript 对象生命周期的理解？

* 当创建一个对象时，JavaScript 会自动为该对象分配适当的内存
* 垃圾回收器定期扫描对象，并计算引用了该对象的其他对象的数量
* 如果被引用数量为 0，或惟一引用是循环的，那么该对象的内存即可回收

### 哪些操作会造成内存泄漏？

-  JavaScript 内存泄露指对象在不需要使用它时仍然存在，导致占用的内存不能使用或回收

-  未使用 var 声明的全局变量
-  闭包函数(Closures)
-  循环引用(两个对象相互引用)
-  控制台日志(console.log)
-  移除存在绑定事件的DOM元素(IE)