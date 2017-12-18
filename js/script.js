
function infoPosition () {

}

$( window ).resize(function() {
	var position;
	var width;
    if ($(window).width() >= 1260) {
		$("#info").css("visibility", "visible");
		$("#notes-right").css("visibility", "visible");		
//		position = ((($(window).width() - 800 ) / 2 ) - 230) / 2;
		width = ((($(window).width() - 800 ) / 2 ) - 40);
		$("#info").css("width", parseInt(width));
		$("#notes-right").css("width", parseInt(width));
//		$("#notes-right").css("right", parseInt(position));		
	}
	else {
		$("#info").css("visibility", "hidden");
		$("#notes-right").css("visibility", "hidden");		
	}	
	
//  $( "#heading" ).prepend( "<div>" + $( window ).width() + "</div>" );
});

$(document).ready(function() {
	var position;
	var width;	
    if ($(window).width() >= 1260) {
		$("#info").css("visibility", "visible");
		$("#notes-right").css("visibility", "visible");		
		//		position = ((($(window).width() - 800 ) / 2 ) - 230) / 2;
		width = ((($(window).width() - 800 ) / 2 ) - 40);
		$("#info").css("width", parseInt(width));
		$("#notes-right").css("width", parseInt(width));		
//		$("#notes-right").css("right", parseInt(position));
	}
	else {
		$("#info").css("display", "none");
		$("#notes-right").css("visibility", "hidden");
	}
});

$("#logo-left-img").hover(function(){
	
    $(this).attr("src","./images/logo-color2.png");
    
	}, function(){
    
	$(this).attr("src","./images/logo-gray2.png");
});
