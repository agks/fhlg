define(function(){
	function side(obj){
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
