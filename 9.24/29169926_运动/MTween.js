var Tween = {		//声明以下各种函数曲线关系
	linear: function (t, b, c, d){
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(t, b, c, d){
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d){
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(t, b, c, d){
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d){
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p){
		if (t === 0) { 
			return b; 
		}
		if ( (t /= d) == 1 ) {
			return b+c; 
		}
		if (!p) {
			p=d*0.3; 
		}
		if (!a || a < Math.abs(c)) {
			a = c; 
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},    
	elasticBoth: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c; 
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 2.70158;  //回缩的距离
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}, 
	backBoth: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158; 
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d){
		return c - Tween['bounceOut'](d-t, 0, c, d) + b;
	},       
	bounceOut: function(t, b, c, d){
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},      
	bounceBoth: function(t, b, c, d){
		if (t < d/2) {
			return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
};
/* 当css的参数个数小于3，获取否则 设置 */
function css(el,attr,val) {				//一个包含el，attr，val三个形式参数的函数css
	if(arguments.length < 3) {	//如果变量个数小于三个，该函数即用于获取变量值
		var val  = 0;			//定义一个名为val的变量
		if(el.currentStyle) {		//对ie进行兼容的if函数
		//判断条件为是否支持样式el.currentStyle
			val = el.currentStyle[attr];	//ie中的获取元素样式数值
		} else {
			val = getComputedStyle(el)[attr];	//其它浏览器中的获取元素样式数值
		}
		if(attr == "opacity") {		//如果attr代表的属性为opcity
			val*=100;		//就将val值放大100倍，用于计算
		}
		return parseFloat(val);		//返回val的数值
	}
	if(attr == "opacity") {		//判断，如果attr的属性为opacity
								//在arguments长度不小于3时，不经过上一个函数
								//在变量个数不小于3，上一个获得函数没有运行（函数运行进程没有被return打断）的时候
								//发挥css函数的设置作用
		el.style.opacity = val/100;		//在其它浏览器中设置透明度为val/100
		el.style.filter = "alpha(opacity = "+val+")";		//在ie中设置透明度为val
	} else {
		el.style[attr] = val + "px";		//否则，该属性就是有关于长度的属性
											//在后面添加一个字符串"px"；
	}
}
function mTween(el,attr,target,time,type) {		//一个有el,attr,target,time,type五个形式参数的函数
												//用于
	var t = 0;		//声明变量t
	var b = css(el,attr); 		//声明变量b为css函数的返回值
	var c = target - b; 		//变量c为target减b
	var d = time/20; 			//运动次数为time（毫秒）/20（毫秒）
	clearInterval(el.timer);	//在每次重新加载函数的时候，清除编号为el.timer的定时器
	el.timer = setInterval(function(){		//
		t++; 	//t自增
		if(t > d) { 	//	如果t大于d（目标变化次数），即停止计时器
			clearInterval(el.timer); 
		} else {		//t增大到目标之前，不断运行每次t自增后的函数css修改目标变量后的值
			var val = Tween[type](t,b,c,d);	
			css(el,attr,val);
		}
	},20);
}