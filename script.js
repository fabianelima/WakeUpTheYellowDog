/*--------------- Script --------------*/

/*
	Consegui fazer o negóz ficar funcional do jeito que eu queria. Agora
	tenho que deixar o appzinho bonitinho, aproveitar e treinar outras
	habilidades, usar isso aqui pra brincar com animação frame a frame,
	quem sabe mostrar na aula...

	Dá pra fazer um negócio com mais frames. Essa versão atu7al tem doze.
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
