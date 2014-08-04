
$(document).ready(function() {
  var total = stage.storyboards.length,
  i;

  $('.storyboard').wrap('<div>');
  for (i = 0; i < total; i++) {
    $('#' + stage.storyboards[i].id).parent().addClass('banner').attr('name', stage.storyboards[i].id).height(stage.height).css('z-index', i * 10).css('background-color', stage.storyboards[i].background);

    if (i < total - 1) {
      $('<div>').addClass('goNext').append($('<div>')).appendTo($('#' + stage.storyboards[i].id)).click(function() {
        stage.next();
      });
    }
  }

  stage.init();
})

var stage = {
  storyboards: [{
    id: 'guanbanner'
  },
  {
    id: 'skills',
  },
  {
    id: 'services',
    background: '#f2f2f2'
  },
  {
    id: 'steps',
	background: '#fbfbfb'
  },
  {
    id: 'works'
  },
  {
    id: 'aa'
  },
   {
    id: ''
  }
  ],

  init: function() {
    $(document).scrollTop(0);
    $('[_to="0"]').css({
      'background-position': stage.storyboards[0].liftActive,
      'cursor': 'default'
    });
    $('.goNext').css('top', $(window).height() - 100 + 'px');
  },
  height: $(window).height(),
  active: 0,
  goto: function(index) {
    if (index < 0) index = stage.active = 0;
    if (index > 4) index = stage.active = 4;
    $('[_to="' + stage.active + '"]').css({
      'background-position': stage.storyboards[stage.active].lift,
      'cursor': 'pointer'
    });
    stage.active = parseInt(index, 10);
    $('html,body').animate({
      'scrollTop': stage.height * stage.active
    },
    'normal',
    function() {
      $('[_to="' + stage.active + '"]').css({
        'background-position': stage.storyboards[stage.active].liftActive,
        'cursor': 'default'
      }) 
	  $f = true;
    });
  },

  forward: function() {
    if (stage.active >= 0) {
      stage.goto(stage.active - 1);
    }
  },

  next: function() {
    if (stage.active <= stage.storyboards.length - 1) {
      stage.goto(stage.active + 1);
    }
  }
};

window.onresize = function() {
  stage.height = $(window).height();
  $('.banner').height(stage.height);

  $('.goNext').css('top', $(window).height() - 100 + 'px');
};
//初始化函数 
$(window).resize();
var $f = true;
window.onmousewheel = function(event) {
  if (!$f) return;
  if (event.wheelDelta < 0) {
    stage.next();
    $f = false;
    setTimeout(function() {
      $f = true;
    },
    500);
  } else if (event.wheelDelta > 0) {
    stage.forward();
    $f = false;
    setTimeout(function() {
      $f = true;
    },
    500);
  }
  return false;
}
stage.goto(0);

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



