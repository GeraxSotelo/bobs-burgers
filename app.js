let money = 0;
let moneyDisplay = document.querySelector("#money-display");
let upgradeSpatula = document.querySelector("#upgrade-spatula");
let spatulaDisplay = document.querySelector("#spatula-display");
let spatulaPrice = document.querySelector("#spatula-price");

let clickUpgrades = {
  spatula: {
    name: ["Big", "Bigger"],
    price: [5, 10],
    multiplier: [2, 4]
  },
}

// document.querySelector("#multiplier-img-1").style.display = "unset";

function update() {
  moneyDisplay.innerText = money;
}

function flip() {
  money++;
  update();
}

let spatulaIndex = 0;
let sPrice = clickUpgrades.spatula.price;
let sName = clickUpgrades.spatula.name;
function buySpatulaUpgrade() {
  if (money >= sPrice[spatulaIndex]) {
    money -= sPrice[spatulaIndex];
    if (spatulaIndex < sPrice.length) {
      spatulaDisplay.innerText = sName[spatulaIndex + 1];
      spatulaPrice.innerText = sPrice[spatulaIndex + 1];
    } else {
      spatulaDisplay.innerText = "";
      spatulaPrice.innerText = "";
    }
    update();
    spatulaIndex++;
  }
}