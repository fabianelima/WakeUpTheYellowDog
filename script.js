/*--------------- Script --------------*/

/*
	Pronto, fiz uma animaçãozinha com 24 frames. Estava pensando em fazer
	um 'for' pra não precisar ficar mundando o número no if sempre que
	ascrescentar mais frames na animação. Acho que vai ser a próxima coisa
	que vou implementar.

	Não posso me esquecer da parte de contar os cliques depois. Mas isso
	vou fazer depois que terminar as ilustrações.
*/

var i = 0;
var image = ['anima1.gif','anima2.gif','anima3.gif','anima4.gif','anima5.gif','anima6.gif','anima7.gif','anima8.gif','anima9.gif','anima10.gif','anima11.gif','anima12.gif', 'anima13.gif','anima14.gif','anima15.gif','anima16.gif','anima17.gif','anima18.gif','anima19.gif','anima20.gif','anima21.gif','anima22.gif','anima23.gif','anima24.gif'];

function clique() {
	i++;
	if (i > 23) {
		i = 0;
	}
	$('#image').css('background', 'url(' + image[i] + ') center no-repeat');
	setTimeout(decay,3000);
}

function decay() {
	i = i - 1;
	if (i <= 0) {
		i = 0;
	}
	$('#image').css('background', 'url(' + image[i] + ') center no-repeat');
}
