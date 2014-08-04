
$(document).ready(function() {






//初始化函数 



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


})