let clickUpgrades = {
  spatulas: {
    name: ["Big", "Bigger", "Golden"],
    price: [20, 100, 500],
    multiplier: [1, 5, 10],
  }
}

let automaticUpgrades = {
  employees: {
    name: [1, 2, 3, 4],
    price: [50, 100, 200, 300],
    multiplier: [2, 4, 8, 10]
  }
}

let moneyDisplay = document.querySelector("#money-display");
let upgradeSpatula = document.querySelector("#upgrade-spatula");
let spatulaDisplay = document.querySelector("#spatula-display");
let spatulaPriceDisplay = document.querySelector("#spatula-price-display");
let employeeDisplay = document.querySelector("#employee-display");
let employeePriceDisplay = document.querySelector("#employee-price-display");
let spatulasIndex = 0;
let spatulaPrice = clickUpgrades.spatulas.price;
let spatulaName = clickUpgrades.spatulas.name;
let spatulaMultiplier = 0;
let employeesIndex = 0;
let employeePrice = automaticUpgrades.employees.price;
let employeeName = automaticUpgrades.employees.name;
let employeeMultiplier = 0;
let money = 0;



function update() {
  moneyDisplay.innerText = money;
}

function flip() {
  money += 1 + spatulaMultiplier;
  document.querySelector(".tap").classList.remove("infinite");
  update();
}


function buySpatulaUpgrade() {
  if (spatulasIndex < spatulaPrice.length && money >= spatulaPrice[spatulasIndex]) {
    money -= spatulaPrice[spatulasIndex]; //subtract cost
    spatulaMultiplier = clickUpgrades.spatulas.multiplier[spatulasIndex];
    spatulasIndex++;
    if (spatulasIndex >= spatulaPrice.length) {
      spatulaDisplay.innerText = "";
      spatulaPriceDisplay.innerText = "";
      document.querySelector("#upgrade-spatula").disabled = true;
    } else {
      spatulaDisplay.innerText = spatulaName[spatulasIndex];
      spatulaPriceDisplay.innerText = `$${spatulaPrice[spatulasIndex]}`;
    }
  }
  update();
}

function addAutoUpgrades() {
  money += employeeMultiplier;
  update();
}

let myInterval;
function startInterval() {
  myInterval = setInterval(addAutoUpgrades, 4000);
}

function displayUnset(index) {
  document.querySelector(`#multiplier-img-${employeeName[index]}`).style.display = "unset";
  document.querySelector(`#burger-pic-${employeeName[index]}`).style.display = "unset";
}

function buyHireEmployee() {
  if (employeesIndex < employeePrice.length && money >= employeePrice[employeesIndex]) {
    clearInterval(myInterval); //clear previous setInterval or it will run several at a time
    money -= employeePrice[employeesIndex];  //subtract cost
    displayUnset(employeesIndex);
    employeeMultiplier = automaticUpgrades.employees.multiplier[employeesIndex];
    startInterval();
    employeesIndex++;
    if (employeesIndex >= employeePrice.length) {
      employeeDisplay.innerText = "";
      employeePriceDisplay.innerText = "";
      document.querySelector("#hire-employee").disabled = true;
    } else {
      employeePriceDisplay.innerText = `$${employeePrice[employeesIndex]}`;
    }
  }

  update();
}
