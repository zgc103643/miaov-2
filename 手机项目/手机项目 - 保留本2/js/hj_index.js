(function(){
	(function(){
		document.addEventListener("touchstart",fnStart);
		function fnStart(ev){
			document.addEventListener("touchmove",fnMove);
			function fnMove(ev){
				var touch = ev.targetTouches[0];
				if(ev.targetTouches.length > 1 || ev.scale && ev.scale !== 1) return;
				//如果接触的点多于一个或缩放开启，跳出函数
				ev.preventDefault();
			}
			this.addEventListener("touchend",fnEnd);
			function fnEnd(){
				this.removeEventListener("touchmove",fnMove);
				this.removeEventListener("touchend",fnEnd);
			}
		}
	})();
	/*禁止拖动效果*/
	(function(D){
		var secLeft = D.getElementById("section");
		var text = secLeft.querySelector("input");
		var right = D.getElementById("right");
		var add = D.getElementById("add");
		// var secRight = right.querySelector("section");
		// var ulRight = right.querySelector("ul");
		var bgd = right.querySelector("img");
		var header = D.getElementById("header");
		var wrap = D.getElementById("wrap");
		var name = secLeft.querySelector(".name");
		var as = name.getElementsByTagName("a");
		var back = header.querySelector(".back");
		var options = secLeft.querySelector(".options");
		var dl = right.querySelector("dl");
		var hDl = dl.offsetHeight;
		var dlWrap = right.querySelector(".dlWrap");
		var close = right.querySelector(".close");
		var pName = right.querySelector("section").querySelector("p");
		var phNum = right.querySelector("ul").querySelector(".phone").querySelector("span");
		var left = -right.offsetWidth;
		var addBtn = secLeft.querySelector("#addBtn");
		//console.log(secLeft);
		
		secLeft.style.height = name.offsetHeight+name.offsetTop+"px";
		text.placeholder = `搜索${as.length}位联系人`;
		as = [...as];
		as.forEach(function(item,i,arr){
			item.href = `index.html#name=${i}`;	
			item.addEventListener("touchstart",fnTouchstart);
			function fnTouchstart(){
				var time = new Date();
				item.addEventListener("touchend",fnEnd);
				function fnEnd(){
					var timeEnd = new Date();
					var T = timeEnd - time;
					if (T < 300) {
						var hash = window.location.hash.substr(1).split("=")[1];
						mTween(wrap,{left:left},400,"linear");
						mTween(header,{left:left},400,"linear");
						bgd.src = data[i].bgd;
						pName.innerHTML = data[i].name;
						phNum.innerHTML = data[i].phoneNum;
						right.style.zIndex = 4;
						add.style.zIndex = 1;
					}
				}
				
			}
		})
		
		//back.addEventListener("touchstart",fnBack);
		function fnBack(){
			mTween(wrap,{left:0},400,"linear");
			mTween(header,{left:0},400,"linear");
		}
		options.addEventListener("touchstart",fnOptions);
		function fnOptions(){
			//alert(1);
			mTween(dlWrap,{height:hDl},400,"linear",function(){
				css(back,"opacity",0);
				css(options,"opacity",0);
			});
		}
		close.addEventListener("touchstart",fnClose);
		right.addEventListener("touchstart",fnClose,true);
		function fnClose(){
			mTween(dlWrap,{height:0},400,"linear",function(){
				css(back,"opacity",100);
				css(options,"opacity",100);
			});
		}
		addBtn.addEventListener("touchstart",fnAdd);
		function fnAdd(){
			mTween(wrap,{left:left},400,"linear");
			mTween(header,{left:left},400,"linear");
			right.style.zIndex = 1;
			add.style.zIndex = 4;
		}
	})(document);

	(function(){
		var add = document.getElementById("add");
		var section = document.getElementById("section");
		var name = section.getElementsByClassName("name")[0];

		var cancel = add.querySelector(".hj_cancel");
		var comfirm = add.querySelector(".hj_comfirm");
		var inputs = add.querySelectorAll("input");
		var as = name.getElementsByTagName("a");
		inputs = [...inputs];
		inputs[0].value = "不是人";
		inputs[3].value = "136";

		cancel.addEventListener("touchstart",fnCancel);
		function fnCancel(){
			mTween(wrap,{left:0},400,"linear");
			mTween(header,{left:0},400,"linear",function(){
				inputs.forEach(function(item,i){
					item.value = "";			
				})
			});
		}
		comfirm.addEventListener("touchstart",fnComfirm);
		function fnComfirm(){
			if (inputs[0].value == "") {
				alert("内容不可为空");
				return;
			}
			if (inputs[3].value == "") {
				alert("电话号码不可为空");
				return;
			}
			section.style.height = section.offsetHeight+(3*60)+"px";
			var ul = document.createElement("ul");
			ul.className = "fNameN";
			var li1 = document.createElement("li");
			li1.innerHTML = "New Tag";
			var li2 = document.createElement("li");
			var a = document.createElement("a");


			// var right = document.getElementById("right");
			// var bgd = right.querySelector("img");
			// var pName = right.querySelector("p");
			// var phNum = right.getElementsByClassName("phone")[0];
			// console.log(phNum);

			// a.addEventListener("touchstart",fnTouchstart);
			// function fnTouchstart(){
			// 	var time = new Date();
			// 	a.addEventListener("touchend",fnEnd);
			// 	function fnEnd(){
			// 		var timeEnd = new Date();
			// 		var T = timeEnd - time;
			// 		if (T < 300) {
			// 			var hash = window.location.hash.substr(1).split("=")[1];
			// 			mTween(wrap,{left:left},400,"linear");
			// 			mTween(header,{left:left},400,"linear");
			// 			bgd.src = data[i].bgd;
			// 			pName.innerHTML = data[i].name;
			// 			phNum.innerHTML = data[i].phoneNum;
			// 			right.style.zIndex = 4;
			// 			add.style.zIndex = 1;
			// 		}
			// 	}
			// }


			a.innerHTML = inputs[0].value;
			li2.appendChild(a);
			ul.appendChild(li1);
			ul.appendChild(li2);
			name.appendChild(ul);
			var newData = {
						name:inputs[0].value,
						phoneNum: inputs[3].value,
						bgd: `img/background${as.length%4+1}.png`
					}
			data.push(newData);
			mTween(wrap,{left:0},400,"linear");
			mTween(header,{left:0},400,"linear",function(){
				inputs.forEach(function(item,i){
					item.value = "";			
				})
			});
		}
	})();
	(function(){
		var header = document.getElementById("header");
		var sec = document.getElementById("section");
		sec.addEventListener("touchstart",fnStart,false);
		function fnStart(ev){
			
			var touch = ev.targetTouches[0];
			var startPos = {
						x: touch.pageX,
						y: touch.pageY
					}

			sec.addEventListener("touchmove",fnMove,false);
			function fnMove(ev){
				var touch = ev.targetTouches[0];
				var movePos = {
						x: touch.pageX,
						y: touch.pageY 
					}
				var secTop = movePos.y - startPos.y;
				console.log();		
				if(secTop>-30){
					secTop = -30;
				}
				if (secTop<document.documentElement.clientHeight-sec.offsetHeight-30) {
					secTop = document.documentElement.clientHeight-sec.offsetHeight-30
					//console.log(sec.offsetHeight);
				}
				sec.style.top = secTop + "px";


				sec.addEventListener("touchend",fnEnd);
				function fnEnd(ev){
					// if(secTop>0){
					// 	mTween(sec,{top:0},200,"easeBoth");
					// }
					//如果在touchend处移除函数fnStart和fnMove
					//点击效果只能使用一次
				}	
			}
			
		}
	})();
})();