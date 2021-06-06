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

function atualizaInterface() {
  let etapa = etapas[etapaAtual];
  let candidato = etapa.candidatos.filter((item) => {
    if (item.numero === numero) {
      return true;
    } else {
      return false;
    }
  });
  if (candidato.length > 0) {
    candidato = candidato[0];

    aviso.style.display = "block";
    seuVoto.style.display = "block";
    descriçao.innerHTML = `Nome: ${candidato.nome}<br> Partido: ${candidato.partido}`;

    let fotosHTML = "";

    for (let i in candidato.fotos) {
      fotosHTML += `<div class="d-1-image">
      <img src="images/${candidato.fotos[i].url}" alt=${candidato.fotos[i].legenda}>
      ${candidato.fotos[i].legenda}
  </div>`;
    }

    lateral.innerHTML = fotosHTML;
  }

  console.log("candidato", candidato);
}

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
