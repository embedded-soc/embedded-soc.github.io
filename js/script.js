
function infoPosition () {

}

$( window ).resize(function() {
	var position;
	
    if ($(window).width() >= 1310) {
		$("#info").css("visibility", "visible");
		position = ((($(window).width() - 850 ) / 2 ) - 230) / 2;
		$("#info").css("left", parseInt(position));
	}
	else {
		$("#info").css("visibility", "hidden");
	}	
	
//  $( "#heading" ).prepend( "<div>" + $( window ).width() + "</div>" );
});

$(document).ready(function() {
	var position;
	
    if ($(window).width() >= 970) {
		$("#info").css("visibility", "visible");
		position = ((($(window).width() - 850 ) / 2 ) - 230) / 2;
		$("#info").css("left", parseInt(position));
	}
	else {
		$("#info").css("display", "none");
	}
});

$("#logo-left-img").hover(function(){
	
    $(this).attr("src","./images/logo-color2.png");
    
	}, function(){
    
	$(this).attr("src","./images/logo-gray2.png");
});
