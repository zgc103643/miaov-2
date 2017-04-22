(function(D){
	var body = D.getElementsByTagName("body")[0];
	var wrap = D.getElementById("wrap");
	var left = D.getElementById("left");
	var right = D.getElementById("right");
	
	var left = css(wrap,"left");
	console.log(left);

	
	// drag();
	// function drag(){
	// 	document.addEventListener("mousedown",fnDown);
	// 	function fnDown(ev){
	// 		var startX = ev.pageX;
	// 		var startY = ev.pageY;

	// 		document.addEventListener("",fnMove);
	// 		function fnMove(ev){
	// 			var moveX = ev.pageX - startX;
	// 			var moveY = ev.pageY - startY;
	// 			if(Math.abs(moveX) > 300 && moveX > 0){
	// 				wrap.style.left = -18rem;
	// 			}
	// 		}
	// 	}		
	// }

})(document);