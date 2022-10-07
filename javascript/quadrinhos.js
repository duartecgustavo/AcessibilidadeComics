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
];
function setupSlides() {
  let esquerda = document.getElementById("esquerda");
  let direita = document.getElementById("direita");

  if (indice === 0) {
    esquerda.style.display = "none";
  }

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
  if (indice == 0) {
    esquerda.style.display = "none";
  } else {
    esquerda.style.display = "flex";
  }
  if (indice == arraySlides.length-1) {
    direita.style.display = "none";
  } else {
    direita.style.display = "flex";
  }

  slide.src = arraySlides[indice];
}
