// JavaScript Document

/*激活验证*/
    function validPhone(num) {
        if (/^(13|14|15|18)\d{9}$/.test(num)) {
            return true;
        } else {
            return false;
        }
    }

    $('#popbtn').click(function () {
        var pnum = $("#telnum").val();

        if (!validPhone(pnum)) {
            alert("手机号码有误，请填写正确！");
        } else {
            collectPho(pnum);
        }
    });

    function collectPho(phone) {
        var os = 'ios';
        if (/android/i.test(navigator.userAgent.toLowerCase())) {
            os = 'android';
        }
        $.ajax({
            url: "http://mobile-game-appoint.webapp.163.com/appoint/wj/" + phone,
            async: false,
            dataType: "jsonp",
            success: function (result) {
                if (result.status == "ok") {
                    alert("验证码发送成功，请注意短信！");

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
                    $("#pop3").show();
					$("#pop1").hide();
                } else {
                    alert(result.status);
                }
            }
        });
    }
