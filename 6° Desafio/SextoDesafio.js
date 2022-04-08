// Você já viu como trabalhar com arrays de forma simples, adicionando itens na sua lista de compras.

// Outra operação muito comum é a de remoção de itens da lista e, por isso, é muito importante que você saiba como fazer isso.

// Pensando a fundo, existem N maneiras de deletar um item de uma lista. Você pode remover o primeiro item, o último, ou qualquer um do meio da lista. Cada uma dessas operações tem o seu próprio método dentro das documentações dos arrays em Javascript. Vamos falar mais sobre esses métodos na seção "Dicas".

// Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?

// A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

// Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

// Por fim, ele voltará para o ciclo inicial de perguntas.

// Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

// Por exemplo: “Não foi possível encontrar o item dentro da lista!”

// Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.

let lista = {
  frutas: [],
  laticinios: [],
  congelados: [],
  doces: [],
};

let frutas = document.querySelector("#frutas");
let laticinios = document.querySelector("#laticinios");
let congelados = document.querySelector("#congelados");
let doces = document.querySelector("#doces");


//Função chamada quando o botão de Adicionar é clicado.
function btnClick() {
  let selecionado = document.querySelector("select").value;
  let item = document.querySelector(".item").value;
  verifyCategory(selecionado, item);
}

//Função que verificar qual categoria o item inserido pertence e o insere na lista respectiva.
function verifyCategory(categoria, item) {
  if (item == "") {
    alert("Insira algum Item para adicionar à lista!");
  } else if (categoria == "frutas") {
    lista.frutas.push(item);
    listUpdate("frutas");
  } else if (categoria == "laticinios") {
    lista.laticinios.push(item);
    listUpdate("laticinios");
  } else if (categoria == "congelados") {
    lista.congelados.push(item);
    listUpdate("congelados");
  } else {
    lista.doces.push(item);
    listUpdate("doces");
  }
}

//Função para atulizar a lista na tela, com cada item juntamente com um "botão" para remover e uma virgula caso haja um item na frente e caso não houver colocar um ponto final.
function listUpdate(category) {
  let listOfItems = "";
  if (category == "frutas") {
    for (let i = 0; i < lista.frutas.length; i++) {
      if (i == lista.frutas.length - 1 && lista.frutas.length > 0) {
        listOfItems += `${lista.frutas[i]} <i class="fa-regular fa-trash-can" onclick='removeItems("${category}", ${i})'></i>.`;
      } else {
        listOfItems += `${lista.frutas[i]} <i class="fa-regular fa-trash-can" onclick='removeItems("${category}", ${i})'></i>, &nbsp`;
      }
      frutas.innerHTML = `<strong>Frutas:</strong> ${listOfItems}`;
    }
  } else if (category == "laticinios") {
    for (let i = 0; i < lista.laticinios.length; i++) {
      if (i == lista.laticinios.length - 1 && lista.laticinios.length > 0) {
        listOfItems += `${lista.laticinios[i]} <i class="fa-regular fa-trash-can" onclick='removeItems("${category}", ${i})'></i>.`;
      } else {
        listOfItems += `${lista.laticinios[i]} <i class="fa-regular fa-trash-can" onclick='removeItems("${category}", ${i})'></i>, &nbsp`;
      }
      laticinios.innerHTML = `<strong>Laticínios:</strong> ${listOfItems}`;
    }
  } else if (category == "congelados") {
    for (let i = 0; i < lista.congelados.length; i++) {
      if (i == lista.congelados.length - 1 && lista.congelados.length > 0) {
        listOfItems += `${lista.congelados[i]} <i class="fa-regular fa-trash-can" onclick='removeItems("${category}", ${i})'></i>.`;
      } else {
        listOfItems += `${lista.congelados[i]} <i class="fa-regular fa-trash-can" onclick='removeItems("${category}", ${i})'></i>, &nbsp`;
      }
      congelados.innerHTML = `<strong>Congelados:</strong> ${listOfItems}`;
    }
  } else {
    for (let i = 0; i < lista.doces.length; i++) {
      if (i == lista.doces.length - 1 && lista.doces.length > 0) {
        listOfItems += `${lista.doces[i]} <i class="fa-regular fa-trash-can" onclick='removeItems("${category}", ${i})'></i>.`;
      } else {
        listOfItems += `${lista.doces[i]} <i class="fa-regular fa-trash-can" onclick='removeItems("${category}", ${i})'></i>, &nbsp`;
      }
      doces.innerHTML = `<strong>Doces:</strong> ${listOfItems}`;
    }
  }
}

//Função que remove o item respectivo da lista na qual ele pertence.
function removeItems(imprimirLocal, i) {
  console.log(imprimirLocal, i)
  if (imprimirLocal == "frutas") {
    lista.frutas.splice(i, 1);
    frutas.innerHTML = "<strong>Frutas:</strong>";
  } else if (imprimirLocal == "laticinios") {
    lista.laticinios.splice(i, 1);
    laticinios.innerHTML = "<strong>Laticínios:</strong>";
  } else if (imprimirLocal == "congelados") {
    lista.congelados.splice(i, 1);
    congelados.innerHTML = "<strong>Congelados:</strong>";
  } else {
    lista.doces.splice(i, 1);
    doces.innerHTML = "<strong>Doces:</strong>";
  }
  listUpdate(imprimirLocal);
}
