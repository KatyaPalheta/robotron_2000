# ROBOTRON 2000 - Curso JavaScript Alura

## Índice

- [Visão Geral](#visão-geral)
  - [O desafio](#the-challenge)
  - [Captura de tela](#captura-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que aprendi](#o-que-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)

## Visão geral

Esse é o projeto final criado ao longo das aulas do curso "JavaScript: manipulando o DOM"

### O desafio

Os usuários devem ser capazes de:

- Adicionar pontos de poder nas partes do robô, utilizando botões de mais(+) e menos(-) e ver as estatisticas atualizando em tempo real.

### Captura de tela

![Resultado final](/assets/img/meu_resultado_robotron.png)

### Links

- URL do site ao vivo: (<https://thunderous-narwhal-03b7c2.netlify.app/>)

## Meu processo

Demorei cerca de 15h de trabalho para concluir o desafio

### Construído com

- Marcação HTML5 semântica
- Propriedades personalizadas de CSS
- Flexbox
- Grade CSS
- Automação com JavaScript
- Uso de data-attributs
- Manipulação de DOM

### O que eu aprendi

Aprendi bastante sobre manipulação de DOM. Aprendi sobre criação de script reutilizavel. Sobre funções anonimas e expressões em JavaCript

Para ver como você pode adicionar snippets de código, veja abaixo:

``` js
controle.forEach((element) => {
 element.addEventListener('click', (evento) => {
  manupulaDados(evento.target.dataset.controle, evento.target.parentNode);
  atualizaEstatistica(evento.target.dataset.peca);
 });
});
```

### Desenvolvimento contínuo

Para o futuro vou aprofundar os estudos sobre data-attributs e o uso de funções anonimas.

## Autor

- URL no front mentor: (<https://www.frontendmentor.io/profile/KatyaPalheta>)
- Linkedin: (www.linkedin.com/in/katyapalheta)

## Agradecimentos

Agradeço a Alura, escola de programação, por ter sido minha fonte de conhecimento e minha amiga na trajetória de crescimento pessoal. Aos membros da comunidade Code, mentoria que está moldando minha mente para o mercado de trabalho. Especial agradecimento ao Professor Pedro MArins, mentor, que me inspira e motiva a não desistir. Obrigada pela força, professor.
