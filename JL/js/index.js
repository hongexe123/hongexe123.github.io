//需要编辑的分享内容
var shareTitle = '《进击吧巨龙》网易用户专享封测';
var shareTxt = '抢先体验送6大超值奖励！网易自主研发策略精品大作《进击吧巨龙》今日封测开启！';
var shareTxt2 = '抢先体验送6大超值奖励！网易自主研发策略精品大作《进击吧巨龙》今日封测开启！';
var shareUrl = 'http://dino.163.com/m/download/';
var sharePic = 'http://dino.163.com/m/download/images/pic1.jpg';
var winObj = $(window);

function isWeiXin(){ 
var ua = window.navigator.userAgent.toLowerCase(); 
if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 
return true; 
}else{ 
return false; 
} 
} 

$(".download").click(function(){
	if(isWeiXin()){
		$(".tip").fadeIn();
		$(".overly").fadeIn();
		$(".download").attr("href","#");
		}
		else{
		$(".tip").fadeOut();	
			}
	})
$(".overly").click(function(){
	$(".tip").fadeOut();
	$(".overly").fadeOut();
	})



//分享到微信朋友圈，微信朋友
var onBridgeReady = function () {
	var appId = '';
	// 发送给好友;
	WeixinJSBridge.on('menu:share:appmessage', function(argv){
		var imgUrl = sharePic;
		var link = shareUrl;
		var title = shareTitle;
		var shareDesc = shareTxt;
		WeixinJSBridge.invoke('sendAppMessage',{
			'img_url' : imgUrl,
			'img_width' : '640',
			'img_height' : '640',
			'link' : link,
			'desc' : shareDesc,
			'title' : title
			}, function(res) {

		});
	});
	// 分享到朋友圈;
	WeixinJSBridge.on('menu:share:timeline', function(argv){
		var imgUrl = sharePic;
		var link = shareUrl;
		var title = shareTitle;
		var shareDesc = shareTxt2;
		WeixinJSBridge.invoke('shareTimeline',{
		'img_url' : imgUrl,
		'img_width' : '640',
		'img_height' : '640',
		'link' : link,
		'desc' : shareDesc,
		'title' : shareDesc
		}, function(res) {

		});
	});
};
if(document.addEventListener){
	document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
} else if(document.attachEvent){
	document.attachEvent('WeixinJSBridgeReady' , onBridgeReady);
	document.attachEvent('onWeixinJSBridgeReady' , onBridgeReady);
}