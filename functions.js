jQuery(document).ready(function(){
	/* Resize too large images */
	var size = 590;
	var image = jQuery('#content img');
	
	for (i=0; i<image.length; i++) {
		var bigWidth = image[i].width;
		var bigHeight = image[i].height;
	
		if (bigWidth > size) {	
			var newHeight = bigHeight*size/bigWidth;
			image[i].width = size;
			image[i].height = newHeight;
		}
	}
	
	jQuery("#content a:has(img)").css({'padding': '0', 'background': 'none'});
	jQuery("#s:visible").focus();
	if (jQuery("#archives").is(':visible')) {
		jQuery("#toggleArchives").html("&uarr; Main Menu (Click me!) &uarr;");
	}
});

function toggleArchives() {
	if (jQuery("#archives").is(':visible')) {
		jQuery("#archives").slideUp();
		jQuery("#toggleArchives").html("&darr; Main Menu (Click me!) &darr;");
	}
	else {
		jQuery("#toggleArchives").html("&uarr; Main Menu (Click me!) &uarr;");
		jQuery("#archives").slideDown(function() {
			jQuery("#s").focus();
		});
	}
}