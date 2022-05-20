
let elementoMudaTexto = document.querySelector(".texto2");
let elementoImg = document.querySelector(".imagem");
let elementoBtn = document.querySelector("button");

elementoBtn.addEventListener("click", () => {
  if (elementoBtn.value == "primeiro") {
    elementoImg.src = "./assets/imagens/mostrando1.png";
    elementoMudaTexto.innerText = "Marcha Lenta mostrando a cara, clique novamente e se surpreenda!";
    elementoBtn.value = "segundo";
} else if (elementoBtn.value == "segundo") {
    elementoImg.src = "./assets/imagens/mostrando2.png";
    elementoMudaTexto.innerText = "Não adiantou muita coisa né, mas clique novamente que digo quem é.";
    elementoBtn.value = "terceiro";
} else if (elementoBtn.value == "terceiro") {
    elementoImg.src = "./assets/imagens/mostrando3.png";
    elementoMudaTexto.innerText = "Com estudo, todos podemos ser programadores, clique e confirme.";
    elementoBtn.value = "quarto";
  } else if (elementoBtn.value == "quarto") {
    elementoImg.src = "./assets/imagens/mostrando4.png";
    elementoMudaTexto.innerText = "Marcha Lenta é o Daniel Mota, a pessoa que programou esta página!";
    elementoBtn.value = "quinto";
  } else {
    elementoImg.src = "./assets/imagens/escondido.png";
    elementoMudaTexto.innerText = "Marcha Lenta está de cabeça baixa, clique no botão abaixo e veja quem é.";
    elementoBtn.value = "primeiro";
  }
});
