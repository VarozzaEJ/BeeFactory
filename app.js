let clickUpgrades = [
    {
        name: 'bee',
        price: 50,
        quantity: 0,
        multiplier: 1.2
    },
    {
        name: 'hive',
        price: 200,
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
        price: 1000,
        quantity: 0,
        multiplier: 30
    },
];

let pollen = 50000
let clickPower = 1


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
    }
    update()
}

function buyHive() {
    if (pollen >= hive.price) {
        hive.quantity++
        pollen -= hive.price
        console.log("bought hive", hive.quantity)
        clickPower += 5
    }
    update()
}

function buyAutoUpgrade(specialBee) {
    if (pollen >= specialBee.price) {
        specialBee.quantity++
        pollen -= specialBee.price
        console.log(`bought ${specialBee.name}`)

    }
    update()
}

//Put this in draw when that's made or maybe make this draw
function update() {
    const totalPollenElem = document.getElementById("totalFlowerPollen")
    const beeQuantityElem = document.getElementById("bee-quantity")
    const hiveQuantityElem = document.getElementById("hive-quantity")
    const superbeeQuantityElem = document.getElementById("superbee-quantity")
    const queenbeeQuantityElem = document.getElementById("queenbee-quantity")
    totalPollenElem.innerText = pollen
    beeQuantityElem.innerText = bee.quantity
    hiveQuantityElem.innerText = hive.quantity
    superbeeQuantityElem.innerText = superbee.quantity
    queenbeeQuantityElem.innerText = queenbee.quantity
}