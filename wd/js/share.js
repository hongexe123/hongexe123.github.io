// JavaScript Document
var shareTitle = '天下HD首测激活码速抢！';
var shareTxt = '纳尼？！玑哥耍赖皮！明明已经全部挑战成功，居然没有激活码？！叔可忍婶不可忍！再来一次，《天下HD》首测激活码一定是我的！';
var shareUrl = 'http://txhd.163.com';
var sharePic = 'http://res.nie.netease.com/txhd/gw/14v2/pc/images/fenxiang.jpg';
var shareIco = 'http://res.nie.netease.com/txhd/gw/14v2/pc/images/wxfx.jpg';
var winObj = $(window);


$(".share").click(function(){
	shareTxt = '五星help!冰天雪地360度裸体跪求高人帮忙通关《天下HD》激活码测试！到码之日必将结草衔环，以身相许！';
	})
	
$(".share2").click(function(){
	shareTxt = '满分通过！这种测试难难小角色啦！挑战玑哥分分钟，《天下ＨＤ》首测资格，各位不要太羡慕哦！';
	})


	
//分享到微信朋友圈，微信朋友
var onBridgeReady = function () {
	var appId = '';
	// 发送给好友;
	WeixinJSBridge.on('menu:share:appmessage', function(argv){
		var imgUrl = shareIco;
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
		try{
			nie.config.stats.url.add('276752/0710.html?action=hy', '分享到好友');
		}catch(e){
		}
	});
	// 分享到朋友圈;
	WeixinJSBridge.on('menu:share:timeline', function(argv){
		var imgUrl = shareIco;
		var link = shareUrl;
		var title = shareTitle;
		var shareDesc = shareTxt;
		WeixinJSBridge.invoke('shareTimeline',{
		'img_url' : imgUrl,
		'img_width' : '640',
		'img_height' : '640',
		'link' : link,
		'desc' : shareDesc,
		'title' : shareDesc
		}, function(res) {

		});
		try{
			nie.config.stats.url.add('276752/0710.html?action=py', '分享到朋友圈');
		}catch(e){
		}
	});
};
if(document.addEventListener){
	document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
} else if(document.attachEvent){
	document.attachEvent('WeixinJSBridgeReady' , onBridgeReady);
	document.attachEvent('onWeixinJSBridgeReady' , onBridgeReady);

}