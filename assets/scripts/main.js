const parte = document.querySelectorAll('.peca-titulo');
//seleciona todos os elementos que tem a classe peca-titulo
//(perna, braco, foguete, etc)
const controle = document.querySelectorAll('[data-controle]');
// a div controle é o elemento pai do elemento parte
const estatistica = document.querySelectorAll('[data-estatistica]');
console.log(estatistica);
const pecas = {
	bracos: {
		forca: 29,
		poder: 35,
		energia: -21,
		velocidade: -5,
	},

	blindagem: {
		forca: 41,
		poder: 20,
		energia: 0,
		velocidade: -20,
	},
	nucleos: {
		forca: 0,
		poder: 7,
		energia: 48,
		velocidade: -24,
	},
	pernas: {
		forca: 27,
		poder: 21,
		energia: -32,
		velocidade: 42,
	},
	foguetes: {
		forca: 0,
		poder: 28,
		energia: 0,
		velocidade: -2,
	},
};

controle.forEach((element) => {
	element.addEventListener('click', (evento) => {
		manupulaDados(evento.target.dataset.controle, evento.target.parentNode);
		atualizaEstatistica(evento.target.dataset.peca);
	});
});

// a função manipulaDados recebe dois parametros
// 1ª texto de opração
// 2ª é a div que é pai desse elemento clicado
function manupulaDados(operacao, controle) {
	const peca = controle.querySelector('[data-contador]');

	if (operacao === '-') {
		peca.value = parseInt(peca.value) - 1;
	} else {
		peca.value = parseInt(peca.value) + 1;
	}
}
function atualizaEstatistica(peca) {
	//console.log(pecas[peca]);

	estatistica.forEach((elemento) => {
		//console.log(elemento.dataset.estatistica);
		elemento.textContent =
			parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
	});
}
