//��Ҫ�༭�ķ�������
var shareTitle = '�������ɾ����������û�ר����';
var shareTxt = '����������6��ֵ���������������з����Ծ�Ʒ�����������ɾ��������շ�⿪����';
var shareTxt2 = '����������6��ֵ���������������з����Ծ�Ʒ�����������ɾ��������շ�⿪����';
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



//����΢������Ȧ��΢������
var onBridgeReady = function () {
	var appId = '';
	// ���͸�����;
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
	// ��������Ȧ;
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