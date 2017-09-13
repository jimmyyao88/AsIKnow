box.onclick = function(){
　　function fn(){
　　　　alert(this);
　　}
　　fn();
};

我们原本以为这里面的this指向的是box,然而却是Window

box.onclick = function(){
　　var _this = this;
　　function fn(){
　　　　alert(_this);
　　}
　　fn();
};


将this保存下来。

 
obj.call(thisObj, arg1, arg2, ...);
obj.apply(thisObj, [arg1, arg2, ...]);
两者作用一致，都是把obj(即this)绑定到thisObj，这时候thisObj具备了obj的属性和方法。
或者说thisObj『继承』了obj的属性和方法。
唯一区别是apply接受的是数组参数，call接受的是连续参数。

如果第一个参数为null,那么this指向 window


bind 的区别 在于 不会立即执行函数 而是返回一个 新函数 需要手动执行



