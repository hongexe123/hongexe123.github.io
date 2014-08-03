
	
//倒计时
var timeline = 390;
var js;
function fun_timedown(time) {
    if (time == 'undefined') {
        time = 15;
    }
    $(".gnum").css({"background":"url(images/"+time+".png)"});
    timeline = timeline - 24;
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
