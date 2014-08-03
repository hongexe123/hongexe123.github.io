$(function() {
	var index = 0;
	var max = $('#gallery li').length -1;
	var incr =  true;
	var inter = setInterval(function() {
		if(incr) {
			index ++;
			if(index >= max) {
				incr = false;
			}
		} else {
			index--;
			if(index <= 0) {
				incr = true;
			}
		}	
		$('#gallery ul').animate({
			'top' : "-{0}%".format(index * 100)
		}, 1000);
	}, 6000);

})
