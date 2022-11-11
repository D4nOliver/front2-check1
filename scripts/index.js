// botão do submit
const cardSubmit = document.getElementById("cardSubmit");
const form = document.getElementById("form");
cardSubmit.addEventListener("click", function () {
  const cardTitulo = document.getElementById("cardTitulo");
  const cardImg = document.getElementById("cardImg");
  const cardDesc = document.getElementById("cardDesc");
  console.log(`${cardTitulo.value}, ${cardImg.value},  ${cardDesc.value} `);
});
form.addEventListener("submit", (event) => event.preventDefault());
