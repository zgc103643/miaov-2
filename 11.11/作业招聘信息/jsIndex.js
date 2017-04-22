(function(D){
	var search = window.location.search.substr(1);
	var lx = getSearchValue("s") || "sh";
	var hash = window.location.hash.substr(1).split("=")[1] || 1;
	//var n = Math.ceil(aData[lx].text.length/2);
	//获得并截取当前页面的search值和hash值
	
	setLeft();
	setRightImg();
	rightList(hash);
	function setLeft(){
		var leftList = D.querySelector(".left").querySelector(".nav");
		var childs = leftList.children;
		aData.list.forEach(function(item,i){
			var a = D.createElement("a");
			a.className = "nav_i";
			a.innerHTML = item.text;
			a.addEventListener("click",function(){
				window.location.search = `s=${item.lx}`;
			})
			leftList.appendChild(a);
		});

		if (search) {
			aData.list.forEach(function(item,i){
				//console.log(getSearchValue(sw));
				if(getSearchValue("s") == item.lx){
					childs[i].className = "nav_i active";
				}
			})
		} else {
			childs[0].className = "nav_i active";
		}

	}
	function setRightImg(){
		var img = D.querySelector(".info").querySelector("img");
		img.src = aData[lx].img;
	}
	
	function rightList(n) {
		var list = D.querySelector(".list");
		var str = "";
		for (var i = 2*n-2 ; i < 2*n; i++) {
			var data = aData[lx].text[i];
			str += `
					<div class="list_i">
					<div class="head">
					<span>
					<a href="">★ 职位需求：${data.zw}</a>
					</span>
					<span>需求人数：${data.rs}名</span>
					<span>${data.sj}</span>
					</div>
					<p class="content">
					${data.info[0].l.join("")}...[<a href="#">查看详情</a>]
					</p>
					</div>
					`
		}
		list.innerHTML = str;
	}
	rightPages();
	function rightPages(){
		pages = D.querySelector(".pages");
		var childs = pages.children;
		var n = Math.ceil(aData[lx].text.length/2);
		for (var i = 0; i < n; i++) {
			a = D.createElement("a");
			a.innerHTML = i+1;
			a.href = `#p=${i+1}`;
			pages.appendChild(a);
		}
		var as = pages.querySelector("a");
		childs[hash-1].className = "active";
		window.onhashchange = function(){
			hash = window.location.hash.substr(1).split("=")[1] || 1;
			console.log(hash);
			for (var i = 0; i < childs.length; i++) {
			 	childs[i].className = "";
			}
			childs[hash-1].className = "active";
			rightList(hash); 
		}
	}


	function getSearchValue(key){
		if (!search) {
			return false;
		}
		if (search.indexOf("&") != -1) {
			arr = search.split("&");
			arr.forEach(function(item,i){
				var arr = item.split("=");
				if (arr[0] == key) {
					return arr[1];
				}
			})
		} else {
			var arr = search.split("=");
			if (arr[0] == key) {
				return arr[1];
			}
		}
		return false;
	}
})(document);