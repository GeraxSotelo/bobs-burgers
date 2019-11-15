let money = 0;
let moneyDisplay = document.querySelector("#moneyDisplay");

// document.querySelector("#multiplier-img-1").style.display = "unset";

function update() {
  moneyDisplay.innerText = money;
}

function flip() {
  money++;
  update();
}