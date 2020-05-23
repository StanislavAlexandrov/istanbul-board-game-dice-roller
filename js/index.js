const allTiles = [
    "2 - Fabric Warehouse",
    "3 - Spice Warehouse",
    "4 - Fruit Warehouse",
    "5 - Post Office",
    "6 - Caravansary",
    "7 - Fountain",
    "8 - Black Market",
    "9 - Teahouse",
    "10 - Large Market",
    "11 - Small Market",
    "12 - Police Station",
];

const allTilesDict = {
    "2 - Fabric Warehouse": "img/2-fabric-warehouse.png",
    "3 - Spice Warehouse": "img/3-spice-warehouse.png",
    "4 - Fruit Warehouse": "img/4-fruit-warehouse.png",
    "5 - Post Office": "img/5-post-office.png",
    "6 - Caravansary": "img/6-caravansary.png",
    "7 - Fountain": "img/7-fountain.png",
    "8 - Black Market": "img/8-black-market.png",
    "9 - Teahouse": "img/9-teahouse.png",
    "10 - Large Market": "img/10-large-market.png",
    "11 - Small Market": "img/11-small-market.png",
    "12 - Police Station": "img/12-police-station.png",
};

function myFunction() {
    resultingTile = randomFrom(allTiles);
    document.querySelector("#result").innerHTML = resultingTile;
    console.log(allTilesDict[resultingTile]);
    document.querySelector("#tile-picture").src = allTilesDict[resultingTile];
}

function randomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
