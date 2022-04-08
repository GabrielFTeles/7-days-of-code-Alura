// Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?

// À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

// No final, o sistema vai exibir a mensagem:

// "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

// Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.

// Se você quiser se aprofundar no assunto de hoje, eu tenho mais um exercício para você.

// Mas ele é 100% opcional.

// Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

// Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

// E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

// 1 > Muito bom! Continue estudando e você terá muito sucesso.
// 2 > Ahh que pena... Já tentou aprender outras linguagens?

// Tanto o alert() quanto o prompt() são usados para criar caixas de diálogo e interagir com o usuário, mas eles são diferentes entre si.

// O alert() é usado para mostrar uma mensagem simples ao usuário.

// Exemplo:

// alert("Olá, pessoal!");

// Já o prompt() precisa que o usuário insira algum valor, que você poderá manipular.

// Exemplo:

// const cidade = prompt("Digite a sua cidade:");
// const msg = `Você é de ${cidade}!`;
// alert(msg);

// Teste os códigos acima e tente adaptá-los ao seu programa!

const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const cidade = prompt("Qual a sua cidade?");

const msg = `Olá ${nome}, você tem ${idade} anos, é de ${cidade} e já está aprendendo ${linguagem}!`;

alert(msg);

const gosta = prompt(
  `Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`
);

if (gosta == "1") {
  alert(`Muito bom ${nome}! Continue estudando e você terá muito sucesso.`);
} else if (gosta == "2") {
  alert(`Ahh que pena ${nome}... Já tentou aprender outras linguagens?`);
} else {
  alert(
    "Infelizmente você não respondeu com os números que eu pedi, mas eu espero que você tenha muito sucesso nos seus estudos!"
  );
}
