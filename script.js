 // getting elements from html
let inputAdults = document.getElementById("adults");
let inputChildren = document.getElementById("children");
let inputDuration = document.getElementById("duration");
let result = document.getElementById("result");

// function for calculation
function calculate() {
  console.log("Calculate...");

  let adults = inputAdults.value;
  let children = inputChildren.value;
  let duration = inputDuration.value;

  let meatTT = meatPP(duration) * adults + (meatPP(duration) / 2) * children;
  let beerTT = beerPP(duration) * adults;
  let drinkTT = drinkPP(duration) * adults + (drinkPP(duration) / 2) * children;

  result.innerHTML = `<p>${meatTT / 1000}kg de carne</p>`;
  result.innerHTML += `<p>${Math.ceil(beerTT / 355)} latinhas cerveja</p>`;
  result.innerHTML += `<p>${Math.ceil(drinkTT / 2000 )} Garrafas de 2 litros</p>`;
}

// validation functions
function meatPP(duration) {
  if (duration >= 6) {
    return 650;
  } else {
    return 450;
  }
}

function drinkPP(duration) {
  if (duration >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function beerPP(duration) {
  if (duration >= 6) {
    return 1500;
  } else {
    return 100;
  }
}
