// Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!

// Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

// Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

// No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

// Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.
// DICA
// Pense muito bem em qual estrutura de repetição você irá utilizar para fazer o seu programa ser executado até o momento em que as 3 tentativas acabem, ou até a pessoa acertar o número.

// Lembre-se que você pode sempre personalizar o seu programa da forma que quiser.

// Não se esqueça de compartilhá-lo no seu GitHub e nas suas redes sociais com a hashtag #7DaysOfCode, e também com #feedback7DoC caso você precise de alguma ajuda.
// EXTRA
// Dê uma olhada nesse site para aprender mais sobre estruturas de repetição.

// Para fazer a própria máquina escolher sozinha o número a ser adivinhado, você pode utilizar algo chamado Math.random().

// Para isso, utilize o código:

// Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)

// Onde, claro, você terá que alterar os valores de mínimo e máximo pelos limites inferior e superior, respectivamente.

let numeroSecreto = gerarNumeroSecreto();
let tentativas = 3;
let btnR = document.getElementById("btnR");
let btnC = document.getElementById("btnC");
let resultado = document.getElementById("resultado");

function gerarNumeroSecreto() {
    let numeroSecreto = parseInt(Math.random() * 11);
    return numeroSecreto;
}

function chutar() {
  let resposta = document.getElementById("inpChute").value;
  console.log(resposta);
  verificaResposta(resposta);
}

function verificaResposta(resposta) {
  if (resposta == "" || isNaN(resposta)) {
    resultado.innerHTML = "Valor inserido é inválido!";
  } else if (resposta < 0 || resposta > 10) {
    resultado.innerHTML = "coloque um número entre 0 e 10!";
  } else if (resposta == numeroSecreto) {
    resultado.innerHTML = `Você venceu o número secreto era ${numeroSecreto} !`;
    gameOver();
  } else if (resposta > numeroSecreto) {
    resultado.innerHTML = "Você errou! Dica: Tente um número menor.";
    tentativas--;
    if (tentativas == 0) {
      resultado.innerHTML = "Suas tentativas acabaram!";
      gameOver();
    }
  } else if (resposta < numeroSecreto) {
    resultado.innerHTML = "Você errou! Dica: Tente um número maior.";
    tentativas--;
    if (tentativas == 0) {
      resultado.innerHTML = "Suas tentativas acabaram!";
      gameOver();
    }
  }
}

function gameOver() {
  btnC.style.display = "none";
  btnR.style.display = "Initial";
}

function reiniciar() {
  tentativas = 3;
  numeroSecreto = gerarNumeroSecreto();
  resultado.textContent = "";
  btnC.style.display = "Initial";
  btnR.style.display = "none";
  document.getElementById("inpChute").value = "";
}
