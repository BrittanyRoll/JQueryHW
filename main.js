// must start with this so everything doesn't go off at once
$(document).ready(function(){
	alert('This is ready');
});
 // anonymous function
function(){
	alert("anon funct");
}
var anonFunct = function(){
	alert("anon")
}

// hides somethignafter 5 secs
$("h1").hide(5000);
// shows in 10 secs after hidden
$("h1").show(10000);


// fades it out in 5 secs
$("h2").fadeOut(5000)
// fabes back in after fading out
$("h2").fadeIn(10000)

// hides by sliding up, then by sliding down
$("h3").slideUp(3000)
$("h3").slideDown(6000)

// animates element
$("h4").animate({
	opacity: 0.25
	width: "50%"
}, 4000);

// alert appears when anywhere on page is clicked
$("document").click(
	function(){
		alert('Hi');
	});