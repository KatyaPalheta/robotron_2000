const parte = document.querySelectorAll(".peca-titulo");
//seleciona todos os elementos que tem a classe peca-titulo
//(perna, braco, foguete, etc)

const controle = document.querySelectorAll("[data-controle]");
// a div controle é o elemento pai do elemento parte

controle.forEach((element) => {
  element.addEventListener("click", (evento) => {
    manupulaDados(evento.target.dataset.controle, evento.target.parentNode);
  });
});

// a função manipulaDados recebe dois parametros
// 1ª texto de opração
// 2ª é a div que é pai desse elemento clicado
function manupulaDados(operacao, controle) {
  const pecas = controle.querySelector("[data-contador]");

  if (operacao === "-") {
    pecas.value = parseInt(pecas.value) - 1;
  } else {
    pecas.value = parseInt(pecas.value) + 1;
  }
}
