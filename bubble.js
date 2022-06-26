const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span"); //création d'une balise span
  bubble.classList.add("bubble"); //injecter la classe bubble a la balise span
  document.body.appendChild(bubble); //injecter le span dans le body
  const size = Math.random() * 200 + 100 + "px"; // génere un nombre aléatoire
  bubble.style.height = size; //affecte un nombre aléatoire à la hauteur de la bulle
  bubble.style.width = size; //affecte un nombre aléatoire à la largeur de la bulle

  bubble.style.top = Math.random() * 100 + 50 + "%"; //position horizontale aléatoire
  bubble.style.left = Math.random() * 100 + "%"; //position verticale aléatoire
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 + plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;

    bubble.remove();
  });
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 300);
