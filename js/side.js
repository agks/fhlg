define(["jquery-1.11.3.js"], function(){
	function side(){
		window.onscroll = function(){
			var scrollTop = document.documentElementscrollTop || document.body.scrollTop;
			if(scrolltop >= 70){
				obj.style.display = "block";
				obj.style.top = 70 + scrollTop + "px";
			}
		}
	}
	return side;
})
