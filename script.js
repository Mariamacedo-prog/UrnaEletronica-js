let seuVoto = document.querySelector(".d-1-1 span");
let cargo = document.querySelector(".d-1-2 span");
let descriçao = document.querySelector(".d-1-4");
let aviso = document.querySelector(".d-2");
let lateral = document.querySelector(".d-1-right");
let numeros = document.querySelector(".d-1-3");

let etapaAtual = 0;
let numero = "";

function comecarEtapa() {
  let etapa = etapas[etapaAtual];

  let numerosHTML = "";

  for (let i = 0; i < etapa.numeros; i++) {
    if (i === 0) {
      numerosHTML += '<div class="numero pisca"></div>';
    } else {
      numerosHTML += '<div class="numero "></div>';
    }
  }

  seuVoto.style.display = "none";
  cargo.innerHTML = etapa.titulo;
  descriçao.innerHTML = "";
  aviso.style.display = "none";
  lateral.innerHTML = "";
  numeros.innerHTML = numerosHTML;
}

function atualizaInterface() {}

function clicou(n) {
  let elNumero = document.querySelector(".numero.pisca");
  if (elNumero !== null) {
    elNumero.innerHTML = n;
    numero = `${numero}${n}`;

    elNumero.classList.remove("pisca");
    if (elNumero.nextElementSibling !== null) {
      elNumero.nextElementSibling.classList.add("pisca");
    } else {
      atualizaInterface();
    }
  }
}

function branco() {
  alert("Clicou em branco");
}
function corrige() {
  alert("Clicou em corrige");
}
function confirma() {
  alert("Clicou em confirma");
}

comecarEtapa();
