define(function(){
	//闭包函数
	//根据id获取对象
	function $(id){
		return document.getElementById(id);
	}
	//根据标签名获取指定对象下的所有元素
	function $get(obj, tagName){
		if(typeof obj == "object"){
			return obj.getElementsByTagName(tagName);
		}else if(typeof obj == "string" && $(obj)){
			return $(obj).getElementsByTagName(tagName);
		}
	}
	//创建对象
	function $create(tagName){
		return document.createElement(tagName);
	}
	//对外创建接口
	return {
		$: $,
		$get: $get,
		$create: $create
	}
})
