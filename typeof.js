//js的typeof其实非常复杂,它可以用来做很多事情,但同时也有很多怪异的表现


    > typeof undefined
    'undefined'
    > typeof null // well-known bug
    'object'
    > typeof true
    'boolean'
    > typeof 123
    'number'
    > typeof "abc"
    'string'
    > typeof function() {}
    'function'
    > typeof {}
    'object'
    > typeof []
    'object'
    > typeof unknownVariable
    'undefined'
    
    
1.检查一个变量是否存在,是否有值.（用typeof 检测一个未声明的变量时不会报错）
typeof在两种情况下会返回"undefined":一个变量没有被声明的时候,和一个变量的值是undefined的时候.例如:
> typeof undeclaredVariable === "undefined" true 
> var declaredVariable; 
> typeof declaredVariable 'undefined' 
> typeof undefined 'undefined'
还有其他办法检测某个值是否是undefined:
> var value = undefined; > value === undefined true 
但这种方法如果使用在一个未声明的变量上的时候,就会抛出异常,因为只有typeof才可以正常检测未声明的变量的同时还不报错
