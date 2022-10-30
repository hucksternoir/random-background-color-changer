function mudaCorHex(e) {
  for (let index = 0; index < 6; index++) {
    corHex += corDigito[Math.floor(Math.random() * (16 - 0) + 0)];
  }
  document.body.style.backgroundColor = corHex;
  corNome.textContent = `background-color: ${corHex}`;
  corHex = "#";
}

function mudaCorRGB(e) {
  corRed = Math.floor(Math.random() * (225 - 0));
  CorGreen = Math.floor(Math.random() * (225 - 0));
  CorBlue = Math.floor(Math.random() * (225 - 0));
  document.body.style.backgroundColor = `rgb(${corRed}, ${CorGreen}, ${CorBlue})`;
  corNome.textContent = `background-color: rgb(${corRed}, ${CorGreen}, ${CorBlue})`;
}

const corDigito = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let corHex = "#";
let corRed,
  CorGreen,
  CorBlue = "";

const hexBtn = document.querySelector("#hex");
const rgbBtn = document.querySelector("#rgb");
const corNome = document.querySelector("#cornome");
rgbBtn.addEventListener("click", mudaCorRGB);
hexBtn.addEventListener("click", mudaCorHex);
