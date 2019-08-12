$(document).ready(function() {
	$('.FieldtypeColor[data-input-type=1],[data-input-type=2]').on('keyup change focus', function() {
		if ($(this).attr('data-input-type') == 1) {
			if ($(this).val().replace('#','').length != 6) {
				$(this).css({'color' : '#000'});
				$(this).css({'background-color' : '#fff'});		
			} else {
				$(this).css({'background-color' : $(this).val()});
				// $(this).css({'color' : ($(this).val().replace('#','0x')) > (0xffffff/2) ? '#333' : '#fff'});
			}
		} else {
			if ($(this).val().replace('#','').length != 8) {
				$(this).css({'color' : '#000'});
				$(this).css({'background-color' : '#fff'});		
			} else {
				// $(this).css({'background-color' : $(this).val()});
				// $(this).css({'color' : ($(this).val().replace('#','0x')) > (0xffffff/2) ? '#333' : '#fff'});
			}		
		}
	});
});