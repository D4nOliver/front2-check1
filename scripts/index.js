let cardSubmit = document.getElementById("cardSubmit");
let container = document.querySelector(".container");

cardSubmit.addEventListener("click", function () {
  let cardTitulo = document.getElementById("cardTitulo");
  let cardImg = document.getElementById("cardImg");
  let cardDesc = document.getElementById("cardDesc");

  let card = () => {
    return `<div class="card">
        <img
          class="imgCard"
          src=""
          alt="${cardTitulo}"
        />
        <h1 class="titulo">${cardImg}</h1>
        <p class="desc">
          ${cardDesc}
        </p>
      </div>`;
  };
  container.innerHTML += card();
});
/* document.querySelector(".container").innerHTML += card(
  cardTitulo,
  cardImg,
  cardDesc
);

 let newCard = document.createElement("div");
newCard.classList.add("Card")

newCard.innerHTML = `  <img
class="imgCard"
src="https://i.pinimg.com/originals/c9/66/5c/c9665cadeb7a1fc8b18a68d120de4ece.jpg"
alt=""
/>
<h1 class="titulo">KUNG FU GATO</h1>
<p class="desc">
-Everybody is kung fu fighting (hoo, huh) <br> -Your mind becomes fast as
lightning <br> -Although the future is a little bit frightening <br> -It's the book of your life that you're writing
</p>`;
 
container.appendChild(newCard)
 */
