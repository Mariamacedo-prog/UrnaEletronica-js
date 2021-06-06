let seuVoto = document.querySelector(".d-1-1 span");
let cargo = document.querySelector(".d-1-2 span");
let descriçao = document.querySelector(".d-1-4");
let aviso = document.querySelector(".d-2");
let lateral = document.querySelector(".d-1-right");
let numeros = document.querySelector(".d-1-3");

let etapaAtual = 0;
let numero = "";
let branco = false;
let votos = [];

function comecarEtapa() {
  let etapa = etapas[etapaAtual];

  let numerosHTML = "";
  numero = "";
  branco = false;

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
      if (candidato.fotos[i].small) {
        fotosHTML += `<div class="d-1-image small">
        <img src="images/${candidato.fotos[i].url}" alt=${candidato.fotos[i].legenda}>
        ${candidato.fotos[i].legenda}
    </div>`;
      } else {
        fotosHTML += `<div class="d-1-image">
        <img src="images/${candidato.fotos[i].url}" alt=${candidato.fotos[i].legenda}>
        ${candidato.fotos[i].legenda}
    </div>`;
      }
    }
    lateral.innerHTML = fotosHTML;
  } else {
    aviso.style.display = "block";
    seuVoto.style.display = "block";
    descriçao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
  }
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

function btnBranco() {
  numero = "";
  branco = true;
  aviso.style.display = "block";
  seuVoto.style.display = "block";
  descriçao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
  numeros.innerHTML = "";
  lateral.innerHTML = "";
}
function btnCorrige() {
  comecarEtapa();
}
function btnConfirma() {
  let etapa = etapas[etapaAtual];
  let confirmarVoto = false;

  if (branco === true) {
    confirmarVoto = true;
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto: "branco",
    });
  } else if (numero.length === etapa.numeros) {
    confirmarVoto = true;
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto: numero,
    });
  }

  if (confirmarVoto) {
    etapaAtual++;
    if (etapas[etapaAtual] !== undefined) {
      comecarEtapa();
    } else {
      document.querySelector(".tela").innerHTML =
        '<div class="aviso--gigante pisca">FIM</div>';
      console.log(votos);
    }
  }
}

comecarEtapa();
