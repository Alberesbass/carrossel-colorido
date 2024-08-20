let imagemSlide = document.querySelectorAll(".imagem-slide");
const setaAvancar = document.getElementById("seta-avancar");
const setaVoltar = document.getElementById("seta-voltar");
let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {
  // console.log(imagemAtual);
  // console.log(imagemSlide.length);

  if (imagemAtual === imagemSlide.length - 1) {
    return;
  }

  imagemAtual++;

  esconderImagemAberta();
  mostrarImagem();
  mostrarOuEsconderSetas();
});

setaVoltar.addEventListener("click", function () {
  // console.log(imagemAtual);

  if (imagemAtual === 0) {
    return;
  }

  imagemAtual--;

  esconderImagemAberta();
  mostrarImagem();
  mostrarOuEsconderSetas();
});

function mostrarImagem() {
  imagemSlide[imagemAtual].classList.add("mostrar");
}

function esconderImagemAberta() {
  const imagemAberta = document.querySelector(".mostrar");
  imagemAberta.classList.remove("mostrar");
}

function mostrarOuEsconderSetas() {
  const naoEhAPrimeiraImagem = imagemAtual !== 0;
  if (naoEhAPrimeiraImagem) {
    setaVoltar.classList.remove("opacidade");
  } else {
    setaVoltar.classList.add("opacidade");
  }

  const chegouNaUltimaImagem =
    imagemAtual !== 0 && imagemAtual === imagemSlide.length - 1;
  if (chegouNaUltimaImagem) {
    setaAvancar.classList.add("opacidade");
  } else {
    setaAvancar.classList.remove("opacidade");
  }
}
