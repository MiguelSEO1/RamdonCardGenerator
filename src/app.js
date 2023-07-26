/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
let naipesArr = ["♦", "♥", "♠", "♣"];
let numberIndex = Math.floor(Math.random() * numberArr.length);
let number = document.querySelector(".numbers");
number.style.fontSize = "80px";
let naipesIndex = Math.floor(Math.random() * naipesArr.length);
let naipes = document.querySelectorAll(".naipes");
let firstDiv = document.querySelector(".fisrtDiv");
let cardBorder = document.querySelector(".cardBorder");
cardBorder.style.borderRadius = "10px";
cardBorder.style.boxShadow = "0px 0px 5px #12ECE7";
cardBorder.style.border = "2px solid #F7F701";
let selectedCards = []; // Almacena cartas ya generadas

window.onload = function() {
  //write your code here

  number.innerHTML = numberArr[numberIndex];
  for (let i = 0; i < naipes.length; i++) {
    let item = naipes[i];
    if (naipesIndex <= 1) item.style.color = "red";
    console.log(item);
    item.innerHTML = naipesArr[naipesIndex];
    item.style.fontSize = "80px";
  }
};

const randomCard = () => {
  let numberIndex = Math.floor(Math.random() * numberArr.length);
  let naipesIndex = Math.floor(Math.random() * naipesArr.length);

  const cardKey = numberIndex.toString() + naipesIndex.toString(); // Almacena combinaciones ya generadas
  if (selectedCards.includes(cardKey)) {
    // Si la combinación ya ha sido seleccionada, se llama a la función nuevamente
    randomCard();
    return;
  }

  // Si es una combinación nueva, se agrega al registro de cartas seleccionadas
  selectedCards.push(cardKey);

  // Restricción para evitar que el arreglo de cartas seleccionadas crezca indefinidamente
  if (selectedCards.length >= numberArr.length * naipesArr.length) {
    alert("!!!!GUAAAU Todas las tiradas posibles se han ejecutado ♥️ ♠️ ♦ ♣");
    selectedCards = []; // Se reinicia el registro cuando se han seleccionado todas las cartas posibles
  }

  number.innerHTML = numberArr[numberIndex];
  for (let i = 0; i < naipes.length; i++) {
    let item = naipes[i];
    naipesIndex <= 1
      ? (item.style.color = "red")
      : (item.style.color = "black");
    console.log(item);
    item.innerHTML = naipesArr[naipesIndex];
    if (
      cardBorder.style.height === "400px" ||
      cardBorder.style.height === "500px" ||
      cardBorder.style.height === "600px" ||
      cardBorder.style.width === "300px" ||
      cardBorder.style.width === "400px" ||
      cardBorder.style.width === "500px"
    ) {
      item.style.fontSize = "50px";
    } else item.style.fontSize = "80px";
  }
};

let button = document.createElement("button");
button.innerHTML = "RandomCard";
button.classList.add("btn", "btn-dark", "p-3", "mt-4");
firstDiv.appendChild(button);
let interval;
let isIntervalRunning = false;

button.addEventListener("click", () => {
  if (isIntervalRunning) {
    clearInterval(interval);
    isIntervalRunning = false;
    button.innerHTML = "START";
    button.classList.remove("btn", "btn-dark");
    button.classList.add("btn", "btn-danger");
  } else {
    isIntervalRunning = true;
    clearInterval(interval);
    interval = setInterval(randomCard, 1000);
    button.innerHTML = "STOP";
    button.classList.remove("btn", "btn-dark");
    button.classList.remove("btn", "btn-danger");
    button.classList.add("btn", "btn-warning");
  }
});

// CÓDIGO CREAR SELECT PARA ELEGIR ANCHO DE CARTA -----------------------------

let selectElementWidth = document.createElement("select");
let optionElement = document.createElement("option");
cardBorder.before(selectElementWidth);
optionElement.innerHTML = "Ancho";
selectElementWidth.appendChild(optionElement);
selectElementWidth.classList.add("my-3", "btn", "btn-danger", "me-1");
optionElement.classList.add("bg-secondary", "text-dark");

// Agrega más opciones si es necesario
let moreOptions = ["300px", "400px", "500px"];
moreOptions.forEach(option => {
  let newOptionElement = document.createElement("option");
  selectElementWidth.value = option;
  newOptionElement.innerHTML = option;
  selectElementWidth.appendChild(newOptionElement);
  newOptionElement.classList.add("bg-secondary", "text-dark");
});

selectElementWidth.addEventListener("change", () => {
  cardBorder.style.width = selectElementWidth.value;

  console.log(selectElementWidth);
  console.log(selectElementWidth.value);
  number.style.fontSize = "50px";
  for (let i = 0; i < naipes.length; i++) {
    let item = naipes[i];
    item.style.fontSize = "50px";
  }
});

// CÓDIGO CREAR SELECT PARA ELEGIR ALTO DE CARTA -----------------------------

let selectElementHeight = document.createElement("select");
cardBorder.before(selectElementHeight);
selectElementHeight.classList.add("btn", "btn-danger", "ms-1");

// Agregar opciones de Altura

let moreHeight = ["Alto", "400px", "500px", "600px"];

moreHeight.forEach(e => {
  let newOption = document.createElement("option");
  newOption.innerHTML = e;
  selectElementHeight.value = e;
  selectElementHeight.appendChild(newOption);
  newOption.classList.add("bg-secondary", "text-dark");
});

selectElementHeight.addEventListener("change", () => {
  cardBorder.style.height = selectElementHeight.value;
  number.style.fontSize = "50px";
  for (let i = 0; i < naipes.length; i++) {
    let item = naipes[i];
    item.style.fontSize = "50px";
  }
});

// BOTÓN RESTAURAR DIMENCIONES ORIGINALES -----------------------------

const originalWidth = cardBorder.style.width;
const originalHight = cardBorder.style.height;

let originalSize = document.createElement("button");
originalSize.innerHTML = "Dimenciones originales";
firstDiv.appendChild(originalSize);
originalSize.classList.add("btn", "btn-primary", "p-3", "mt-4", "ms-2");

originalSize.addEventListener("click", () => {
  cardBorder.style.width = originalWidth;
  selectElementWidth.value = "Ancho";
  cardBorder.style.height = originalHight;
  selectElementHeight.value = "Alto";
  number.style.fontSize = "80px";
  for (let i = 0; i < naipes.length; i++) {
    let item = naipes[i];
    item.style.fontSize = "80px";
  }
});

/* CODIGO IMPUTS PARA INTRODUCIR DIMENSIONES DE CARTA -------------
let inputElement = document.createElement("input");
cardBorder.before(inputElement);

let inputElement2 = document.createElement("input");
cardBorder.before(inputElement2);

inputElement.addEventListener("keyup", e => {
  console.log(e.key);
  if (e.key == "Enter" && !isNaN(e.target.value)) {
    cardBorder.style.width = `${e.target.value}px`;
    number.style.fontSize = "50px";
    for (let i = 0; i < naipes.length; i++) {
      let item = naipes[i];
      item.style.fontSize = "50px";
    }
    e.target.value = "";
  }
});

inputElement2.addEventListener("keyup", e => {
  console.log(e.key);
  if (e.key == "Enter" && !isNaN(e.target.value)) {
    cardBorder.style.height = `${e.target.value}px`;
    number.style.fontSize = "50px";
    for (let i = 0; i < naipes.length; i++) {
      let item = naipes[i];
      item.style.fontSize = "50px";
    }
    e.target.value = "";
  }
});



const cambiarAncho = () => {
  if (inputElement.value.trim() && !isNaN(inputElement.value)) {
    cardBorder.style.width = `${inputElement.value}px`;
    number.style.fontSize = "50px";
    for (let i = 0; i < naipes.length; i++) {
      let item = naipes[i];
      item.style.fontSize = "50px";
    }
    inputElement.value = "";
  }
};

// Función para cambiar la dimensión de alto
const cambiarAlto = () => {
  if (inputElement2.value.trim() && !isNaN(inputElement2.value)) {
    console.log(inputElement2);
    cardBorder.style.height = `${inputElement2.value}px`;
    number.style.fontSize = "50px";
    for (let i = 0; i < naipes.length; i++) {
      let item = naipes[i];
      item.style.fontSize = "50px";
    }
    inputElement2.value = "";
  }
}; 

// Agregar evento click al botón
let buttonImput = document.createElement("button");
buttonImput.innerHTML = "Cambiar dimensiones";
document.body.appendChild(buttonImput);

buttonImput.addEventListener("click", () => {
  cambiarAncho();
  cambiarAlto();
}); */
