/*--------------- Script --------------*/

/*
	Consegui fazer o negóz ficar funcional do jeito que eu queria. Agora
	tenho que deixar o appzinho bonitinho, aproveitar e treinar outras
	habilidades, usar isso aqui pra brincar com animação frame a frame,
	quem sabe mostrar na aula... Dá pra fazer um negócio com mais frames.
	Essa versão atual tem doze.

	Não posso me esquecer da parte de contar os cliques depois. Mas isso
	vou fazer depois que terminar as ilustrações.
*/

var i = 0;
var image = ['anima1.gif','anima2.gif','anima3.gif','anima4.gif','anima5.gif','anima6.gif','anima7.gif','anima8.gif','anima9.gif','anima10.gif','anima11.gif','anima12.gif'];

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
