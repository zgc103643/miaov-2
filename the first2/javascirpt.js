(function(){
	listOut();
	//小屏时，顶部菜单弹出
	//和菜单按键变化
	function listOut(){
		$header = $('#header');
		$list = $header.find('.list');
		$headerList = $('.headerList');
		$span = $headerList.children();
		var isOut = true;
		$headerList.on('click',function(){
			isOut = !isOut;
			if (isOut) {
				$list.animate(
					{
						right: -200
					},
					{
						duration:400,
			  			easing:'swing'
			  			/*只有linear和swing两个值，
			  			  其它效果需要插件添加*/
					}			
				);
				// $span.eq(0).animate(
				// 	{
	  	// 				transform: 'rotateX(90deg)' 
				// 	},
				// 	{
				// 		duration:400,
		  // 				easing:'swing'
				// 	}
				// );
			} else {
				$list.animate(
					{
						right: 0
					},
					{
						duration:400,
			  			easing:'swing'
			  			/*只有linear和swing两个值，
			  			  其它效果需要插件添加*/
					}			
				);
			}
		});
	};

	headerWrap();
	//header黄色download块，随滚轮位置伸出缩回
	function headerWrap(){
		var $body = $('body');
		var $download = $('#header').find('.download');
		var $banner = $('.banner');
		
		$body.on('wheel',function(ev){
			var top = $body.scrollTop();

			console.log(top);
			if (top > 1000) {
				$download.animate(
					{
						width: 154
					},
					{
						detation: 0,
						easing: "linear"
					}
						);
			} else {
				$download.animate(
					{
						width: 0
					},
					{
						detation: 0,
						easing: "linear"
					}
				);
			}
		});	
	}


	
	
	

})();