"use strict";
// CAROUSEL

// Bolognese el
const boloCar = document.querySelector(".bolo-car");
const btnRBol = document.querySelector(".btn-r-bol");
const btnLBol = document.querySelector(".btn-l-bol");

btnRBol.addEventListener("click", function () {
  boloCar.classList.add("hidden");
  difTypeCar.classList.remove("hidden");
});

btnLBol.addEventListener("click", function () {
  boloCar.classList.add("hidden");
  alfCar.classList.remove("hidden");
});

// Pasta el
const difTypeCar = document.querySelector(".type-pas-car");
const btnRPas = document.querySelector(".btn-r-pas");
const btnLPas = document.querySelector(".btn-l-pas");

btnRPas.addEventListener("click", function () {
  difTypeCar.classList.add("hidden");
  alfCar.classList.remove("hidden");
});

btnLPas.addEventListener("click", function () {
  difTypeCar.classList.add("hidden");
  boloCar.classList.remove("hidden");
});

// Alfredo el
const alfCar = document.querySelector(".alf-car");
const btnRAl = document.querySelector(".btn-r-al");
const btnLAl = document.querySelector(".btn-l-al");

btnRAl.addEventListener("click", function () {
  alfCar.classList.add("hidden");
  boloCar.classList.remove("hidden");
});

btnLAl.addEventListener("click", function () {
  alfCar.classList.add("hidden");
  difTypeCar.classList.remove("hidden");
});

//  END OF CAROUSEL
