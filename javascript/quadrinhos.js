// Aguarda conteudo DOM carregar ara carregar o JS
document.addEventListener("DOMContentLoaded", () => {
  setupSlides();
});

let indice = 0;
let slide = document.getElementById("slide");
const arraySlides = [
  "./imagens/slides/Slide1.jpg",
  "./imagens/slides/Slide2.jpg",
  "./imagens/slides/Slide3.jpg",
  "./imagens/slides/Slide4.jpg",
  "./imagens/slides/Slide5.jpg",
  "./imagens/slides/Slide6.jpg",
  "./imagens/slides/Slide7.jpg",
  "./imagens/slides/Slide8.jpg",
  "./imagens/slides/Slide9.jpg",
  "./imagens/slides/Slide10.jpg",
  "./imagens/slides/Slide11.jpg",
  "./imagens/slides/Slide12.jpg",
  "./imagens/slides/Slide13.jpg",
  "./imagens/slides/Slide14.jpg",
  "./imagens/slides/Slide15.jpg",
  "./imagens/slides/Slide16.jpg",
  "./imagens/slides/Slide17.jpg",
  "./imagens/slides/Slide18.jpg",
  "./imagens/slides/Slide19.jpg",
];
function setupSlides() {
  let esquerda = document.getElementById("esquerda");
  let direita = document.getElementById("direita");

  direita.addEventListener("click", () => {
    changeSlide(true);
  });
  esquerda.addEventListener("click", () => {
    changeSlide(false);
  });
}

function changeSlide(change) {
  if (change) {
    indice++;
  } else {
    indice--;
  }

  slide.src = arraySlides[indice];
}
