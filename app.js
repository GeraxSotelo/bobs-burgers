let clickUpgrades = {
  spatulas: {
    name: ["Big", "Bigger", "Golden"],
    price: [5, 10, 15],
    multiplier: [1, 3, 5]
  }
}

let automaticUpgrades = {
  employees: {
    names: [1, 2, 3, 4],
    price: [5, 10, 15, 20],
    multiplier: [1, 2, 4, 10]
  }
}

let moneyDisplay = document.querySelector("#money-display");
let upgradeSpatula = document.querySelector("#upgrade-spatula");
let spatulaDisplay = document.querySelector("#spatula-display");
let spatulaPriceDisplay = document.querySelector("#spatula-price-display");
let employeePriceDisplay = document.querySelector("#employee-price-display");
let spatulasIndex = 0;
let spatulaPrice = clickUpgrades.spatulas.price;
let sName = clickUpgrades.spatulas.name;
let sMultiplier = 0;
let employeesIndex = 0;
let employeePrice = automaticUpgrades.employees.price;
let eMultiplier = 0;
let money = 0;

// document.querySelector("#multiplier-img-1").style.display = "unset";

function update() {
  moneyDisplay.innerText = money;
}

function flip() {
  money += 1 + sMultiplier;
  update();
}


function buySpatulaUpgrade() {
  if (spatulasIndex < spatulaPrice.length && money >= spatulaPrice[spatulasIndex]) {
    money -= spatulaPrice[spatulasIndex]; //subtract cost
    sMultiplier = clickUpgrades.spatulas.multiplier[spatulasIndex];
    spatulasIndex++;
    if (spatulasIndex >= spatulaPrice.length) {
      spatulaDisplay.innerText = "";
      spatulaPriceDisplay.innerText = "";
    } else {
      spatulaDisplay.innerText = sName[spatulasIndex];
      spatulaPriceDisplay.innerText = `$${spatulaPrice[spatulasIndex]}`;
    }
  }
  update();
}

function addAutoUpgrades() {
  money += eMultiplier;
  console.log("updated: " + money);
  update();
}

let myInterval;
function startInterval() {
  myInterval = setInterval(addAutoUpgrades, 3000);
}

function buyHireEmployee() {
  if (employeesIndex < employeePrice.length && money >= employeePrice[employeesIndex]) {
    clearInterval(myInterval); //clear previous setInterval or it will run several at a time
    money -= employeePrice[employeesIndex];  //subtract cost
    eMultiplier = automaticUpgrades.employees.multiplier[employeesIndex];
    startInterval();
    employeesIndex++;
    if (employeesIndex >= employeePrice.length) {
      employeePriceDisplay.innerText = "";
    } else {
      employeePriceDisplay.innerText = `$${employeePrice[employeesIndex]}`;
    }
  }

  update();
}