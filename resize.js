// JavaScript Document


var padding = document.getElementById("center_image");
var style = window.getComputedStyle(padding);
var padding = style.getPropertyValue('padding-top');

var newSize = 20;

window.onresize = function(){
	var windowSize = $(window).width();

	if(windowSize >= 1000){
		newSize = 20;
		document.getElementById("center_image").style.paddingTop = newSize;
	}

	if(windowSize < 1000){
	
		newSize--;
		document.getElementById("center_image").style.paddingTop = newSize;	
	} 

}