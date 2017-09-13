//闭包

//闭包就是能够读取其他函数内部变量的函数


　function f1(){
　　　　var n=999;
　　　　function f2(){
　　　　　　alert(n); 
　　　　}
　　　　return f2;
　　}
　　var result=f1();
　　result(); // 999
  
  
  //f2 就是闭包
  
  
  //它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。
  
  for(var i=0;i<10;i++){
    setTimeout(function(){
      console.log(i)
    },1000)
  }
  
  //打印结果是 输出10次数字 10
// 匿名函数只是在引用 外部变量i


//模拟私有变量

function Counter(start){
  var count = start
  retrun {
    increment:function(){
      count++
    },
    get:function(){
      return count
    }
  }
}

var foo = Counter(4)
foo.increment()
foo.get()
