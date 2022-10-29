function mudaCor(e) {
  for (let index = 0; index < 6; index++) {
    cor += corDigito[Math.floor(Math.random() * (16 - 0) + 0)];
  }
  document.body.style.backgroundColor = cor;
  corNome.textContent = `background-color: ${cor}`;
  cor = "#";
}

const corDigito = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let cor = "#";

const hexBtn = document.querySelector("#hex");
const corNome = document.querySelector("#cornome");
hexBtn.addEventListener("click", mudaCor);
