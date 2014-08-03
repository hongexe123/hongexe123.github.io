var wave = $.extend(new Audio, {preload:true, loop:true, src:"audio/wave.mp3"});

$(window).bind("load", function(){
	//ҳ�����
	sapp.page.go(location.hash.substr(1));

	//loading
	$("#loading").removeClass("in");

	//
	wave.play();
});

$(function(){
	//��ʼ��
	sapp.init({
		page:".page",
		preload:3
	});

	//����Ӧ
	sapp.fill({
		target : ".main",
		 width : 640,
		height : 1136,
		  mode : "90% 64%"
	});
	


	//����
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
				var txt1 = "�����������ܶ��棬\n���㻹����������������һ�档\n�����ĥ����Ӣ����\n������飬ֻΪ����";
				var txt2 = "8��12�գ��й�����\n�����׿�ȫӢ���������\n��Σ��2015�������׷��������ֳ����棡";
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




