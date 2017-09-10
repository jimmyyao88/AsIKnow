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
