　在ES6之前，JavaScript没有块级作用域(一对花括号{}即为一个块级作用域)，只有全局作用域和函数作用域。变量提升即将变量声明提升到它所在作用域的最开始的部分。
 上个简历的例子如：
 ``
cconsole.log(global); // undefined
var global = 'global';
console.log(global); // global
 
function fn () {
　　console.log(a); // undefined
　　var a = 'aaa';
　　console.log(a); // aaa
}
fn();
``

二、函数提升

　　js中创建函数有两种方式：函数声明式和函数字面量式。只有函数声明才存在函数提升！如:

1
2
3
4
console.log(f1); // function f1() {}   
console.log(f2); // undefined  
function f1() {}
var f2 = function() {}
　　只所以会有以上的打印结果，是由于js中的函数提升导致代码实际上是按照以下来执行的：

1
2
3
function f1() {} // 函数提升，整个代码块提升到文件的最开始<br>　　　　　console.log(f1);   
console.log(f2);   
var f2 = function() {}

