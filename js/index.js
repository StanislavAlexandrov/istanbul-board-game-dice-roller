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
    "2 - Fabric Warehouse": "img/2-fabric-warehouse.webp",
    "3 - Spice Warehouse": "img/3-spice-warehouse.webp",
    "4 - Fruit Warehouse": "img/4-fruit-warehouse.webp",
    "5 - Post Office": "img/5-post-office.webp",
    "6 - Caravansary": "img/6-caravansary.webp",
    "7 - Fountain": "img/7-fountain.webp",
    "8 - Black Market": "img/8-black-market.webp",
    "9 - Teahouse": "img/9-teahouse.webp",
    "10 - Large Market": "img/10-large-market.webp",
    "11 - Small Market": "img/11-small-market.webp",
    "12 - Police Station": "img/12-police-station.webp",
};

const allTilesDictSafari = {
    "2 - Fabric Warehouse": "img/2-fabric-warehouse.jpg",
    "3 - Spice Warehouse": "img/3-spice-warehouse.jpg",
    "4 - Fruit Warehouse": "img/4-fruit-warehouse.jpg",
    "5 - Post Office": "img/5-post-office.jpg",
    "6 - Caravansary": "img/6-caravansary.jpg",
    "7 - Fountain": "img/7-fountain.jpg",
    "8 - Black Market": "img/8-black-market.jpg",
    "9 - Teahouse": "img/9-teahouse.jpg",
    "10 - Large Market": "img/10-large-market.jpg",
    "11 - Small Market": "img/11-small-market.jpg",
    "12 - Police Station": "img/12-police-station.jpg",
};

function myFunction() {
    resultingTile = randomFrom(allTiles);
    document.querySelector("#result").innerHTML = resultingTile;
    let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    console.log(iOS);
    if (iOS) {
        document.querySelector("#tile-picture").srcset =
            allTilesDictSafari[resultingTile];
    } else {
        document.querySelector("#tile-picture").srcset =
            allTilesDict[resultingTile];
    }
}

function randomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
