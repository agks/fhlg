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
//			alert($(".side").css("top"));
			/*var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			console.log(scrollTop);
			var top = $(".side").css("top");
			if(scrollTop >= top){
				$(".side").css("display", "block");
			}else if(scrollTop < top){
				$(".side").css("display", "none");
			}*/
		})
		$(".index").click(function(){
//			$(".side").css("top", "")
		})
		
		//seckill
		setInterval(function(){
//			获取当前时间
			var d = new Date();
			var now = d.getTime();
			//设置截止时间
			var str = "2018/7/4 17:25:00"
			var d2 = new Date(str);
			var end = d2.getTime();
			
			//时间差
			var time = end - now;
			time = time / 1000;
			var hour = 00, min = 00, sec=00;			
			if(time > 0){
				hour = Math.floor(time / 3600);
				min = Math.floor(time % 3600 / 60);
				sec = Math.floor(time  % 3600 % 60)				
			}
			if(hour < 10){
				$("#hour").html("0" + hour);
			}else{
				$("#hour").html(hour);
			}
			if(min < 10){
				$("#min").html("0" + min);
			}else{
				$("#min").html(min);
			}
			if(sec < 10){
				$("#sec").html("0" + sec);
			}else{
				$("#sec").html(sec);
			}
		}, 1000);
	})
})
