var wave = $.extend(new Audio, {preload:true, loop:true, src:"audio/wave.mp3"});

$(window).bind("load", function(){
	//页面入口
	sapp.page.go(location.hash.substr(1));

	//loading
	$("#loading").removeClass("in");

	//
	wave.play();
});

$(function(){
	//初始化
	sapp.init({
		page:".page",
		preload:3
	});

	//自适应
	sapp.fill({
		target : ".main",
		 width : 640,
		height : 1136,
		  mode : "90% 64%"
	});
	


	//分享
	sapp.share({
		 title : $("meta[name='shareTitle']").attr("content"),
		  desc : $("meta[name='shareDesc']").attr("content"),
		   img : $("meta[name='shareImg']").attr("content")
	});
	//
	$(".share").bind("touchstart", function(){$("#shareHint").addClass("on")});
	$("#shareHint").bind("touchstart",function(){$(this).removeClass("on")});
	//

	$("#fpc").click(function(){sapp.page.go(2)});

	var counter = (function(){
		var _c = {};
		var _timer;
		var _st;
		var _dom = $("#counter b");
		var _typer = $("#typer p");
		_c.count = function(time, callback){
			clearInterval(_timer);
			_st = +new Date;
			_timer = setInterval(function(){
				var delta = Math.max(time - (+new Date - _st), 0);
				if(delta==0) {
					clearInterval(_timer);
					if(callback) callback();
				}
				var t0 = parseInt(delta/10000)%10;
				var t1 = parseInt(delta/1000)%10;
				var t2 = parseInt(delta/100)%10;
				var t3 = parseInt(delta/10)%10;
				_dom.removeClass()
					.eq(0).addClass("t"+t0).end()
					.eq(1).addClass("t"+t1).end()
					.eq(2).addClass("t"+t2).end()
					.eq(3).addClass("t"+t3);
				//
				var txt1 = "我们曾见过很多面，\n但你还不曾见过我真正的一面。\n三年打磨，精英集聚\n深藏若虚，只为今天";
				var txt2 = "8月12日，中国杭州\n网易首款全英雄射击网游\n《危机2015》革新首发，诚邀现场试玩！";
				var txtLen = txt1.length + txt2.length;
				var dTime = 2000;
				var len = Math.min(txtLen - parseInt((delta-dTime)/(time-dTime)*txtLen), txtLen);
				_typer
					.eq(0).html(txt1.substr(0,len).replace(/\n/g,"<br>")).end()
					.eq(1).html(txt2.substr(0,len-txt1.length).replace(/\n/g,"<br>"));
			},16);
		}
		return _c;
	})();
	//
	sapp.event.on("pageGo", function(e){
		if(e.page==2) {
			wave.pause();
			counter.count(15*1000, function(){
				$("#invite").addClass("final");
			});
		}
	});
	

});




