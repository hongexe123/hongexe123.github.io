// JavaScript Document
var shareTitle = '����HD�ײ⼤����������';
var shareTxt = '���᣿�����ˣ��Ƥ�������Ѿ�ȫ����ս�ɹ�����Ȼû�м����룿��������������̣�����һ�Σ�������HD���ײ⼤����һ�����ҵģ�';
var shareUrl = 'http://txhd.163.com';
var sharePic = 'http://res.nie.netease.com/txhd/gw/14v2/pc/images/fenxiang.jpg';
var shareIco = 'http://res.nie.netease.com/txhd/gw/14v2/pc/images/wxfx.jpg';
var winObj = $(window);


$(".share").click(function(){
	shareTxt = '����help!����ѩ��360�����������˰�æͨ�ء�����HD����������ԣ�����֮�ձؽ�����λ�����������';
	})
	
$(".share2").click(function(){
	shareTxt = '����ͨ�������ֲ�������С��ɫ������ս���ַ��ӣ������£ȣġ��ײ��ʸ񣬸�λ��Ҫ̫��ĽŶ��';
	})


	
//����΢������Ȧ��΢������
var onBridgeReady = function () {
	var appId = '';
	// ���͸�����;
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
			nie.config.stats.url.add('276752/0710.html?action=hy', '��������');
		}catch(e){
		}
	});
	// ��������Ȧ;
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
			nie.config.stats.url.add('276752/0710.html?action=py', '��������Ȧ');
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