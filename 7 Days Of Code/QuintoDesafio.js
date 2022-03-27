// Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

// Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

// Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

// Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

// Caso você adicione na sua lista:
// banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

// O programa deverá imprimir, por exemplo:

// Lista de compras:
//     Frutas: banana, tomate, maçã, uva, abacate
//     Laticínios: leite vegetal, leite de vaca, leite em pó
//     Congelados:
//     Doces: chiclete e bala de ursinho

//     Para criar um array vazio, você pode usar colchetes. E aí, para inserir algo em um array, você pode usar a função .push(). Por exemplo:

// let meuArray = [];
// meuArray.push(elemento1);

// Depois disso, o array não estará mais vazio, ele terá o elemento1.

// Para aprender mais sobre arrays em Javascript, dê uma olhada nesse site.

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

function btnClick() {
  let selecionado = document.querySelector("select").value;
  let item = document.querySelector(".item").value;
    verifyCategory(selecionado, item);
}

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

function listUpdate(category) {
  if (category == "frutas") {
    frutas.innerHTML = `<strong>Frutas:</strong> ${lista.frutas.join(", ")}`;
  } else if (category == "laticinios") {
    laticinios.innerHTML = `<strong>Laticínios:</strong> ${lista.laticinios.join(
      ", "
    )}`;
  } else if (category == "congelados") {
    congelados.innerHTML = `<strong>Congelados:</strong> ${lista.congelados.join(
      ", "
    )}`;
  } else {
    doces.innerHTML = `<strong>Doces:</strong> ${lista.doces.join(", ")}`;
  }
}
