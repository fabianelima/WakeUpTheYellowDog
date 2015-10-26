/*--------------- Script --------------*/
var i = 0;
var image = ['img1.gif','img2.gif','img3.gif','img4.gif'];

$(document).mousemove(function(e){
    $('#image').css({left:e.pageX, top:e.pageY});
});

function clicou() {
	i++;
	if (i > 3) {
		i = 0;
	}
	$('#image').css('background', 'url(' + image[i] + ') center no-repeat');
}
