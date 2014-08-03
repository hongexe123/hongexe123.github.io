var i = 1;
$(function(){
    var nieFun =['nie.util.shareV2',"util.swfobject"],//nie函数
        wrapbg = $('.wrapbg'),
        title = $('#title'),
        prev = $('#previous'),
        next = $('#next'),
        ie = $.browser.msie,
        speed = 2500,
        timer;

    //NIE组件
    nie.use(nieFun,function(){
        //分享
        nie.util.share({
            fat:"#share",
            type:1,
            title:$('.sharetxt').text(),
            img:$('.shareimg').text()
        });
        //音乐
        if($.flash.available){
            $('#music').flash({
                swf: "swf/simplePlayer.swf",
                allowscriptaccess: "always",
                wmode: "opaque",
                height: 0,
                width: 0
            });
        }
        setTimeout(function(){
            $('#music').flash(function(){
                this.playSound('swf/music.mp3');
            })
        },1550)
        //播放音乐
        var musicBtn = $('#music-btn');
        musicBtn.click(function(){
            if($(this).hasClass('play')){
                $(this).removeClass('play');
                $(this).addClass('stop');
                $('#music').flash(function(){
                    this.playSound(stop);
                })
            }else if($(this).hasClass('stop')){
                $(this).removeClass('stop');
                $(this).addClass('play');
                $('#music').flash(function(){
                    this.playSound('swf/music.mp3');
                })
            }
        })
    })

    var animateFun = {
        iehack:function(){
            if($.browser.msie || ($.browser.mozilla && $.browser.version == '11.0')){
                $('article').find('img').each(function(){
                    var w  = $(this).width();
                    $(this).css('width','850px').animate({'width':w},1000)
                })
            }
        },
        loop:function(){
            //循环张数
            if(i == 6){
                //如果第六张就不循环
                return false;
            }else{
                i++;
                //加载背景图片
                wrapbg.stop().animate({'opacity':'0'},200,function(){$(this).attr('src','img/bg'+i+'.jpg')}).delay(200).animate({'opacity':'1'},200);
                //清楚上一张标题
                title.children().remove();
                //判断张数
                if(i == 6){
                    if($('#previous').css('opacity') == '0'){
                        $('#previous,#next').stop().animate({'opacity':'1'},400)
                    }
                    $('body').removeClass('buzz')
                    setTimeout(function(){$('body').addClass('buzz')},150)
                    html='<img src="img/title6.png" class="title6"/>' +
                        '<img src="img/title6_2.png" class="title6_2"/>' +
                        '<img src="img/title6_3.png" class="title6_3"/>' +
                        '<img src="img/title6_4.png" class="title6_4"/>' +
                        '<img src="img/title6_5.png" class="title6_5"/>' +
                        '<input type="text" id="qrcode"><input type="text" id="telnum">' +
                        '<a id="popbtn" class="title6btn" >获取验证码</a><a id="popbtn2" class="title6btn" onclick="openD(\'#popbox2\')">立即预约</a>'
                    title.append(html);
                    animateFun.iehack();
                }else if(i == 4){
                    title.append('<img class="title3 stay" src="img/title3.png"/><img class="title4" src="img/title4.png"/>');
                    animateFun.iehack();
                }else{
                    title.append('<img class="title'+i+'" src="img/title'+i+'.png" />');
                    animateFun.iehack();
                }
            }
        },
        aniBg:function(){
            wrapbg.stop().animate({'opacity':'0'},200,function(){$(this).attr('src','img/bg'+i+'.jpg')}).delay(200).animate({'opacity':'1'},200);
            title.children().remove();
            if(i == 6){
                $('body').removeClass('buzz')
                setTimeout(function(){$('body').addClass('buzz')},100)
                html='<img src="img/title6.png" class="title6"/>' +
                    '<img src="img/title6_2.png" class="title6_2"/>' +
                    '<img src="img/title6_3.png" class="title6_3"/>' +
                    '<img src="img/title6_4.png" class="title6_4"/>' +
                    '<img src="img/title6_5.png" class="title6_5"/>' +
                    '<input type="text" id="telnum">' +
                    '<a id="popbtn" class="title6btn" >获取验证码</a><a id="popbtn2" class="title6btn" onclick="openD(\'#popbox2\')">立即预约</a>'
                title.append(html);
                animateFun.iehack();
            }else if(i == 4){
                title.append('<img class="title3 stay" src="img/title3.png"/><img class="title4" src="img/title4.png"/>');
                animateFun.iehack();
            }else{
                title.append('<img class="title'+i+'" src="img/title'+i+'.png" />');
                animateFun.iehack();
            }
        },
        showNav:function(time){
            //悬浮显示切换按钮
            $('#wrap,#previous,#next').bind({
                mouseover:function(){
                    if(i== 6){
                        clearInterval(time);
                        if($('#previous').css('opacity') == '0'){
                            $('#previous,#next').stop().animate({'opacity':'1'},400)
                        }
                    }
                },
                mousemove:function(){
                    clearTimeout(timer);
                    timer = setTimeout(function(){
                        clearInterval(time);
                        time = setInterval(function(){
                            $('#previous,#next').stop().animate({'opacity':'0'},400)
                            animateFun.loop()
                        },speed)
                    },2000)
                },
                mouseleave:function(){
                    clearInterval(time);
                    time = setInterval(function(){
                        animateFun.loop()
                    },speed)
                }
            })
        },
        init:function(){
            //IE下的文案动画效果初始化
            if(ie){
                animateFun.iehack();
            }

            //初始化循环
            var time = setInterval(function(){
                animateFun.loop()
            },speed)

            //鼠标移动对切换按钮的影响
            animateFun.showNav(time)

            //切换背景
            next.bind('click',function(){
                clearInterval(time);
                i == 6?i = 1:i++;
                animateFun.aniBg()
            })
            prev.bind('click',function(){
                clearInterval(time);
                i == 1?i = 6:i--;
                animateFun.aniBg()
            })
        }
    }

    animateFun.init();//动画函数
})
function soundComplete(){
    $('#music').flash(function(){
        this.playSound('swf/music.mp3');
    })
}
function openD(id){
    var popbg = $("#NIE-overlayer"),
        popid = $(id),
        dh = $(document).height(),
        wh = $(window).height(),
        ww = $(window).width(),
        st = $(window).scrollTop(),
        sl = $(window).scrollLeft();
// 蒙版弹出
    popbg.css({"height":dh}).show();
// 弹层弹出
    function posPop(idname){
        idname.height()>wh?idname.fadeIn().css({'top':st,'left':(ww-idname.width())/2+sl}):idname.fadeIn().css({'top':(wh-idname.outerHeight())/2+st,'left':(ww-idname.outerWidth())/2+sl});
    }
//  弹层关闭
    $('.aCloseQ,.pbtn').click(function(){
        $(this).parent().fadeOut();
        $("#NIE-overlayer").hide();
    });
    posPop(popid);
}