// let const 拥有块级作用域
//

//首先需要明确的是let、const、var都是用来定义变量的 
//在ES6之前，我们一般都用var来定义变量，例如 ：

function test(){
    var i=1;
    console.log(i);
    console.log(j);
    var j=2;
}
test();
console.log(i);
//在上面的代码中，我们可以预计到第一个console输出的是1，第二个由于变量提升输出的是undefine,而不是产生ReferenceError错误，第三个输出的还是1；也就是说在函数中定义的一个变量，在函数外部仍然是可以使用的，那么我们再来看看这一段代码：

function test(){
    let i=1;
    console.log(i);
    console.log(j);
    let j=2;
}
test();
console.log(i);
//执行完后，我们会发现第一个console仍然输出了1，第二个和第三个产生了ReferenceError错误！对比之下我们会发现let的作用域比var更加严格了，有点类似于Java中的变量定义，1、必须先定义再使用，2、有着严格的作用域，变量只作用域当前隶属的代码块

//在新的ES6标准中let完全可以替代var,在ES6中另外一个定义变量的关键字是 const,const 代表一个值的 常量索引 ，也就是说，变量名字在内存中的指针不能够改变，但是指向这个变量的值 可能 改变。例如：

const names=[] ;
names.push(“1”) ;
console.log (names) ;

//在if 中

if(true){
    var foo = 'foo'
    let foo2 = 'foo2'
}

console.log(foo) //foo
console.log(foo2) //unreference error foo2 is undefined

//const 必须初始化
//const 不能整个的修改掉 但是可以改一部分
//我们创建了一个拥有常量索引的数组变量，然后添加值到这个数组中，但是并不改变它的索引，所以上面的代码完全可以运行。 
//但是当我们想修改索引到一个新的数组中，就会产生一个错误TypeError：

//数组
const names = [ ] ;
names=[];
//Uncaught TypeError: Assignment to constant variable.
//number或String
const i=1;
i=2;
//Uncaught TypeError: Assignment to constant variable.
