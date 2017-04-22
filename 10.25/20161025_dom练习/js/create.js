(function(){
	var imgList = document.querySelector('#imgList');
	//获取页面上目标元素
		//console.log(data.length);
	for(var i = 0 ; i < data.length; i++){
	//对于data每一个子数组循环
		var ul = document.createElement("ul");
		//创建一屏的最大父级ul
		for(var j = 0; j < data[i].length; j++){
		//对数组内每一个对象循环
			var liData = data[i][j];
			//定义变量liData承载data中相对应对象
			var li = document.createElement("li");
			var imgs = document.createElement("div");
			imgs.className = "imgs";
			//创建li和imgs标签

			var a = document.createElement("a");
			var img = new Image();//创建img对象
			var gradient  = document.createElement('span');
			var title = document.createElement('strong');
			var author = document.createElement('span');
			var playIco = document.createElement('span');
			gradient.className = 'gradient';
			title.className = 'title';
			author.className = 'author';
			playIco.className = 'playIco';
			//创建各级标签并添加相应className

			img.src = liData.src;
			title.innerHTML = liData.title;
			author.innerHTML = liData.author;
			//添加相应数据
			a.appendChild(img);
			a.appendChild(gradient);
			a.appendChild(title);
			a.appendChild(author);
			a.appendChild(playIco);
			imgs.appendChild(a);
			//添加标签从属关系
			if(i==0&&j==0){
				li.id = "index";
			}
			//为第一项（大图）添加id
			li.appendChild(imgs);
			ul.appendChild(li);
		}
		imgList.appendChild(ul);
	}
}
)();