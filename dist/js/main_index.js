//配置依赖的路径
require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"cookie": "jquery.cookie",
		"slider": "slider"
	}/*,
	shim: {
		//设置依赖关系
		"cookie": ["jquery"],
		"slider": ["jquery"],
	}*/
})
//引入依赖的文件
require(["jquery", "cookie", "slider"], function($, cookie, Slider){
	$(function(){
		//轮播
		new Slider("slider");
		//顶部悬浮
		$(window).scroll(function(){
			$(".side").css({position: "fixed", right: 43, top: 70});
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			console.log(scrollTop);
			var top = $(".side").css("top");
			if(scrollTop >= top){
				$(".side").css("display", "block");
			}else if(scrollTop < top){
				$(".side").css("display", "none");
			}
		})
	})
})
