let enviar = document.getElementById("cardSubmit");
let cardTitulo = document.getElementById("cardTitulo");
let cardImg = document.getElementById("cardImg");
let cardDesc = document.getElementById("cardDesc");

let erroDesc = true
let erroImg = true
let erroTitulo = true

enviar.addEventListener("click", function (evento) {
  evento.preventDefault();
  let cardTitulo = document.getElementById("cardTitulo").value;
  let cardImg = document.getElementById("cardImg").value;
  let cardDesc = document.getElementById("cardDesc").value;
  let container = document.getElementById("container");
  if (cardDesc.length > 3 && cardTitulo.length > 3 && cardImg != "") {
    container.innerHTML += `
    <div class="card">
        <img
          class="imgCard"
          src="${cardImg}"
          alt=""
        />
        <h1 class="titulo">${cardTitulo}</h1>
        <p class="desc">${cardDesc}</p>
      </div>
    `;
  }
});

cardTitulo.addEventListener("blur", function () {
  let tituloValidacao = document.getElementById("tituloValidacao");

  if (cardTitulo.value.length >= 4) {
    erroTitulo = false
    cardTitulo.style.backgroundColor = "#69C466";
    tituloValidacao.innerText = "";
    validacao();
    cardTitulo.style.color = "black";
  } else {
    cardTitulo.style.backgroundColor = "#EB5D5D";
    tituloValidacao.innerText = "Minimo de 4 caracteres";
    tituloValidacao.style.fontWeight = "bold";
    tituloValidacao.style.color = "#EB5D5D";
    erroTitulo = true
    validacao();
    cardTitulo.style.color = "black";
  }
});

cardImg.addEventListener("blur", function () {
  let imgValidacao = document.getElementById("imgValidacao");
  if (cardImg.value.length >= 1) {
    erroImg = false;
    cardImg.style.backgroundColor = "#69C466";
    imgValidacao.innerText = "";
    cardImg.style.color = "black";
    validacao();
  } else {
    cardImg.style.backgroundColor = "#EB5D5D";
    imgValidacao.innerText = "Minimo de 1 caractere";
    imgValidacao.style.fontWeight = "bold";
    imgValidacao.style.color = "#EB5D5D";
    cardImg.style.color = "black";
    erroImg = true;
    validacao();
  }
});

cardDesc.addEventListener("blur", function () {
  let descValidacao = document.getElementById("descValidacao");
  if (cardDesc.value.length >= 4) {
    erroDesc = false;
    cardDesc.style.backgroundColor = "#69C466";
    descValidacao.innerText = "";
    cardDesc.style.color = "black";
    validacao();
  } else {
    cardDesc.style.backgroundColor = "#EB5D5D";
    descValidacao.innerText = "Minimo de 4 caracteres";
    cardDesc.style.color = 'black'
    descValidacao.style.fontWeight = "bold";
    descValidacao.style.color = "#EB5D5D";
    erroDesc = true;
    validacao();
  }
});

function validacao(){
  if (erroDesc == false && erroImg == false && erroTitulo == false) {
    enviar.removeAttribute('disabled')
  } else {
    enviar.setAttribute('disabled', true)
  }
}