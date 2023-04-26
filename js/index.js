const allTiles = [
    '2 - Fabric Warehouse',
    '3 - Spice Warehouse',
    '4 - Fruit Warehouse',
    '5 - Post Office',
    '6 - Caravansary',
    '7 - Fountain',
    '8 - Black Market',
    '9 - Teahouse',
    '10 - Large Market',
    '11 - Small Market',
    '12 - Police Station',
];

const allTilesDict = {
    '2 - Fabric Warehouse': 'img/2-fabric-warehouse.webp',
    '3 - Spice Warehouse': 'img/3-spice-warehouse.webp',
    '4 - Fruit Warehouse': 'img/4-fruit-warehouse.webp',
    '5 - Post Office': 'img/5-post-office.webp',
    '6 - Caravansary': 'img/6-caravansary.webp',
    '7 - Fountain': 'img/7-fountain.webp',
    '8 - Black Market': 'img/8-black-market.webp',
    '9 - Teahouse': 'img/9-teahouse.webp',
    '10 - Large Market': 'img/10-large-market.webp',
    '11 - Small Market': 'img/11-small-market.webp',
    '12 - Police Station': 'img/12-police-station.webp',
};

function getRandomTile(tiles) {
    if (!tiles || tiles.length === 0) {
        throw new Error('No tiles provided.');
    }

    const randomIndex = Math.floor(Math.random() * tiles.length);
    return tiles[randomIndex];
}

function updateUI(tile) {
    const tilePictureElements = document.querySelectorAll('#tile-picture');

    if (!tilePictureElements || tilePictureElements.length === 0) {
        throw new Error('No tile picture elements found.');
    }

    tilePictureElements.forEach((el) => {
        const imgSrc = allTilesDict[tile];
        if (!imgSrc) {
            throw new Error(`No image source found for tile ${tile}.`);
        }

        el.srcset = imgSrc;
    });

    const resultElement = document.querySelector('#result');
    if (!resultElement) {
        throw new Error('No result element found.');
    }

    resultElement.innerHTML = tile;
}

function myFunction() {
    const resultingTile = getRandomTile(allTiles);

    updateUI(resultingTile);

    const isSafari =
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome');
    // console.log(isSafari);
}
