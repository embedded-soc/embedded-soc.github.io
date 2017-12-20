$( window ).resize(function() {
	var position;

    if ($(window).width() >= 1310) {
		
		$("#info").css("visibility", "visible");
		$("#info-center").css("display", "none");
		
		position = ((($(window).width() - 850 ) / 2 ) - 230 - 20);

		if ( position > 0 ) {
			$("#info").css("left", parseInt(position));		
		} else {
			$("#info").css("left", 0);		
		}
	}
	else {
		$("#info").css("visibility", "hidden");
		$("#info-center").css("display", "block");
	}	

});

$(document).ready(function() {
	var position;
	
    if ($(window).width() >= 1310) {
			
		$("#info").css("visibility", "visible");
		$("#info-center").css("display", "none");

		position = ((($(window).width() - 850 ) / 2 ) - 230 - 20);
		
		if ( position > 0 ) {
			$("#info").css("left", parseInt(position));		
		} else {
			$("#info").css("left", 0);		
		}
	}
	else {
		$("#info").css("visibility", "hidden");
		$("#info-center").css("display", "block");
	}
});

$("#plus-minus").click(function() {

	if ($("#plus-minus").text().toLowerCase() === "[-]".toLowerCase()) {
		$("#plus-minus").text("[+]"); 
		$("#info-center-contents").css("display", "none");
	} else {
		$("#plus-minus").text("[-]"); 
		$("#info-center-contents").css("display", "block");	
	}
	
	return false;
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slideshow');
},  5000);