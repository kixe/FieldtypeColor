$(document).ready(function() {
	/* options basic color setting */
	$("select.FieldtypeOptionsColor option").each(function() {
		$(this).css( "color", $(this).data('color'));
		$(this).css( "background", $(this).data('background'));
		var bgi =  "linear-gradient(" + $(this).data('rgba') + ',' + $(this).data('rgba') + "), url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==')";
		$(this).css( "background-image", bgi);
	});
	
	/* single select */
	$("select.FieldtypeOptionsColor[multiple!=multiple]").each(function() {
		var selected = $(this).find(":selected");
		$(this).css( "background", selected.data('background'));
		var bgi = "linear-gradient(" + selected.data('rgba') + ',' + selected.data('rgba') + "), url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==')";
		$(this).css( "background-image", bgi);
		$(this).css( "color", selected.data('color'));
	});
	
	$("select.FieldtypeOptionsColor").focus(function() {
		$(this).css( "background", '#fff linear-gradient(0deg, #fff 0%, #fff 100%)');
		$(this).css( "background-image", 'linear-gradient(0deg, #fff 0%, #fff 100%)');
		$(this).css( "color", '#000');
	});
	
	$("select.FieldtypeOptionsColor").change(function() {
	    var selected = $("option:selected", this);
		if (selected.attr('value') !== "") {
			$(this).css( "background", selected.data('background'));
			var bgi = "linear-gradient(" + selected.data('rgba') + ',' + selected.data('rgba') + "), url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==')";
			$(this).css( "background-image", bgi);
			$(this).css( "color", selected.data('color'));
		} else {
			$(this).css( "background", '#fff linear-gradient(0deg, #fff 0%, #fff 100%)');
			$(this).css( "background-image", 'linear-gradient(0deg, #fff 0%, #fff 100%)');
			$(this).css( "color", '#000');
		}
		$(this).blur();
	});
	
	/* multi select */
	$("select.FieldtypeOptionsColor[multiple]").each(function() {
		var selected = $(this).find(":selected");
		var size = $(this).children().length;
		$(this).attr('size', size);
	});
	
	/* Checkboxes and radio buttons */
	$("input.FieldtypeOptionsColor").each(function() { 
		$(this).next('span').css( "color", $(this).closest('label').data('color'));
		$(this).next('span').css( "background", $(this).closest('label').data('background'));
		var bgi = "linear-gradient(" + $(this).closest('label').data('rgba') + ',' + $(this).closest('label').data('rgba') + "), url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==')";
		$(this).next('span').css( "background-image", bgi);
	});
});
