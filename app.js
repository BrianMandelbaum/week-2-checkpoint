let cheese = 0
let upgrades = 0
let autoupgrades = 0


let clickUpgrades = {
  pickaxes: {
    price: 25,
    quantity: 0,
    multiplier: 1
  },
  battleaxes: {
    price: 50,
    quantity: 0,
    multiplier: 2
  }
};

let automaticUpgrades = {
  rovers: {
    price: 100,
    quantity: 0,
    multiplier: 5
  },
  dumptrucks: {
    price: 200,
    quantity: 0,
    multiplier: 10
  }
};


function draw() {
  let cheeseCount = `${cheese}`
  document.getElementById("cheese").innerHTML = cheeseCount
  document.getElementById("buy-pickaxe").innerText = clickUpgrades.pickaxes.price.toString()
  document.getElementById("buy-battleaxe").innerText = clickUpgrades.battleaxes.price.toString()
  document.getElementById("buy-rover").innerText = automaticUpgrades.rovers.price.toString()
  document.getElementById("buy-dumptruck").innerText = automaticUpgrades.dumptrucks.price.toString()
  document.getElementById("pickaxe-owned").innerText = clickUpgrades.pickaxes.quantity.toString()
  document.getElementById("battleaxe-owned").innerText = clickUpgrades.battleaxes.quantity.toString()
  document.getElementById("rover-owned").innerText = automaticUpgrades.rovers.quantity.toString()
  document.getElementById("dumptruck-owned").innerText = automaticUpgrades.dumptrucks.quantity.toString()
}

function mine() {
  cheese += 1
  cheese += upgrades
  draw()
}

function pickAxe() {
  if (cheese >= clickUpgrades.pickaxes.price) {
    cheese -= clickUpgrades.pickaxes.price
    clickUpgrades.pickaxes.quantity++
    clickUpgrades.pickaxes.price += 25
    upgrades += clickUpgrades.pickaxes.multiplier
    draw()
  }
}

function battleAxe() {
  if (cheese >= clickUpgrades.battleaxes.price) {
    cheese -= clickUpgrades.battleaxes.price
    clickUpgrades.battleaxes.quantity++
    clickUpgrades.battleaxes.price += 50
    upgrades += clickUpgrades.battleaxes.multiplier
    draw()
  }
}

function buyRover() {
  if (cheese >= automaticUpgrades.rovers.price) {
    cheese -= automaticUpgrades.rovers.price
    automaticUpgrades.rovers.quantity++
    automaticUpgrades.rovers.price += 100
    startInterval()
    draw()
  }
}

function buyDumptruck() {
  if (cheese >= automaticUpgrades.dumptrucks.price) {
    cheese -= automaticUpgrades.dumptrucks.price
    automaticUpgrades.dumptrucks.quantity++
    automaticUpgrades.dumptrucks.price += 200
    startInterval()
    draw()
  }
}

function collectAutoUpgrades() {
  cheese += automaticUpgrades.rovers.multiplier
  cheese += automaticUpgrades.dumptrucks.multiplier
  draw()
}

function startInterval() {
  setInterval(collectAutoUpgrades, 3000);
  draw()
}