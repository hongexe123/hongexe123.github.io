// 定义存放生成随机数的数组 
var array = new Array();
// 循环N次生成随机数 
for (var i = 0; i < 10; i++) {
    // 只生成10个随机数 
    if (array.length < 10) {
        generateRandom(10);
    } else {
        break;
    }
}
// 循环遍历随机数数组 
/*for(var i = 0 ; i < array.length; i++){ 
     alert(array[i]); 
} */
// 生成随机数的方法 
function generateRandom(count) {
        var rand = parseInt(Math.random() * count);
        for (var i = 0; i < array.length; i++) {
            if (array[i] == rand) {
                return false;
            }
        }
        array.push(rand);
    }
	
//倒计时
var timeline = 300;
var js;
function fun_timedown(time) {
    if (time == 'undefined') {
        time = 60;
    }
    $("#timedown").html(time + "秒");
    timeline = timeline - 30;
    $("#process").animate({
        width: timeline + "px"
    })

    time = time - 1;
    if (time >= 0) {
        js = setTimeout("fun_timedown(" + time + ")", 1000);
    } else {
        alert('倒计时结束！');
    }
}
var result = parseInt(Math.random() * 3);
$(document).ready(function () {
	
	ggl.init(document.getElementById('myCanvas'),454, 193, 'images/prize'+result+'.jpg');
    fun_timedown(10);
    $("#q" + array[0]).fadeIn();
    $("#q" + array[0]).children(".dd").click(function () {
        $("#q" + array[0]).hide();
        $("#q" + array[1]).fadeIn();
    });
	for(var i = 0 ; i < array.length; i++){ 
    $("#q" + array[i]).children(".cd").click(function () {
        clearTimeout(js)
    });
	}
});



var ggl = {
	disObj:null,
	tempObj:null,
	drawObj:null,
	showObj:null,
	backImg:null,
	width:0,
	height:0,
	mouseDown:false,
	mouseMove:false,
	build:function(){
		var disCtx = this.disObj.getContext('2d');
		var tempCtx = this.tempObj.getContext('2d');
		var drawCtx = this.drawObj.getContext('2d');
		var showCtx = this.showObj.getContext('2d');
		this.tempObj.width = this.tempObj.width;
		tempCtx.drawImage(this.drawObj,0,0);
		tempCtx.globalCompositeOperation = 'source-atop';
		tempCtx.drawImage(this.disObj,0,0);
		showCtx.fillStyle = '#850b0b';
		showCtx.fillRect(0,0,this.width,this.height);
		showCtx.drawImage(this.tempObj,0,0);
	},
	erase:function(canv, x, y, fresh){
		var ctx = canv.getContext('2d');
		ctx.fillStyle='#ffffff';
		ctx.lineWidth = 20;
		ctx.lineCap = ctx.lineJoin = 'round';
		if (fresh) {
			ctx.beginPath();
			ctx.moveTo(x+0.01, y);
		}
		ctx.lineTo(x, y);
		ctx.stroke();
	},
	handleEvent:function(e){
		switch(e.type) {
			case "mousedown":
			case "touchstart":
				this.mouseDownEvt(e);
				break;
			case "mousemove":
			case "touchmove":
				this.mouseMoveEvt(e);
				break;
			case "mouseup":
			case "touchend":
				this.mouseUpEvt(e);
				break;
		}
	},
	mouseDownEvt:function(e){
		this.mouseDown = true;},
	mouseMoveEvt:function(e){
		if(!this.mouseDown) {
			return true;
		}
		if(e.cancelable) {
			e.preventDefault();
		}
		var local = this.getLocalCoords(this.showObj, e);
		if(!this.mouseMove) {
			this.erase(this.drawObj, local.x, local.y, true);
			this.mouseMove = true;
		} else {
			this.erase(this.drawObj, local.x, local.y, false);
		}
		this.build();
		return false;
	},
	mouseUpEvt:function(e){
		this.mouseDown = false;
		this.mouseMove = false;
		var ctx = this.tempObj.getContext('2d');
		var data=ctx.getImageData(0,0,this.width,this.height).data;
		var j;
		var c=0;
		for(var i=0,j=0;i<data.length;i+=4){
			if(data[i] && data[i+1] && data[i+2] && data[i+3]){
				j++;
			}
		}
		if(j>=this.width*this.height*0.5){
			if(result==0){
			alert("恭喜0！")
			}else if(result==1){
				alert("恭喜1！")
			}else if(result==2){
			    alert("恭喜2！")	
				}
		}
	},
	getLocalCoords:function(elem, ev) {
		var ox = 0, oy = 0;
		var first;
		var pageX, pageY;
		while (elem != null) {
			ox += elem.offsetLeft;
			oy += elem.offsetTop;
			elem = elem.offsetParent;
		}
		if (ev.hasOwnProperty('changedTouches')) {
			first = ev.changedTouches[0];
			pageX = first.pageX;
			pageY = first.pageY;
		} else {
			pageX = ev.pageX;
			pageY = ev.pageY;
		}
		return {'x': pageX - ox, 'y':pageY-oy};
	},
	setResult:function(msg){
		var disCtx = this.disObj.getContext('2d');
		if(!this.backImg) {
			disCtx.fillStyle="#19eb37";
			disCtx.fillRect(0,0,this.width,this.height);
			disCtx.fillStyle="#822a19";
		} else {
			disCtx.drawImage(this.backImg,0,0);
		}
		disCtx.textBaseline = 'top';
		disCtx.font='normal 30px "Microsoft YaHei","Helvetica Neue", Helvetica, STHeiTi, sans-serif';
		var len = disCtx.measureText(msg).width;
		var sx = parseInt((this.width-len)*0.5);
		disCtx.strokeText(msg, sx, 70);
	},
	reset:function(){
		this.drawObj.width = this.drawObj.width;
		this.disObj.width = this.disObj.width;
		this.build();
	},
	init:function(o, w, h,pic){
		this.width = w||320;
		this.height = h||160;
		var _this = this;
		if(pic) {
			this.backImg = new Image();
			this.backImg.addEventListener('load', function(e) {
				_this.toInit(o);
			});
			this.backImg.src = pic;
		} else {
			this.toInit(o);
		}
	},
	toInit:function(o) {
		this.disObj = document.createElement('canvas');
		this.tempObj = document.createElement('canvas');
		this.drawObj = document.createElement('canvas');
		this.showObj = document.createElement('canvas');
		this.showObj.id = 'showRes';
		this.disObj.width = this.tempObj.width = this.drawObj.width = this.showObj.width = this.width;
		this.disObj.height = this.tempObj.height = this.drawObj.height = this.showObj.height = this.height;
		this.reset();
		o.appendChild(this.showObj);
		this.setResult('');
		o.addEventListener('mousedown', this, false);
		o.addEventListener('touchstart', this, false);
		o.addEventListener('mousemove', this, false);
		o.addEventListener('touchmove', this, false);
		o.addEventListener('mouseup', this, false);
		o.addEventListener('touchend', this, false);
	}
}

