let container = document.querySelector(".container");
let newCard = document.createElement("div");
let img = document.createElement("img");
let h1 = document.createElement("h1");
let p = document.createElement("p");

newCard.classList.add("card");
img.classList.add("imgCard");
h1.classList.add("titulo");
p.classList.add("desc");
p.innerHTML = `-Everybody is kung fu fighting (hoo, huh) <br> -Your mind becomes fast as
lightning <br> -Although the future is a little bit frightening <br> -It's the book of your life that you're writing`;
h1.innerText = "KUNG FU GATO";
img.src =
  "https://i.pinimg.com/originals/c9/66/5c/c9665cadeb7a1fc8b18a68d120de4ece.jpg";
newCard.appendChild(img);
newCard.appendChild(h1);
newCard.appendChild(p);
container.appendChild(newCard);
