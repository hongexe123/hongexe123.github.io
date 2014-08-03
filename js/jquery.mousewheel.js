/* Copyright (c) 2006 Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Download by http://www.jb51.net
 * $LastChangedDate: 2007-12-20 09:02:08 -0600 (Thu, 20 Dec 2007) $
 * $Rev: 4265 $
 *
 * Version: 3.0
 * 
 * Requires: $ 1.2.2+
 */
(function($) {

$.event.special.mousewheel = {
	setup: function() {
		var handler = $.event.special.mousewheel.handler;
		
		// Fix pageX, pageY, clientX and clientY for mozilla
		if ( $.browser.mozilla )
			$(this).bind('mousemove.mousewheel', function(event) {
				$.data(this, 'mwcursorposdata', {
					pageX: event.pageX,
					pageY: event.pageY,
					clientX: event.clientX,
					clientY: event.clientY
				});
			});
	
		if ( this.addEventListener )
			this.addEventListener( ($.browser.mozilla ? 'DOMMouseScroll' : 'mousewheel'), handler, false);
		else
			this.onmousewheel = handler;
	},
	
	teardown: function() {
		var handler = $.event.special.mousewheel.handler;
		
		$(this).unbind('mousemove.mousewheel');
		
		if ( this.removeEventListener )
			this.removeEventListener( ($.browser.mozilla ? 'DOMMouseScroll' : 'mousewheel'), handler, false);
		else
			this.onmousewheel = function(){};
		
		$.removeData(this, 'mwcursorposdata');
	},
	
	handler: function(event) {
		var args = Array.prototype.slice.call( arguments, 1 );
		
		event = $.event.fix(event || window.event);
		// Get correct pageX, pageY, clientX and clientY for mozilla
		$.extend( event, $.data(this, 'mwcursorposdata') || {} );
		var delta = 0, returnValue = true;
		
		if ( event.wheelDelta ) delta = event.wheelDelta/120;
		if ( event.detail     ) delta = -event.detail/3;
//		if ( $.browser.opera  ) delta = -event.wheelDelta;
		
		event.data  = event.data || {};
		event.type  = "mousewheel";
		
		// Add delta to the front of the arguments
		args.unshift(delta);
		// Add event to the front of the arguments
		args.unshift(event);

		return $.event.handle.apply(this, args);
	}
};

$.fn.extend({
	mousewheel: function(fn) {
		return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
	},
	
	unmousewheel: function(fn) {
		return this.unbind("mousewheel", fn);
	}
});

})(jQuery);




$(function () {
         var index_div_pro = [{
                        sx: 0,
                        sy: 0,
                        mw: 3,
                        mh: 1,
                        bx: 8.4,
                        by: 10.4,
                        rx: -0.6
                },
                {
                        sx: 35,
                        sy: 0,
                        mw: 3,
                        mh: 0.5,
                        bx: 6.4,
                        by: 8.4,
                        rx: -0.1
                },
                {
                        sx: 785,
                        sy: 90,
                        mw: 0.3,
                        mh: 0.1,
                        bx: 6.5,
                        by: 7.4,
                        rx: -0.1
                },
                {
                        sx: 55,
                        sy: 90,
                        mw: 0.3,
                        mh: 0.1,
                        bx: 6.5,
                        by: 7.4,
                        rx: -0.1
                }
				];
                
                var ePageX = null;
                var ePageY = null;
                
                function getMousePos(expression) {
                        if (ePageX == null || ePageY == null) return null;
                        var _x = $(expression).position().left;
                        _x += ePageX - $(expression).parent().position().left;
                        var _y = $(expression).position().top;
                        _y += ePageY - $(expression).parent().position().top;
                        return {
                                x: _x,
                                y: _y
                        }
                };
                
                var index_xh = setInterval(function () {
                        for (var i = 0; i < 4; i++) {
                                var mousepos = getMousePos("#indexg" + i);
                                if (mousepos != null) {
                                        var left = parseInt($("#indexg" + i).css("left"));
                                        var l = left + (index_div_pro[i].sx + index_div_pro[i].mw - (mousepos.x - 100) / index_div_pro[i].bx * index_div_pro[i].rx - left) * 0.2;
                                        var top = parseInt($("#indexg" + i).css("top"));
                                        var t = top + (index_div_pro[i].sy + index_div_pro[i].mh - (mousepos.y - 100) / index_div_pro[i].by - top) * 0.2;
                                        $("#indexg" + i).css({
                                                left: l,
                                                top: t
                                        })
                                }
                        }
                },
                15);
                
                $("body").mousemove(function (event) {
                        event = event || window.event;
                        ePageX = event.pageX;
                        ePageY = event.pageY;
                });
        
        
});