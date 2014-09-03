$(document).ready(function() {


/*背景滚动函数*/
(function() {
  $.fn.backgroundMove = function(option) {
    var defaults = {
      moveDelay: 10,
      movePx: 1,
      direction: 'left',
    }
    var options = $.extend({},
    defaults, option);
    return this.each(function() {
      var startPos = 0;
      var self = $(this);
      var bgXY = 'x';

      switch (options.direction) {
      case 'left':
        options.movePx = -options.movePx;
        break;

      case 'up':
        options.movePx = -options.movePx;
        bgXY = 'y';
        break;

      case 'down':
        bgXY = 'y';
        break;
      }

      function doMove() {
        startPos = startPos + options.movePx;
        self.css('backgroundPosition-' + bgXY, startPos);
      }

      setInterval(doMove, options.moveDelay);

    })
  }
})($)


/*open pop*/
$(".showmore").click(function(){
		$("#ifr").height($(window).height()-80).attr("src",$(this).data("href"));
		$("#overlay").fadeIn();
		$("#newsContent").css({"height":parseInt($(window).height()),"top":"0"});
		$("#newsContent").fadeIn();
		return false;
	});
	$('.close-btn, #overlay').click(function(){
		$('#newsContent').fadeOut();
		$("#overlay").fadeOut();
	});

})