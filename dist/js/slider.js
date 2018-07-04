define(["tool"], function(tool){
	
	class Slider{
		constructor(id){
			this.ele = tool.$(id);
			this.oUllis = tool.$get(tool.$get(this.ele, "ul")[0], "li");
			this.num = this.oUllis.length;
			
			this.oOllis = this.createEle();
			this.indexA = 0;
			this.slide();
			//获取左右按钮
			this.ltBtn = tool.$("ltBtn");
			this.rtBtn = tool.$("rtBtn");
			this.addEvent();
			this.timer = null;
			this.autoPlay();
		}
		createEle(){
			//ol
			let arrLis = [];
			let ol = tool.$create("ol");
			for(let i = 0; i < this.num; i++){
				let li = tool.$create("li");
				ol.appendChild(li);
				arrLis.push(li);
			}
			this.ele.appendChild(ol);
			//按钮
			let leftSpan = tool.$create("span");
			leftSpan.id = "ltBtn";
			this.ele.appendChild(leftSpan);
			let rightSpan = tool.$create("span");
			rightSpan.id = "rtBtn"; 
			this.ele.appendChild(rightSpan);
			
			return arrLis;
		}
		slide(){
			for(let i = 0; i < this.num; i++){
				this.oUllis[i].style.display = "none";
				this.oOllis[i].style.background = "black";
			}
			this.oUllis[this.indexA].style.display = "block";
			this.oOllis[this.indexA].style.background = "#ff5d3e";
		}
		addEvent(){
			this.ltBtn.onclick = function(){
				this.indexA--;
				if(this.indexA == -1){
					this.indexA = this.num - 1;
				}
				this.slide();
			}.bind(this);
			this.rtBtn.onclick = function(){
				this.indexA++;
				if(this.indexA == this.num){
					this.indexA = 0;
				}
				this.slide();
			}.bind(this);
			//小长条点击事件
			for(let i = 0; i < this.num; i++){
				this.oOllis[i].onclick = function(){
					this.indexA = i;
					this.slide();
				}.bind(this);
			}
		}
		autoPlay(){
			this.rtBtn.style.display = "none";
			this.ltBtn.style.display = "none";
			
			this.timer = setInterval(() => {
				this.indexA++;
				if(this.indexA == this.num){
					this.indexA = 0;
				}
				this.slide();
			}, 2000);
			//大盒子移入事件
			this.ele.onmouseover = function(){
				this.rtBtn.style.display = "block";
				this.ltBtn.style.display = "block";
				clearInterval(this.timer);
			}.bind(this);
			
			this.ele.onmouseout = function(){
				this.autoPlay();
			}.bind(this);
		}
	}
	return Slider;
})
