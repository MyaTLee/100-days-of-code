// Pseudocode:

// Variables:


//! What is happening?
//? The Player sees a home screen with the options: Instructions and Start Game
//? Start Game leads to choosing  the gameboard size (standard size: 8x8) and placing the ships on the board
//? Save the ship placement to signify game start
//? Text for Player to choose a spot to hit
//? Image: hit (bomb/mushroom cloud) and miss (water wave)
//? Computer turn & image

// Inventory: ships for drag and drop

// Set-up sequence: for the ships
//can two opposing ships be in the same spots: yes both computer and player cna have ships in the same spot
// placement: function that changes a li from empty to busy/filled to indicate that the ship in that spot

//! need to look up how to do drag and drop function in js

// at least two separate platforms/grids for each player: Player and Opponent and they both will track hits and misses
//grid will be outlined with alphabets and numbers

//! home screen
// window.onload=function {
    
    
// }



//! creating platforms

let perRow = 5; 
const root = document.documentElement;
root.style.setProperty("--perRow", perRow);

//! to choose the board size for play
//def document.querySelector('option[value=" + value +"]').selected = true

var gameboard = document.getElementById("gameboard");

// var clicked = false;

// function clickHandler() {
//     clicked = true;
// }

// var one = document.getElementById("one");
// one.addEventListener("click", clickHandler);

//def need to come back
document.getElementById("gameboard").addEventListener("change", function() {
    // console.log("you have selected:", this.value);
    if (document.getElementById("three-rows").value == "3") {
        perRow = 3;
        // console.log("perRow is 3");
        console.log(shipInventory.shipDetails);
    }
});


function init() {//short for initialize
    const player1 = document.getElementById("player1");
    for (let i = 0; i < perRow ** 2; i++) { // ** means to the power of 

        let player1_tile = document.createElement("div");
        player1_tile.className = `tile tile-${i}`;
        player1_tile.innerText = i; //adds the numbers on the inside of the tile in the html
        player1.appendChild(player1_tile);
    }

    const player2 = document.getElementById("player2");
    for (let i = 0; i < perRow ** 2; i++) { // ** means to the power of 

        let player2_tile = document.createElement("div");
        player2_tile.className = `tile tile-${i}`;
        player2_tile.innerText = i; //adds the numbers on the inside of the tile in the html
        player2.appendChild(player2_tile);
    }
}

init();

//def got the inventory and ships from codepn tutorial: https://codepen.io/collosic/pen/JpDfn

var player1_fleet;
var player2_fleet;
var attemptedHits = [];

//! ship inventory: Carrier (5), Battleship (4), Cruiser (3), Submarine (3), and Destroyer (2)
function shipInventory(name) {
    this.name = name;
    this.shipDetails = [
        {
            "name": "destroyer",
            "length": 2,
            "img": "destroyer.jpg"
        },
        {
            "name": "submarine",
            "length": 3,
            "img": "submarine.jpg"
        },
        {
            "name": "cruiser",
            "length": 3,
            "img": "cruiser.jpg"
        },
        {
            "name": "battleship",
            "length": 4,
            "img": "battleship.jpg"
        },
        {
            "name": "carrier",
            "length": 5,
            "img": "carrier.jpg"
        }
    ];
    this.numOfShips = this.shipDetails.length;
	this.ships = [];
	this.currentShipSize = 0;
	this.currentShip = 0;
	this.initShips = function() {
		for(var i = 0; i < this.numOfShips; i++) {
			this.ships[i] = new Ship(this.shipDetails[i].name);
			this.ships[i].length = this.shipDetails[i].length;
            this.ships[i].img = this.shipDetails[i].img;
		}
	};

    
}

