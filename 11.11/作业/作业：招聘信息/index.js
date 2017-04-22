(function(D){
	var wrap = D.getElementById("wrap");
	setLeft();
	leftList();
	function setLeft(){
		var left = D.getElementsByClassName("left")[0];
		var h2 = D.createElement("h2");
		h2.innerHTML = "招贤纳士";
		var leftList = D.createElement("ul");
		// for (var i = 0; i < 2; i++) {
		// 	var li = D.createElement("li");
		// 	var a = D.createElement("a");
		// 	a.innerHTML =  aData.list[i].text
		// 	li.appendChild(a);
		// 	ul.appendChild(li);
		// }
		left.appendChild(h2);
		left.appendChild(leftList);
	}

	function leftList(){
		var left = D.getElementsByClassName("left")[0];
		var leftList = left.querySelector("ul");
		leftList.className = "nav";
		var childs = leftList.children;
		aData.list.forEach(function(item,i){
			var a = D.createElement("a");
			a.innerHTML = item.text;
			// span.onclick = function(){

			// }
			leftList.appendChild(a);
		})

	}

	setRight();
	function setRight(){
		var right = D.getElementsByClassName("right")[0];
		var title = D.createElement("div");
		title.className = "title";
		var img = D.createElement("img");
		img.src = aData.sh.img;
		title.appendChild(img);
		right.appendChild(title);

		setTextSh();
		function setTextSh(){
			var info = D.createElement("div");
			info.className = "info";
			for (var i = 0; i < 2; i++) {
				var zp = D.createElement("p");
				var yq = D.createElement("p");
				zp.className = "zp";
				yq.className = "yq";
				var span1 = D.createElement("span");
				var span2 = D.createElement("span");
				var span3 = D.createElement("span");
				var a = D.createElement("a");
				a.innerHTML = "★ 职位需求："+aData.sh.text[i].zw;
				span1.appendChild(a);
				zp.appendChild(span1);
				zp.appendChild(span2);
				zp.appendChild(span3);

				for (var j = 0; j < aData.sh.text[i].info[0].l.length; j++) {
					yq.innerHTML += aData.sh.text[i].info[0].l[j];
				}

				yq.innerHTML += "[<a href='#'>查看详情</a>]";
				info.appendChild(zp);
				info.appendChild(yq);
			}
			right.appendChild(info);
		}
		
	}
})(document);
