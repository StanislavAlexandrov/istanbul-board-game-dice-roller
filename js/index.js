$(document).ready(function(){
  
$("#roll").on("click", showstuff)
  function showstuff(){
    
    function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
    allTiles = ['2 - Fabric Warehouse', '3 - Spice Warehouse', '4 - Fruit Warehouse', '5 - Post Office', '6 - Caravansary', '7 - Fountain', '8 - Black Market', '9 - Teahouse', '10 - Large Market', '11 - Small Market', '12 - Police Station'];
    resultingTile = randomFrom(allTiles);
    console.log(resultingTile);
      
    $("#result").text(resultingTile);
  }});