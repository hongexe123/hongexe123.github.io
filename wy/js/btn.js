// JavaScript Document
var shareTitle = '������HD���ٷ���վ7�¿����ټ��';
var shareTxt = '����һ����˭�Ҳ��ӣ�������HD��7�¿����ټ�����̵�¼����������ԤԼ��������ĵ�һ�ˣ�������һͬ����С�����ǵ����紫��ɣ�';
var shareUrl = 'http://txhd.163.com';
var sharePic = 'http://res.nie.netease.com/txhd/gw/14v2/pc/images/fenxiang.jpg';
var shareIco = 'http://res.nie.netease.com/txhd/gw/14v2/pc/images/wxfx.jpg';
var winObj = $(window);

$(document).ready(function() {
		$('#fullPage').fullpage({
		easing: 'swing',
		afterLoad: function(anchorLink, index){
            if(index == '1'){
				$(".gotodown").fadeIn();
				
            } else if(index == '2'){
				$(".gotodown").fadeIn();
				
				} else if(index == '3'){
				
				$(".gotodown").fadeIn();
				
				} else if(index == '4'){
				
				$(".gotodown").fadeIn();
				
				} else if(index == '5'){
				
				$(".gotodown").fadeOut();
				
				}
        }
		
	});
	
});

$('.sbtn').click(function () {
        $('.share').fadeIn();
});
$('.gb').click(function () {
        $('.share').fadeOut();
});

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
            alert("�ֻ�������������д��ȷ��");
			$("#phone").focus();
        } else {
            collectPho("txhd", pnum, window.location.href);
			$("#phone").focus();
        }
    });

    function collectPho(game_name, phone, src) {
        var os = 'ios';
        if (/android/i.test(navigator.userAgent.toLowerCase())) {
            os = 'android';
        }
        $.ajax({
            url: "http://mobile-game-appoint.webapp.163.com/appoint/" + game_name + "/" + phone + "/" + os + "/?src=" + src,
            async: false,
            dataType: "jsonp",
            success: function (result) {
                if (result.status == "ok") {
                    alert("��֤�뷢�ͳɹ�����ע����ţ�");
					$(".yy").hide();
					$(".yz").show();
                } else {
                    alert(result.status);
                }
            }
        });
    }


    $('#txyz').click(function () {
        var pnum = $("#phone").val();
        var yzm = $("#yzm").val();

        collectCode("txhd", pnum, yzm);
		$("#yzm").focus();
    });

    function collectCode(game_name, phone, authcode) {
        var os = 'ios';
        if (/android/i.test(navigator.userAgent.toLowerCase())) {
            os = 'android';
        }
        $.ajax({
            url: "http://mobile-game-appoint.webapp.163.com/appoint_submit_authcode/" + game_name + "/" + phone + "/" + os + "/?auth_code=" + authcode,
            async: false,
            dataType: "jsonp",
            success: function (result) {
                if (result.status == "ok") {
                   alert("ԤԼ�ɹ���лл���Ĺ�ע��");
                } else {
                    alert(result.status);
                }
            }
        });
    }
	

	
	$(".yx").click(function(){
		var _uri = "http://open.yixin.im/share?appkey=yx3ae08a776bf04178a583cb745fb6aa0c&type=webpage&url="+encodeURIComponent(shareUrl)+'&title='+encodeURIComponent(shareTitle)+'&desc='+encodeURIComponent(shareTxt)+'&pic='+encodeURIComponent(shareIco);
		window.location.href=_uri;
	});
	$(".wb").click(function(){
		var _uri="http://service.weibo.com/share/share.php?c=nie&content=gb2312&source=nie&title=" + encodeURIComponent(shareTxt) + "&url=" + encodeURIComponent(shareUrl) + "&pic=" + encodeURIComponent(sharePic);
		window.location.href=_uri;
	});
	$(".kj").click(function(){
		var _uri="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=������Ϸ&url=" + encodeURIComponent(shareUrl) + "&title=" + encodeURIComponent(shareTitle)+ "&desc=" + encodeURIComponent(shareTxt)+ "&pics=" + encodeURIComponent(sharePic);
		window.location.href=_uri;
	});
	$(".py").click(function(){
		var _uri = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?to=pengyou&url=" + encodeURIComponent(shareUrl) + "&title=" + encodeURIComponent(shareTitle)+  "&desc=" + encodeURIComponent(shareTxt)+ "&pics=" + encodeURIComponent(sharePic);
		window.location.href=_uri;
	});
	$('.wx').click(function () {
       WeiXinShareBtn()
});


function WeiXinShareBtn() { 
 if (typeof WeixinJSBridge == "undefined") { 
 alert("����΢�Ŵ򿪣�"); 
 } else { 
/* WeixinJSBridge.invoke('shareTimeline', { 
 "title": shareTitle, 
 "link": shareUrl, 
 "desc": shareTxt, 
 "img_url": shareIco 
 }); */
  alert("�������Ͻǰ�ť��������Ȧ��"); 
 } 
 }



	
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
	});
};
if(document.addEventListener){
	document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
} else if(document.attachEvent){
	document.attachEvent('WeixinJSBridgeReady' , onBridgeReady);
	document.attachEvent('onWeixinJSBridgeReady' , onBridgeReady);

}