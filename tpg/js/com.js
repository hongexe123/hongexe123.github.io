$(window).bind("load", function(){
	//页面入口
	sapp.page.go(location.hash.substr(1));

	//loading
	$("#loading").removeClass("in");
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
		  mode : "width"
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
	$("#victim").focus(function(){$(this).removeAttr("placeholder")});
	
	$("#btnSure").click(function(){
		game.setTxt();
		game.ready();
	});
	$(".replay").click(function(){
		game.init();
	});
	$("#hit a").bind("touchstart", function(){
		hitAudio.play();
		var ppScore = [50,30,90,70][$(this).index()] || 10;
		var handleM = $("#power .handle").css("-webkit-transform").match(/[-.\d]+/g);
		var hitScore = Math.atan2(handleM[1], handleM[0])*180/Math.PI+100;
		game.hit(parseInt(ppScore*hitScore));
	});
	game.init();
});

var game = (function(){
	var _game = {};
	var _score = 0;
	var _meterBoard;
	var _update = function(value){
		switch(value){
			case "init":
				var temp = wordLib;
				$("#reason :radio:not(:checked)").next().each(function(i,v){
					var pos = parseInt(temp.length*Math.random());
					$(v).text(temp[pos]);
					temp.splice(pos,1);
				});
				break;

			case "ready":
				break;
			
			case "hit":
				console.log(_score);
				var time = 5000;
				var startTime = +new Date;
				setTimeout(_game.over, time+500);
				_meterBoard = setInterval(function(){
					var ts = parseInt(Math.pow((+new Date-startTime)/time,0.5)*_score);
					$("#poorMan b").text(Math.min(ts, _score));
				},16);
				break;
			case "over":
				clearInterval(_meterBoard);
				$("#resultTxt").html(shareTxt.replace("{victim}",_game.victim).replace("{reason}",_game.reason).replace("{score}",_score));
				break;

			default: return;
		}
		$("#game").removeClass("init ready hit over").addClass(value);
	}
	_game.init = function(){
		_update("init");
	}
	_game.ready = function(){
		_update("ready");
	}
	_game.hit = function(score){
		_score = score;
		_update("hit");
	}
	_game.over = function(){
		_update("over");
	}
	_game.setTxt = function(){
		_game.reason = $("[name='reason']:checked + span").text() || "你一时冲动";
		_game.victim = $("#victim").val() || "某路人甲";
	}
	return _game;
})();





