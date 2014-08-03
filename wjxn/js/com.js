var i = 1;
$(function(){
    var nieFun =['nie.util.shareV2',"util.swfobject"],//nie����
        wrapbg = $('.wrapbg'),
        title = $('#title'),
        prev = $('#previous'),
        next = $('#next'),
        ie = $.browser.msie,
        speed = 2500,
        timer;

    //NIE���
    nie.use(nieFun,function(){
        //����
        nie.util.share({
            fat:"#share",
            type:1,
            title:$('.sharetxt').text(),
            img:$('.shareimg').text()
        });
        //����
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
        //��������
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
            //ѭ������
            if(i == 6){
                //��������žͲ�ѭ��
                return false;
            }else{
                i++;
                //���ر���ͼƬ
                wrapbg.stop().animate({'opacity':'0'},200,function(){$(this).attr('src','img/bg'+i+'.jpg')}).delay(200).animate({'opacity':'1'},200);
                //�����һ�ű���
                title.children().remove();
                //�ж�����
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
                        '<a id="popbtn" class="title6btn" >��ȡ��֤��</a><a id="popbtn2" class="title6btn" onclick="openD(\'#popbox2\')">����ԤԼ</a>'
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
                    '<a id="popbtn" class="title6btn" >��ȡ��֤��</a><a id="popbtn2" class="title6btn" onclick="openD(\'#popbox2\')">����ԤԼ</a>'
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
            //������ʾ�л���ť
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
            //IE�µ��İ�����Ч����ʼ��
            if(ie){
                animateFun.iehack();
            }

            //��ʼ��ѭ��
            var time = setInterval(function(){
                animateFun.loop()
            },speed)

            //����ƶ����л���ť��Ӱ��
            animateFun.showNav(time)

            //�л�����
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

    animateFun.init();//��������
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
// �ɰ浯��
    popbg.css({"height":dh}).show();
// ���㵯��
    function posPop(idname){
        idname.height()>wh?idname.fadeIn().css({'top':st,'left':(ww-idname.width())/2+sl}):idname.fadeIn().css({'top':(wh-idname.outerHeight())/2+st,'left':(ww-idname.outerWidth())/2+sl});
    }
//  ����ر�
    $('.aCloseQ,.pbtn').click(function(){
        $(this).parent().fadeOut();
        $("#NIE-overlayer").hide();
    });
    posPop(popid);
}