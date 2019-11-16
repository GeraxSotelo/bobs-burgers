let clickUpgrades = {
  spatulas: {
    name: ["Big", "Bigger"],
    price: [5, 10],
    multiplier: [1, 3]
  },
}

let moneyDisplay = document.querySelector("#money-display");
let upgradeSpatula = document.querySelector("#upgrade-spatula");
let spatulaDisplay = document.querySelector("#spatula-display");
let spatulaPrice = document.querySelector("#spatula-price");
let spatulasIndex = 0;
let sPrice = clickUpgrades.spatulas.price;
let sName = clickUpgrades.spatulas.name;
let sMultiplier = 0;
let eMultiplier = 0;
let money = 0;

// document.querySelector("#multiplier-img-1").style.display = "unset";

function update() {
  moneyDisplay.innerText = money;
}

function flip() {
  money += 1 + sMultiplier + eMultiplier;
  update();
}


function buySpatulaUpgrade() {
  if (spatulasIndex < sPrice.length && money >= sPrice[spatulasIndex]) {
    money -= sPrice[spatulasIndex];
    sMultiplier = clickUpgrades.spatulas.multiplier[spatulasIndex];
    spatulasIndex++;
    if (spatulasIndex >= sPrice.length) {
      spatulaDisplay.innerText = "";
      spatulaPrice.innerText = "";
    } else {
      spatulaDisplay.innerText = sName[spatulasIndex];
      spatulaPrice.innerText = `$${sPrice[spatulasIndex]}`;
    }
  }

  update();
}