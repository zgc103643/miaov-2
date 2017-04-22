(function (){
	var wrap = document.querySelector('#wrap');
	var btns = wrap.querySelectorAll('.btn');
	var imgList = wrap.querySelector('#imgList');
	var now = 0;
	var wrapW = css(wrap,"width");
	var uls = imgList.children;
	/*var lis = imgList.getElementsByTagName('li');
	for(var i = 0; i < lis.length; i++){
		lis[i].onmouseover = function(){
			this.className = "active";
		};
		lis[i].onmouseout = function(){
			this.className = "";
		};
	}*/
	for(var i = 0; i < uls.length; i++){
	//在每一个ul中
		var lis = uls[i].children;
		for(var j = 0; j < lis.length; j++){
		//在lis每一项中
			lis[j].pIndex = i;//第几个ul下li
			lis[j].index = j;//父级第几个li
			lis[j].isCreate = false;
			lis[j].dTime = 0;
			lis[j].onmouseover = function(){
				var _this = this;
				//因定时器中this都是指window，
				//故创建_this项并令其与鼠标移入this的参数相同
				//使定时器可以借此控制当前鼠标移入当前lis的className改写
				this.className = "active";
				// 如果当前的index 不等于 "index" 并且没有创建过
				if(this.id != 'index'&&!this.isCreate){
				//如果当前不是id=index项，并且创建开关未被打开
				//即执行
				//打开开关
				//并创建执行creat函数创建下拉项
					this.isCreate = true;
					create(this,data[this.pIndex][this.index]);
				}
				/* 添加展开动画 */
				var imgs = this.children[0];
				if(this.id != 'index'){
					clearTimeout(this.dTime);
					this.dTime = setTimeout(function(){
						_this.className = "active";
						mTween(imgs,{height:272},500,"easeOut");
					},500);	
				}
				//如果该项不是id=index项
				// 即通过延时定时器下拉当前项高度
			};
			lis[j].onmouseout = function(){
				var _this = this;
				clearTimeout(this.dTime);
				if(this.id != 'index'){
				var imgs = this.children[0];
					mTween(imgs,{height:124},500,"easeOut",function(){
						console.log(this);
						_this.className = "";
					});
				}else {
					this.className = "";
				}
			};
		}
	}
	imgList.appendChild(imgList.children[0].cloneNode(true));
	css(imgList,"width",imgList.children.length*wrapW);
	btns[0].onclick = function(){
		if(now <= 0){
			now = imgList.children.length-1;
			css(imgList,"left",-now*wrapW);
		}
		now--;
		mTween(imgList,{left:-now*wrapW},800,"easeOut");
	};
	btns[1].onclick = function(){
		if(now >= imgList.children.length-1){
			now = 0;
			css(imgList,"left",-now*wrapW);
		}
		now++;
		mTween(imgList,{left:-now*wrapW},800,"easeOut");
	};
	function create(li,liData){
		var imgs = li.children[0];
		var description = document.createElement("p");
		description.className = "description";
		description.innerHTML = liData.description;
		imgs.appendChild(description);

		var div = document.createElement("div");
		var play = document.createElement('span');
		var message = document.createElement('span');
		var list = document.createElement('span');
		play.className = 'play';
		message.className = 'message';
		list.className = 'list';
		play.innerHTML = liData.play;
		message.innerHTML = liData.message;
		list.innerHTML = liData.list;
		div.appendChild(play);
		div.appendChild(message);
		div.appendChild(list);
		imgs.appendChild(div);
		
		var MVDescription = document.createElement("p");
		MVDescription.className = 'MVDescription';
		MVDescription.innerHTML = liData.MVDescription;
		imgs.appendChild(MVDescription);
	}
})();