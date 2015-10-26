/*--------------- Script --------------*/

/*
	A idéia é fazer um appzinho que funcione com clique do usuário e mude
	a animação do cursor conforme o usuário vá clicando. Depois do primeiro
	clique, a animação corre em um sentido, e só muda se o usuário continuar
	clicando.
*/

var i = 0;
var image = ['im1.gif','im2.gif','im3.gif','im4.gif','im5.gif','im6.gif','im7.gif','im8.gif','im9.gif','im10.gif','im11.gif','im12.gif'];

$(document).mousemove(function(e){
    $('#image').css({left:e.pageX, top:e.pageY});
});

function clique() {
	i++;
	if (i > 11) {
		i = 0;
	}
	$('#image').css('background', 'url(' + image[i] + ') center no-repeat');
	setTimeout(decay,2000);
}

function decay() {
	i = i - 1;
	if (i <= 0) {
		i = 0;
	}
	$('#image').css('background', 'url(' + image[i] + ') center no-repeat');
}
