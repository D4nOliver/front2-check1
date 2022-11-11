let cardSubmit = document.getElementById("cardSubmit");
let form = document.getElementById("form");
cardSubmit.addEventListener("click", function () {
  let cardTitulo = document.getElementById("cardTitulo");
  let cardImg = document.getElementById("cardImg");
  let cardDesc = document.getElementById("cardDesc");
  console.log(`${cardTitulo.value}, ${cardImg.value},  ${cardDesc.value} `);
});
form.addEventListener("submit", (event) => event.preventDefault());
