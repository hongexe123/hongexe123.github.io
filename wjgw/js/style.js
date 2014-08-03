// JavaScript Document
var herota = true, htype = 1, herotb = true;

$(document).ready(function(){
	var $content=$(".content");
    var wh={
        getH:function(){return $(window).height();},
        getW:function(){ return $(window).width();}
    }

    var winw,winh,tw,th
    function layout(){
        winh=wh.getH();
        winw=wh.getW();

        if(winw<1350)  {tw=1350}
        else if(winw>1920) { tw=1920 }
        else{ tw=winw}
		$content.css({width:tw+"px"});
		$('#js_banner, #js_banner_img li').css({width:tw+"px"});
		$('.menu_down').css({width:(tw-20)+"px"});
		$('.menu_down .activity').css({width:(tw-100)/4+"px"});
		$('.news .nwrap').css({width:(tw-4)/4+"px"});
		
		if(winw<1450){$(".act_txt h1").css({"font-size":"25px"});$(".act_txt h2").css({"font-size":"15px"});}
		else{$(".act_txt h1").css({"font-size":"32px"});$(".act_txt h2").css({"font-size":"18px"});}
		
		if(winw>1700){$(".act_txt h1 img").fadeIn();}
		else{$(".act_txt h1 img").fadeOut();}
    }

    layout()
	
	
	new $.Tab({
		target: $('#js_banner_img li'),
		effect: 'slide3d',
		animateTime: 1000,
		stay: 3500,
		autoPlay: false,
		merge: true,
		prevBtn: $('#js_banner_pre'),
		nextBtn: $('#js_banner_next')
	});
	
	
    $(window).resize(function(){
        layout()
    });
	
/*页脚轮播图 start*/
$('#carousel').carouFredSel({
        items: 4,
        prev: '#prev',
        next: '#next',
        responsive: true,
        play: false,
        scroll: {
            items: 4,
            easing: "easeInOutExpo",
            duration: 1000,
            pauseOnHover: true
        }
    });
/*页脚轮播图 end*/

nie.config.copyRight.setWhite()
		
})
	
	
	
	
/*$("body").mousewheel(function(event, delta, deltaX, deltaY){
	 var sh=$(window).scrollTop(),wh=$(window).height();
	if(delta<0){
		$('body').scrollTo(1000,0)
		}
	
	});*/
  $(window).scroll(function() {
 var sh=$(window).scrollTop(),wh=$(window).height();
  $("#ceshi").val(sh)
  $("#ceshi1").val(wh)
  if(sh>10){$(".menu_down").stop().animate({top:'750px',opacity:'1'},500,"jswing"); }
  else if(sh<10){$(".menu_down").stop().animate({top:'970px',opacity:'0'},500,"jswing"); }
  
  if(500<sh && sh<1200){$(".nouter").stop().animate({left:'0px',opacity:'1'},500,"jswing"); }
  else{$(".nouter").stop().animate({left:'-800px',opacity:'1'},500,"jswing"); }
  
  
  if(sh<1100 || sh>1700){
	  $(".t1hero1, .t1hero2, .t1hero3, .t1hero4, .t1hero5, .t1hero6").fadeOut(1000);
	  $(".t2hero1, .t2hero2, .t2hero3, .t2hero4, .t2hero5").fadeOut(1000); 
	  $(".htype").stop().animate({right:'-200px',opacity:'0'},1000,"elastic");
	  $(".htitle").stop().animate({left:'-100px',opacity:'0'},1000,"elastic");
	  $(".htitle2").stop().animate({left:'-100px',opacity:'0'},1000,"elastic");
	  }
  else if(1100<sh<1700){
	  $(".htype").stop().animate({right:'35px',opacity:'1'},1000,"elastic");
	  if(htype == 1){
	  $(".htitle").stop().animate({left:'50px',opacity:'1'},1000,"elastic");
	  $(".t1hero1, .t1hero2, .t1hero3, .t1hero4, .t1hero5, .t1hero6").fadeIn(1000);
	  }else if(htype == 2){
		  $(".htitle2").stop().animate({left:'50px',opacity:'1'},1000,"elastic");
		  $(".t2hero1, .t2hero2, .t2hero3, .t2hero4, .t2hero5").fadeIn(1000); 
		  }
	  }
	  
	  
if(1800<sh && sh<2400){
	$(".w11").addClass("scale1");
	$(".w21").addClass("scale1");
	$(".w22").addClass("scale1");
	$(".w31").addClass("scale1");
	$(".w131").stop().animate({opacity:'1'},function(){$(".w132").animate({opacity:'1'},function(){$(".w133").animate({opacity:'1'},function(){$(".w134").animate({opacity:'1'},function(){$(".w135").animate({opacity:'1'});});});});});
	 $(".w14").stop().animate({left:'85px',opacity:'1'},1000,"elastic");
	 $(".w23").stop().animate({top:'220px',opacity:'1'},1000,"elastic");
	}
	else{
		$(".w11").removeClass("scale1");
		$(".w21").removeClass("scale1");
		$(".w22").removeClass("scale1");
		$(".w31").removeClass("scale1");
		$(".w131, .w132, .w133, .w134, .w135").stop().animate({opacity:'0'});
		$(".w14").stop().animate({left:'-20px',opacity:'0'},2500,"elastic");
		 $(".w23").stop().animate({top:'350px',opacity:'0'},1000,"elastic");
		}
 
	  
	  
  
  
  
  });
  
  
$(document).ready(function(){
	
	$(".t1hero1, .t1hero2, .t1hero3").stop().fadeOut();
	$(".t1hero1, .t1hero2, .t1hero3").stop().animate({left:'50%'},1000,"easeInOutExpo"); 
	$(".hleft, .hright").click(function(){
    if(herota && htype==1){
	$(".t1hero1, .t1hero2, .t1hero3").stop().animate({left:'-600px',opacity:'0'},1000,"easeInOutExpo"); 
	$(".t1hero6, .t1hero4, .t1hero5").stop().animate({left:'50%',opacity:'1'},1000,"easeInOutExpo"); 
	herota = false;
		}else if(!herota && htype==1){
	$(".t1hero6, .t1hero4, .t1hero5").stop().animate({left:'-600px',opacity:'0'},1000,"easeInOutExpo"); 
	$(".t1hero1, .t1hero2, .t1hero3").stop().animate({left:'50%',opacity:'1'},1000,"easeInOutExpo");
	herota = true;
		}
	else if(herotb && htype==2){
	$(".t2hero1, .t2hero2, .t2hero3").stop().animate({left:'-600px',opacity:'0'},1000,"easeInOutExpo"); 
	$(".t2hero4, .t2hero5").stop().animate({left:'50%',opacity:'1'},1000,"easeInOutExpo"); 
	herotb = false;
		}else if(!herotb && htype==2){
	$(".t2hero4, .t2hero5").stop().animate({left:'-600px',opacity:'0'},1000,"easeInOutExpo"); 
	$(".t2hero1, .t2hero2, .t2hero3").stop().animate({left:'50%',opacity:'1'},1000,"easeInOutExpo");
	herotb = true;
		}
  });
  
  
  $(".htbtn").click(function(){
	  htype = 2
	  $(this).stop().fadeOut();
	  $(".htbtn2").stop().fadeIn();
	  $(".htitle").stop().animate({left:'-100px',opacity:'0'},1000,"elastic");
	  $(".htitle2").stop().animate({left:'50px',opacity:'1'},1000,"elastic");
	  $(".t1hero1, .t1hero2, .t1hero3, .t1hero4, .t1hero5, .t1hero6").stop().animate({left:'-600px',opacity:'0'},1000,"easeInOutExpo");
	  $(".t2hero1, .t2hero2, .t2hero3, .t2hero4, .t2hero5").stop().fadeIn(1000);
	  $(".t2hero1, .t2hero2, .t2hero3").stop().animate({left:'50%',opacity:'1'},1000,"easeInOutExpo");
	  herotb = true;
	  });
$(".htbtn2").click(function(){
	  htype = 1
	  $(this).stop().fadeOut();
	  $(".htbtn").stop().fadeIn();
	  $(".htitle2").stop().animate({left:'-100px',opacity:'0'},1000,"elastic");
	  $(".htitle").stop().animate({left:'50px',opacity:'1'},1000,"elastic");
	  $(".t2hero1, .t2hero2, .t2hero3, .t2hero4, .t2hero5").stop().animate({left:'-600px',opacity:'0'},1000,"easeInOutExpo");
	  $(".t1hero1, .t1hero2, .t1hero3, .t1hero4, .t1hero5, .t1hero6").stop().fadeIn(1000);
	  $(".t1hero1, .t1hero2, .t1hero3").stop().animate({left:'50%',opacity:'1'},1000,"easeInOutExpo");
	  herota = true;
	  });
  
  var mleft, mindex, mheight, mclick = true;
  $(".peple").click(function(){
	  if(mclick){
	 mleft = $(this).css("margin-left").replace('px', '');
	 mindex = $(this).css("z-index");
	 mheight = $(this).css("height").replace('px', '');
	 $(this).css({"z-index":"9999"});
	 $(".overlay").fadeIn();
	 $(this).css({"height":(mheight-55)+'px'});
    $(this).stop().animate({"margin-left":'-400px'},1000,"easeInOutExpo");
	$(this).next().fadeIn();
	mclick = false;
	  }
  });
  
    $(".hclose").click(function(){
	$(this).parent().fadeOut();
	 $(".overlay").fadeOut();
	 $(this).parent().prev().animate({"margin-left":mleft+'px'},1000,"jswing");
	 $(this).parent().prev().css({"height":mheight+'px'});
	 $(this).parent().prev().css({"z-index":"1"});
	 mclick = true;
	
  });
  
  
  
  
  
      $(".popClose, #overlay").click(closePop);
    //弹层接口
    function openPop(popID) {
        $("#overlay," + popID).fadeIn();
    }

    function closePop() {
        $("#overlay, .pop").fadeOut();
		nie.util.video($(".videoPop .popContent").empty())
    }

//视频弹层接口
function openVideo(){
	nie.use(["nie.util.video"],function(){
		var video=nie.util.video($(".videoPop .popContent").empty(), {
			movieUrl:"http://v.nie.netease.com/txhd/2014/0609/hanguo.f4v",
			mp4_movieUrl:"http://v.nie.netease.com/txhd/2014/0609/hanguo.mp4",
			width:800,
			height:450,
			volume:0.8,
			wmode:"opaque",
			autoPlay:true
		});
	});
	openPop("#pop2");
}

    $(".btnv").click(function () {
       openVideo();
    });

var rotation = function(){
    $('.w42, .w61, .w72').rotate({
        angle: 0, 
        animateTo: 360, 
        callback: rotation,
        easing: function(x,t,b,c,d){
            return c*(t/d)+b;
        }
    });
}
rotation();


});


/*news banner*/
$(function() {

    var Page = (function() {
        var $navArrows = $('#nav-arrows').hide(),
        $navDots = $('#nav-dots').hide(),
        $nav = $navDots.children('span'),
        $shadow = $('#shadow').hide(),
        slicebox = $('#sb-slider').slicebox({
            autoplay: true,
            onReady: function() {
                $navArrows.show();
                $navDots.show();
                $shadow.show();

            },
            onBeforeChange: function(pos) {

                $nav.removeClass('nav-dot-current');
                $nav.eq(pos).addClass('nav-dot-current');

            }
        }),

        init = function() {
            initEvents();
        },
        initEvents = function() {
            // add navigation events
            $navArrows.children(':first').on('click',
            function() {
                slicebox.next();
                return false;
            });
            $navArrows.children(':last').on('click',
            function() {
                slicebox.previous();
                return false;
            });
            $nav.each(function(i) {
                $(this).on('click',
                function(event) {
                    var $dot = $(this);
                    if (!slicebox.isActive()) {

                        $nav.removeClass('nav-dot-current');
                        $dot.addClass('nav-dot-current');

                    }
                    slicebox.jump(i + 1);
                    return false;
                });
            });
        };
        return {
            init: init
        };
    })();
    Page.init();
});