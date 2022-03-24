alert("Olá, Seja-Bem Vindo(a)!");
const nome = prompt("Qual o seu nome?");
let linguagensLista = [];

primeiraPergunta();

function primeiraPergunta() {
  let frontOuBack = prompt(
    `${nome} você gostaria de seguir qual área da programação Front-End ou Back-End ? (Digite 1 para Front-End ou 2 para Back-End)`
  );

  verificarPrimeira(frontOuBack);
}

function segundaPergunta(frontOuBack) {
  if (frontOuBack == 1) {
    let resposta = prompt(
      `${nome} você gostaria de aprender React ou Vue ? (Digite 1 para React ou 2 para Vue)`
    );
    verificarSegunda(resposta, frontOuBack);
  } else {
    let resposta = prompt(
      `${nome} você gostaria de aprender C# ou Java ? (Digite 1 para C# ou 2 para Java)`
    );
    verificarSegunda(resposta, frontOuBack);
  }
}

function terceiraPergunta(frontOuBack) {
  if (frontOuBack == 1) {
    let frontOuFull = prompt(
      `${nome} você pretende se especializar em Front-End ou se desenvolver para se tornar FullStack ? (Digite 1 para Front-End ou 2 para FullStack)`
    );
    verificarTerceira(frontOuFull);
  } else {
    let backOuFull = prompt(
      `${nome} você pretende se especializar em Back-End ou se desenvolver para se tornar FullStack ? (Digite 3 para Back-End ou 4 para FullStack)`
    );
    verificarTerceira(backOuFull);
  }
}

function quartaPergunta() {
  let linguagem = prompt(`${nome} Qual tecnologia você gostaria de aprender?`);
  verificarQuarta(linguagem);
}

function verificarPrimeira(frontOuBack) {
  if (frontOuBack == 1) {
    segundaPergunta(frontOuBack);
  } else if (frontOuBack == 2) {
    segundaPergunta(frontOuBack);
  } else {
    alert("Opção inválida, insira 1 para Front-End ou 2 para Back-end!");
    primeiraPergunta();
  }
}

function verificarSegunda(resposta, frontOuBack) {
  if (!(resposta == 1 || resposta == 2)) {
    alert(
      "Opção inválida, insira 1 ou 2 para escolher a que gostaria de aprender!"
    );
  } else {
    terceiraPergunta(frontOuBack);
  }
}

function verificarTerceira(especOuFull) {
  if (especOuFull == 1) {
    alert(
      `Muito Bem ${nome}, espero que sua jornada como Front-End seja incrível!`
    );
    quartaPergunta();
  } else if (especOuFull == 2 || especOuFull == 4) {
    alert(
      `Muito Bem ${nome}, espero que sua jornada como FullStack seja incrível!`
    );
    quartaPergunta();
  } else if (especOuFull == 3) {
    alert(
      `Muito Bem ${nome}, espero que sua jornada como Back-End seja incrível!`
    );
    quartaPergunta();
  } else {
    alert(
      "Opção inválida, insira um valor válido para se especializar ou se tornar um Dev FullStack!"
    );
    terceiraPergunta();
  }
}

function verificarQuarta(linguagem) {
  if (linguagem.toUpperCase() == "OK") {
    alert(
      `Muito Bem, ${nome}! Espero que consiga aprender ${linguagensLista.join(
        ", "
      )} e se torne o melhor nelas!`
    );
  } else {
    linguagensLista.push(linguagem);
    let linguagem2 = prompt(
      `${nome} Mais alguma tecnologia que você gostaria de aprender? (Responda com OK quando não houver mais nenhuma)`
    );
    verificarQuarta(linguagem2);
  }
}
