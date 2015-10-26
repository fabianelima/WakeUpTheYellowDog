/*--------------- Script --------------*/

/*
	YellowDog 1.0
	Animação corre conforme o clique do usuário. Se não clicar, a animação
	volta um frame até o final.
*/

var i = 0;
var j = 0;
var image = ['anima1.gif','anima2.gif','anima3.gif','anima4.gif','anima5.gif','anima6.gif','anima7.gif','anima8.gif','anima9.gif','anima10.gif','anima11.gif','anima12.gif', 'anima13.gif','anima14.gif','anima15.gif','anima16.gif','anima17.gif','anima18.gif','anima19.gif','anima20.gif','anima21.gif','anima22.gif','anima23.gif','anima24.gif'];

function clique() {
	i++;
	j++;

	if (i > 23) {
		i = 0;
	}

	$('#image').css('background', 'url(' + image[i] + ') center no-repeat');
	setTimeout(decay,2500);
	console.log(j);
}

function decay() {
	i = i - 1;

	if (i <= 0) {
		i = 0;
	}

	$('#image').css('background', 'url(' + image[i] + ') center no-repeat');
}
