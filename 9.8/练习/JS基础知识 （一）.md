# JS基础知识 （一）

标签（空格分隔）： ECMAScript

---

一个页面由HTML来搭建结构，由CSS来控制页面结构的样式。JS是用来做页面和用户之间的交互的。

## JS由哪几个部分组成
> * 1 ECMACript
> * 2 BOM browser object model
> * 3 DOM document object model

## ECMAScript
> 1.document.getElementById('id名')
> 2.如何操作属性（对属性的读和写）
     . 或者 [] 凡是能用.的地方都能用[],但是能用[]的时候不一定能用 .
> 3.鼠标事件，还有键盘事件
    onclick  onmouseover  onmouseout  
    onmouseenter onmouseleave
    键盘事件
> 4. 函数 ： 如何声明函数 ？ 
            function fn(){}
            var fn = function (){}; //函数表达式
            function (){}
> 5. 函数的调用？
        直接调用 fn();
        box.onclick = fn(){};
```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<div id="box" style="color: red;"></div>
		<script>
			document.getElementById('box').style['color'] = 'yellow';
			alert(document.getElementById('box').style['color']);
		</script>
	</body>
</html>

```
### ==  和 ===
1 一个等号 是赋值 把等式右边的值赋给等号左边
2 二个等号 是比较操作  会比较等式两边的值是否相等，
    如果是一个字符串 数字  和 一个 真正的数组做比较，会把字符串数字转换成真正的数字，然后再做比较；
3 三个等号，不但会比较值是否相等，还会比较类型是不是同一个。如果值相等，类型不同，也会返回 false；

###  ++ --
var a = 1;
a = a + 1;   ||  a = 1 + a; || a += 1; || a++ || ++a;

a++ 是后自增  ++a 是后自增  平时使用的时候没有任何区别，只有当在= 赋值的时候会有区别，a++ 会先赋值再自增，++a会先自增后赋值；


### 变量的声明
JS中的标识符 ： 变量名  函数名 还有函数的参数名
变量的声明 用关键字 var 

变量的命名规则： 不能使用关键字作为变量名，第一个字符不能用数字和特殊符号（除了$）,可以用下划线_,由数组字母下划线组成。JS严格区分大小写。
建议大家在给变量命名的时候，遵循 驼峰命名法 例如getElementById。
### if(){}  if(){}else{} if(){}else if(){}
if(这里面放判断条件){
    条件成立的时候执行的代码；
}else{
    条件不成立的时候执行的代码；
}
if判断条件会把你写的代码转化为布尔值
true 和 false

注意：判断条件 不能使用 src  颜色  href

### innerHTML
如果写成  元素.innerHTML  就是获取这个元素内的所有内容
如果写成 元素.innerHTML = 'xxxx'; 就是像这个元素内添加内容；
innerHTML的工作过程，会先清空标签内的多少有内容，然后再添加。同样的cssText;
```
<style>
#box {
	width: 100px;
	height: 100px;
	background: red;
}
</style>
</head>
<body>
<div id="box" style="background: blue;"></div>
<script>
document.getElementById("box").style.cssText = 'width: 200px;'
</script>
</body>
```
###字符串类型
字符串是一种简单的数据类型，由0个或者多个16位Unicode编码组成的字符集，放在一对儿 '' 或者 ""；
true  和 'true'   1 和 '1'

同样，数字 也是 一种简单的数据类型。

+ 当两个数字使用 + 的时候做加法运算
  当任意的数据类型 + 一个字符串的时候 做字符串链接
除了 + 其他的运算符 -  % 只能用来数字运算 * / 可以把一个由数字组成的字符串最快的转换为 数字

### 数组
学的第一个 复杂的数据类型 
1 数组的定义： var arr = ['a','b',1];
2 如何使用数组 比如：获取数组的第一个元素 arr[0]
    数组有一个属性 length 代表数组的长度（数组里面有多少个元素）
    想获取到最后一个 arr[length - 1];

### for循环 
1.为什么要使用for循环？ 可以帮助咱们去做重复相同的事情。
```
var lis = document.getElementsByTagName('li');
for(var i=0; i<lis.length; i++){
	lis[i].onclick = function (){
		this.style.background = 'red';
	}
}
// var i = 0; 是for循环的初始化条件
// i<lis.length 是循环的条件 如果条件满足就执行大括号里面的代码，如果不满足就跳出循环
//i++ 当大括号里面的代码执行完之后 i再去自增
//i++之后 接着做判断 直到条件不成立的时候 跳出循环
```
### this 关键字
1.使用场景：放在函数里，需要获取调用函数的对象的时候。
2.this代表谁？ 在全局下 this 代表 window ，如果在函数内，谁调用 this 就代表谁；

### 自定义属性
就是给每个元素身上存一个变量，用来存储一个值；
可以存储任何需要的值 
```
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
<style>
.wrap {
	width: 300px;
}
ul {
	display: none;
}
h2 {
	background: #f88;
}
.active {
	background: red;
}
</style>
<script>
window.onload = function (){
	var h2s = document.getElementsByTagName('h2');
	var uls = document.getElementsByTagName('ul');
	for(var i=0; i<h2s.length; i++){
		h2s[i].index = i;
		h2s[i].flag = true;
		h2s[i].onclick = function (){
			if(this.flag){
				this.className = 'active';
				uls[this.index].style.display = 'block';
			}else{
				this.className = '';
				uls[this.index].style.display = '';
			}
			this.flag = !this.flag;
		};
	}
	
	//ele.abc = 1;
	//var a = ele.abc;
    //怎么定义的 怎么 去使用
};
</script>
</head>
<body>
<div class="wrap">
<h2>1111</h2>
<ul>
	<li>aaa</li>
	<li>bbb</li>
	<li>cccc</li>
</ul>
<h2>222</h2>
<ul>
	<li>aaa</li>
	<li>bbb</li>
	<li>cccc</li>
</ul>
<h2>222</h2>
<ul>
	<li>aaa</li>
	<li>bbb</li>
	<li>cccc</li>
</ul>
</div>
</body>
</html>
```
### 取模 %
就是小学的求余数
```
window.onload = function (){
	var arr = [1,2,3,4,5];
	var n = 0;
	document.onclick = function (){
		n++;
		console.log(n);
		n %= arr.length;  0/5 0 1%5 1 ..... 5%5 0 6%5 1
		console.log(n)
	}
};
```