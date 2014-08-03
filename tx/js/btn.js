// JavaScript Document
// 定义存放生成随机数的数组 
var array = new Array();
// 循环N次生成随机数 
for (var i = 0; ; i++) {
    // 只生成10个随机数 
    if (array.length < 10) {
        generateRandom(90);
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
var timeline = 390;
var js;
function fun_timedown(time) {
    if (time == 'undefined') {
        time = 20;
    }
    $(".gnum").css({"background":"url(images/"+time+".png)"});
    timeline = timeline - 20;
    $(".bloodjs").animate({
        left: timeline + "px"
    })

    time = time - 1;
    if (time >= 0) {
        js = setTimeout("fun_timedown(" + time + ")", 1000);
    } else {
        $(".gdlay").fadeIn();
		$(".fail").animate({top:'80px'});
    }
}

var resultks = parseInt(Math.random() * 10);
var result
if(resultks==0||resultks==2||resultks==3||resultks==4||resultks==5||resultks==6||resultks==7||resultks==8||resultks==9){
	result=0;
	}else if(resultks==1){
		result=1;
		}
$(document).ready(function () {
	
	ggl.init(document.getElementById('myCanvas'),405, 120, 'images/prize'+result+'.jpg');
	$(".tipms").animate({opacity:'0'},2000,function(){$(".ready").animate({opacity:'1',top:'40px'},500);$(".ready").animate({opacity:'0'},500,function(){$(".go").animate({opacity:'1',top:'35px'},500);$(".go").animate({opacity:'0'},500,function(){fun_timedown(20);$(".tipks").fadeOut();})});})
    $("#q" + array[0]).fadeIn();
	$(".wtnum").text("01");
/*	//问题开始
  $("#q" + array[0]).children(".subwj").click(function () {
		if($(".answer").val()==""){
			alert("快选择答案，时间来不及啦！");
			}else if($(".answer").val()=="0"){
				clearTimeout(js);
				$(".gdlay").fadeIn();
				$(".fail").animate({top:'80px'});
				}else if($(".answer").val()=="1"){
				$(".wtnum").text("02")
				$("#q" + array[0]).hide();
				$("#q" + array[1]).show();
					}
    });
	//问题结束*/
	//问题开始
  $("#q" + array[0]).children(".dd").click(function () {
	
				$(".wtnum").text("02")
				$("#q" + array[0]).hide();
				$("#q" + array[1]).show();
					
    });
	$("#q" + array[0]).children(".cd").click(function () {
		
				clearTimeout(js);
				$(".gdlay").fadeIn();
				$(".fail").animate({top:'80px'});
				
    });
	//问题结束
	//问题开始
  $("#q" + array[1]).children(".dd").click(function () {
	
				$(".wtnum").text("03")
				$("#q" + array[1]).hide();
				$("#q" + array[2]).show();
					
    });
	$("#q" + array[1]).children(".cd").click(function () {
		
				clearTimeout(js);
				$(".gdlay").fadeIn();
				$(".fail").animate({top:'80px'});
				
    });
	//问题结束
	//问题开始
  $("#q" + array[2]).children(".dd").click(function () {
	
				$(".wtnum").text("04")
				$("#q" + array[2]).hide();
				$("#q" + array[3]).show();
					
    });
	$("#q" + array[2]).children(".cd").click(function () {
		
				clearTimeout(js);
				$(".gdlay").fadeIn();
				$(".fail").animate({top:'80px'});
				
    });
	//问题结束
	//问题开始
  $("#q" + array[3]).children(".dd").click(function () {
	
				$(".wtnum").text("05")
				$("#q" + array[3]).hide();
				$("#q" + array[4]).show();
					
    });
	$("#q" + array[3]).children(".cd").click(function () {
		
				clearTimeout(js);
				$(".gdlay").fadeIn();
				$(".fail").animate({top:'80px'});
				
    });
	//问题结束
	//问题开始
  $("#q" + array[4]).children(".dd").click(function () {
	
				$(".wtnum").text("06")
				$("#q" + array[4]).hide();
				$("#q" + array[5]).show();
					
    });
	$("#q" + array[4]).children(".cd").click(function () {
		
				clearTimeout(js);
				$(".gdlay").fadeIn();
				$(".fail").animate({top:'80px'});
				
    });
	//问题结束
	//问题开始
  $("#q" + array[5]).children(".dd").click(function () {
	
				$(".wtnum").text("07")
				$("#q" + array[5]).hide();
				$("#q" + array[6]).show();
					
    });
	$("#q" + array[5]).children(".cd").click(function () {
		
				clearTimeout(js);
				$(".gdlay").fadeIn();
				$(".fail").animate({top:'80px'});
				
    });
	//问题结束
	//问题开始
  $("#q" + array[6]).children(".dd").click(function () {
	
				$(".wtnum").text("08")
				$("#q" + array[6]).hide();
				$("#q" + array[7]).show();
					
    });
	$("#q" + array[6]).children(".cd").click(function () {
		
				clearTimeout(js);
				$(".gdlay").fadeIn();
				$(".fail").animate({top:'80px'});
				
    });
	//问题结束
	//问题开始
  $("#q" + array[7]).children(".dd").click(function () {
	
				$(".wtnum").text("09")
				$("#q" + array[7]).hide();
				$("#q" + array[8]).show();
					
    });
	$("#q" + array[7]).children(".cd").click(function () {
		
				clearTimeout(js);
				$(".gdlay").fadeIn();
				$(".fail").animate({top:'80px'});
				
    });
	//问题结束
	//问题开始
  $("#q" + array[8]).children(".dd").click(function () {
	
				$(".wtnum").text("10")
				$("#q" + array[8]).hide();
				$("#q" + array[9]).show();
					
    });
	$("#q" + array[8]).children(".cd").click(function () {
		
				clearTimeout(js);
				$(".gdlay").fadeIn();
				$(".fail").animate({top:'80px'});
				
    });
	//问题结束
	//问题开始
  $("#q" + array[9]).children(".dd").click(function () {
	            $(".gdlay").fadeIn();
				$(".success").animate({top:'80px'});
					
    });
	$("#q" + array[9]).children(".cd").click(function () {
		
				clearTimeout(js);
				$(".gdlay").fadeIn();
				$(".fail").animate({top:'80px'});
				
    });
	//问题结束
	
	for(var i = 0 ; i < array.length; i++){ 
    $("#q" + array[i]).children(".cd").click(function () {
		$(".answer").val(0)
    });
	$("#q" + array[i]).children(".dd").click(function () {
        $(".answer").val(1)
    });
	}
	
	$(".wt .dd").mousedown(function(){
        $(this).siblings(".dd, .cd").css("background-position", "0 0");
		$(this).css("background-position", "0 -81px");
    });
	$(".wt .cd").mousedown(function(){
        $(this).siblings(".dd, .cd").css("background-position", "0 0");
		$(this).css("background-position", "0 -81px");
    });
	$('.share, .share2').click(function(){
		$(".tip").fadeIn();
		$(".overlay").fadeIn();
		})
	
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
		showCtx.fillStyle = '#8a8a8a';
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
			$(".share2").hide();
			$(".restart2").show();
			}else if(result==1){
				$(".jhm").fadeIn();
				$(".overlay").fadeIn();
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


function validPhone(num) {
        if (/^(13|14|15|18)\d{9}$/.test(num)) {
            return true;
        } else {
            return false;
        }
    }

    $('#txyy').click(function () {
        var pnum = $("#phone").val();

        if (!validPhone(pnum)) {
            alert("手机号码有误，请填写正确！");
			$("#phone").focus();
        } else {
            collectPho(pnum);
			$("#phone").focus();
        }
    });
	$('.close, .overlay').click(function(){
		$('.jhm').fadeOut();
		$('.overlay').fadeOut();
		$(".tip").fadeOut();
		})

    function collectPho(phone) {
        $.ajax({
            url: "http://s.webcgi.163.com/mobile-code/get_sn?mobile_num="+ phone,
            async: false,
            dataType: "jsonp",
            success: function (result) {
                if (result.status == "ok") {
                    alert("激活码发送成功，请注意短信！");
                } else {
                    alert(result.status);
                }
            }
        });
    }
