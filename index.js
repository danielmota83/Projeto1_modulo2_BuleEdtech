
let mudaTexto = document.querySelector(".texto2");
let mudaImg = document.querySelector(".imagem");
let mudaBtn = document.querySelector("button");


mudaBtn.addEventListener("click", () => {
  if (mudaBtn.value == "primeiro") {
    mudaImg.src = "./assets/imagens/mostrando1.png";
    mudaTexto.innerText = "Marcha Lenta mostrando a cara, clique novamente e se surpreenda!";
    mudaBtn.value = "segundo";
} else if (mudaBtn.value == "segundo") {
    mudaImg.src = "./assets/imagens/mostrando2.png";
    mudaTexto.innerText = "Não adiantou muita coisa né, mas clique novamente que digo quem é.";
    mudaBtn.value = "terceiro";
} else if (mudaBtn.value == "terceiro") {
    mudaImg.src = "./assets/imagens/mostrando3.png";
    mudaTexto.innerText = "Com estudo, todos podemos ser programadores, clique e confirme.";
    mudaBtn.value = "quarto";
  } else if (mudaBtn.value == "quarto") {
    mudaImg.src = "./assets/imagens/mostrando4.png";
    mudaTexto.innerText = "Marcha Lenta é o Daniel Mota, a pessoa que programou esta página!";
    mudaBtn.value = "quinto";
    mudaBtn.innerText = "Reset Jogo"
  } else {
    mudaImg.src = "./assets/imagens/escondido.png";
    mudaTexto.innerText = "Marcha Lenta está de cabeça baixa, clique no botão abaixo e veja quem é.";
    mudaBtn.value = "primeiro";
    mudaBtn.innerText = "Clique e descubra"
  }
});
