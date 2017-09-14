vertical-align:middle
是相对于兄弟行内元素的 行高 来设置的


怎样设置 居中呢？
1.可以直接设置 display:table 

然后中间的元素 设置 display:table-cell;vertical-align:middle


2.使用 行高 然后 vertical-align:middle ,这就需要 有两个元素 在同一行 


3.使用 position：absolute 

父级使用:position  relative 
子级： absolute top:0 right:0 bottom:0 left:0

4.
parentElement{
        position:relative;
    }

 childElement{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

 }
