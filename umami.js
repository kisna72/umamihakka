$(window).scroll(function() {
  var showing_shrunk = false;

  if ($(document).scrollTop() > 40) {
    //$('nav').addClass('shrink');
    if (!showing_shrunk){
	    console.log("add class to shrink the thing.");
	    $("#shrunk_menu").removeClass("invisible");
	    $("#shrunk_menu").addClass("visible");
	    $("#full_menu").removeClass("visible");
	    $("#full_menu").addClass("invisible");
	    showing_shrunk = true;
	}
  } else {
    console.log("add class to expand the menu.");
    $("#shrunk_menu").removeClass("visible");
    $("#shrunk_menu").addClass("invisible");
    $("#full_menu").removeClass("invisible");
    $("#full_menu").addClass("visible");
    showing_shrunk = false;
  }
});