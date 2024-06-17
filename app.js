let clickUpgrades = [
    {
        name: 'bee',
        price: 50,
        quantity: 0,
        multiplier: 1.2
    },
    {
        name: 'hive',
        price: 250,
        quantity: 0,
        multiplier: 1.3
    },

];

let automaticUpgrades = [
    {
        name: 'superbee',
        price: 1000,
        quantity: 0,
        multiplier: 20
    },
    {
        name: 'queenbee',
        price: 5000,
        quantity: 0,
        multiplier: 30
    },
];

let pollen = 500
let clickPower = 1
let automaticClickPower = 0

// ANCHOR Find All Upgrades in The Arrays To Save Time
const bee = clickUpgrades.find((bee) => bee.name == "bee")
const hive = clickUpgrades.find((hive) => hive.name == "hive")
const superbee = automaticUpgrades.find((superbee) => superbee.name == "superbee")
const queenbee = automaticUpgrades.find((queenbee) => queenbee.name == "queenbee")


function mine() {
    const totalPollenElem = document.getElementById("totalFlowerPollen")
    pollen += clickPower
    console.log(pollen)
    totalPollenElem.innerText = pollen
}

function buyBee() {

    if (pollen >= bee.price) {
        bee.quantity++
        pollen -= bee.price
        console.log("bought bee", bee.quantity)
        clickPower += 1
        bee.price += 5
    }
    update()
}

function buyHive() {
    if (pollen >= hive.price) {
        hive.quantity++
        pollen -= hive.price
        console.log("bought hive", hive.quantity)
        clickPower += 5
        hive.price += 10
    }
    update()
}

function buyAutoUpgrade(specialBee) {
    if (pollen >= specialBee.price) {
        specialBee.quantity++
        pollen -= specialBee.price
        console.log(`bought ${specialBee.name}`)
        specialBee.price += 50
    }
    update()
}

let automaticAwesomeClickPower = 0

function autoUpgradeClicks() {
    pollen += automaticClickPower
    // pollen += getAutoClickPower()
    update()
}
function increaseAutoUpgradeClicksForSuperbee() {
    if (pollen >= superbee.price) {
        automaticClickPower += 20
        console.log(automaticClickPower)
    }
}
function increaseAutoUpgradeClicksForQueenbee() {
    if (pollen >= queenbee.price) {
        automaticClickPower += 30
        console.log(automaticClickPower)
    }
}

function update() {
    // let totalIntervalPower = autoUpgradeClicks()
    const totalPollenElem = document.getElementById("totalFlowerPollen")
    const beeQuantityElem = document.getElementById("bee-quantity")
    const hiveQuantityElem = document.getElementById("hive-quantity")
    const superbeeQuantityElem = document.getElementById("superbee-quantity")
    const queenbeeQuantityElem = document.getElementById("queenbee-quantity")
    const totalClickPowerElem = document.getElementById("totalClickPower")
    const totalIntervalPowerElem = document.getElementById("totalIntervalPower")
    const superBeeButtonElem = document.getElementById("superbeePrice")
    const queenBeeButtonElem = document.getElementById("queenbeePrice")
    const beePriceButtonElem = document.getElementById("beePrice")
    const hivePriceButtonElem = document.getElementById("hivePrice")
    totalPollenElem.innerText = pollen
    beeQuantityElem.innerText = bee.quantity
    hiveQuantityElem.innerText = hive.quantity
    superbeeQuantityElem.innerText = superbee.quantity
    queenbeeQuantityElem.innerText = queenbee.quantity
    totalClickPowerElem.innerText = clickPower
    totalIntervalPowerElem.innerText = automaticClickPower
    superBeeButtonElem.innerText = superbee.price
    queenBeeButtonElem.innerText = queenbee.price
    beePriceButtonElem.innerText = bee.price
    hivePriceButtonElem.innerText = hive.price
}

// ANCHOR Auto Run Functions
update()
setInterval(autoUpgradeClicks, 1000)
update()

//TODO button text should update whenever the price of that thing gets increased... Total clicks should get tallied up individually at the bottom right of the page whenever you buy a new item 