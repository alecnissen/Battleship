"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["main"],{

/***/ "./src/domLogic.js":
/*!*************************!*\
  !*** ./src/domLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computerGameboard: () => (/* binding */ computerGameboard),
/* harmony export */   determineIfHitOrMiss: () => (/* binding */ determineIfHitOrMiss),
/* harmony export */   determineIfHitOrMissComputer: () => (/* binding */ determineIfHitOrMissComputer),
/* harmony export */   placeComputerShips: () => (/* binding */ placeComputerShips),
/* harmony export */   playerGameboard: () => (/* binding */ playerGameboard)
/* harmony export */ });
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ "./src/shipFactory.js");
/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardFactory.js */ "./src/gameboardFactory.js");
/* harmony import */ var _playerFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playerFactory.js */ "./src/playerFactory.js");
/* harmony import */ var _gameModule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameModule.js */ "./src/gameModule.js");



// import './gameModule.js';

// import { placeShipsOnPlayersBoard, playGame } from './gameModule.js';
// import gameboardFactory from './gameboardFactory.js';
// import { determineIfInsideHitShots } from './gameModule.js';

const gridContainer = document.getElementById('gameboard-grid-container');
const wrappingContainer = document.getElementById('wrapping-container');
const computerGridContainer = document.getElementById('gameboard-grid-container-computer');
console.log(computerGridContainer);
let gameboard = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
let playerGameboard = (0,_gameModule_js__WEBPACK_IMPORTED_MODULE_3__["default"])('Alec', 'player');
console.log(playerGameboard);
let computerGameboard = (0,_gameModule_js__WEBPACK_IMPORTED_MODULE_3__["default"])('IBM', 'computer');
console.log(computerGameboard);
let currentShip;
let currentCell;
let currentShipLength;
let currentShipDirection;
let battleShip = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Battleship', 4, 'vertical');
let destroyer = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Destroyer', 4, 'vertical');
let patrolBoat = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Patrol-boat', 2, 'vertical');
let carrierBoat = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Carrier', 5, 'vertical');
let submarine = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Submarine', 3, 'vertical');
let coordinateFromComputerBoardX;
let coordinateFromComputerBoardY;
let shipCounter = 0;
// let computerArray = [battleShip, destroyer, patrolBoat, carrierBoat, submarine]; 

let computerBattleShip = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Battleship', 4, 'vertical');
let computerDestroyer = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Destroyer', 4, 'vertical');
let computerPatrolBoat = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Patrol-boat', 2, 'vertical');
let computerCarrierBoat = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Carrier', 5, 'vertical');
let computerSubmarine = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Submarine', 3, 'vertical');
let computerShipArray = [computerBattleShip, computerDestroyer, computerPatrolBoat, computerCarrierBoat, computerSubmarine];
let hitShotsArray = computerGameboard.gameboard.hitShots;
function placeComputerShips() {
  let currentComputerShip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : computerShipArray[0];
  if (computerShipArray.length === 0) {
    return;
  }
  let verticalDirection = 'vertical';
  let horizontalDirection = 'horizontal';
  let randomShipDirection = Math.random() < 0.5 ? verticalDirection : horizontalDirection;
  console.log(randomShipDirection);
  let failedCoordinates = [];
  let randomCoordinateX = Math.floor(Math.random() * 9) + 1;
  let randomCoordinateY = Math.floor(Math.random() * 9) + 1;
  let isValidShipPlacement = computerGameboard.gameboard.placeShip(currentComputerShip, randomCoordinateX, randomCoordinateY, currentComputerShip.shipLength, randomShipDirection);
  if (failedCoordinates.includes([randomCoordinateX, randomCoordinateY])) {
    placeComputerShips();
  }
  if (isValidShipPlacement) {
    computerGameboard.gameboard.placeShip(currentComputerShip, randomCoordinateX, randomCoordinateY, currentComputerShip.shipLength, randomShipDirection);
    console.log('LOGGING THE COMPUTERSHIPARRAY AFTER VALID SHIP PLACEMENT, USING SPLICE BEFORE', computerShipArray);
    computerShipArray.splice(currentComputerShip, 1);
    console.log('LOGGING THE COMPUTERSHIPARRAY AFTER VALID SHIP PLACEMENT, USING SPLICE AFTER', computerShipArray);
    placeComputerShips();
  } else if (!isValidShipPlacement) {
    failedCoordinates.push([randomCoordinateX, randomCoordinateY]);
    console.log('LOGGING THE COMPUTERSHIPARRAY AFTER INVALID SHIP PLACEMENT', computerShipArray);
    placeComputerShips();
  }
  console.log(computerGameboard.gameboard.getGameboard());
  // let updatedComputerBoard = computerGameboard.gameboard.getGameboard();
  // return computerGameboard.gameboard.getGameboard();
}

placeComputerShips();
const changeShipPositionBtn = document.getElementById('change-ship-direction-btn');
const changeShipPositionBtnHorizontal = document.getElementById('change-ship-direction-btn-h');
changeShipPositionBtnHorizontal.addEventListener('click', e => {
  currentShipDirection = 'horizontal';
});
changeShipPositionBtn.addEventListener('click', e => {
  currentShipDirection = 'vertical';
});
// hover class
function findCoords(currentCell, currentShipDirection, currentShipLength) {
  let selectedCell = currentCell;
  let selectedShipDirection = currentShipDirection;
  let selectedShipLength = currentShipLength;
  if (selectedShipDirection === 'vertical') {
    let updatedCoordinatesX = [];
    let currentRow = selectedCell.dataset.row;
    let currentColumn = selectedCell.dataset.column;
    let convertColumnToNumber = Number(currentColumn);
    let convertRowToNumber = Number(currentRow);
    for (let i = 0; i < selectedShipLength; i++) {
      let updatedXCoordinate;
      updatedXCoordinate = convertRowToNumber + i;
      updatedCoordinatesX.push([updatedXCoordinate, convertColumnToNumber]);
    }
    useCoords(updatedCoordinatesX);
  } else if (selectedShipDirection === 'horizontal') {
    let updatedCoordinatesY = [];
    let currentRow = selectedCell.dataset.row;
    let currentColumn = selectedCell.dataset.column;
    let convertColumnToNumber = Number(currentColumn);
    let convertRowToNumber = Number(currentRow);
    for (let i = 0; i < selectedShipLength; i++) {
      let updatedYCoordinate;
      updatedYCoordinate = convertColumnToNumber + i;
      updatedCoordinatesY.push([convertRowToNumber, updatedYCoordinate]);
    }
    useCoords(updatedCoordinatesY);
  }
}

// hover class, filling in the selected cells 
function useCoords(coords) {
  let passedCoordinates = coords;
  for (let i = 0; i < passedCoordinates.length; i++) {
    let coordinate = passedCoordinates[i];
    let row = coordinate[0];
    let column = coordinate[1];
    let cell = document.querySelector(`[data-row="${row}"][data-column="${column}"]`);
    //  console.log(cell);
    cell.classList.toggle('battleship-hover-class');
  }
}
function allPlayerShipsPlaced() {
  console.log('LOGGING THE SHIP COUNTER, WITHIN ALL PLAYER SHIPS PLACED', shipCounter);
  if (shipCounter === 5) {
    let mainTitleContainer = document.getElementById('main-title-container');
    let startGameBtnVisible = document.getElementById('start-game-btn');
    startGameBtnVisible.style.display = 'flex';
  }
}

// places ship on the gameboard, calls another function that uses coordiantes, position and length to fill in the appropriate cells 
function placeCurrentShip(x, y, currentShip, currentShipLength, currentShipDirection) {
  let selectedXCoordinate = x;
  let selectedYCoordinate = y;
  console.log(selectedXCoordinate);
  console.log(selectedYCoordinate);
  let selectedShip = currentShip;
  let selectedShipLength = currentShipLength;
  let selectedShipDirection = currentShipDirection;
  console.log(selectedShip);
  console.log(selectedShipLength);
  console.log(selectedShipDirection);
  playerGameboard.gameboard.placeShip(selectedShip, selectedXCoordinate, selectedYCoordinate, selectedShipLength, selectedShipDirection);
  // console.log('here is the updated player gameboard', playerGameboard.gameboard.getGameboard());
  getShipCoordinates(selectedXCoordinate, selectedYCoordinate, selectedShipLength, selectedShipDirection);
  let currentGameboard = playerGameboard.gameboard.getGameboard();
  shipCounter++;
  allPlayerShipsPlaced();
}
// determines how many cells will be filled, when ship is placed 
function getShipCoordinates(x, y, length, position) {
  let coordianteX = x;
  let coordinateY = y;
  let currentShipLength = length;
  let currentShipPosition = position;
  console.log(typeof coordianteX);
  console.log(coordinateY);
  console.log(currentShipLength);
  console.log(currentShipPosition);
  if (currentShipPosition === 'vertical') {
    let updatedCoordinatesX = [];
    for (let i = 0; i < currentShipLength; i++) {
      let updatedXCoordinate;
      updatedXCoordinate = coordianteX + i;
      updatedCoordinatesX.push([updatedXCoordinate, coordinateY]);
      console.log(updatedCoordinatesX);
    }
    displayShipStyles(updatedCoordinatesX);
  } else if (currentShipPosition === 'horizontal') {
    let updatedCoordinatesY = [];
    for (let i = 0; i < currentShipLength; i++) {
      let updatedYCoordinate;
      updatedYCoordinate = coordinateY + i;
      updatedCoordinatesY.push([coordianteX, updatedYCoordinate]);
      console.log(updatedCoordinatesY);
    }
    displayShipStyles(updatedCoordinatesY);
  }
  // displays those styles when ship is placed
  function displayShipStyles(coords) {
    let passedCoordinates = coords;
    for (let i = 0; i < passedCoordinates.length; i++) {
      let coordinate = passedCoordinates[i];
      let row = coordinate[0];
      let column = coordinate[1];
      let cell = document.querySelector(`[data-row="${row}"][data-column="${column}"]`);
      cell.classList.toggle('battleship-hover-class');
    }
  }
}

// gameboard grid, for players board
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    let gameboardCell = document.createElement('div');
    const gameboard = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])().getGameboard();
    // div.style.backgroundColor = 'blue';
    gameboardCell.style.border = '1px solid black';
    gameboardCell.style.height = '35px';
    gameboardCell.style.width = '35px';
    gameboardCell.dataset.row = i;
    gameboardCell.dataset.column = j;
    gameboardCell.id = 'player-gameboardCell';
    gridContainer.append(gameboardCell);
    gameboardCell.addEventListener('click', e => {
      let currentPlayerBoard = playerGameboard.gameboard.getGameboard();
      // console.log(e.target);
      // console.log('IN THE EVENT LISTENER, THIS IS CURRENT SHIP', currentShip);
      // console.log('IN THE EVENT LISTENER, THIS IS CURRENT SHIP LENGTH', currentShipLength);
      // console.log('IN THE EVENT LISTENER, THIS IS CURRENT SHIP DIRECTION', currentShipDirection);
      let xCoordinate;
      let yCoordinate;
      xCoordinate = e.target.dataset.row;
      yCoordinate = e.target.dataset.column;
      let numberedXCoordinate = Number(xCoordinate);
      let numberedYCoordinate = Number(yCoordinate);
      console.log(typeof numberedXCoordinate);
      console.log(typeof numberedYCoordinate);
      placeCurrentShip(numberedXCoordinate, numberedYCoordinate, currentShip, currentShipLength, currentShipDirection);
    });
    gameboardCell.addEventListener('mouseenter', e => {
      currentCell = e.target;
      findCoords(currentCell, currentShipDirection, currentShipLength);
    });
    gameboardCell.addEventListener('mouseleave', e => {
      findCoords(currentCell, currentShipDirection, currentShipLength);
    });
  }
}
let startGameBtn = document.getElementById('start-game-btn');
console.log('logging start game btn', startGameBtn);

// creates the computers gameboard grid
function createComputerBoardDOM() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      wrappingContainer.style.gap = '15em';
      let gameboardCell = document.createElement('div');
      const gameboard = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])().getGameboard();
      gameboardCell.style.border = '1px solid black';
      gameboardCell.style.height = '35px';
      gameboardCell.style.width = '35px';
      gameboardCell.dataset.comprow = i;
      gameboardCell.dataset.compcolumn = j;
      // gameboardCell.id = 'computer-gameboardCell';
      computerGridContainer.append(gameboardCell);
      gameboardCell.addEventListener('click', e => {
        let xCoordinate;
        let yCoordinate;
        xCoordinate = e.target.dataset.comprow;
        yCoordinate = e.target.dataset.compcolumn;
        let numberedXCoordinate = Number(xCoordinate);
        let numberedYCoordinate = Number(yCoordinate);
        (0,_gameModule_js__WEBPACK_IMPORTED_MODULE_3__.playGame)(numberedXCoordinate, numberedYCoordinate);

        //  let getPlayerGameboardCell = document.getElementById('player-gameboardCell');
        //  // console.log(getPlayerGameboardCell);
        //  let getAllPlayerGameboardCells = Array.from(document.querySelectorAll('#player-gameboardCell'));
        //  console.log(getAllPlayerGameboardCells);
        //  getAllPlayerGameboardCells.removeEventListener('mouseenter', getAllPlayerGameboardCells);
        // getPlayerGameboardCell.classList.remove('battleship-hover-class');
      });

      gameboardCell.addEventListener('mouseenter', e => {
        e.target.classList.toggle('battleship-hover-class');
      });
      gameboardCell.addEventListener('mouseleave', e => {
        e.target.classList.remove('battleship-hover-class');
      });
    }
  }
}

// generates start game btn, and when clicked removes btns, and ship objects in the DOM
startGameBtn.addEventListener('click', e => {
  console.log('clicked the start game btn');
  let containerForShipObj = document.getElementById('container-for-ship-objects');
  console.log(containerForShipObj);
  containerForShipObj.style.display = 'none';
  let containerForChangingShipDirection = document.getElementById('change-ship-direction-btn-container');
  containerForChangingShipDirection.style.display = 'none';
  let containerForStartGameBtn = document.getElementById('start-game-btn-container');
  containerForStartGameBtn.style.display = 'none';
  createComputerBoardDOM();
  // playGame();
});

function determineIfHitOrMiss(selectedUser, x, y) {
  console.log('DETERMINE IF COORDS ARE A HIT OR MISS, CB FUNCTION FROM ATTACK FUNCTION IN GAME MODULE', x, y, selectedUser);
  let coordinateX = x;
  let coordinateY = y;
  let coordinateCheck = [coordinateX, coordinateY];
  console.log('COORDINATE CHECK VARIABLE, WILL CHECK IF INCLUDED IN HIT SHOTS ARRAY', coordinateCheck);
  let selectedCellOnGameboard = document.querySelector(`[data-comprow="${coordinateX}"][data-compcolumn="${coordinateY}"]`);
  console.log('SELECTED CELL, THAT COORESPONDS TO COMPS GAMEBOARD', selectedCellOnGameboard);
  let hitShotsArray = selectedUser.gameboard.hitShots;
  let missedShotsArray = selectedUser.gameboard.missedShots;
  console.log(missedShotsArray);
  console.log(hitShotsArray);
  for (let i = 0; i < hitShotsArray.length; i++) {
    let selectedCoordinate = hitShotsArray[i];
    console.log(JSON.stringify(selectedCoordinate).includes(JSON.stringify(coordinateCheck)));
    if (JSON.stringify(selectedCoordinate).includes(JSON.stringify(coordinateCheck))) {
      selectedCellOnGameboard.style.backgroundColor = 'red';
    }
  }
  for (let i = 0; i < missedShotsArray.length; i++) {
    let selectedCoordinateMissedShot = missedShotsArray[i];
    console.log(selectedCoordinateMissedShot);
    if (JSON.stringify(selectedCoordinateMissedShot).includes(JSON.stringify(coordinateCheck))) {
      selectedCellOnGameboard.style.backgroundColor = 'blue';
    }
  }
}
function determineIfHitOrMissComputer(selectedUser, x, y) {
  let coordinateX = x;
  let coordinateY = y;
  let coordinateCheck = [coordinateX, coordinateY];
  // console.log('COORDINATE CHECK VARIABLE, WILL CHECK IF INCLUDED IN HIT SHOTS ARRAY', coordinateCheck);
  let selectedCellOnGameboard = document.querySelector(`[data-row="${coordinateX}"][data-column="${coordinateY}"]`);
  // console.log('SELECTED CELL, THAT COORESPONDS TO COMPS GAMEBOARD', selectedCellOnGameboard);
  let hitShotsArray = selectedUser.gameboard.hitShots;
  let missedShotsArray = selectedUser.gameboard.missedShots;
  // console.log(missedShotsArray);
  // console.log(hitShotsArray);
  for (let i = 0; i < hitShotsArray.length; i++) {
    let selectedCoordinate = hitShotsArray[i];
    // console.log(selectedCoordinate);
    // console.log(JSON.stringify(selectedCoordinate).includes(JSON.stringify(coordinateCheck)));
    if (JSON.stringify(selectedCoordinate).includes(JSON.stringify(coordinateCheck))) {
      selectedCellOnGameboard.style.backgroundColor = 'red';
    }
  }
  for (let i = 0; i < missedShotsArray.length; i++) {
    let selectedCoordinateMissedShot = missedShotsArray[i];
    // console.log(selectedCoordinateMissedShot);
    if (JSON.stringify(selectedCoordinateMissedShot).includes(JSON.stringify(coordinateCheck))) {
      selectedCellOnGameboard.style.backgroundColor = 'blue';
    }
  }
}
function createBattleShipDOMObj() {
  for (let i = 0; i < 4; i++) {
    const div = document.createElement('div');
    div.id = 'ship-obj-styles';
    const battleshipContainer = document.getElementById('container-for-battleship');
    battleshipContainer.append(div);
    battleshipContainer.dataset.shipID = JSON.stringify(battleShip);
    battleshipContainer.addEventListener('click', e => {
      currentShip = battleShip;
      console.log('the current ship clicked on is..', currentShip);
      currentShipLength = battleShip.shipLength;
      currentShipDirection = battleShip.shipPosition;
    });
  }
}
createBattleShipDOMObj();
function createDestroyerDOMObj() {
  for (let i = 0; i < 4; i++) {
    const div = document.createElement('div');
    div.id = 'ship-obj-styles';
    const destroyerContainer = document.getElementById('container-for-destroyer');
    destroyerContainer.append(div);
    destroyerContainer.dataset.shipID = JSON.stringify(destroyer);
    destroyerContainer.addEventListener('click', e => {
      currentShip = destroyer;
      console.log('the current ship clicked on is..', currentShip);
      currentShipLength = destroyer.shipLength;
      currentShipDirection = destroyer.shipPosition;
    });
  }
}
createDestroyerDOMObj();
function createPatrolBoatDOMObj() {
  for (let i = 0; i < 2; i++) {
    const div = document.createElement('div');
    div.id = 'ship-obj-styles';
    const patrolBoatContainer = document.getElementById('container-for-patrol-boat');
    patrolBoatContainer.append(div);
    patrolBoatContainer.dataset.shipID = JSON.stringify(patrolBoat);
    patrolBoatContainer.addEventListener('click', e => {
      currentShip = patrolBoat;
      console.log('the current ship clicked on is..', currentShip);
      currentShipLength = patrolBoat.shipLength;
      currentShipDirection = patrolBoat.shipPosition;
    });
  }
}
createPatrolBoatDOMObj();
function createCarrierBoatDOMObj() {
  for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.id = 'ship-obj-styles';
    const carrierBoatContainer = document.getElementById('container-for-carrier-boat');
    carrierBoatContainer.append(div);
    carrierBoatContainer.dataset.shipID = JSON.stringify(carrierBoat);
    carrierBoatContainer.addEventListener('click', e => {
      currentShip = carrierBoat;
      console.log('the current ship clicked on is..', currentShip);
      currentShipLength = carrierBoat.shipLength;
      currentShipDirection = carrierBoat.shipPosition;
    });
  }
}
createCarrierBoatDOMObj();
function createSubmarineDOMObj() {
  for (let i = 0; i < 3; i++) {
    const div = document.createElement('div');
    div.id = 'ship-obj-styles';
    const submarineContainer = document.getElementById('container-for-submarine');
    submarineContainer.append(div);
    submarineContainer.dataset.shipID = JSON.stringify(submarine);
    submarineContainer.addEventListener('click', e => {
      currentShip = submarine;
      console.log('the current ship clicked on is..', currentShip);
      currentShipLength = submarine.shipLength;
      currentShipDirection = submarine.shipPosition;
    });
  }
}
createSubmarineDOMObj();

// console.log(playerGameboard.gameboard.getGameboard()); 

// computer placement and random coordinates 
// another set of random coordinates for the else,
// it will place some of the ships, but eventually it will throw an error that ship goes out of bounds or overlaps with another ship, 
// place ship already has a checkForShip 
// instead of throwing error, should be returning a boolean to make sure placement is legal, this will affect a few of my unit tests. 
// capture value 

// computerGameboard.gameboard.placeShip(computersShip, randomCoordinate1, randomCoordinate2, computersShip.shipLength, computersShip.shipPosition);

// if false, it needs to try again, no ships can be placed 
// we found a false ship, all the true ones place ok, if a coordinate is false, 
// how can I make the ship try to place it again? something within the conditional
// right now it will only place true ships, once a ship is false, how can we get it to become true? 
// how to make an invalid ship placement valid again, it will place ships that are legal to place (true)
// but the ones that return false, what can we do about those? can we try again with different coordinates
// keep track of false coordinates and make sure not to use them again? 
// use another if inside the else and return and exit if failed coordinates are trying to be used again. 

// now we need to place the battleship. 
// should we add an event listener on the gameboard cell, that once clicked finds the selected ship, and applies to battleship/ship obj styles to all of them, 
// placing ship function, takes from the variables currentShip, currentShipLength and position 
// should  it follow the same process as the previous functions? 

// function takes in currentShip, length and position, 
// accesses gameboard 
// click on a cell, maybe somehow use ship length or get info from findCoords to make sure styles are applied to all the cells of ships length 

// the problem is I can use the hover class to highlight ship over gameboard now I'm stuck on how to place the ships now, 

// it follows the similar process, clicking on a cell on the board, showing its classes while also updating the data in our 2D array 
// gameboard cell is clicked, sends info to function which places it on the board. access current ship 
// 

// function placeCoords  { 

// take in coordinates from use coords, 
// loop thru them, 
// add an event listener to them, 
// once clcked add the styles to them
// }

// get the coordinates first, then place them, same process as highlight, but when we pass them to use/print function, 
// cell is clicked we determine what coordinates will need to filled, based on ship length and position 
// passed to another function which applies the styles and class to all those cells. 
// same as hover class but this time we are using an event listener, 

// event listener click classes
// used same process for showing the hover class. 
// change variable names.  
// function getShipCoordinates(currentCell, currentShipDirection, currentShipLength) { 
// let clickedGameboardCell = currentCell;
// let shipDirection = currentShipDirection; 
// let shipLength = currentShipLength;

// if (shipDirection === 'vertical') { 
//     let updatedCoordinatesXForClickEvent = [];
//     let currentRow = clickedGameboardCell.dataset.row;
//     let currentColumn = clickedGameboardCell.dataset.column;
//     let convertColumnToNumber = Number(currentColumn);
//     let convertRowToNumber = Number(currentRow);

//     for (let i = 0; i < shipLength; i++) { 
//         let updatedXCoordinateClick 
//         updatedXCoordinateClick = convertRowToNumber + i;
//         updatedCoordinatesXForClickEvent.push([updatedXCoordinateClick, convertColumnToNumber]);
//     } 
//     console.log('these are updated coords for x', updatedCoordinatesXForClickEvent);
//     printCoordinatesClick(updatedCoordinatesXForClickEvent);

//     // useCoords(updatedCoordinatesX);
// } else if (shipDirection === 'horizontal') { 
//     let updatedCoordinatesYClickEvent = [];
//     let currentRow = clickedGameboardCell.dataset.row;
//     let currentColumn = clickedGameboardCell.dataset.column;
//     let convertColumnToNumber = Number(currentColumn);
//     let convertRowToNumber = Number(currentRow);

//     for (let i = 0; i < shipLength; i++) { 
//         let updatedYCoordinateClick 
//         updatedYCoordinateClick = convertColumnToNumber + i;
//         updatedCoordinatesYClickEvent.push([convertRowToNumber, updatedYCoordinateClick]);
//     } 
//     console.log('these are updated coords for y', updatedCoordinatesYClickEvent);
//     // useCoords(updatedCoordinatesY);
//     printCoordinatesClick(updatedCoordinatesYClickEvent)
// } 

// event listener click classes 
// used same process for showing the hover class. 
// function printCoordinatesClick(coords) { 
//     let passedCoordinates = coords;
//     for (let i = 0; i <= passedCoordinates.length; i++) { 
//         let coordinate = passedCoordinates[i];
//         let row = coordinate[0];
//         // console.log(row);
//         let column = coordinate[1];
//         let cell = document.querySelector(`[data-row="${row}"][data-column="${column}"]`); // find the DOM cells that correspond to the coordinates passed in,
//         // console.log(cell);
//         console.log('current ship is, ', currentShip);
//         // cell.classList.add('battleship-hover-class'); 
//         cell.classList.toggle('battleship-hover-class');  
//         console.log(currentShipDirection);
//         // console.log(gameboardFactory().placeShip(currentShip, row, column, currentShip.shipLength, currentShipDirection)); 
//         // console.log(gameboardFactory().getGameboard());
//         // console.log(gameboardFactory().placeShip(battleShip, `[data-row="${row}"], [data-column="${column}"]`, 4, 'vertical'));

//         // cell.addEventListener('click', (e) => { 
//         //     console.log('HELLLLO');
//         //     console.log(e.target);
//         // })    
//     } 
// }

// old BS
// const playerBoardContainer = document.getElementById('gameboard-container');

// const gameboardModule = gameboardFactory();

// const playerBoard = gameboardModule.getGameboard(); 

// export default function createGameboardGridDOM() {  
// for (let i = 0; i < 10; i++) { 
//     for(let j = 0; j < 10; j++) { 
//         const gameboard = gameboardFactory().getGameboard();
//         const div = document.createElement('div'); 
//         playerBoardContainer.append(div);
//         div.dataset.row = i;
//         div.dataset.column = j;
//         div.id = 'cell-styles';
//         div.addEventListener('click', (e) => { 
//             console.log(e.target);
//             // console.log(row);
//             // console.log(column);
//             console.log('logging gameboard within event listener', gameboard);
//             // console.log(gameboard);
//              // Accessing the corresponding cell in the gameboard array
//              // console.log(gameboard[row][column]);
//              // returns the cooresponding coordinates within the gameboard
//              const clickedCell = gameboard[i][j]; 
//              console.log('Clicked cell in gameboard:', clickedCell);
//         });
//     } 
// }

// } 

// createGameboardGridDOM();

// // placing ships on players board, 

// // use another loop to create the ship in the DOM, you will probably want to call ship factory so you have access to its object, 

// // start there first, then worry about the click and place on the board, 

// function battleShipDOMObject() { 
//     const battleshipObj = ship('Battleship', 4, 'vertical');
//     console.log(battleshipObj);

//     for (let i = 0; i < 4; i++) { 
//         const div = document.createElement('div');
//         div.id = 'battleship-obj-styles';
//         const battleShipContainer = document.getElementById('battleship-container');
//         battleShipContainer.append(div);        
//     }    
// } 

// // refactor to create a function which accepts ship objects, and length and position 

// // that way we can create ship objects then pass them to this function 

// // which makes ship obj in the DOM. 

// // Before moving on I would make sure the gameboard grid is 100% responsive before moving, MOBILE FIRST, maybe min widths, 

// // I want to make sure this board does not break on smaller screens. 

// battleShipDOMObject();

// well I have the loop created, where should this loop go? 
// should the loop go within a function, then be called in the playGame()?

// I put the gameboard grid within the function, 

// I think I will have to create another one for the computer, the computers board will be auto placed, 

// once player places his ships on his board, a start game option will pop-up, once pressed, comps board will auto fill, and will display comps board but hidden, 

// for (let i = 0; i < 10; i ++) { 
//     const rowDiv = document.createElement('div'); 
//     rowDiv.dataset.row = i;
//     for (let j = 0; j < 10; j++) { 
//     const gameboard = gameboardFactory().getGameboard();
//     const columnDiv = document.createElement('div');
//     columnDiv.dataset.column = j;

//     rowDiv.addEventListener('click', (e) => { 
//         console.log(e.target);
//     }) 

//     columnDiv.addEventListener('click', (e) => { 
//         console.log(e.target);
//     })

//     rowDiv.style.height = '35px';
//     rowDiv.style.width = '35px';
//     rowDiv.style.backgroundColor = 'blue';
//     rowDiv.style.border = '1px solid black'; 

//     columnDiv.style.height = '35px';
//     columnDiv.style.width = '35px';
//     columnDiv.style.backgroundColor = 'blue';
//     columnDiv.style.border = '1px solid black'; 
//     playerBoardContainer.appendChild(rowDiv);
//     playerBoardContainer.appendChild(columnDiv);   
//     console.log(rowDiv);
//     console.log(columnDiv);
//     }
// }

// playerBoardContainer.append(playerBoard);

// making DOM gameboard, 

// how can I connect my DOM gameboard to the array gameboard????????? 

// DOM cell is clicked on, how can I find the corresponding array cell within gameboard? using find ? 

// If I click on a DOM cell, I should get back the corresponding array cell within gameboard 

// for (let i = 0; i < 10; i++) {  
//     const div = document.createElement('div'); 
//     // div.setAttribute("index", i);
//     // div.id = i;
//     div.dataset.row = i;
//     div.dataset.column = i;

//     const gameboard = gameboardFactory().getGameboard();
//     div.addEventListener('click', (e) => { 
//         console.log(e.target);
//         // gameboard.find(cell => cell === div);
//         if (gameboard[5][2].includes(e.target.value)) { 
//             // return gameboards specific cell that matches the DOM cell
//             return true;
//         }
//     }) 

//     div.style.height = '35px';
//     div.style.width = '35px';
//     div.style.backgroundColor = 'blue';
//     div.style.border = '1px solid black'; 
//     playerBoardContainer.appendChild(div);   
//     console.log(div);
// } 

// I want to click on DOM cell and have it return back the gameboard array cell, how can I use the find method to achieve this? 

// THIS!!!
// connect the HTML board using data sets to the array index's within the gameboard array 

// how to make current gameboard a grid????? 

// I think you keep the gameboard as the array, 

// that will be the board behind the scenes, make another board which be the display board, 

// display board will still correlate with regular board, 

// wherever the user places ships, those same coordinates will be saved to board in the console 

// for (let i = 0; i <= 100; i++) {  
//     const div = document.createElement('div'); 
//     div.style.height = '25px';
//     div.style.width = '25px';
//     div.style.backgroundColor = 'red';
//     div.style.border = '1px solid black'; 
//     playerBoardContainer.appendChild(div);   

// } 

// board.classList.add('board-styles');

// console.log(board);

// playerBoardContainer.append(board);

/***/ }),

/***/ "./src/gameModule.js":
/*!***************************!*\
  !*** ./src/gameModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attack: () => (/* binding */ attack),
/* harmony export */   checkForWinner: () => (/* binding */ checkForWinner),
/* harmony export */   computerAttack: () => (/* binding */ computerAttack),
/* harmony export */   "default": () => (/* binding */ createPlayer),
/* harmony export */   playGame: () => (/* binding */ playGame)
/* harmony export */ });
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ "./src/shipFactory.js");
/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardFactory.js */ "./src/gameboardFactory.js");
/* harmony import */ var _playerFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playerFactory.js */ "./src/playerFactory.js");
/* harmony import */ var _domLogic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domLogic.js */ "./src/domLogic.js");



// import { allPlayerShipsPlaced, placeComputerShips }  from './domLogic.js';



let currentPlayerGameboard = _domLogic_js__WEBPACK_IMPORTED_MODULE_3__.playerGameboard;
let currentComputerGameboard = _domLogic_js__WEBPACK_IMPORTED_MODULE_3__.computerGameboard;
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
let currentHitShotsArray = currentComputerGameboard.gameboard.hitShots;
let currentMissedShotsArray = currentComputerGameboard.gameboard.missedShots;
function createPlayer(name, type) {
  if (type === 'computer') {
    const computerName = (0,_playerFactory_js__WEBPACK_IMPORTED_MODULE_2__["default"])(name); // add turn var
    return computerName;
  } else {
    const playerName = (0,_playerFactory_js__WEBPACK_IMPORTED_MODULE_2__["default"])(name); // add turn var
    return playerName;
  }
}
function checkForWinner(userObj) {
  console.log('CHECKING FOR WINNER!');
  const selectedUser = userObj;
  if (selectedUser.gameboard.areAllShipsSunk()) {
    // access another helper function to print a victory message/modal pop-up
    return true;
  }
  return false;
}
function attack(userObj, x, y) {
  const selectedUser = userObj;
  selectedUser.gameboard.receiveAttack(x, y);
  (0,_domLogic_js__WEBPACK_IMPORTED_MODULE_3__.determineIfHitOrMiss)(selectedUser, x, y);
}
function computerAttack(userObj, x, y) {
  const selectedUser = userObj;
  selectedUser.gameboard.receiveAttack(x, y);
  (0,_domLogic_js__WEBPACK_IMPORTED_MODULE_3__.determineIfHitOrMissComputer)(selectedUser, x, y);
}

// const openModal = function() {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

function openModal(user) {
  let currentUser = user;
  console.log(currentUser);
  let winnerName = currentUser.name;
  console.log(winnerName);
  let winnerTitleInModal = document.getElementById('winner-display-title');
  winnerTitleInModal.textContent = `${winnerName} WINS!`;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function determineIfInsideHitShotArray(x, y) {
  for (let i = 0; i < currentHitShotsArray.length; i++) {
    let currentHit = currentHitShotsArray[i];
    console.log('currentHit variable', currentHit);
    console.log(JSON.stringify(currentHit));
    console.log(JSON.stringify([x, y]));
    if (JSON.stringify(currentHit) === JSON.stringify([x, y])) {
      return true;
    }
  }
  return false;
}
function determineIfInsideMissedShotArray(x, y) {
  for (let i = 0; i < currentMissedShotsArray.length; i++) {
    let currentMiss = currentMissedShotsArray[i];
    if (JSON.stringify(currentMiss) === JSON.stringify([x, y])) {
      return true;
    }
  }
  return false;
}
function determineIfInsideHitShotArrayComputer(x, y) {
  for (let i = 0; i < currentHitShotsArray.length; i++) {
    let currentHit = currentHitShotsArray[i];
    console.log('currentHit from hit shot array', currentHit);
    // console.log(JSON.stringify(currentHit))
    // console.log(JSON.stringify([x, y]));
    if (JSON.stringify(currentHit) === JSON.stringify([x, y])) {
      return true;
    }
  }
  return false;
}
function determineIfInsideMissedShotArrayComputer(x, y) {
  for (let i = 0; i < currentMissedShotsArray.length; i++) {
    let currentMiss = currentMissedShotsArray[i];
    console.log('current miss coordinate from missed shot array', currentMiss);
    if (JSON.stringify(currentMiss) === JSON.stringify([x, y])) {
      return true;
    }
  }
  return false;
}
function playGame(xCoordinate, yCoordinate) {
  let playerTurn = 1;
  console.log('logging player turn variable after init', playerTurn);
  if (playerTurn === 1) {
    let playerMarkX = xCoordinate;
    let playerMarkY = yCoordinate;
    console.log(!determineIfInsideHitShotArray(playerMarkX, playerMarkY) && !determineIfInsideMissedShotArray(playerMarkX, playerMarkY));

    // if (!determineIfInsideHitShotArray(playerMarkX, playerMarkY) && (!determineIfInsideMissedShotArray(playerMarkX, playerMarkY))) { 

    attack(currentComputerGameboard, playerMarkX, playerMarkY);
    console.log('logging player turn variable before player attack', playerTurn);
    playerTurn = 2;
    // console.log('logging player turn variable after player attack', playerTurn);
    // } else { 
    //   return;
    // }

    console.log('COMPUTERS GAMEBOARD AFTER PLAYER ATTACK', currentComputerGameboard);
    if (checkForWinner(currentComputerGameboard)) {
      console.log('PLAYER WINS');
      openModal(_domLogic_js__WEBPACK_IMPORTED_MODULE_3__.playerGameboard);
      return; // print/access winner modal
    }
    // playerTurn = 2;
  }
  // else { 
  // console.log('ELSE STATEMENT CHECK!')
  const randomCoordinate1 = Math.floor(Math.random() * 9) + 1;
  const randomCoordinate2 = Math.floor(Math.random() * 9) + 1;
  // computerAttack(currentPlayerGameboard, randomCoordinate1, randomCoordinate2);
  console.log('PLAYERS GAMEBOARD AFTER COMPUTER ATTACK', currentPlayerGameboard);
  console.log('RANDOM COORDINATES SELECTED FROM COMPUTER', randomCoordinate1, randomCoordinate2);

  // if (!determineIfInsideHitShotArrayComputer(randomCoordinate1, randomCoordinate2) && (!determineIfInsideMissedShotArrayComputer(randomCoordinate1, randomCoordinate2))) { 
  computerAttack(currentPlayerGameboard, randomCoordinate1, randomCoordinate2);
  console.log('logging player turn variable before computer attack', playerTurn);
  playerTurn = 1;
  console.log('logging player turn variable after computer attack', playerTurn);
  // } else { 
  //   return;
  // }

  if (checkForWinner(currentPlayerGameboard)) {
    console.log('COMP WINS');
    openModal(_domLogic_js__WEBPACK_IMPORTED_MODULE_3__.computerGameboard);
    return;
  }
  // playerTurn = 1;
}

// export function placeShipsOnPlayersBoard(user) { 
//   const player = user; 
//   const battleShip = ship('Battleship', 4, 'vertical');
//   const destroyer = ship('Destroyer', 4, 'horizontal' );
//   const patrolBoat = ship('Patrol-boat', 2, 'vertical');
//   const carrierBoat = ship('Carrier', 4, 'horizontal');
//   const submarine = ship('Submarine', 3, 'vertical');
//   // const player = createPlayer('player', 'player');
//   // console.log(player);
//   const getPlayerBoard = player.gameboard.getGameboard();
//   const placeBattleShip = player.gameboard.placeShip(battleShip, 0, 0, 4, 'horizontal');
//   const placeDestroyer = player.gameboard.placeShip(destroyer, 1, 1, 4, 'horizontal');
//   const placePatrolBoat = player.gameboard.placeShip(patrolBoat, 2, 2, 2, 'horizontal');
//   const placeCarrierBoat = player.gameboard.placeShip(carrierBoat, 3, 3, 4, 'horizontal');
//   const placeSubmarine = player.gameboard.placeShip(submarine, 4, 4, 3, 'horizontal');
//   console.log(getPlayerBoard);
//   return getPlayerBoard;
// } 

// export function placeShipsOnComputersBoard(user) { 
//   const computer = user;
//   const battleShip = ship('Battleship', 4, 'vertical');
//   const destroyer = ship('Destroyer', 4, 'horizontal' );
//   const patrolBoat = ship('Patrol-boat', 2, 'vertical');
//   const carrierBoat = ship('Carrier', 4, 'horizontal');
//   const submarine = ship('Submarine', 3, 'vertical');
//   // const computer = createPlayer('PC', 'computer');
//   const getComputerBoard = computer.gameboard.getGameboard();
//   const placeBattleShip = computer.gameboard.placeShip(battleShip, 0, 0, 4, 'horizontal');
//   const placeDestroyer = computer.gameboard.placeShip(destroyer, 1, 1, 4, 'horizontal');
//   const placePatrolBoat = computer.gameboard.placeShip(patrolBoat, 2, 2, 2, 'horizontal');
//   const placeCarrierBoat = computer.gameboard.placeShip(carrierBoat, 3, 3, 4, 'horizontal');
//   const placeSubmarine = computer.gameboard.placeShip(submarine, 7, 4, 3, 'horizontal');
//   console.log(getComputerBoard);
//   return getComputerBoard;

// }

//  // sunk battleship
//  attack(player, 0, 0); 
//  attack(player, 0, 1); 
//  attack(player, 0, 2); 
//  attack(player, 0, 3); 
//  // sunk destroyer
//  attack(player, 1, 2); 
//  attack(player, 1, 3); 
//  attack(player, 1, 4); 
//  attack(player, 1, 1); 
//  // sunk patrol boat
//  attack(player, 2, 2); 
//  attack(player, 2, 3); 
//  // sunk carrier boat 
//  attack(player, 3, 3); 
//  attack(player, 3, 4); 
//  attack(player, 3, 5); 
//  attack(player, 3, 6); 
//  // sunk submarine
//  attack(player, 4, 4); 
//  attack(player, 4, 5); 
//  attack(player, 4, 6); 

// // sunk battleship
// attack(computer, 0, 0); 
// attack(computer, 0, 1); 
// attack(computer, 0, 2); 
// attack(computer, 0, 3); 
// // sunk destroyer
// attack(computer, 1, 1); 
// attack(computer, 1, 2); 
// attack(computer, 1, 3); 
// attack(computer, 1, 4); 
// // sunk patrol boat
// attack(computer, 2, 2); 
// attack(computer, 2, 3); 
// // sunk carrier boat 
// attack(computer, 3, 3); 
// attack(computer, 3, 4); 
// attack(computer, 3, 5); 
// attack(computer, 3, 6); 
// // sunk submarine
// attack(computer, 7, 4); 
// attack(computer, 7, 5); 
// attack(computer, 7, 6); 

// old attack function
// function attack(user1, user2,) { 
//   let computer = user1;
//   let player = user2;

//   console.log(computer);
//   console.log('computers userTurn value before attack',computer.userTurn);
//   console.log('players userTurn value before attack', player.userTurn);

//   if (player.userTurn === true) { 
//     // if true let player make attack, on computers gameboard
//     console.log(computer.gameboard.receiveAttack(3, 3));
//     player.userTurn = false;
//     console.log('players userTurn value after attack', player.userTurn)
//     computer.userTurn = true;
//     console.log('computers userTurn value after attack', computer.userTurn)
//   } 

//   console.log('players userTurn value attack, outside if block', player.userTurn);

//   if (computer.userTurn === true) { 
//     console.log(player.gameboard.receiveAttack(1, 2));
//     computer.userTurn = false;
//     console.log('computers userTurn value after attack', computer.userTurn);
//     player.userTurn = true;
//     console.log('players userTurn value after comp attack', player.userTurn);
//   } 
// }

// console.log(createPlayer('Alec', 'player')); 

// let testPlayer = createPlayer('Alec', 'player');

// console.log(placeShipsOnPlayersBoard(testPlayer));

// export default function playGame() { 

//     function createPlayerName(name) { 
//         const playerName = playerFactory(name);
//         // console.log(player.gameboard.receiveAttack(3, 3));
//         return playerName;
//     } 

// function createComputerName(name) { 
//     const computerName = playerFactory(name);
//     return computerName;
// } 

// function placeShipsPlayerBoard() { 
//     // create all ships objects within here, then place them on the board, 
//     // just place them
//     const battleShip = ship('Battleship', 4, 'vertical');
//     const destroyer = ship('Destroyer', 4, 'horizontal' );
//     const patrolBoat = ship('Patrol-boat', 2, 'vertical');
//     const carrierBoat = ship('Carrier', 4, 'horizontal');
//     const submarine = ship('Submarine', 3, 'vertical');

//     const getPlayer = createPlayerName('Alec');
//     const getPlayerBoard = getPlayer.gameboard.getGameboard();
//     const placeBattleShip = getPlayer.gameboard.placeShip(battleShip, 0, 0, 4, 'horizontal');
//     const placeDestroyer = getPlayer.gameboard.placeShip(destroyer, 1, 1, 4, 'horizontal');
//     const placePatrolBoat = getPlayer.gameboard.placeShip(patrolBoat, 2, 2, 2, 'horizontal');
//     const placeCarrierBoat = getPlayer.gameboard.placeShip(carrierBoat, 3, 3, 4, 'horizontal');
//     const placeSubmarine = getPlayer.gameboard.placeShip(submarine, 4, 4, 3, 'horizontal');
//     console.log(placeBattleShip);
//     // console.log(destroyer);
//     return getPlayerBoard;
// }

// function placeShipsComputerBoard() { 
//     const battleShip = ship('Battleship', 4, 'vertical');
//     const destroyer = ship('Destroyer', 4, 'horizontal' );
//     const patrolBoat = ship('Patrol-boat', 2, 'vertical');
//     const carrierBoat = ship('Carrier', 4, 'horizontal');
//     const submarine = ship('Submarine', 3, 'vertical');

//     const getComputerPlayer = createComputerName('Computer');
//     const getComputerBoard = getComputerPlayer.gameboard.getGameboard();
//     const placeBattleShip = getPlayer.gameboard.placeShip(battleShip, 0, 0, 4, 'horizontal');
//     const placeDestroyer = getPlayer.gameboard.placeShip(destroyer, 1, 1, 4, 'horizontal');
//     const placePatrolBoat = getPlayer.gameboard.placeShip(patrolBoat, 2, 2, 2, 'horizontal');
//     const placeCarrierBoat = getPlayer.gameboard.placeShip(carrierBoat, 3, 3, 4, 'horizontal');
//     const placeSubmarine = getPlayer.gameboard.placeShip(submarine, 4, 4, 3, 'horizontal');
// }

//     return { 
//         createPlayerName,
//         // createComputerName,
//         // placeShipsPlayerBoard,
//         // placeShipsComputerBoard,
//     }
// } 

// making a method for retrieving player and computer, 
// let playGameTest = playGame().createPlayerName('Alec');
// let playGameCompTest = playGame().createComputerName('cypress');

// console.log(playGameTest);
// console.log(playGameCompTest);

// console.log(playGame().placeShipsPlayerBoard());

// looking at the directions where do I start? 

//

/***/ }),

/***/ "./src/gameboardFactory.js":
/*!*********************************!*\
  !*** ./src/gameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameboardFactory)
/* harmony export */ });
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ "./src/shipFactory.js");
// import './shipFactory.js';

function gameboardFactory() {
  let gameboard = [];
  let allShots = [];
  let hitShots = [];
  let missedShots = [];
  let sunkenShipsArray = [];
  for (let i = 0; i < 10; i++) {
    gameboard.push(['', '', '', '', '', '', '', '', '', '']);
  }
  function getGameboard() {
    return gameboard;
  }
  // previously for (let i = 1; i <= length - 1; i++) 
  // changed to 0, i < length, 
  // this works too for (let i = 0; i <= length - 1; i++)

  function checkForShip(x, y, length, position) {
    if (position === 'vertical') {
      for (let i = 0; i < length; i++) {
        if (x + i > 9) {
          return false;
        }
        if (gameboard[x + i][y] !== '') {
          return false;
        }
      }
    }
    if (position === 'horizontal') {
      for (let i = 0; i < length; i++) {
        if (y + i > 9) {
          return false;
        }
        if (gameboard[x][y + i] !== '') {
          return false;
        }
      }
    }
    return true;
  }
  function placeShip(shipObj, x, y, length, position) {
    if (!checkForShip(x, y, length, position)) {
      // throw new Error('ship is already there or ship is placed off the gameboard, please place ship somewhere else, and on the gameboard');
      console.log('ERROR SHIP OVERLAP! Current shipObj is', shipObj);
      return false;
    }
    // else if (checkForShip(x, y, length, position)) { // recently added the else if 
    gameboard[x][y] = shipObj;
    if (position === 'vertical') {
      for (let i = 0; i < length; i++) {
        gameboard[x + i][y] = shipObj;
      }
    }
    if (position === 'horizontal') {
      for (let i = 0; i < length; i++) {
        gameboard[x][y + i] = shipObj;
      }
    }
    return gameboard;
    // } 
  }

  function checkForHits(x, y) {
    for (let i = 0; i < hitShots.length; i++) {
      const hitShotCoordinates = hitShots[i];
      if (JSON.stringify(hitShotCoordinates) === JSON.stringify([x, y])) {
        return true;
      }
    }
    return false;
  }
  function checkForDuplicateMissedShots(x, y) {
    for (let i = 0; i < missedShots.length; i++) {
      const missedShotCoordinates = missedShots[i];
      if (JSON.stringify(missedShotCoordinates) === JSON.stringify([x, y])) {
        return true;
      }
    }
    return false;
  }

  // ok so we go thru the hit and missed shots but we need to go thru the gameboard and figure out if a cell is already occupied, 
  // loop thru gameboard and determine if cell is free, then player can make their attack, 

  // allows user to place hits on the board if the hit is valid, 
  function receiveAttack(x, y) {
    const shipOnBoard = gameboard[x][y];
    if (typeof shipOnBoard === 'object') {
      if (checkForHits(x, y)) {
        // if there is already a hit there, 
        // check to make sure same cell is not being hit twice, 
        // throw new Error('Hit was already placed at that cell, pick a different cell');
        return true;
      }
      shipOnBoard.hitIncrementor();
      hitShots.push([x, y]);
      if (shipOnBoard.getShipStatus()) {
        console.log(sunkenShipsArray);
        //  if (!sunkenShipsArray.includes(shipOnBoard)) { 
        sunkenShipsArray.push(shipOnBoard);
        // } 
      }
    } else {
      // check if these coordinates are in missedShot array, if they are not, push them into missedShot array, 
      // if false, meaning coordinates are not inside the missed coords array then push unique coords in, 
      if (!checkForDuplicateMissedShots(x, y)) {
        missedShots.push([x, y]);
      }
    }
    return {
      missedShots,
      hitShots
    };
  }
  function areAllShipsSunk() {
    console.log('all ships sunk function, logging current sunkenShipsArray', sunkenShipsArray);
    if (sunkenShipsArray.length === 5) {
      return true;
    }
    return false;
  }
  return {
    getGameboard,
    placeShip,
    receiveAttack,
    checkForShip,
    hitShots,
    missedShots,
    areAllShipsSunk,
    sunkenShipsArray,
    checkForHits
  };
}
let battleShip = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Battleship', 4, 'vertical');
let destroyer = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Destroyer', 4, 'horizontal');
let patrolBoat = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Patrol-boat', 2, 'vertical');
let carrierBoat = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Carrier', 4, 'horizontal');
let submarine = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])('Submarine', 3, 'vertical');
let gameboard = gameboardFactory();

// gameboard.placeShip(battleShip, 3, 2, 4, 'vertical');
// gameboard.placeShip(destroyer, 4, 5, 4, 'horizontal');
// gameboard.placeShip(patrolBoat, 0, 0, 2, 'vertical');
// gameboard.placeShip(carrierBoat, 1, 2, 4, 'horizontal');
// gameboard.placeShip(submarine, 6, 3, 3, 'vertical');
// // sinking battleship
// gameboard.receiveAttack(3, 2);
// // gameboard.receiveAttack(3, 2);
// gameboard.receiveAttack(4, 2);
// gameboard.receiveAttack(5, 2);
// gameboard.receiveAttack(6, 2);
// gameboard.areAllShipsSunk();
// // sinking destroyer 
// gameboard.receiveAttack(4, 5);
// gameboard.receiveAttack(4, 6);
// // gameboard.receiveAttack(4, 5);
// gameboard.receiveAttack(4, 7);
// gameboard.receiveAttack(4, 8);
// gameboard.areAllShipsSunk();
// // sinking patrol board
// gameboard.receiveAttack(0, 0);
// gameboard.receiveAttack(1, 0);
// gameboard.areAllShipsSunk();
// // sinking carrier boat
// gameboard.receiveAttack(1, 2); 
// gameboard.receiveAttack(1, 3); 
// gameboard.receiveAttack(1, 4); 
// gameboard.receiveAttack(1, 5); 
// gameboard.areAllShipsSunk();
// // sinking submarine
// gameboard.receiveAttack(6, 3);
// gameboard.receiveAttack(7, 3);
// gameboard.receiveAttack(8, 3);
// gameboard.areAllShipsSunk();

// console.log(JSON.parse(JSON.stringify(gameboard.sunkenShipsArray)));
// console.log('checking the array after ships are placed and sunk', gameboard.sunkenShipsArray);
// console.log(gameboard.getGameboard());
// console.log('checking what the areAllShipsSunk conditional returns', gameboard.areAllShipsSunk());  

// console.log(gameboard.hitShots);
// console.log(gameboard.missedShots);

// console.log(areAllShipsSunk());

// function areAllShipsSunk() {
//   let allShips = 5;
//   let sunkShips = [];
//   for (let i = 0; i < gameboard.length; i++) { 
//     let gameboardArrays = gameboard[i];
//     for (let j = 0; j < gameboardArrays.length; j++) { 
//       let cell = gameboardArrays[j];
//       console.log('currently logging array:', gameboardArrays)
//        if (typeof cell === 'object') { // checking only one ship, how to check all
//         console.log(`found a ship at: [${i}, ${j}]`, cell)
//         cell.isSunkConditional();
//         if (cell.getShipStatus()) { 
//             return true;
//         }
//        } else { 
//         console.log(`no ship found at: [${i}, ${j}]!`, cell)
//       } 
//     }
//   } 
//   return false; 
// }

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory.js */ "./src/shipFactory.js");
/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboardFactory.js */ "./src/gameboardFactory.js");
/* harmony import */ var _playerFactory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerFactory.js */ "./src/playerFactory.js");
/* harmony import */ var _gameModule_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameModule.js */ "./src/gameModule.js");
/* harmony import */ var _domLogic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domLogic.js */ "./src/domLogic.js");
// import './shipFactory.js';







// import 'src/style.css';

// import 'dist/style.css'; 

// when I comment out styles import it will  work in src but not in dist 

// when I uncomment the import it will work in dist, but gameboard will not show up in src, 

// I still receive the same error. I need to address the mime type error. 

// where do I start, webpack dev server throwing the same error as before, 
// its the same out of bounds error, where it can not find the cells, 
// its preventing me from testing anything, 
// I cannot even play the game in dev server yet works fine in dist, 
// what the fuck am I supposed to do? 
// 
// 

// figure out the last jest error, 
// in the meantime we need to figure out how to start the game 
/// and what would need to happen for the game to start? 
// all player ships are placed 
// comps ships are randomly placed on the board 

// we need a way to determine if all five player ships have been placed
// look over and see what we can find 

// place player ship function 
// access the gameboard for player
// loop thru it and init an array, 
// if the arr is empty all ships have been placed, start the game. 

// how can we start the game, once all players ships have been placed, 
// first check the place ship functions, 
// something that will determine if all 5 ships have been placed. 
// maybe in the event listener, 
// because the user will have to click a ship object to place it 
// within the place ship function, update a variable, that returns a boolean 

// work on correctly displaying the grids next to eachother, 
// with appriproate styling, 
// two grids next to eachother, once the start game btn is pressed, 
// follow the sequence again and get familiar, 

// I want the board to be displayed in the center to start, 
// once the other ship is added to makes space for the new one, 
// make sure the boards are properly displayed, once the start game btn is pressed
// btn is pressed, removes the btns, the ship objects, displays the computer board 
// and the players board, then the game can start,

// commit and save work before moving forward, 
// next game will start, 
// but before then, make sure you connect the new gameboard to the computer/PC user
// connect the gameboards.  

// it seems like the gameboards are connected, 
// we can start the game, 
// once start game btn is clicked, players have their boards. 
// call playGame and get the boards with ships on them 

// should I totally refactor game module? 
// it has all the info we need, 
// checking if all ships are sunk 
// attack methods, 
// game loop that keeps playing under a certain condition 
// first we need a way to access players and computers board within game module, 
// the updated boards need to be accessed within that module, 

// I can access the gameboard variables within gameModule 
// how will I update my data within game module, 
// to use these new variables. 
// I think I need to look over the game module 
// and determine how this can be used, 
// I think variables will need to be updated within game module 
// the gameboards are updated and completed within domLogic 
// passed to game module 
// and that board used within the game module 
// save and commit work then begin

// ok we need to follow this process, 
// boards are displayed
// time for players attack, player clicks on comps board
// something will need to determine if the hit was successful,
// once clicked on a cell on the comps board, those coordinates will be saved 

// we are displaying the boards, 
// player will click on computers board 
// and those coordinates will need to get saved, 
// if a hit apply styles to them, 
// if a miss apply styles to them, 
// we need to figure out what we will do with the coordinates 
// coordinates that are clicked on are the players attack 
// determine if the coordinates are a hit or miss, in the attack method, 
// then call the dom file again to a function which applies styles to the coordinates 

// CURRENT PLAN
// working on playing the game, 
// play game is actually called within the event listener 
// once a cell is clicked on the computers board, that will be the players attack
// right now I can only place attacks on the computers board, I can sink all the ships and it will determine that I won, 
// but the problem seems to be the loop, 
// test again but without the loop,  I can make the player win, only player turn is working, I can sink all the comps ship 
// and print the winner which would be player 
// why when I add the loop which simply keeps playing if there are still ships on players board and computers board, it will not work correctly
// WHY CAN COMP HIT THE SAME CELL TWICE, I HAVE CHECKS AGAINST, WHY ARE THOSE NOT WORKING!!!!!!? 

// problem 1 trying to get the game loop to properly work, 
// problem 2 why are computer and user still able to hit the same cell twice? 
// user clicks on comps gameboard, once clicked it will trigger the game, 
// whatever cell user clicks is his attack, 
// then the game keep playing as long as both player and computer have ships still on the board, 
// currently with my loop only player, can make his mark, it won't switch turns, it will let me sink ships and print winner, 
// but why will it not switch turns and why is it hitting the same cell twice? 

// CURRENT PLAN 9/12 
// first spend a little time understanding behavior again, 
// then the plan seems to be getting the hover class working first, 
// we need to think of the flow of the game, 
// you should first be able to hover over the comps gameboard 
// to determine where you want to place the hit
// player clicks on a cell, that is his attack, so that triggers the game, 
// playGame is called, is it a problem that playGame is called, within the listener, 
// because I need someway to pass the coordinates, what cells did the player click, what is players attack? 
// those coordinates get passed the playGame function, player makes mark, checks for winner, 
// then switches turn, to comp, random coords are selected and comp makes their mark 
// checks for winner, 
// I dont think we need a loop either, i may possibly have to reconsider and refactor but the game will depend on player making his mark, 
// coords are passed to play game, cell that was clicked on comps board will be players attack, then turn switches to comps, which is random attack, 
// after each player makes attack, turn switches, 
// game cycle depends on players click, checking for winner, switching turns, cycle repeats 
// 
// first lets do a hover class over the comps board, player should see where they are about to place their hit. 
// hover class taken care of, next lets style the players mark, 
// attack method will determine if hit or not 
// how can we determine if it was a hit or not? 
// I think we also needto pass the enemy's gameboard to determine if hit or not function, 
// takes the coords and enemy's gameboard. if it hit style the cell on the enemys board, 
// let enemysCurrentBoard = enemysboard.gameboard.hitShits() 

// highlighting the players gameboard, query select the computers gameboard cells ONLY! 
// make sure you access the computers gameboard cell that was clicked on, you are accessing the players gameboard cell, 
// change the data row and column attribute for computer gameboard function
// I want to log back the computers DOM cell that was clicked using the correct data attributes 
// should I change the variable that assigns the data-set, how can I properly set a data-set for comps DOM cells on the gameboard 
// data set for comps board now working ok, 
// now use conditional to determine if the clicked on coordinate is a hit, meaning it's already in the hit shots array

// hit shots are working on comps board, but I think I need to make a new function, which does the same logic, but for computer attack
// because within attack I am accessing two different boards using query selector, I find that difficult to do in one function, 

// tonight, change attack currently to playerAttack, and make another function computerAttack, which uses the same process, 

// just passing in a different board and coordinates, 

// for player, it hit is good, highlight red, 
// else highlight the cell blue or green, make sure the player knows that is is a miss, then apply the same logic for the computer, 

// then turn switching logic/loop, 
// making sure cells, cannot get hit twice, 
// remove hover class on players board after start game 

// continue to work on making sure if a miss happens on comps board, it will turn blue for miss, red for hit. 
// then work on making sure the turns are switching, 
// make sure cells cannot get hit twice for sure, 
// first lets make sure misses on the comps board turn blue 

// use a loop to check for hit shots or missed shots, try the same process as hits

// OK looks like I have a system down for hit shots and missed shots on players board, 

// now I will need to do the same for the computer, random attacks, if hit turn red, if miss turn blue, 

// is this the time to determine turn switching logic? 

// have the ability to switch turns now, 
// or just make the logic for the computer to make their mark and apply styles, 
// I'm leaning to just make the logic now, and flip the player turn to 2, to test if computer styles work, 
// should just keep randomly generating coordinates, 

// make logic for comps selection, styling 
// hit coordinates do not get counted again, cannot hit same cell twice, but missed Coordinates can be saved twice, can hit the same missed cell twice, 

// we need to figure out turn switching logic, player makes mark, determine if hit or miss, check for winner, switch players, 
// comp makes mark, determine if hit or miss, check winner, switch players, 
// where else could I switch players if I wanted to make this work, 
// player will go first but once he makes his mark, comp should be able to make his mark, 

// turn switching logic, 
// seems like when you sink a ship it is sinking the same ship object twice, 
// so when all ships are sunk 10 ships are inside the sunkenShipsArray 
// double check, and maybe use/place different ship objects on computers board, 
// when ships are placed, they could be placing twice, or overlapping over top of eachother, that is why some ships are being sunk twice, 
// the target wil be to look over the placeComputerShips function in the domLogic 

// some ships are being sunk twice? so that means player can win early if the sunkenShips array is 5, even though only 3 ships have been sunk. 
// carrier being sunk twice??? 

// 9/13 current plan, 
// clean up the comments in the code, for domLogic and game module 
// then figure out a better method for checking if all ships are sunk, this is a must, 
// then determine why some ship objects are being sunk twice, 
// I can first test with the nested loop and see if that makes a difference, it that fails, then I need to think of a better system 
// place it vertically and it will be 4, horizontally will be one, so seems like it is not accounting for its full length 

// trying to figure out a system to check if all player ships are sunk, before I was making a loop then determining if that cell included a ship object, if it did 

// I Would keep a counter, and if all ships placed and equaled 18 (the length of all ships when placed) the game could start, that only works for one direction, 
// 

// so now the problem is why are certain ships being sunk twice? 
// that interfers with the determing if all ships are sunk function, 
// I would go back and determine how ships are being placed, 
// but yet the placement of the ships are fine, 
// it does not seem like ships are overlapping 
// Follow the code execution, the sunken ships array and when things are being pushed to it. 

// getting some odd behavior, 
// some ships are being placed fine, others It seems like are getting placed too early,
// so ships get added to the sunkenShips array more than once, 
// however following the code execution and looking over the functiosn I have created, I am not sure why this would be occuring
// I think I found the issue, I think once a ship is sunk, the isSUnk status turns to true, and it also sinks the corresponding player ship, 
// compare boards to see if you sink one ship, it will automatically sink the players ships, 
// that isnt the issue, patrol boat on comps board was sunk but yet you check players board, the sunken ship array was still empty. 

// figured out the problem there, I am no longer seeing ships being added more than once to the sunken ships array, 
// now I need to figure out, how to prevent player from hitting the same missed coordinate cell twice. 

// 9/14 current plan, 

// get familar with the game again, 
// make sure a winner modal is printed with an option to restart the game, 
// make sure that each time playGame is called with the passed coordinates, that player must make a unique hit each time, 
// right now from what I remember, you can hit the same cell twice, and it will switch turns, 
// it switches turns after you click a button, switch turns only when the player has hit a unqiue square, 
// I would first try to work on that, so the goal is to make sure the turns only switch when the player has hit a unique square, 

// OK I would ask later about not allowing the player to hit the same cell twice, 
// if you hit the same cell twice, it wont add onto the missed or hits 
// but it will allow the turn switching  to happen, 

// move on, come back to it, and see if you can trace the execution of it 
// if not ask for the help, 
// lets make the winner modal first and print the winner, and have an opton to start the game again from the beginnging 

// these are the two issues that remain, 

// 9/16 current plan, 
// right now user can double click a square, and that will count as there move, 
// even tho the user already hit or had a miss in that cell already, 
// I want user to hit the board in unique spots only,
// my goal for going about this, was to check if the attack coordininates were already 
// in the hit shots and missed shots array, 

// User can only make unqiue hits, 
// our focus needs to go to receiveAttack function, 
// before the user makes their attack 

// Hello everyone, trying to figure out one problem here on battleship, then the game is complete. I do need some help with this, 

// What I want: I want the user to hit only open spaces on the board, user cannot make their mark on the same cell twice. 

// The problem: Turns switch when user makes a hit on enemy's gameboard, currently they can hit the same cell twice, however those hits or missed shots do not get stored again (which is good),, just that the turns will switch even though the player already hit that cell. It should switch turns when player has made a hit on an open/unoccupied cell in the board. I am really stuck on where the logic should go to prevent this. 

// What I've tried: Checking if player hit is inside the missed shot or hit shot array already. The function would not work as indetended and would always return false. I tried using that same logic throughout different points in the code execution but nothing seems be going through and the conditionals are not working. 

// I am attacking my codepen which traces the code execution. Player makes mark on comps gameboard, those coordinates are passed to playGame, the attack method is called which uses receiveAttack inside it to store hit shots and missed shots. I've attached some comments to explain the process. 

// Would appreciate any help with this. This is the final step and final bug I must get past. 

// 9/17 

// try to figure out why conditional is not working 

// if the coordinates that the player clicked on is NOT inside the hit shot or missed shot array 
// then go ahead and let player make their attack. 
// the problem is that player can still make their mark twice on the same cell, instead of hitting unique cells each time, 
// turns should only switch when a player has a hit a unique cell.  

// removing the hover class. 
// when playGame is called, access the gameboardCell via an ID, 
// then try to remove the event listener when playGame is called, 
// that means all the ships have been placed and game is ready to start, 

// 9/18 current plan, need to figure out why computer is hitting the same cell twice, 
// also need to figure out, why styles file is getting deleted from dist every time I run webpack, 
// also need to figure out how to remove the hover class on players board, once game starts and both boards are rendered 
// first is figuring out why the computer board is either hitting the same cell twice, or just skipping turns all together, 
// well now it looks like I Need to look at how to properly store webpack assets, and figure out what is going with styles being deleted from the folder, 
// now I need to figure out this stupid fucking webpack bullshit, 
// I'll read over the sections listed, I need to make this work so people can help. 

// Move  the file back into src, and address the mime type error first, 
// it should working fine, in dist and other users should be able to see it when they look at it, 

// now randomly place computers ships, 

// first start with creating the computer instance/gamebaord 

// how will we randomly place ships, how can we randomly change ship direction, 

// currently for player I set a default value for ship direction, but that can be changed from a button click, 

// can we randomly place ships first? 

// the random coordinates passed in will eventually throw an error from going out of bounds, 
// however I do have a method which checks for legal placement before ship is placed, 
// how can I get around this, ships will need to be randomly placed, 
// and I need to pass in random coordinates, 

// save the work, I will need to refactor checkForShip, it should be returning a value instead of false, right now its just throwing an error 
// get the return value, if the return value is true, place the ship, else try again with another pair of random coordinates, 
// keep track of repeated failed shots, so the coordinates do not repeat themselves 

// I Will have to go back to the help channels tonight, this is not really making sense, 
// I feel like I am doing the same thing, already checking what the function call returns, 

// I am trying to randomly place computer ships on its board, the problem is eventually the ship will collide with another ship, or go out of bounds, I am using random coordinates 

// I am already checking if the move is legal, placeShip calls a checkForShip function which checks if move is legal, 

// well I tried returning false if the checkForShip returns false, instead of throwing an error, but there is still no way to stop it from placing, 

// I tried returning false if illegal, but there is still no way to prevent the ship from still being placed. 

// is there a way I can fix this? IS there some other type of check or conditional I can use to prevent ship from being placed illegally? 

// Logging the error is just for yourself to see
// The important part is returning false if the placing failed and true if the placing succeeded
// And then you can use that return value
// const isPlacingSucceeded = gameboard.placeship()
// And then if(isPlacingSucceeded) try next ship
// Else try to place the same ship again with different coordinates
// And then, you have another issue to deal with, because with this logic it can get into a loop
// And potentially repeat failed coordinates over and over, how can you solve this?

// allow the computer to generate random coordinates and make sure each coordinate is legal, 
// 

// const mockObject = {
//     name: "joe",
//     age: 25,
//     incrementAge: function() {
//       this.age++;
//     }
//   } 

//   function ageIncrementor(exampleObj) { 
//     exampleObj.incrementAge();
//     console.log(exampleObj.age);
//   } 

// let exampleObj = mockObject;

// console.log(ageIncrementor(exampleObj));

//   console.log(ageIncrementor());
//   console.log(ageIncrementor());
//   console.log(ageIncrementor(mockObject));

// call it outside the obj and log it 

// prevent the user from sinking a ship if hits are in the same location, 4 hits in the same coordinate will sink ship, 
// consider the hitIncrementor function, receiveAttack function, receiveAttack should have type of conditional inside it, 
// that conditional will check if that square has already been hit, and prevent a user from placing a hit in that square, 

// check for hits function, that determines if the move is legal. 
// we could check it in the same conditional, if the coordiantes are an obj && the value of check for hits is false, then the hitIncrementor can be called, 
// 

// 1. when I console.log the sunkenShipsArray right after I initalize it, it has all the sunken ships in it already 
// 2. all the ship objects even after placing, and sinking each ship, still return it's isSunk value as false, (it has not been sunk)
// however when I check scope, and closure within dev tools, each ship's isSunk variable is true!
// two isses 
// why is the sunkenShipsArray after init already have the sunken ships in it, should be empty, its 
// its still saying false, all the ships are not sunk but yet the array contains all sunken ships, 
// why is the isSunk variable of the ships not changing? It still shows false but yet the ships 
// are sunk and have been added to the array, 
// when I check the scope and closure in dev tools, the isSunk variable IS changing 

// yesterdays problem was I was pushing the ship objects twice into the array so there 10 items instead of 5 
// it does return true, at the end but yet ship objects are within array before I sink them 
// and the isSunk property never changes but yet in dev tools closures and scope objects has them set to true
// 

// function ship(length, hits, sunk) {
//     this.length = length;
//     this.hits = hits;
//     this.sunk = sunk;

//     this.hits = function hits () {
//         console.log('hit function');
//     }

//     this.sunkOrNot = function sunkOrNot () {
//         console.log('sunk or not');
//     }
// }

// const createShip1 = new ship(3, 0, true);

// console.log(createShip1.hits());

// function ship(length, hits, sunk) {
//     return shipObj = {
//         length: length,
//         hits: hits,
//         sunk: sunk,

//         hitCounter: function hits() {

//         },
//         sunkOrNot: function isSunk() {
//             console.log('sunk! or not!');
//         }
//     }
// }

// const createShip = ship(4, 0, false);

// const createShip2 = ship(2, 1, true);

// console.log(createShip2.sunkOrNot());

// function is not right, init a hit counter variable

// input a name, and a length,

// init hit counter,

// hit method which will increment the hit counter

// isunk will determine if hits is greater than the ships length,

// change the value of issunk to false,

// shipFactory.js code 

// function ship(name, length) {
//   let hitCounter = 0;
//   let isSunk = false;
//   function hitIncrementor() {
//     hitCounter++;
//   }

//   function getHitIncrementor() {
//     return hitCounter;
//   }
//   function isSunkConditional() {
//     if (hitCounter >= length) {
//       isSunk = true; // return isSunk in another function,
//       // return isSunk;
//     }
//   }

//   function getShipStatus() {
//     return isSunk;
//   }

//   return {
//     shipName: name,
//     isSunk,
//     shipLength: length,
//     hitIncrementor,
//     getHitIncrementor,
//     isSunkConditional,
//     getShipStatus,
//   };
// }

// let patrolBoat = ship('patrol-boat', 2);

// console.log(patrolBoat);
// console.log(patrolBoat.hitIncrementor());
// console.log(patrolBoat.hitIncrementor());
// console.log(patrolBoat.getHitIncrementor());
// console.log(patrolBoat.isSunkConditional());
// console.log(patrolBoat.getShipStatus());
// console.log(patrolBoat);

// console.log(ship1);
// console.log(ship1.hitIncrementor());
// console.log(ship1.hitIncrementor());
// console.log(ship1.hitIncrementor());
// console.log(ship1.hitIncrementor());
// console.log(ship1.getHitIncrementor());
// console.log(ship1.getShipStatus());
// console.log(ship1.isSunkConditional());
// console.log(ship1.getShipStatus());
// console.log(ship1);

// console.log(ship1.hits());
// console.log(ship1);
// console.log(ship1.hits());
// console.log(ship1);
// console.log(ship1.hits());
// console.log(ship1);
// console.log(ship1.sunkOrNot())
// console.log(ship1);

// console.log(ship2);
// console.log(ship2.hits());
// console.log(ship2);
// console.log(ship2.hits());
// console.log(ship2);
// console.log(ship2.hits());
// console.log(ship2);
// console.log(ship2.hits());
// console.log(ship2);
// console.log(ship2.sunkOrNot())
// console.log(ship2);

// example noget

// function counter1() {
//     let count = 0;

//     function increment() {
//         count += 1;
//     }

//     function getCount() {
//         return count
//     }

//     return {
//         getCount,
//         increment,
//     };
// }

// const foo = counter1();

// console.log(JSON.stringify(foo));

// // Increment the count variable
// foo.increment();

// Logs 1, the function returns the variable's value
// console.log(foo.getCount());

// example get

// function counter2() {
//     let count = 0;

//     function increment() {
//         count += 1;
//     }

//     return {
//         get count() {
//             return count;
//         },
//         increment,
//     };
// }

// const x = counter2();

// console.log(JSON.stringify(x));

// // Increment the count variable
// x.increment();

// Logs 1, the function returns the variable's value
// console.log(x.count);

// refactored

// function counter() {
//   let count = 0;

//   function increment() {
//     count += 1;
//   }

//   function getCount() {
//     return count;
//   }

//   function toJSON() {
//     return { count };
//   }

//   return {
//     toJSON,
//     getCount,
//     increment,
//   };
// }
// const foo = counter();

// foo.increment();

// console.log(JSON.stringify(foo));

/***/ }),

/***/ "./src/playerFactory.js":
/*!******************************!*\
  !*** ./src/playerFactory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ playerFactory)
/* harmony export */ });
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ "./src/shipFactory.js");
/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardFactory.js */ "./src/gameboardFactory.js");
// create player
// Players can take turns playing the game by attacking the enemy Gameboard.
// The game is played against the computer, so make the ‘computer’ capable of making random plays. 
// The AI does not have to be smart, but it should know whether or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice). 

// import './gameboardFactory.js';


function playerFactory(name) {
  const gameboard = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return {
    name,
    gameboard
  };
}

// make a player factory function.
// that makes a player for the game 
// make a computer 
// comp should know if move is legal and cannot hit the same square twice. 

// what properties would player have? 
// a way to track whose turn it is 
// a name
// I would say a name property and a way to measure turns 
// same thing for the comp function, 
// 

// start gameplanning, visualizing what you want this section to look like, 
// we are creating a factory for a player and looks like the computer as well 
// so create the player object as well as their specific gameboard 
// look up old posts for inspiration, 
// create a player and grab their gameboard 
// see if you can log back a gameboard
// so I can include the gameboard in the return object, this seems like the inital gameboards 
// modal will pop-up and allow user to place ships at specific spots,
// create another factory for computer 

// seems like playerFactory will also need an attack method, allowing the user to hit the enemy's board. 

// what would be included in this attack method? 
// access to the receiveAttack method, calls the function, passing in the coordinates. 

// an attack method, is that just using receiveAttack? Because receiveAttack is the one placing the ships and determines valid ship placement, 
// a way to switch player turns 

// attack method will take a pair coordinates, and pass them to receiveAttack, 
// making the attack method, access the gameboard, and receiveAttack method, 
// 

// I'm supposed to access the enemy's gameboard, how? 
// make it within computer factory and somehow access it, 
// attack method, gets enemy gameboard( how ? ) 
// uses the receiveAttack method on the enemy gameboard 
// how can I use receiveAttack method within attack method 
// do I access the computers gameboard from it's factory? 
// yes seems like that could work

// const playerGameboard = gameboardFactory();
// const computerGameboard = gameboardFactory();

// export default function createPlayer(name, turn, board) { 
//     let playerBoard = board;
//     function attack() { 
//     let getComputerBoard = createComputerPlayer().compBoard;
//     // I dont know how to use receiveAttack on the gameboard
//     console.log(getComputerBoard);
// } 
//     return { 
//         name: name, 
//         turn: turn,
//         board: playerGameboard.getGameboard(),
//         attack,
//     }
// } 

// export function createComputerPlayer(name, turn, compBoard) { 
//     let computerBoard = compBoard;
//     return { 
//         name: name, 
//         turn: turn,
//         compBoard: computerGameboard.getGameboard(),
//     }
// } 

// let player1 = createPlayer('alec', true);
// console.log(player1.attack());

// let computer = createComputerPlayer('comp', false);
// console.log(computer.board);

// console.log(gameboard.getGameboard());

// make a factory for both player and computer 

// has a name property, and a turn property, 
// each factory has its own gameboard within it 
// have an attack method which grabs the enemy's gameboard 
// make the enemy's factory, same set-up
// grab the enemy's gameboard 
// how can I access the enemy's gameboard in a different factory 
// review pastos messages, work on mock object example

// log the properties of gameboard module
// Ok how do I use this information to form an attack? 
// I am not sure how to properly construct the attack method, 

// And then this is the exact same solution, when you build the attack function, you need to make it so it takes a gameboard as an argument
// And then inside the function, you can use the gameboard methods  

// why am I still having issues accessing the gameboardFactories methods ? 
// I am passing in the object, 
// Ok i am able to access the gameboards properties/methods 
// now check if I can place an attack on the board using receiveAttack 
// what is the attack method supposed to be doing?? attacking an enemy ship HOW?????????????????????????

// where do I play the ships??? how can I use receiveAttack if theres no fucking ships on the board? 
// This step literally makes no sense 
// am I supposed to place ships here, then use receiveAttack, 
// I am trying to make a stupid fucking test pass,
// test to see if attack method returns back the coordinates passed in,  

// I want to begin to test my function and it's methods, 
// first I can make a test that getName is returning the correct value 
// cant even access it, 

// attack method within the player factory 
// what would go into it, 
// a way to use the receiveAttack method within the function 
// access a gameboard, 
// use the receiveAttack method on the gameboard, 
// I think the receiveAttack method is working, it looks like it's logging coordinates of missed shots 
// can we test it? 
// it would take coordiantes too, 
// take the coordinates and hit the board 
// but how can I test the attack method, 
// shouldn't I have a different factory for computer, which creates its own board, then use receiveAttack on that board 
// if there was one thing that I would change, it would be accessing the computers gameboard, 

// access the gameboardFactory module within the playerFactory 

// access the enemys gameboard using a getter and setter, // done

// placePlayerShips method, takes a ship obj and places it on the gameboard that was created, 

// if I call placeShips would that not place it correctly??? 

// is there a way I can test the attack method now? before I make the logic for ship placement? 

// try to test attack method, 

// I have methods within playerFactory and compFactory that returns back enemy's gameboard as well players board, 

// I wanted to start placing hits on the board, I need to use receiveAttack method which is in gameboardFactory, 

// how do I use methods within gameboardFactory on the board variables? 

// look over nevz messages and commit to save work, 

// then begin to refactor playerFactory, only returns a name and gameboard. 

// I dont think its necessary to test these methods, its pretty basic stuff

// I deleted the test file, now I will make the game module/loop 

// game module will use the receiveAttack method, 

// determine whose turn it is, 

// determine if the ships have been sunk, 

// determine a winner and print a message or modal pop-up that displays winner 

// const player1 = playerFactory('alec');
// const computer = playerFactory('computer');

// console.log(player1);
// console.log(computer); 

// function playerFactory(name, turn) { 
//     let gameboardModuleMethods = gameboardFactory();
//     const getName = (() => {
//         return name; 
//     })
//     let playerTurn = turn; 
//     const playerGameboard = gameboardFactory().getGameboard();

//     function getBoard() { 
//         return playerGameboard;
//     } 

//     function getComputerBoard() { 
//       let getCompBoard = gameboardModuleMethods.getGameboard();
//       return getCompBoard;
//     } 

//     function attack(x, y) {
//         let computerBoard = getComputerBoard();
//         // computerBoard.receiveAttack(x, y);  // how can I use the receiveAttack method on the board? 

//     } 
//     return { 
//         name: name,
//         turn: turn,
//         getBoard,
//         attack, 
//         getName,
//         getComputerBoard,
//         gameboardModuleMethods,
//     }
// } 

// function computerFactory(name, turn) { 
//     let gameboardModuleMethods = gameboardFactory();
//     const getName = (() => {
//         return name; 
//     }) 
//     let computerTurn = turn;
//     const computerGameboard = gameboardFactory().getGameboard();
//     console.log(computerGameboard); 

//     function getComputerBoard() { 
//         return computerGameboard;
//     } 

//     function getPlayersBoard() { 
//         let getPlayerBoard = playerFactory().getBoard();
//         return getPlayerBoard;
//     }

//     function attack(x, y) { 
//         console.log('LOGGING THE PLAYERS GAMEBOARD WITHIN THE COMPUTERFACTORY FUNCTION', getPlayersBoard())
//     }

//     return { 
//         name: name,
//         turn: turn,
//         attack, 
//         getName,
//         getComputerBoard,
//         getPlayersBoard,
//         gameboardModuleMethods
//     }
// }

// console.log(playerFactory('alec', true));

// console.log(computerFactory('comp', false));

// console.log(playerFactory().attack(3, 3));

// console.log(computerFactory().attack(5, 5));
// console.log(playerFactory.getComputerBoard());

// function computerFactory(name, turn) { 
//     function attack() { 
//         const computersGameboard = gameboardModule.getGameboard();
//     } 

//     return { 
//         name: name, 
//         turn: turn,
//         attack, 
//     }
// }

// const player1 = playerFactory('alec', false, gameboard);

// console.log(player1.getName());

// console.log(player1.attack(6, 6));

// console.log(player1.getName());

// // console.log(player1.attack()) 

// // pass the gameboard object to this factory so you can access  it's methods, 

// let x = gameboardFactory();

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ship)
/* harmony export */ });
function ship(name, length, position) {
  let hitCounter = 0;
  let isSunk = false;
  // let gameBoard = gameboardFactory.sunkenShipsArray;

  function hitIncrementor() {
    hitCounter++;
    if (hitCounter >= length) {
      isSunk = true;
    }
  }
  function getHitCounter() {
    return hitCounter;
  }
  // function isSunkConditional() {
  //   if (hitCounter >= length) {
  //     isSunk = true;
  //   }
  // }

  function getShipStatus() {
    // console.log('logging the status of isSunk variable within getShipStatus in the shipFactory module', isSunk);
    // console.log(JSON.parse(JSON.stringify(sunkenShipsArray)));
    return isSunk;
  }
  return {
    shipName: name,
    get isSunk() {
      return isSunk;
    },
    // isSunk,
    shipLength: length,
    shipPosition: position,
    hitIncrementor,
    getHitCounter,
    // isSunkConditional,
    getShipStatus
  };
}

// let patrolBoat = ship('patrol-boat', 2);

// console.log(patrolBoat);
// console.log(patrolBoat.hitIncrementor());
// console.log(patrolBoat.hitIncrementor());
// console.log(patrolBoat.getHitIncrementor());
// console.log(patrolBoat.isSunkConditional());
// console.log(patrolBoat.getShipStatus());
// console.log(patrolBoat);
// console.log(patrolBoat);

// export default ship;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#main-title-container { \n    /* display: flex;\n    justify-content: center;\n    align-items: center; */\n    text-align: center;\n    font-size: 2rem;\n} \n\nbody { \n    background-color: skyblue;\n}\n\n* { \n    box-sizing: border-box;\n} \n\n\n#main-title-container > h1 { \n    font-size: 5rem;\n} \n\n.start-game-btn-hidden-class { \n    display: none;\n} \n\n#start-game-btn-container { \n    display: flex;\n    justify-content: center;\n}\n\n/* #start-game-btn-visable-class { \n    display: block;\n    text-align: center;\n} */\n\n#wrapping-container { \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* gap: 10em;  */\n}\n\n#gameboard-grid-container { \n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    max-width: 250px;\n    justify-content: center;\n} \n\n#gameboard-grid-container-computer { \n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    max-width: 250px;\n    justify-content: center;\n}\n\n/* #computer-board-container { \n    display: grid;\n    justify-content: space-between; \n} */\n\n/* ship objects for DOM and container styles below */\n\n#change-ship-direction-btn-container { \n    display: flex;\n    justify-content: center;\n}\n\n#container-for-ship-objects { \n    display: flex;\n    gap: 2em; \n    justify-content: center;\n}\n\n#container-for-battleship-description-text, \n#container-for-destroyer-description-text, \n#container-for-patrolboat-description-text, \n#container-for-carrier-boat-description-text,\n#container-for-submarine-description-text { \n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    text-decoration: underline;\n}\n\n#container-for-battleship, #container-for-destroyer, #container-for-patrol-boat, #container-for-carrier-boat, #container-for-submarine { \n    display: flex;\n    flex-direction: row;\n} \n\n#ship-obj-styles { \n    height: 35px; \n    width: 35px; \n    background-color: silver;\n    border: 1px solid black;\n} \n\n\n.battleship-hover-class { \n    background-color: gray; \n}\n\n/* .battleship-remove-class { \n    background-color: skyblue;\n} */ \n\n\n/* winner modal classes below */\n/* \nsection .modal{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n} */\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 0.4rem;\n    width: 450px;\n    /* padding: 1.3rem; */\n    min-height: 250px;\n    position: absolute;\n    top: 30%;\n    left: 40%;\n    /* background-color: white; */\n    background-color: skyblue;\n    border: 1px solid #ddd;\n    border-radius: 15px;\n  }\n  \n  .modal .flex {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  \n  .modal input {\n    padding: 0.7rem 1rem;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    font-size: 0.9em;\n  }\n  \n  .modal p {\n    font-size: 1.9rem;\n    color: #777;\n    margin: 0.4rem 0 0.2rem;\n  } \n\n  .modal h3 { \n    font-size: 2rem;\n  }\n\n  .modal button { \n    font-size: 2rem;\n  }\n\n  .overlay {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    backdrop-filter: blur(3px);\n    z-index: 1;\n  } \n\n  .modal {\n    z-index: 2;\n  } \n\n  .hidden {\n    display: none;\n  }\n\n\n\n/* player board, flex container\n#player-board-flex-container { \n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#gameboard-container { \n    display: flex;\n    flex-wrap: wrap;\n    /* height: 350px; \n    width: 350px; */\n    /* max-height: 350px;  */\n    /* max-width: 350px; */\n    /* justify-content: center;\n    align-items: center;  */\n/* }  */\n\n/* #cell-styles { \n    min-height: 35px; \n    min-width: 35px; \n    background-color: blue;\n    border: 1px solid black;\n}  */\n\n\n\n/* DOM ship placement styles */\n\n/* #ship-containers-for-placement { \n    display: flex;\n    min-width: 100px; \n    min-height: 100px;\n    justify-content: center;\n    align-items: center;\n}\n\n#battleship-container { \n    display: flex;\n    flex-wrap: wrap;\n    /* height: 50px; \n    width: 50px; */\n/* }\n\n#battleship-obj-styles { \n    height: 35px; \n    width: 35px; \n    background-color: silver;\n    border: 1px solid black;\n}  */ \n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI;;0BAEsB;IACtB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;AAC1B;;;AAGA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;;;GAGG;;AAEH;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;;;GAGG;;AAEH,oDAAoD;;AAEpD;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,uBAAuB;AAC3B;;AAEA;;;;;IAKI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,wBAAwB;IACxB,uBAAuB;AAC3B;;;AAGA;IACI,sBAAsB;AAC1B;;AAEA;;GAEG;;;AAGH,+BAA+B;AAC/B;;;;;GAKG;;AAEH;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,iBAAiB;IACjB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yBAAyB;IACzB,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;EAChC;;EAEA;IACE,oBAAoB;IACpB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,iBAAiB;IACjB,WAAW;IACX,uBAAuB;EACzB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,WAAW;IACX,YAAY;IACZ,8BAA8B;IAC9B,0BAA0B;IAC1B,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,aAAa;EACf;;;;AAIF;;;;;;;;;;;mBAWmB;IACf,wBAAwB;IACxB,sBAAsB;IACtB;2BACuB;AAC3B,OAAO;;AAEP;;;;;IAKI;;;;AAIJ,8BAA8B;;AAE9B;;;;;;;;;;;;kBAYkB;AAClB;;;;;;;IAOI","sourcesContent":["#main-title-container { \n    /* display: flex;\n    justify-content: center;\n    align-items: center; */\n    text-align: center;\n    font-size: 2rem;\n} \n\nbody { \n    background-color: skyblue;\n}\n\n* { \n    box-sizing: border-box;\n} \n\n\n#main-title-container > h1 { \n    font-size: 5rem;\n} \n\n.start-game-btn-hidden-class { \n    display: none;\n} \n\n#start-game-btn-container { \n    display: flex;\n    justify-content: center;\n}\n\n/* #start-game-btn-visable-class { \n    display: block;\n    text-align: center;\n} */\n\n#wrapping-container { \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* gap: 10em;  */\n}\n\n#gameboard-grid-container { \n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    max-width: 250px;\n    justify-content: center;\n} \n\n#gameboard-grid-container-computer { \n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    max-width: 250px;\n    justify-content: center;\n}\n\n/* #computer-board-container { \n    display: grid;\n    justify-content: space-between; \n} */\n\n/* ship objects for DOM and container styles below */\n\n#change-ship-direction-btn-container { \n    display: flex;\n    justify-content: center;\n}\n\n#container-for-ship-objects { \n    display: flex;\n    gap: 2em; \n    justify-content: center;\n}\n\n#container-for-battleship-description-text, \n#container-for-destroyer-description-text, \n#container-for-patrolboat-description-text, \n#container-for-carrier-boat-description-text,\n#container-for-submarine-description-text { \n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    text-decoration: underline;\n}\n\n#container-for-battleship, #container-for-destroyer, #container-for-patrol-boat, #container-for-carrier-boat, #container-for-submarine { \n    display: flex;\n    flex-direction: row;\n} \n\n#ship-obj-styles { \n    height: 35px; \n    width: 35px; \n    background-color: silver;\n    border: 1px solid black;\n} \n\n\n.battleship-hover-class { \n    background-color: gray; \n}\n\n/* .battleship-remove-class { \n    background-color: skyblue;\n} */ \n\n\n/* winner modal classes below */\n/* \nsection .modal{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n} */\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 0.4rem;\n    width: 450px;\n    /* padding: 1.3rem; */\n    min-height: 250px;\n    position: absolute;\n    top: 30%;\n    left: 40%;\n    /* background-color: white; */\n    background-color: skyblue;\n    border: 1px solid #ddd;\n    border-radius: 15px;\n  }\n  \n  .modal .flex {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  \n  .modal input {\n    padding: 0.7rem 1rem;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    font-size: 0.9em;\n  }\n  \n  .modal p {\n    font-size: 1.9rem;\n    color: #777;\n    margin: 0.4rem 0 0.2rem;\n  } \n\n  .modal h3 { \n    font-size: 2rem;\n  }\n\n  .modal button { \n    font-size: 2rem;\n  }\n\n  .overlay {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    backdrop-filter: blur(3px);\n    z-index: 1;\n  } \n\n  .modal {\n    z-index: 2;\n  } \n\n  .hidden {\n    display: none;\n  }\n\n\n\n/* player board, flex container\n#player-board-flex-container { \n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#gameboard-container { \n    display: flex;\n    flex-wrap: wrap;\n    /* height: 350px; \n    width: 350px; */\n    /* max-height: 350px;  */\n    /* max-width: 350px; */\n    /* justify-content: center;\n    align-items: center;  */\n/* }  */\n\n/* #cell-styles { \n    min-height: 35px; \n    min-width: 35px; \n    background-color: blue;\n    border: 1px solid black;\n}  */\n\n\n\n/* DOM ship placement styles */\n\n/* #ship-containers-for-placement { \n    display: flex;\n    min-width: 100px; \n    min-height: 100px;\n    justify-content: center;\n    align-items: center;\n}\n\n#battleship-container { \n    display: flex;\n    flex-wrap: wrap;\n    /* height: 50px; \n    width: 50px; */\n/* }\n\n#battleship-obj-styles { \n    height: 35px; \n    width: 35px; \n    background-color: silver;\n    border: 1px solid black;\n}  */ \n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQ0Y7RUFDQTtBQUNGOztBQVNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUY7QUFDTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRjs7QUFFQTs7QUFJQTs7QUFhQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDelpBO0FBQ29DO0FBRXJCLFNBQVNi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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7O0FBRUE7O0FBSUE7QUFDQTtBQUNBOztBQUlFOztBQWFGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDenBCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNvQztBQUVpQjtBQUV0QyxTQUFTQyxhQUFhQSxDQUFDOEosSUFBSSxFQUFFO0VBQ3hDLE1BQU1wSixTQUFTLEdBQUdYLGdFQUFnQixDQUFDLENBQUM7RUFDcEMsT0FBTztJQUFDK0osSUFBSTtJQUFFcEo7RUFBUyxDQUFDO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBSUE7QUFDQTs7QUFFQTtBQUNBOztBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3ZUZSxTQUFTWixJQUFJQSxDQUFDZ0ssSUFBSSxFQUFFMUgsTUFBTSxFQUFFNEQsUUFBUSxFQUFFO0VBQ2pELElBQUlvRyxVQUFVLEdBQUcsQ0FBQztFQUNsQixJQUFJQyxNQUFNLEdBQUcsS0FBSztFQUNsQjs7RUFFQSxTQUFTSCxjQUFjQSxDQUFBLEVBQUc7SUFDeEJFLFVBQVUsRUFBRTtJQUNaLElBQUlBLFVBQVUs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZG9tTG9naWMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9nYW1lTW9kdWxlLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNoaXAgZnJvbSAnLi9zaGlwRmFjdG9yeS5qcyc7XG5pbXBvcnQgZ2FtZWJvYXJkRmFjdG9yeSBmcm9tICcuL2dhbWVib2FyZEZhY3RvcnkuanMnOyBcbmltcG9ydCBwbGF5ZXJGYWN0b3J5IGZyb20gJy4vcGxheWVyRmFjdG9yeS5qcyc7XG4vLyBpbXBvcnQgJy4vZ2FtZU1vZHVsZS5qcyc7XG5pbXBvcnQgY3JlYXRlUGxheWVyLCB7IHBsYXlHYW1lIH0gZnJvbSAnLi9nYW1lTW9kdWxlLmpzJztcbi8vIGltcG9ydCB7IHBsYWNlU2hpcHNPblBsYXllcnNCb2FyZCwgcGxheUdhbWUgfSBmcm9tICcuL2dhbWVNb2R1bGUuanMnO1xuLy8gaW1wb3J0IGdhbWVib2FyZEZhY3RvcnkgZnJvbSAnLi9nYW1lYm9hcmRGYWN0b3J5LmpzJztcbi8vIGltcG9ydCB7IGRldGVybWluZUlmSW5zaWRlSGl0U2hvdHMgfSBmcm9tICcuL2dhbWVNb2R1bGUuanMnO1xuXG5jb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1ncmlkLWNvbnRhaW5lcicpO1xuY29uc3Qgd3JhcHBpbmdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBpbmctY29udGFpbmVyJyk7XG5jb25zdCBjb21wdXRlckdyaWRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWdyaWQtY29udGFpbmVyLWNvbXB1dGVyJyk7XG5jb25zb2xlLmxvZyhjb21wdXRlckdyaWRDb250YWluZXIpO1xuXG5sZXQgZ2FtZWJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuXG5leHBvcnQgbGV0IHBsYXllckdhbWVib2FyZCA9IGNyZWF0ZVBsYXllcignQWxlYycsICdwbGF5ZXInKTtcbmNvbnNvbGUubG9nKHBsYXllckdhbWVib2FyZCk7XG5leHBvcnQgbGV0IGNvbXB1dGVyR2FtZWJvYXJkID0gY3JlYXRlUGxheWVyKCdJQk0nLCAnY29tcHV0ZXInKTtcbmNvbnNvbGUubG9nKGNvbXB1dGVyR2FtZWJvYXJkKTsgXG5cbmxldCBjdXJyZW50U2hpcCBcbmxldCBjdXJyZW50Q2VsbFxubGV0IGN1cnJlbnRTaGlwTGVuZ3RoXG5sZXQgY3VycmVudFNoaXBEaXJlY3Rpb25cbmxldCBiYXR0bGVTaGlwID0gc2hpcCgnQmF0dGxlc2hpcCcsIDQsICd2ZXJ0aWNhbCcpO1xubGV0IGRlc3Ryb3llciA9IHNoaXAoJ0Rlc3Ryb3llcicsIDQsICd2ZXJ0aWNhbCcgKTtcbmxldCBwYXRyb2xCb2F0ID0gc2hpcCgnUGF0cm9sLWJvYXQnLCAyLCAndmVydGljYWwnKTtcbmxldCBjYXJyaWVyQm9hdCA9IHNoaXAoJ0NhcnJpZXInLCA1LCAndmVydGljYWwnKTtcbmxldCBzdWJtYXJpbmUgPSBzaGlwKCdTdWJtYXJpbmUnLCAzLCAndmVydGljYWwnKTsgXG5sZXQgY29vcmRpbmF0ZUZyb21Db21wdXRlckJvYXJkWFxubGV0IGNvb3JkaW5hdGVGcm9tQ29tcHV0ZXJCb2FyZFlcbmxldCBzaGlwQ291bnRlciA9IDA7IFxuLy8gbGV0IGNvbXB1dGVyQXJyYXkgPSBbYmF0dGxlU2hpcCwgZGVzdHJveWVyLCBwYXRyb2xCb2F0LCBjYXJyaWVyQm9hdCwgc3VibWFyaW5lXTsgXG5cbmxldCBjb21wdXRlckJhdHRsZVNoaXAgPSBzaGlwKCdCYXR0bGVzaGlwJywgNCwgJ3ZlcnRpY2FsJyk7XG5sZXQgY29tcHV0ZXJEZXN0cm95ZXIgPSBzaGlwKCdEZXN0cm95ZXInLCA0LCAndmVydGljYWwnICk7XG5sZXQgY29tcHV0ZXJQYXRyb2xCb2F0ID0gc2hpcCgnUGF0cm9sLWJvYXQnLCAyLCAndmVydGljYWwnKTtcbmxldCBjb21wdXRlckNhcnJpZXJCb2F0ID0gc2hpcCgnQ2FycmllcicsIDUsICd2ZXJ0aWNhbCcpO1xubGV0IGNvbXB1dGVyU3VibWFyaW5lID0gc2hpcCgnU3VibWFyaW5lJywgMywgJ3ZlcnRpY2FsJyk7IFxubGV0IGNvbXB1dGVyU2hpcEFycmF5ID0gW2NvbXB1dGVyQmF0dGxlU2hpcCwgY29tcHV0ZXJEZXN0cm95ZXIsIGNvbXB1dGVyUGF0cm9sQm9hdCwgY29tcHV0ZXJDYXJyaWVyQm9hdCAsIGNvbXB1dGVyU3VibWFyaW5lXTtcbmxldCBoaXRTaG90c0FycmF5ID0gY29tcHV0ZXJHYW1lYm9hcmQuZ2FtZWJvYXJkLmhpdFNob3RzO1xuICAgIFxuICAgIGV4cG9ydCBmdW5jdGlvbiBwbGFjZUNvbXB1dGVyU2hpcHMoY3VycmVudENvbXB1dGVyU2hpcCA9IGNvbXB1dGVyU2hpcEFycmF5WzBdKSB7IFxuICAgICAgICBpZiAoY29tcHV0ZXJTaGlwQXJyYXkubGVuZ3RoID09PSAwKSB7IFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IFxuXG4gICAgICAgIGxldCB2ZXJ0aWNhbERpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgIGxldCBob3Jpem9udGFsRGlyZWN0aW9uID0gJ2hvcml6b250YWwnOyBcbiAgICAgICAgbGV0IHJhbmRvbVNoaXBEaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gdmVydGljYWxEaXJlY3Rpb24gOiBob3Jpem9udGFsRGlyZWN0aW9uO1xuICAgICAgICBjb25zb2xlLmxvZyhyYW5kb21TaGlwRGlyZWN0aW9uKTtcblxuICAgICAgICBsZXQgZmFpbGVkQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgbGV0IHJhbmRvbUNvb3JkaW5hdGVYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSkgKyAxO1xuICAgICAgICBsZXQgcmFuZG9tQ29vcmRpbmF0ZVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSArIDE7IFxuICAgICAgICBsZXQgaXNWYWxpZFNoaXBQbGFjZW1lbnQgPSBjb21wdXRlckdhbWVib2FyZC5nYW1lYm9hcmQucGxhY2VTaGlwKGN1cnJlbnRDb21wdXRlclNoaXAsIHJhbmRvbUNvb3JkaW5hdGVYLCByYW5kb21Db29yZGluYXRlWSwgY3VycmVudENvbXB1dGVyU2hpcC5zaGlwTGVuZ3RoLCByYW5kb21TaGlwRGlyZWN0aW9uKTtcbiAgICAgICAgaWYgKGZhaWxlZENvb3JkaW5hdGVzLmluY2x1ZGVzKFtyYW5kb21Db29yZGluYXRlWCwgcmFuZG9tQ29vcmRpbmF0ZVldKSkgeyBcbiAgICAgICAgICAgICBwbGFjZUNvbXB1dGVyU2hpcHMoKTtcbiAgICAgICAgfSBpZiAoaXNWYWxpZFNoaXBQbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbXB1dGVyR2FtZWJvYXJkLmdhbWVib2FyZC5wbGFjZVNoaXAoY3VycmVudENvbXB1dGVyU2hpcCwgcmFuZG9tQ29vcmRpbmF0ZVgsIHJhbmRvbUNvb3JkaW5hdGVZLCBjdXJyZW50Q29tcHV0ZXJTaGlwLnNoaXBMZW5ndGgsIHJhbmRvbVNoaXBEaXJlY3Rpb24pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0xPR0dJTkcgVEhFIENPTVBVVEVSU0hJUEFSUkFZIEFGVEVSIFZBTElEIFNISVAgUExBQ0VNRU5ULCBVU0lORyBTUExJQ0UgQkVGT1JFJywgY29tcHV0ZXJTaGlwQXJyYXkpO1xuICAgICAgICAgICAgY29tcHV0ZXJTaGlwQXJyYXkuc3BsaWNlKGN1cnJlbnRDb21wdXRlclNoaXAsIDEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0xPR0dJTkcgVEhFIENPTVBVVEVSU0hJUEFSUkFZIEFGVEVSIFZBTElEIFNISVAgUExBQ0VNRU5ULCBVU0lORyBTUExJQ0UgQUZURVInLCBjb21wdXRlclNoaXBBcnJheSk7XG4gICAgICAgICAgICBwbGFjZUNvbXB1dGVyU2hpcHMoKTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNWYWxpZFNoaXBQbGFjZW1lbnQpICB7IFxuICAgICAgICAgICAgZmFpbGVkQ29vcmRpbmF0ZXMucHVzaChbcmFuZG9tQ29vcmRpbmF0ZVgsIHJhbmRvbUNvb3JkaW5hdGVZXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTE9HR0lORyBUSEUgQ09NUFVURVJTSElQQVJSQVkgQUZURVIgSU5WQUxJRCBTSElQIFBMQUNFTUVOVCcsIGNvbXB1dGVyU2hpcEFycmF5KTtcbiAgICAgICAgICAgIHBsYWNlQ29tcHV0ZXJTaGlwcygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyR2FtZWJvYXJkLmdhbWVib2FyZC5nZXRHYW1lYm9hcmQoKSk7XG4gICAgICAgIC8vIGxldCB1cGRhdGVkQ29tcHV0ZXJCb2FyZCA9IGNvbXB1dGVyR2FtZWJvYXJkLmdhbWVib2FyZC5nZXRHYW1lYm9hcmQoKTtcbiAgICAgICAgLy8gcmV0dXJuIGNvbXB1dGVyR2FtZWJvYXJkLmdhbWVib2FyZC5nZXRHYW1lYm9hcmQoKTtcbiAgICB9IFxuXG5wbGFjZUNvbXB1dGVyU2hpcHMoKTtcblxuXG5jb25zdCBjaGFuZ2VTaGlwUG9zaXRpb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmdlLXNoaXAtZGlyZWN0aW9uLWJ0bicpO1xuY29uc3QgY2hhbmdlU2hpcFBvc2l0aW9uQnRuSG9yaXpvbnRhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2Utc2hpcC1kaXJlY3Rpb24tYnRuLWgnKTtcblxuY2hhbmdlU2hpcFBvc2l0aW9uQnRuSG9yaXpvbnRhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IFxuICAgIGN1cnJlbnRTaGlwRGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xufSlcblxuY2hhbmdlU2hpcFBvc2l0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgIFxuICAgIGN1cnJlbnRTaGlwRGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcbn0pIFxuLy8gaG92ZXIgY2xhc3NcbmZ1bmN0aW9uIGZpbmRDb29yZHMoY3VycmVudENlbGwsIGN1cnJlbnRTaGlwRGlyZWN0aW9uLCBjdXJyZW50U2hpcExlbmd0aCkgeyBcbiAgICBsZXQgc2VsZWN0ZWRDZWxsID0gY3VycmVudENlbGw7XG4gICAgbGV0IHNlbGVjdGVkU2hpcERpcmVjdGlvbiA9IGN1cnJlbnRTaGlwRGlyZWN0aW9uO1xuICAgIGxldCBzZWxlY3RlZFNoaXBMZW5ndGggPSBjdXJyZW50U2hpcExlbmd0aDsgXG5cbiAgICBpZiAoc2VsZWN0ZWRTaGlwRGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7IFxuICAgICAgICBsZXQgdXBkYXRlZENvb3JkaW5hdGVzWCA9IFtdO1xuICAgICAgICBsZXQgY3VycmVudFJvdyA9IHNlbGVjdGVkQ2VsbC5kYXRhc2V0LnJvdztcbiAgICAgICAgbGV0IGN1cnJlbnRDb2x1bW4gPSBzZWxlY3RlZENlbGwuZGF0YXNldC5jb2x1bW47XG4gICAgICAgIGxldCBjb252ZXJ0Q29sdW1uVG9OdW1iZXIgPSBOdW1iZXIoY3VycmVudENvbHVtbik7XG4gICAgICAgIGxldCBjb252ZXJ0Um93VG9OdW1iZXIgPSBOdW1iZXIoY3VycmVudFJvdyk7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkU2hpcExlbmd0aDsgaSsrKSB7IFxuICAgICAgICAgICAgbGV0IHVwZGF0ZWRYQ29vcmRpbmF0ZSBcbiAgICAgICAgICAgIHVwZGF0ZWRYQ29vcmRpbmF0ZSA9IGNvbnZlcnRSb3dUb051bWJlciArIGk7XG4gICAgICAgICAgICB1cGRhdGVkQ29vcmRpbmF0ZXNYLnB1c2goW3VwZGF0ZWRYQ29vcmRpbmF0ZSwgY29udmVydENvbHVtblRvTnVtYmVyXSk7XG4gICAgICAgIH0gXG5cbiAgICAgICAgdXNlQ29vcmRzKHVwZGF0ZWRDb29yZGluYXRlc1gpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRTaGlwRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHsgXG4gICAgICAgIGxldCB1cGRhdGVkQ29vcmRpbmF0ZXNZID0gW107XG4gICAgICAgIGxldCBjdXJyZW50Um93ID0gc2VsZWN0ZWRDZWxsLmRhdGFzZXQucm93O1xuICAgICAgICBsZXQgY3VycmVudENvbHVtbiA9IHNlbGVjdGVkQ2VsbC5kYXRhc2V0LmNvbHVtbjtcbiAgICAgICAgbGV0IGNvbnZlcnRDb2x1bW5Ub051bWJlciA9IE51bWJlcihjdXJyZW50Q29sdW1uKTtcbiAgICAgICAgbGV0IGNvbnZlcnRSb3dUb051bWJlciA9IE51bWJlcihjdXJyZW50Um93KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkU2hpcExlbmd0aDsgaSsrKSB7IFxuICAgICAgICAgICAgbGV0IHVwZGF0ZWRZQ29vcmRpbmF0ZSBcbiAgICAgICAgICAgIHVwZGF0ZWRZQ29vcmRpbmF0ZSA9IGNvbnZlcnRDb2x1bW5Ub051bWJlciArIGk7XG4gICAgICAgICAgICB1cGRhdGVkQ29vcmRpbmF0ZXNZLnB1c2goW2NvbnZlcnRSb3dUb051bWJlciwgdXBkYXRlZFlDb29yZGluYXRlXSk7XG4gICAgICAgIH0gXG4gICAgICAgIHVzZUNvb3Jkcyh1cGRhdGVkQ29vcmRpbmF0ZXNZKTtcbiAgICB9XG59IFxuXG5cbi8vIGhvdmVyIGNsYXNzLCBmaWxsaW5nIGluIHRoZSBzZWxlY3RlZCBjZWxscyBcbmZ1bmN0aW9uIHVzZUNvb3Jkcyhjb29yZHMpIHtcbiAgICBsZXQgcGFzc2VkQ29vcmRpbmF0ZXMgPSBjb29yZHM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXNzZWRDb29yZGluYXRlcy5sZW5ndGg7IGkrKykgeyBcbiAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSBwYXNzZWRDb29yZGluYXRlc1tpXTtcbiAgICAgICAgbGV0IHJvdyA9IGNvb3JkaW5hdGVbMF07XG4gICAgICAgIGxldCBjb2x1bW4gPSBjb29yZGluYXRlWzFdO1xuICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbHVtbj1cIiR7Y29sdW1ufVwiXWApO1xuICAgICAgIC8vICBjb25zb2xlLmxvZyhjZWxsKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKCdiYXR0bGVzaGlwLWhvdmVyLWNsYXNzJyk7ICAgICBcbiAgICB9IFxufSBcblxuXG5mdW5jdGlvbiBhbGxQbGF5ZXJTaGlwc1BsYWNlZCgpIHsgIFxuXG4gICAgY29uc29sZS5sb2coJ0xPR0dJTkcgVEhFIFNISVAgQ09VTlRFUiwgV0lUSElOIEFMTCBQTEFZRVIgU0hJUFMgUExBQ0VEJywgc2hpcENvdW50ZXIpO1xuIFxuICAgIGlmIChzaGlwQ291bnRlciA9PT0gNSkgeyBcbiAgICAgICAgbGV0IG1haW5UaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXRpdGxlLWNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgc3RhcnRHYW1lQnRuVmlzaWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lLWJ0bicpO1xuICAgICAgICBzdGFydEdhbWVCdG5WaXNpYmxlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfVxuXG59XG5cblxuLy8gcGxhY2VzIHNoaXAgb24gdGhlIGdhbWVib2FyZCwgY2FsbHMgYW5vdGhlciBmdW5jdGlvbiB0aGF0IHVzZXMgY29vcmRpYW50ZXMsIHBvc2l0aW9uIGFuZCBsZW5ndGggdG8gZmlsbCBpbiB0aGUgYXBwcm9wcmlhdGUgY2VsbHMgXG5mdW5jdGlvbiBwbGFjZUN1cnJlbnRTaGlwKHgsIHksIGN1cnJlbnRTaGlwLCBjdXJyZW50U2hpcExlbmd0aCwgY3VycmVudFNoaXBEaXJlY3Rpb24pIHsgXG4gICAgbGV0IHNlbGVjdGVkWENvb3JkaW5hdGUgPSB4O1xuICAgIGxldCBzZWxlY3RlZFlDb29yZGluYXRlID0geTsgXG4gICAgXG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRYQ29vcmRpbmF0ZSk7XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRZQ29vcmRpbmF0ZSk7XG5cbiAgICBsZXQgc2VsZWN0ZWRTaGlwID0gY3VycmVudFNoaXA7XG4gICAgbGV0IHNlbGVjdGVkU2hpcExlbmd0aCA9IGN1cnJlbnRTaGlwTGVuZ3RoO1xuICAgIGxldCBzZWxlY3RlZFNoaXBEaXJlY3Rpb24gPSBjdXJyZW50U2hpcERpcmVjdGlvbjtcblxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkU2hpcCk7XG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRTaGlwTGVuZ3RoKTtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFNoaXBEaXJlY3Rpb24pOyBcblxuICAgIHBsYXllckdhbWVib2FyZC5nYW1lYm9hcmQucGxhY2VTaGlwKHNlbGVjdGVkU2hpcCwgc2VsZWN0ZWRYQ29vcmRpbmF0ZSwgc2VsZWN0ZWRZQ29vcmRpbmF0ZSwgc2VsZWN0ZWRTaGlwTGVuZ3RoLCBzZWxlY3RlZFNoaXBEaXJlY3Rpb24pO1xuICAgIC8vIGNvbnNvbGUubG9nKCdoZXJlIGlzIHRoZSB1cGRhdGVkIHBsYXllciBnYW1lYm9hcmQnLCBwbGF5ZXJHYW1lYm9hcmQuZ2FtZWJvYXJkLmdldEdhbWVib2FyZCgpKTtcbiAgICBnZXRTaGlwQ29vcmRpbmF0ZXMoc2VsZWN0ZWRYQ29vcmRpbmF0ZSwgc2VsZWN0ZWRZQ29vcmRpbmF0ZSwgc2VsZWN0ZWRTaGlwTGVuZ3RoLCBzZWxlY3RlZFNoaXBEaXJlY3Rpb24pO1xuICAgIGxldCBjdXJyZW50R2FtZWJvYXJkID0gcGxheWVyR2FtZWJvYXJkLmdhbWVib2FyZC5nZXRHYW1lYm9hcmQoKTtcbiAgICBzaGlwQ291bnRlcisrXG4gICAgYWxsUGxheWVyU2hpcHNQbGFjZWQoKTtcbn0gXG4vLyBkZXRlcm1pbmVzIGhvdyBtYW55IGNlbGxzIHdpbGwgYmUgZmlsbGVkLCB3aGVuIHNoaXAgaXMgcGxhY2VkIFxuZnVuY3Rpb24gZ2V0U2hpcENvb3JkaW5hdGVzKHgsIHksIGxlbmd0aCwgcG9zaXRpb24pIHsgXG4gICAgbGV0IGNvb3JkaWFudGVYID0geDtcbiAgICBsZXQgY29vcmRpbmF0ZVkgPSB5OyBcbiAgICBsZXQgY3VycmVudFNoaXBMZW5ndGggPSBsZW5ndGg7IFxuICAgIGxldCBjdXJyZW50U2hpcFBvc2l0aW9uID0gcG9zaXRpb247XG5cbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgY29vcmRpYW50ZVgpO1xuICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVZKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50U2hpcExlbmd0aCk7XG4gICAgY29uc29sZS5sb2coY3VycmVudFNoaXBQb3NpdGlvbik7IFxuXG4gICAgaWYgKGN1cnJlbnRTaGlwUG9zaXRpb24gPT09ICd2ZXJ0aWNhbCcpIHsgXG4gICAgICAgIGxldCB1cGRhdGVkQ29vcmRpbmF0ZXNYID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXBMZW5ndGg7IGkrKykgeyBcbiAgICAgICAgICAgIGxldCB1cGRhdGVkWENvb3JkaW5hdGVcbiAgICAgICAgICAgIHVwZGF0ZWRYQ29vcmRpbmF0ZSA9IGNvb3JkaWFudGVYICsgaTtcbiAgICAgICAgICAgIHVwZGF0ZWRDb29yZGluYXRlc1gucHVzaChbdXBkYXRlZFhDb29yZGluYXRlLCBjb29yZGluYXRlWV0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlZENvb3JkaW5hdGVzWCk7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheVNoaXBTdHlsZXModXBkYXRlZENvb3JkaW5hdGVzWCk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50U2hpcFBvc2l0aW9uID09PSAnaG9yaXpvbnRhbCcpIHsgXG4gICAgIGxldCB1cGRhdGVkQ29vcmRpbmF0ZXNZID0gW107ICAgXG4gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXBMZW5ndGg7IGkrKykgeyBcbiAgICAgICAgbGV0IHVwZGF0ZWRZQ29vcmRpbmF0ZVxuICAgICAgICB1cGRhdGVkWUNvb3JkaW5hdGUgPSBjb29yZGluYXRlWSArIGk7XG4gICAgICAgIHVwZGF0ZWRDb29yZGluYXRlc1kucHVzaChbY29vcmRpYW50ZVgsIHVwZGF0ZWRZQ29vcmRpbmF0ZV0pO1xuICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVkQ29vcmRpbmF0ZXNZKTtcbiAgICB9XG4gICAgZGlzcGxheVNoaXBTdHlsZXModXBkYXRlZENvb3JkaW5hdGVzWSk7XG4gICAgfSBcbiAgICAvLyBkaXNwbGF5cyB0aG9zZSBzdHlsZXMgd2hlbiBzaGlwIGlzIHBsYWNlZFxuICAgIGZ1bmN0aW9uIGRpc3BsYXlTaGlwU3R5bGVzKGNvb3JkcykgeyBcbiAgICAgICAgbGV0IHBhc3NlZENvb3JkaW5hdGVzID0gY29vcmRzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhc3NlZENvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7IFxuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSBwYXNzZWRDb29yZGluYXRlc1tpXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBjb29yZGluYXRlWzBdO1xuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IGNvb3JkaW5hdGVbMV07XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbHVtbj1cIiR7Y29sdW1ufVwiXWApXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoJ2JhdHRsZXNoaXAtaG92ZXItY2xhc3MnKTsgXG4gICAgICAgIH1cbiAgICB9ICAgXG59IFxuXG4vLyBnYW1lYm9hcmQgZ3JpZCwgZm9yIHBsYXllcnMgYm9hcmRcbmZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgeyBcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHsgXG4gICAgbGV0IGdhbWVib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCkuZ2V0R2FtZWJvYXJkKCk7XG4gICAgLy8gZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcbiAgICBnYW1lYm9hcmRDZWxsLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgYmxhY2snO1xuICAgIGdhbWVib2FyZENlbGwuc3R5bGUuaGVpZ2h0ID0gJzM1cHgnO1xuICAgIGdhbWVib2FyZENlbGwuc3R5bGUud2lkdGggPSAnMzVweCc7XG4gICAgZ2FtZWJvYXJkQ2VsbC5kYXRhc2V0LnJvdyA9IGk7XG4gICAgZ2FtZWJvYXJkQ2VsbC5kYXRhc2V0LmNvbHVtbiA9IGo7XG4gICAgZ2FtZWJvYXJkQ2VsbC5pZCA9ICdwbGF5ZXItZ2FtZWJvYXJkQ2VsbCc7XG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmQoZ2FtZWJvYXJkQ2VsbCk7XG4gICAgZ2FtZWJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IFxuICAgICAgICBsZXQgY3VycmVudFBsYXllckJvYXJkID0gcGxheWVyR2FtZWJvYXJkLmdhbWVib2FyZC5nZXRHYW1lYm9hcmQoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnSU4gVEhFIEVWRU5UIExJU1RFTkVSLCBUSElTIElTIENVUlJFTlQgU0hJUCcsIGN1cnJlbnRTaGlwKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0lOIFRIRSBFVkVOVCBMSVNURU5FUiwgVEhJUyBJUyBDVVJSRU5UIFNISVAgTEVOR1RIJywgY3VycmVudFNoaXBMZW5ndGgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnSU4gVEhFIEVWRU5UIExJU1RFTkVSLCBUSElTIElTIENVUlJFTlQgU0hJUCBESVJFQ1RJT04nLCBjdXJyZW50U2hpcERpcmVjdGlvbik7XG4gICAgICAgIGxldCB4Q29vcmRpbmF0ZSBcbiAgICAgICAgbGV0IHlDb29yZGluYXRlXG4gICAgICAgIHhDb29yZGluYXRlID0gZS50YXJnZXQuZGF0YXNldC5yb3c7IFxuICAgICAgICB5Q29vcmRpbmF0ZSA9ICBlLnRhcmdldC5kYXRhc2V0LmNvbHVtbjtcbiAgICAgICAgbGV0IG51bWJlcmVkWENvb3JkaW5hdGUgPSBOdW1iZXIoeENvb3JkaW5hdGUpO1xuICAgICAgICBsZXQgbnVtYmVyZWRZQ29vcmRpbmF0ZSA9IE51bWJlcih5Q29vcmRpbmF0ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBudW1iZXJlZFhDb29yZGluYXRlKTtcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIG51bWJlcmVkWUNvb3JkaW5hdGUpOyBcbiAgICAgICAgcGxhY2VDdXJyZW50U2hpcChudW1iZXJlZFhDb29yZGluYXRlLCBudW1iZXJlZFlDb29yZGluYXRlLCBjdXJyZW50U2hpcCwgY3VycmVudFNoaXBMZW5ndGgsIGN1cnJlbnRTaGlwRGlyZWN0aW9uKTtcblxuICAgIH0pIFxuXG4gICAgZ2FtZWJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGUpID0+IHsgXG4gICAgICAgIGN1cnJlbnRDZWxsID0gZS50YXJnZXQ7IFxuICAgICAgICBmaW5kQ29vcmRzKGN1cnJlbnRDZWxsLCBjdXJyZW50U2hpcERpcmVjdGlvbiwgY3VycmVudFNoaXBMZW5ndGgpO1xuICAgIH0pIFxuXG5cbiAgICBnYW1lYm9hcmRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICBmaW5kQ29vcmRzKGN1cnJlbnRDZWxsLCBjdXJyZW50U2hpcERpcmVjdGlvbiwgY3VycmVudFNoaXBMZW5ndGgpO1xuICAgIH0pIFxuICAgIH0gXG59ICBcblxuXG5cbmxldCBzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtZ2FtZS1idG4nKTtcbmNvbnNvbGUubG9nKCdsb2dnaW5nIHN0YXJ0IGdhbWUgYnRuJywgc3RhcnRHYW1lQnRuKTsgIFxuIFxuLy8gY3JlYXRlcyB0aGUgY29tcHV0ZXJzIGdhbWVib2FyZCBncmlkXG5mdW5jdGlvbiBjcmVhdGVDb21wdXRlckJvYXJkRE9NKCkgeyBcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgeyBcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7IFxuICAgICAgICB3cmFwcGluZ0NvbnRhaW5lci5zdHlsZS5nYXAgPSAnMTVlbSc7XG4gICAgICAgIGxldCBnYW1lYm9hcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKS5nZXRHYW1lYm9hcmQoKTtcblxuICAgICAgICBnYW1lYm9hcmRDZWxsLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgYmxhY2snO1xuICAgICAgICBnYW1lYm9hcmRDZWxsLnN0eWxlLmhlaWdodCA9ICczNXB4JztcbiAgICAgICAgZ2FtZWJvYXJkQ2VsbC5zdHlsZS53aWR0aCA9ICczNXB4JztcbiAgICAgICAgZ2FtZWJvYXJkQ2VsbC5kYXRhc2V0LmNvbXByb3cgPSBpO1xuICAgICAgICBnYW1lYm9hcmRDZWxsLmRhdGFzZXQuY29tcGNvbHVtbiA9IGo7XG4gICAgICAgIC8vIGdhbWVib2FyZENlbGwuaWQgPSAnY29tcHV0ZXItZ2FtZWJvYXJkQ2VsbCc7XG4gICAgICAgIGNvbXB1dGVyR3JpZENvbnRhaW5lci5hcHBlbmQoZ2FtZWJvYXJkQ2VsbCk7XG4gICAgICAgIGdhbWVib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBcbiAgICAgICAgICAgIGxldCB4Q29vcmRpbmF0ZVxuICAgICAgICAgICAgbGV0IHlDb29yZGluYXRlXG4gICAgICAgICAgICB4Q29vcmRpbmF0ZSA9IGUudGFyZ2V0LmRhdGFzZXQuY29tcHJvdztcbiAgICAgICAgICAgIHlDb29yZGluYXRlID0gIGUudGFyZ2V0LmRhdGFzZXQuY29tcGNvbHVtbjtcbiAgICAgICAgICAgIGxldCBudW1iZXJlZFhDb29yZGluYXRlID0gTnVtYmVyKHhDb29yZGluYXRlKTtcbiAgICAgICAgICAgIGxldCBudW1iZXJlZFlDb29yZGluYXRlID0gTnVtYmVyKHlDb29yZGluYXRlKTtcblxuICAgICAgICAgICAgIHBsYXlHYW1lKG51bWJlcmVkWENvb3JkaW5hdGUsIG51bWJlcmVkWUNvb3JkaW5hdGUpO1xuXG4gICAgICAgICAgICAvLyAgbGV0IGdldFBsYXllckdhbWVib2FyZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWdhbWVib2FyZENlbGwnKTtcbiAgICAgICAgICAgIC8vICAvLyBjb25zb2xlLmxvZyhnZXRQbGF5ZXJHYW1lYm9hcmRDZWxsKTtcbiAgICAgICAgICAgIC8vICBsZXQgZ2V0QWxsUGxheWVyR2FtZWJvYXJkQ2VsbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXItZ2FtZWJvYXJkQ2VsbCcpKTtcbiAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhnZXRBbGxQbGF5ZXJHYW1lYm9hcmRDZWxscyk7XG4gICAgICAgICAgICAvLyAgZ2V0QWxsUGxheWVyR2FtZWJvYXJkQ2VsbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGdldEFsbFBsYXllckdhbWVib2FyZENlbGxzKTtcbiAgICAgICAgICAgICAvLyBnZXRQbGF5ZXJHYW1lYm9hcmRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2JhdHRsZXNoaXAtaG92ZXItY2xhc3MnKTtcblxuICAgICAgICB9KVxuXG4gICAgICAgIGdhbWVib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2JhdHRsZXNoaXAtaG92ZXItY2xhc3MnKTtcbiAgICB9KVxuXG4gICAgICAgIGdhbWVib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdiYXR0bGVzaGlwLWhvdmVyLWNsYXNzJyk7XG4gICAgICAgIH0pXG5cbiAgICB9ICAgICAgIFxuICAgIH0gXG59IFxuXG4vLyBnZW5lcmF0ZXMgc3RhcnQgZ2FtZSBidG4sIGFuZCB3aGVuIGNsaWNrZWQgcmVtb3ZlcyBidG5zLCBhbmQgc2hpcCBvYmplY3RzIGluIHRoZSBET01cbnN0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IFxuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkIHRoZSBzdGFydCBnYW1lIGJ0bicpO1xuICAgIGxldCBjb250YWluZXJGb3JTaGlwT2JqID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1mb3Itc2hpcC1vYmplY3RzJyk7XG4gICAgY29uc29sZS5sb2coY29udGFpbmVyRm9yU2hpcE9iaik7XG4gICAgY29udGFpbmVyRm9yU2hpcE9iai5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGxldCBjb250YWluZXJGb3JDaGFuZ2luZ1NoaXBEaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmdlLXNoaXAtZGlyZWN0aW9uLWJ0bi1jb250YWluZXInKTtcbiAgICBjb250YWluZXJGb3JDaGFuZ2luZ1NoaXBEaXJlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsZXQgY29udGFpbmVyRm9yU3RhcnRHYW1lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWdhbWUtYnRuLWNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lckZvclN0YXJ0R2FtZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNyZWF0ZUNvbXB1dGVyQm9hcmRET00oKTtcbiAgICAvLyBwbGF5R2FtZSgpO1xufSkgXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmVJZkhpdE9yTWlzcyhzZWxlY3RlZFVzZXIsIHgsIHkpIHsgXG4gICAgY29uc29sZS5sb2coJ0RFVEVSTUlORSBJRiBDT09SRFMgQVJFIEEgSElUIE9SIE1JU1MsIENCIEZVTkNUSU9OIEZST00gQVRUQUNLIEZVTkNUSU9OIElOIEdBTUUgTU9EVUxFJywgeCwgeSwgc2VsZWN0ZWRVc2VyKTtcbiAgICBsZXQgY29vcmRpbmF0ZVggPSB4O1xuICAgIGxldCBjb29yZGluYXRlWSA9IHk7XG4gICAgbGV0IGNvb3JkaW5hdGVDaGVjayA9IFtjb29yZGluYXRlWCwgY29vcmRpbmF0ZVldO1xuICAgIGNvbnNvbGUubG9nKCdDT09SRElOQVRFIENIRUNLIFZBUklBQkxFLCBXSUxMIENIRUNLIElGIElOQ0xVREVEIElOIEhJVCBTSE9UUyBBUlJBWScsIGNvb3JkaW5hdGVDaGVjayk7XG4gICAgbGV0IHNlbGVjdGVkQ2VsbE9uR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29tcHJvdz1cIiR7Y29vcmRpbmF0ZVh9XCJdW2RhdGEtY29tcGNvbHVtbj1cIiR7Y29vcmRpbmF0ZVl9XCJdYCk7XG4gICAgY29uc29sZS5sb2coJ1NFTEVDVEVEIENFTEwsIFRIQVQgQ09PUkVTUE9ORFMgVE8gQ09NUFMgR0FNRUJPQVJEJywgc2VsZWN0ZWRDZWxsT25HYW1lYm9hcmQpO1xuICAgIGxldCBoaXRTaG90c0FycmF5ID0gc2VsZWN0ZWRVc2VyLmdhbWVib2FyZC5oaXRTaG90czsgXG4gICAgbGV0IG1pc3NlZFNob3RzQXJyYXkgPSBzZWxlY3RlZFVzZXIuZ2FtZWJvYXJkLm1pc3NlZFNob3RzO1xuICAgIGNvbnNvbGUubG9nKG1pc3NlZFNob3RzQXJyYXkpO1xuICAgIGNvbnNvbGUubG9nKGhpdFNob3RzQXJyYXkpOyBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpdFNob3RzQXJyYXkubGVuZ3RoOyBpKyspIHsgXG4gICAgICAgIGxldCBzZWxlY3RlZENvb3JkaW5hdGUgPSBoaXRTaG90c0FycmF5W2ldO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzZWxlY3RlZENvb3JkaW5hdGUpLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVDaGVjaykpKTtcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkQ29vcmRpbmF0ZSkuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZUNoZWNrKSkpIHsgXG4gICAgICAgICAgICBzZWxlY3RlZENlbGxPbkdhbWVib2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgfSBcbiAgICB9IFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWlzc2VkU2hvdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcbiAgICAgICAgbGV0IHNlbGVjdGVkQ29vcmRpbmF0ZU1pc3NlZFNob3QgPSBtaXNzZWRTaG90c0FycmF5W2ldO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZENvb3JkaW5hdGVNaXNzZWRTaG90KTtcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkQ29vcmRpbmF0ZU1pc3NlZFNob3QpLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVDaGVjaykpKSB7IFxuICAgICAgICAgICAgc2VsZWN0ZWRDZWxsT25HYW1lYm9hcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuICAgICAgICB9IFxuICAgIH1cbn0gXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmVJZkhpdE9yTWlzc0NvbXB1dGVyKHNlbGVjdGVkVXNlciwgeCwgeSkgeyBcbiAgICBsZXQgY29vcmRpbmF0ZVggPSB4O1xuICAgIGxldCBjb29yZGluYXRlWSA9IHk7XG4gICAgbGV0IGNvb3JkaW5hdGVDaGVjayA9IFtjb29yZGluYXRlWCwgY29vcmRpbmF0ZVldO1xuICAgIC8vIGNvbnNvbGUubG9nKCdDT09SRElOQVRFIENIRUNLIFZBUklBQkxFLCBXSUxMIENIRUNLIElGIElOQ0xVREVEIElOIEhJVCBTSE9UUyBBUlJBWScsIGNvb3JkaW5hdGVDaGVjayk7XG4gICAgbGV0IHNlbGVjdGVkQ2VsbE9uR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHtjb29yZGluYXRlWH1cIl1bZGF0YS1jb2x1bW49XCIke2Nvb3JkaW5hdGVZfVwiXWApO1xuICAgIC8vIGNvbnNvbGUubG9nKCdTRUxFQ1RFRCBDRUxMLCBUSEFUIENPT1JFU1BPTkRTIFRPIENPTVBTIEdBTUVCT0FSRCcsIHNlbGVjdGVkQ2VsbE9uR2FtZWJvYXJkKTtcbiAgICBsZXQgaGl0U2hvdHNBcnJheSA9IHNlbGVjdGVkVXNlci5nYW1lYm9hcmQuaGl0U2hvdHM7IFxuICAgIGxldCBtaXNzZWRTaG90c0FycmF5ID0gc2VsZWN0ZWRVc2VyLmdhbWVib2FyZC5taXNzZWRTaG90cztcbiAgICAvLyBjb25zb2xlLmxvZyhtaXNzZWRTaG90c0FycmF5KTtcbiAgICAvLyBjb25zb2xlLmxvZyhoaXRTaG90c0FycmF5KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpdFNob3RzQXJyYXkubGVuZ3RoOyBpKyspIHsgXG4gICAgICAgIGxldCBzZWxlY3RlZENvb3JkaW5hdGUgPSBoaXRTaG90c0FycmF5W2ldO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZENvb3JkaW5hdGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzZWxlY3RlZENvb3JkaW5hdGUpLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVDaGVjaykpKTtcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkQ29vcmRpbmF0ZSkuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZUNoZWNrKSkpIHsgXG4gICAgICAgICAgICBzZWxlY3RlZENlbGxPbkdhbWVib2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgfSBcbiAgICB9IFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWlzc2VkU2hvdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcbiAgICAgICAgbGV0IHNlbGVjdGVkQ29vcmRpbmF0ZU1pc3NlZFNob3QgPSBtaXNzZWRTaG90c0FycmF5W2ldO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZENvb3JkaW5hdGVNaXNzZWRTaG90KTtcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkQ29vcmRpbmF0ZU1pc3NlZFNob3QpLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVDaGVjaykpKSB7IFxuICAgICAgICAgICAgc2VsZWN0ZWRDZWxsT25HYW1lYm9hcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuICAgICAgICB9IFxuICAgIH1cbn1cblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQmF0dGxlU2hpcERPTU9iaigpIHsgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHsgXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaWQgPSAnc2hpcC1vYmotc3R5bGVzJztcbiAgICAgICAgY29uc3QgYmF0dGxlc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXItZm9yLWJhdHRsZXNoaXAnKTtcbiAgICAgICAgYmF0dGxlc2hpcENvbnRhaW5lci5hcHBlbmQoZGl2KTtcbiAgICAgICAgYmF0dGxlc2hpcENvbnRhaW5lci5kYXRhc2V0LnNoaXBJRCA9IEpTT04uc3RyaW5naWZ5KGJhdHRsZVNoaXApO1xuICAgICAgICBiYXR0bGVzaGlwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgXG4gICAgICAgICAgICBjdXJyZW50U2hpcCA9IGJhdHRsZVNoaXA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhlIGN1cnJlbnQgc2hpcCBjbGlja2VkIG9uIGlzLi4nLCBjdXJyZW50U2hpcClcbiAgICAgICAgICAgIGN1cnJlbnRTaGlwTGVuZ3RoID0gYmF0dGxlU2hpcC5zaGlwTGVuZ3RoO1xuICAgICAgICAgICAgY3VycmVudFNoaXBEaXJlY3Rpb24gPSBiYXR0bGVTaGlwLnNoaXBQb3NpdGlvbjtcbiAgICAgICAgfSlcbiAgICB9IFxufSBcblxuY3JlYXRlQmF0dGxlU2hpcERPTU9iaigpOyBcblxuZnVuY3Rpb24gY3JlYXRlRGVzdHJveWVyRE9NT2JqKCkgeyBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykgeyBcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5pZCA9ICdzaGlwLW9iai1zdHlsZXMnO1xuICAgICAgICBjb25zdCBkZXN0cm95ZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLWZvci1kZXN0cm95ZXInKTtcbiAgICAgICAgZGVzdHJveWVyQ29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAgICAgICBkZXN0cm95ZXJDb250YWluZXIuZGF0YXNldC5zaGlwSUQgPSBKU09OLnN0cmluZ2lmeShkZXN0cm95ZXIpO1xuICAgICAgICBkZXN0cm95ZXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBcbiAgICAgICAgICAgIGN1cnJlbnRTaGlwID0gZGVzdHJveWVyO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZSBjdXJyZW50IHNoaXAgY2xpY2tlZCBvbiBpcy4uJywgY3VycmVudFNoaXApXG4gICAgICAgICAgICBjdXJyZW50U2hpcExlbmd0aCA9IGRlc3Ryb3llci5zaGlwTGVuZ3RoO1xuICAgICAgICAgICAgY3VycmVudFNoaXBEaXJlY3Rpb24gPSBkZXN0cm95ZXIuc2hpcFBvc2l0aW9uO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuY3JlYXRlRGVzdHJveWVyRE9NT2JqKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhdHJvbEJvYXRET01PYmooKSB7IFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7IFxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlkID0gJ3NoaXAtb2JqLXN0eWxlcyc7XG4gICAgICAgIGNvbnN0IHBhdHJvbEJvYXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLWZvci1wYXRyb2wtYm9hdCcpO1xuICAgICAgICBwYXRyb2xCb2F0Q29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAgICAgICBwYXRyb2xCb2F0Q29udGFpbmVyLmRhdGFzZXQuc2hpcElEID0gSlNPTi5zdHJpbmdpZnkocGF0cm9sQm9hdCk7XG4gICAgICAgIHBhdHJvbEJvYXRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBcbiAgICAgICAgICAgIGN1cnJlbnRTaGlwID0gcGF0cm9sQm9hdDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgY3VycmVudCBzaGlwIGNsaWNrZWQgb24gaXMuLicsIGN1cnJlbnRTaGlwKVxuICAgICAgICAgICAgY3VycmVudFNoaXBMZW5ndGggPSBwYXRyb2xCb2F0LnNoaXBMZW5ndGg7XG4gICAgICAgICAgICBjdXJyZW50U2hpcERpcmVjdGlvbiA9IHBhdHJvbEJvYXQuc2hpcFBvc2l0aW9uO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG5jcmVhdGVQYXRyb2xCb2F0RE9NT2JqKCk7IFxuXG5mdW5jdGlvbiBjcmVhdGVDYXJyaWVyQm9hdERPTU9iaigpIHsgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHsgXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaWQgPSAnc2hpcC1vYmotc3R5bGVzJztcbiAgICAgICAgY29uc3QgY2FycmllckJvYXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLWZvci1jYXJyaWVyLWJvYXQnKTtcbiAgICAgICAgY2FycmllckJvYXRDb250YWluZXIuYXBwZW5kKGRpdik7XG4gICAgICAgIGNhcnJpZXJCb2F0Q29udGFpbmVyLmRhdGFzZXQuc2hpcElEID0gSlNPTi5zdHJpbmdpZnkoY2FycmllckJvYXQpO1xuICAgICAgICBjYXJyaWVyQm9hdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IFxuICAgICAgICAgICAgY3VycmVudFNoaXAgPSBjYXJyaWVyQm9hdDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgY3VycmVudCBzaGlwIGNsaWNrZWQgb24gaXMuLicsIGN1cnJlbnRTaGlwKVxuICAgICAgICAgICAgY3VycmVudFNoaXBMZW5ndGggPSBjYXJyaWVyQm9hdC5zaGlwTGVuZ3RoO1xuICAgICAgICAgICAgY3VycmVudFNoaXBEaXJlY3Rpb24gPSBjYXJyaWVyQm9hdC5zaGlwUG9zaXRpb247XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5jcmVhdGVDYXJyaWVyQm9hdERPTU9iaigpOyBcblxuZnVuY3Rpb24gY3JlYXRlU3VibWFyaW5lRE9NT2JqKCkgeyBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykgeyBcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5pZCA9ICdzaGlwLW9iai1zdHlsZXMnO1xuICAgICAgICBjb25zdCBzdWJtYXJpbmVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLWZvci1zdWJtYXJpbmUnKTtcbiAgICAgICAgc3VibWFyaW5lQ29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAgICAgICBzdWJtYXJpbmVDb250YWluZXIuZGF0YXNldC5zaGlwSUQgPSBKU09OLnN0cmluZ2lmeShzdWJtYXJpbmUpO1xuICAgICAgICBzdWJtYXJpbmVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBcbiAgICAgICAgICAgIGN1cnJlbnRTaGlwID0gc3VibWFyaW5lO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZSBjdXJyZW50IHNoaXAgY2xpY2tlZCBvbiBpcy4uJywgY3VycmVudFNoaXApXG4gICAgICAgICAgICBjdXJyZW50U2hpcExlbmd0aCA9IHN1Ym1hcmluZS5zaGlwTGVuZ3RoO1xuICAgICAgICAgICAgY3VycmVudFNoaXBEaXJlY3Rpb24gPSBzdWJtYXJpbmUuc2hpcFBvc2l0aW9uO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuY3JlYXRlU3VibWFyaW5lRE9NT2JqKCk7XG5cbi8vIGNvbnNvbGUubG9nKHBsYXllckdhbWVib2FyZC5nYW1lYm9hcmQuZ2V0R2FtZWJvYXJkKCkpOyBcblxuXG5cbi8vIGNvbXB1dGVyIHBsYWNlbWVudCBhbmQgcmFuZG9tIGNvb3JkaW5hdGVzIFxuIC8vIGFub3RoZXIgc2V0IG9mIHJhbmRvbSBjb29yZGluYXRlcyBmb3IgdGhlIGVsc2UsXG4gICAgICAgIC8vIGl0IHdpbGwgcGxhY2Ugc29tZSBvZiB0aGUgc2hpcHMsIGJ1dCBldmVudHVhbGx5IGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IgdGhhdCBzaGlwIGdvZXMgb3V0IG9mIGJvdW5kcyBvciBvdmVybGFwcyB3aXRoIGFub3RoZXIgc2hpcCwgXG4gICAgICAgIC8vIHBsYWNlIHNoaXAgYWxyZWFkeSBoYXMgYSBjaGVja0ZvclNoaXAgXG4gICAgICAgIC8vIGluc3RlYWQgb2YgdGhyb3dpbmcgZXJyb3IsIHNob3VsZCBiZSByZXR1cm5pbmcgYSBib29sZWFuIHRvIG1ha2Ugc3VyZSBwbGFjZW1lbnQgaXMgbGVnYWwsIHRoaXMgd2lsbCBhZmZlY3QgYSBmZXcgb2YgbXkgdW5pdCB0ZXN0cy4gXG4gICAgICAgIC8vIGNhcHR1cmUgdmFsdWUgXG4gICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbXB1dGVyR2FtZWJvYXJkLmdhbWVib2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJzU2hpcCwgcmFuZG9tQ29vcmRpbmF0ZTEsIHJhbmRvbUNvb3JkaW5hdGUyLCBjb21wdXRlcnNTaGlwLnNoaXBMZW5ndGgsIGNvbXB1dGVyc1NoaXAuc2hpcFBvc2l0aW9uKTtcblxuICAgICAgICAvLyBpZiBmYWxzZSwgaXQgbmVlZHMgdG8gdHJ5IGFnYWluLCBubyBzaGlwcyBjYW4gYmUgcGxhY2VkIFxuICAgICAgICAvLyB3ZSBmb3VuZCBhIGZhbHNlIHNoaXAsIGFsbCB0aGUgdHJ1ZSBvbmVzIHBsYWNlIG9rLCBpZiBhIGNvb3JkaW5hdGUgaXMgZmFsc2UsIFxuICAgICAgICAvLyBob3cgY2FuIEkgbWFrZSB0aGUgc2hpcCB0cnkgdG8gcGxhY2UgaXQgYWdhaW4/IHNvbWV0aGluZyB3aXRoaW4gdGhlIGNvbmRpdGlvbmFsXG4gICAgICAgIC8vIHJpZ2h0IG5vdyBpdCB3aWxsIG9ubHkgcGxhY2UgdHJ1ZSBzaGlwcywgb25jZSBhIHNoaXAgaXMgZmFsc2UsIGhvdyBjYW4gd2UgZ2V0IGl0IHRvIGJlY29tZSB0cnVlPyBcbiAgICAgICAgLy8gaG93IHRvIG1ha2UgYW4gaW52YWxpZCBzaGlwIHBsYWNlbWVudCB2YWxpZCBhZ2FpbiwgaXQgd2lsbCBwbGFjZSBzaGlwcyB0aGF0IGFyZSBsZWdhbCB0byBwbGFjZSAodHJ1ZSlcbiAgICAgICAgLy8gYnV0IHRoZSBvbmVzIHRoYXQgcmV0dXJuIGZhbHNlLCB3aGF0IGNhbiB3ZSBkbyBhYm91dCB0aG9zZT8gY2FuIHdlIHRyeSBhZ2FpbiB3aXRoIGRpZmZlcmVudCBjb29yZGluYXRlc1xuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIGZhbHNlIGNvb3JkaW5hdGVzIGFuZCBtYWtlIHN1cmUgbm90IHRvIHVzZSB0aGVtIGFnYWluPyBcbiAgICAgICAgLy8gdXNlIGFub3RoZXIgaWYgaW5zaWRlIHRoZSBlbHNlIGFuZCByZXR1cm4gYW5kIGV4aXQgaWYgZmFpbGVkIGNvb3JkaW5hdGVzIGFyZSB0cnlpbmcgdG8gYmUgdXNlZCBhZ2Fpbi4gXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBub3cgd2UgbmVlZCB0byBwbGFjZSB0aGUgYmF0dGxlc2hpcC4gXG4vLyBzaG91bGQgd2UgYWRkIGFuIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBnYW1lYm9hcmQgY2VsbCwgdGhhdCBvbmNlIGNsaWNrZWQgZmluZHMgdGhlIHNlbGVjdGVkIHNoaXAsIGFuZCBhcHBsaWVzIHRvIGJhdHRsZXNoaXAvc2hpcCBvYmogc3R5bGVzIHRvIGFsbCBvZiB0aGVtLCBcbi8vIHBsYWNpbmcgc2hpcCBmdW5jdGlvbiwgdGFrZXMgZnJvbSB0aGUgdmFyaWFibGVzIGN1cnJlbnRTaGlwLCBjdXJyZW50U2hpcExlbmd0aCBhbmQgcG9zaXRpb24gXG4vLyBzaG91bGQgIGl0IGZvbGxvdyB0aGUgc2FtZSBwcm9jZXNzIGFzIHRoZSBwcmV2aW91cyBmdW5jdGlvbnM/IFxuXG4vLyBmdW5jdGlvbiB0YWtlcyBpbiBjdXJyZW50U2hpcCwgbGVuZ3RoIGFuZCBwb3NpdGlvbiwgXG4vLyBhY2Nlc3NlcyBnYW1lYm9hcmQgXG4vLyBjbGljayBvbiBhIGNlbGwsIG1heWJlIHNvbWVob3cgdXNlIHNoaXAgbGVuZ3RoIG9yIGdldCBpbmZvIGZyb20gZmluZENvb3JkcyB0byBtYWtlIHN1cmUgc3R5bGVzIGFyZSBhcHBsaWVkIHRvIGFsbCB0aGUgY2VsbHMgb2Ygc2hpcHMgbGVuZ3RoIFxuXG4vLyB0aGUgcHJvYmxlbSBpcyBJIGNhbiB1c2UgdGhlIGhvdmVyIGNsYXNzIHRvIGhpZ2hsaWdodCBzaGlwIG92ZXIgZ2FtZWJvYXJkIG5vdyBJJ20gc3R1Y2sgb24gaG93IHRvIHBsYWNlIHRoZSBzaGlwcyBub3csIFxuXG4vLyBpdCBmb2xsb3dzIHRoZSBzaW1pbGFyIHByb2Nlc3MsIGNsaWNraW5nIG9uIGEgY2VsbCBvbiB0aGUgYm9hcmQsIHNob3dpbmcgaXRzIGNsYXNzZXMgd2hpbGUgYWxzbyB1cGRhdGluZyB0aGUgZGF0YSBpbiBvdXIgMkQgYXJyYXkgXG4vLyBnYW1lYm9hcmQgY2VsbCBpcyBjbGlja2VkLCBzZW5kcyBpbmZvIHRvIGZ1bmN0aW9uIHdoaWNoIHBsYWNlcyBpdCBvbiB0aGUgYm9hcmQuIGFjY2VzcyBjdXJyZW50IHNoaXAgXG4vLyBcblxuLy8gZnVuY3Rpb24gcGxhY2VDb29yZHMgIHsgXG5cbiAgICAvLyB0YWtlIGluIGNvb3JkaW5hdGVzIGZyb20gdXNlIGNvb3JkcywgXG4gICAgLy8gbG9vcCB0aHJ1IHRoZW0sIFxuICAgIC8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGVtLCBcbiAgICAvLyBvbmNlIGNsY2tlZCBhZGQgdGhlIHN0eWxlcyB0byB0aGVtXG4vLyB9XG5cblxuXG5cblxuXG5cblxuLy8gZ2V0IHRoZSBjb29yZGluYXRlcyBmaXJzdCwgdGhlbiBwbGFjZSB0aGVtLCBzYW1lIHByb2Nlc3MgYXMgaGlnaGxpZ2h0LCBidXQgd2hlbiB3ZSBwYXNzIHRoZW0gdG8gdXNlL3ByaW50IGZ1bmN0aW9uLCBcbi8vIGNlbGwgaXMgY2xpY2tlZCB3ZSBkZXRlcm1pbmUgd2hhdCBjb29yZGluYXRlcyB3aWxsIG5lZWQgdG8gZmlsbGVkLCBiYXNlZCBvbiBzaGlwIGxlbmd0aCBhbmQgcG9zaXRpb24gXG4vLyBwYXNzZWQgdG8gYW5vdGhlciBmdW5jdGlvbiB3aGljaCBhcHBsaWVzIHRoZSBzdHlsZXMgYW5kIGNsYXNzIHRvIGFsbCB0aG9zZSBjZWxscy4gXG4vLyBzYW1lIGFzIGhvdmVyIGNsYXNzIGJ1dCB0aGlzIHRpbWUgd2UgYXJlIHVzaW5nIGFuIGV2ZW50IGxpc3RlbmVyLCBcblxuXG4vLyBldmVudCBsaXN0ZW5lciBjbGljayBjbGFzc2VzXG4vLyB1c2VkIHNhbWUgcHJvY2VzcyBmb3Igc2hvd2luZyB0aGUgaG92ZXIgY2xhc3MuIFxuLy8gY2hhbmdlIHZhcmlhYmxlIG5hbWVzLiAgXG4vLyBmdW5jdGlvbiBnZXRTaGlwQ29vcmRpbmF0ZXMoY3VycmVudENlbGwsIGN1cnJlbnRTaGlwRGlyZWN0aW9uLCBjdXJyZW50U2hpcExlbmd0aCkgeyBcbi8vIGxldCBjbGlja2VkR2FtZWJvYXJkQ2VsbCA9IGN1cnJlbnRDZWxsO1xuLy8gbGV0IHNoaXBEaXJlY3Rpb24gPSBjdXJyZW50U2hpcERpcmVjdGlvbjsgXG4vLyBsZXQgc2hpcExlbmd0aCA9IGN1cnJlbnRTaGlwTGVuZ3RoO1xuXG4vLyBpZiAoc2hpcERpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykgeyBcbi8vICAgICBsZXQgdXBkYXRlZENvb3JkaW5hdGVzWEZvckNsaWNrRXZlbnQgPSBbXTtcbi8vICAgICBsZXQgY3VycmVudFJvdyA9IGNsaWNrZWRHYW1lYm9hcmRDZWxsLmRhdGFzZXQucm93O1xuLy8gICAgIGxldCBjdXJyZW50Q29sdW1uID0gY2xpY2tlZEdhbWVib2FyZENlbGwuZGF0YXNldC5jb2x1bW47XG4vLyAgICAgbGV0IGNvbnZlcnRDb2x1bW5Ub051bWJlciA9IE51bWJlcihjdXJyZW50Q29sdW1uKTtcbi8vICAgICBsZXQgY29udmVydFJvd1RvTnVtYmVyID0gTnVtYmVyKGN1cnJlbnRSb3cpO1xuICAgIFxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7IFxuLy8gICAgICAgICBsZXQgdXBkYXRlZFhDb29yZGluYXRlQ2xpY2sgXG4vLyAgICAgICAgIHVwZGF0ZWRYQ29vcmRpbmF0ZUNsaWNrID0gY29udmVydFJvd1RvTnVtYmVyICsgaTtcbi8vICAgICAgICAgdXBkYXRlZENvb3JkaW5hdGVzWEZvckNsaWNrRXZlbnQucHVzaChbdXBkYXRlZFhDb29yZGluYXRlQ2xpY2ssIGNvbnZlcnRDb2x1bW5Ub051bWJlcl0pO1xuLy8gICAgIH0gXG4vLyAgICAgY29uc29sZS5sb2coJ3RoZXNlIGFyZSB1cGRhdGVkIGNvb3JkcyBmb3IgeCcsIHVwZGF0ZWRDb29yZGluYXRlc1hGb3JDbGlja0V2ZW50KTtcbi8vICAgICBwcmludENvb3JkaW5hdGVzQ2xpY2sodXBkYXRlZENvb3JkaW5hdGVzWEZvckNsaWNrRXZlbnQpO1xuXG4vLyAgICAgLy8gdXNlQ29vcmRzKHVwZGF0ZWRDb29yZGluYXRlc1gpO1xuLy8gfSBlbHNlIGlmIChzaGlwRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHsgXG4vLyAgICAgbGV0IHVwZGF0ZWRDb29yZGluYXRlc1lDbGlja0V2ZW50ID0gW107XG4vLyAgICAgbGV0IGN1cnJlbnRSb3cgPSBjbGlja2VkR2FtZWJvYXJkQ2VsbC5kYXRhc2V0LnJvdztcbi8vICAgICBsZXQgY3VycmVudENvbHVtbiA9IGNsaWNrZWRHYW1lYm9hcmRDZWxsLmRhdGFzZXQuY29sdW1uO1xuLy8gICAgIGxldCBjb252ZXJ0Q29sdW1uVG9OdW1iZXIgPSBOdW1iZXIoY3VycmVudENvbHVtbik7XG4vLyAgICAgbGV0IGNvbnZlcnRSb3dUb051bWJlciA9IE51bWJlcihjdXJyZW50Um93KTtcblxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7IFxuLy8gICAgICAgICBsZXQgdXBkYXRlZFlDb29yZGluYXRlQ2xpY2sgXG4vLyAgICAgICAgIHVwZGF0ZWRZQ29vcmRpbmF0ZUNsaWNrID0gY29udmVydENvbHVtblRvTnVtYmVyICsgaTtcbi8vICAgICAgICAgdXBkYXRlZENvb3JkaW5hdGVzWUNsaWNrRXZlbnQucHVzaChbY29udmVydFJvd1RvTnVtYmVyLCB1cGRhdGVkWUNvb3JkaW5hdGVDbGlja10pO1xuLy8gICAgIH0gXG4vLyAgICAgY29uc29sZS5sb2coJ3RoZXNlIGFyZSB1cGRhdGVkIGNvb3JkcyBmb3IgeScsIHVwZGF0ZWRDb29yZGluYXRlc1lDbGlja0V2ZW50KTtcbi8vICAgICAvLyB1c2VDb29yZHModXBkYXRlZENvb3JkaW5hdGVzWSk7XG4vLyAgICAgcHJpbnRDb29yZGluYXRlc0NsaWNrKHVwZGF0ZWRDb29yZGluYXRlc1lDbGlja0V2ZW50KVxuLy8gfSBcblxuLy8gZXZlbnQgbGlzdGVuZXIgY2xpY2sgY2xhc3NlcyBcbi8vIHVzZWQgc2FtZSBwcm9jZXNzIGZvciBzaG93aW5nIHRoZSBob3ZlciBjbGFzcy4gXG4vLyBmdW5jdGlvbiBwcmludENvb3JkaW5hdGVzQ2xpY2soY29vcmRzKSB7IFxuLy8gICAgIGxldCBwYXNzZWRDb29yZGluYXRlcyA9IGNvb3Jkcztcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBwYXNzZWRDb29yZGluYXRlcy5sZW5ndGg7IGkrKykgeyBcbi8vICAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSBwYXNzZWRDb29yZGluYXRlc1tpXTtcbi8vICAgICAgICAgbGV0IHJvdyA9IGNvb3JkaW5hdGVbMF07XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJvdyk7XG4vLyAgICAgICAgIGxldCBjb2x1bW4gPSBjb29yZGluYXRlWzFdO1xuLy8gICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbHVtbj1cIiR7Y29sdW1ufVwiXWApOyAvLyBmaW5kIHRoZSBET00gY2VsbHMgdGhhdCBjb3JyZXNwb25kIHRvIHRoZSBjb29yZGluYXRlcyBwYXNzZWQgaW4sXG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNlbGwpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudCBzaGlwIGlzLCAnLCBjdXJyZW50U2hpcCk7XG4vLyAgICAgICAgIC8vIGNlbGwuY2xhc3NMaXN0LmFkZCgnYmF0dGxlc2hpcC1ob3Zlci1jbGFzcycpOyBcbi8vICAgICAgICAgY2VsbC5jbGFzc0xpc3QudG9nZ2xlKCdiYXR0bGVzaGlwLWhvdmVyLWNsYXNzJyk7ICBcbi8vICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFNoaXBEaXJlY3Rpb24pO1xuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhnYW1lYm9hcmRGYWN0b3J5KCkucGxhY2VTaGlwKGN1cnJlbnRTaGlwLCByb3csIGNvbHVtbiwgY3VycmVudFNoaXAuc2hpcExlbmd0aCwgY3VycmVudFNoaXBEaXJlY3Rpb24pKTsgXG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKGdhbWVib2FyZEZhY3RvcnkoKS5nZXRHYW1lYm9hcmQoKSk7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKGdhbWVib2FyZEZhY3RvcnkoKS5wbGFjZVNoaXAoYmF0dGxlU2hpcCwgYFtkYXRhLXJvdz1cIiR7cm93fVwiXSwgW2RhdGEtY29sdW1uPVwiJHtjb2x1bW59XCJdYCwgNCwgJ3ZlcnRpY2FsJykpO1xuXG4vLyAgICAgICAgIC8vIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBcbi8vICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdIRUxMTExPJyk7XG4vLyAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4vLyAgICAgICAgIC8vIH0pICAgIFxuLy8gICAgIH0gXG4vLyB9XG5cblxuXG5cblxuXG5cblxuXG4vLyBvbGQgQlNcbi8vIGNvbnN0IHBsYXllckJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1jb250YWluZXInKTtcblxuLy8gY29uc3QgZ2FtZWJvYXJkTW9kdWxlID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuXG4vLyBjb25zdCBwbGF5ZXJCb2FyZCA9IGdhbWVib2FyZE1vZHVsZS5nZXRHYW1lYm9hcmQoKTsgXG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlR2FtZWJvYXJkR3JpZERPTSgpIHsgIFxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IFxuLy8gICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7IFxuLy8gICAgICAgICBjb25zdCBnYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCkuZ2V0R2FtZWJvYXJkKCk7XG4vLyAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbi8vICAgICAgICAgcGxheWVyQm9hcmRDb250YWluZXIuYXBwZW5kKGRpdik7XG4vLyAgICAgICAgIGRpdi5kYXRhc2V0LnJvdyA9IGk7XG4vLyAgICAgICAgIGRpdi5kYXRhc2V0LmNvbHVtbiA9IGo7XG4vLyAgICAgICAgIGRpdi5pZCA9ICdjZWxsLXN0eWxlcyc7XG4vLyAgICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IFxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocm93KTtcbi8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbHVtbik7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nZ2luZyBnYW1lYm9hcmQgd2l0aGluIGV2ZW50IGxpc3RlbmVyJywgZ2FtZWJvYXJkKTtcbi8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGdhbWVib2FyZCk7XG4vLyAgICAgICAgICAgICAgLy8gQWNjZXNzaW5nIHRoZSBjb3JyZXNwb25kaW5nIGNlbGwgaW4gdGhlIGdhbWVib2FyZCBhcnJheVxuLy8gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGdhbWVib2FyZFtyb3ddW2NvbHVtbl0pO1xuLy8gICAgICAgICAgICAgIC8vIHJldHVybnMgdGhlIGNvb3Jlc3BvbmRpbmcgY29vcmRpbmF0ZXMgd2l0aGluIHRoZSBnYW1lYm9hcmRcbi8vICAgICAgICAgICAgICBjb25zdCBjbGlja2VkQ2VsbCA9IGdhbWVib2FyZFtpXVtqXTsgXG4vLyAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsaWNrZWQgY2VsbCBpbiBnYW1lYm9hcmQ6JywgY2xpY2tlZENlbGwpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9IFxuLy8gfVxuXG4vLyB9IFxuXG4vLyBjcmVhdGVHYW1lYm9hcmRHcmlkRE9NKCk7XG5cblxuLy8gLy8gcGxhY2luZyBzaGlwcyBvbiBwbGF5ZXJzIGJvYXJkLCBcblxuLy8gLy8gdXNlIGFub3RoZXIgbG9vcCB0byBjcmVhdGUgdGhlIHNoaXAgaW4gdGhlIERPTSwgeW91IHdpbGwgcHJvYmFibHkgd2FudCB0byBjYWxsIHNoaXAgZmFjdG9yeSBzbyB5b3UgaGF2ZSBhY2Nlc3MgdG8gaXRzIG9iamVjdCwgXG5cbi8vIC8vIHN0YXJ0IHRoZXJlIGZpcnN0LCB0aGVuIHdvcnJ5IGFib3V0IHRoZSBjbGljayBhbmQgcGxhY2Ugb24gdGhlIGJvYXJkLCBcblxuLy8gZnVuY3Rpb24gYmF0dGxlU2hpcERPTU9iamVjdCgpIHsgXG4vLyAgICAgY29uc3QgYmF0dGxlc2hpcE9iaiA9IHNoaXAoJ0JhdHRsZXNoaXAnLCA0LCAndmVydGljYWwnKTtcbi8vICAgICBjb25zb2xlLmxvZyhiYXR0bGVzaGlwT2JqKTtcblxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7IFxuLy8gICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICAgICAgZGl2LmlkID0gJ2JhdHRsZXNoaXAtb2JqLXN0eWxlcyc7XG4vLyAgICAgICAgIGNvbnN0IGJhdHRsZVNoaXBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmF0dGxlc2hpcC1jb250YWluZXInKTtcbi8vICAgICAgICAgYmF0dGxlU2hpcENvbnRhaW5lci5hcHBlbmQoZGl2KTsgICAgICAgIFxuLy8gICAgIH0gICAgXG4vLyB9IFxuXG4vLyAvLyByZWZhY3RvciB0byBjcmVhdGUgYSBmdW5jdGlvbiB3aGljaCBhY2NlcHRzIHNoaXAgb2JqZWN0cywgYW5kIGxlbmd0aCBhbmQgcG9zaXRpb24gXG5cbi8vIC8vIHRoYXQgd2F5IHdlIGNhbiBjcmVhdGUgc2hpcCBvYmplY3RzIHRoZW4gcGFzcyB0aGVtIHRvIHRoaXMgZnVuY3Rpb24gXG5cbi8vIC8vIHdoaWNoIG1ha2VzIHNoaXAgb2JqIGluIHRoZSBET00uIFxuXG4vLyAvLyBCZWZvcmUgbW92aW5nIG9uIEkgd291bGQgbWFrZSBzdXJlIHRoZSBnYW1lYm9hcmQgZ3JpZCBpcyAxMDAlIHJlc3BvbnNpdmUgYmVmb3JlIG1vdmluZywgTU9CSUxFIEZJUlNULCBtYXliZSBtaW4gd2lkdGhzLCBcblxuLy8gLy8gSSB3YW50IHRvIG1ha2Ugc3VyZSB0aGlzIGJvYXJkIGRvZXMgbm90IGJyZWFrIG9uIHNtYWxsZXIgc2NyZWVucy4gXG5cbi8vIGJhdHRsZVNoaXBET01PYmplY3QoKTtcblxuXG5cblxuXG5cblxuXG5cblxuLy8gd2VsbCBJIGhhdmUgdGhlIGxvb3AgY3JlYXRlZCwgd2hlcmUgc2hvdWxkIHRoaXMgbG9vcCBnbz8gXG4vLyBzaG91bGQgdGhlIGxvb3AgZ28gd2l0aGluIGEgZnVuY3Rpb24sIHRoZW4gYmUgY2FsbGVkIGluIHRoZSBwbGF5R2FtZSgpP1xuXG4vLyBJIHB1dCB0aGUgZ2FtZWJvYXJkIGdyaWQgd2l0aGluIHRoZSBmdW5jdGlvbiwgXG4gXG4vLyBJIHRoaW5rIEkgd2lsbCBoYXZlIHRvIGNyZWF0ZSBhbm90aGVyIG9uZSBmb3IgdGhlIGNvbXB1dGVyLCB0aGUgY29tcHV0ZXJzIGJvYXJkIHdpbGwgYmUgYXV0byBwbGFjZWQsIFxuXG4vLyBvbmNlIHBsYXllciBwbGFjZXMgaGlzIHNoaXBzIG9uIGhpcyBib2FyZCwgYSBzdGFydCBnYW1lIG9wdGlvbiB3aWxsIHBvcC11cCwgb25jZSBwcmVzc2VkLCBjb21wcyBib2FyZCB3aWxsIGF1dG8gZmlsbCwgYW5kIHdpbGwgZGlzcGxheSBjb21wcyBib2FyZCBidXQgaGlkZGVuLCBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArKykgeyBcbi8vICAgICBjb25zdCByb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4vLyAgICAgcm93RGl2LmRhdGFzZXQucm93ID0gaTtcbi8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHsgXG4vLyAgICAgY29uc3QgZ2FtZWJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpLmdldEdhbWVib2FyZCgpO1xuLy8gICAgIGNvbnN0IGNvbHVtbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgIGNvbHVtbkRpdi5kYXRhc2V0LmNvbHVtbiA9IGo7XG5cbi8vICAgICByb3dEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBcbi8vICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuLy8gICAgIH0pIFxuXG4vLyAgICAgY29sdW1uRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbi8vICAgICB9KVxuXG4vLyAgICAgcm93RGl2LnN0eWxlLmhlaWdodCA9ICczNXB4Jztcbi8vICAgICByb3dEaXYuc3R5bGUud2lkdGggPSAnMzVweCc7XG4vLyAgICAgcm93RGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcbi8vICAgICByb3dEaXYuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBibGFjayc7IFxuXG4vLyAgICAgY29sdW1uRGl2LnN0eWxlLmhlaWdodCA9ICczNXB4Jztcbi8vICAgICBjb2x1bW5EaXYuc3R5bGUud2lkdGggPSAnMzVweCc7XG4vLyAgICAgY29sdW1uRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcbi8vICAgICBjb2x1bW5EaXYuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBibGFjayc7IFxuLy8gICAgIHBsYXllckJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvd0Rpdik7XG4vLyAgICAgcGxheWVyQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29sdW1uRGl2KTsgICBcbi8vICAgICBjb25zb2xlLmxvZyhyb3dEaXYpO1xuLy8gICAgIGNvbnNvbGUubG9nKGNvbHVtbkRpdik7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBwbGF5ZXJCb2FyZENvbnRhaW5lci5hcHBlbmQocGxheWVyQm9hcmQpO1xuXG4vLyBtYWtpbmcgRE9NIGdhbWVib2FyZCwgXG5cbi8vIGhvdyBjYW4gSSBjb25uZWN0IG15IERPTSBnYW1lYm9hcmQgdG8gdGhlIGFycmF5IGdhbWVib2FyZD8/Pz8/Pz8/PyBcblxuLy8gRE9NIGNlbGwgaXMgY2xpY2tlZCBvbiwgaG93IGNhbiBJIGZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgYXJyYXkgY2VsbCB3aXRoaW4gZ2FtZWJvYXJkPyB1c2luZyBmaW5kID8gXG5cbi8vIElmIEkgY2xpY2sgb24gYSBET00gY2VsbCwgSSBzaG91bGQgZ2V0IGJhY2sgdGhlIGNvcnJlc3BvbmRpbmcgYXJyYXkgY2VsbCB3aXRoaW4gZ2FtZWJvYXJkIFxuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgIFxuLy8gICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbi8vICAgICAvLyBkaXYuc2V0QXR0cmlidXRlKFwiaW5kZXhcIiwgaSk7XG4vLyAgICAgLy8gZGl2LmlkID0gaTtcbi8vICAgICBkaXYuZGF0YXNldC5yb3cgPSBpO1xuLy8gICAgIGRpdi5kYXRhc2V0LmNvbHVtbiA9IGk7XG5cbi8vICAgICBjb25zdCBnYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCkuZ2V0R2FtZWJvYXJkKCk7XG4vLyAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbi8vICAgICAgICAgLy8gZ2FtZWJvYXJkLmZpbmQoY2VsbCA9PiBjZWxsID09PSBkaXYpO1xuLy8gICAgICAgICBpZiAoZ2FtZWJvYXJkWzVdWzJdLmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlKSkgeyBcbi8vICAgICAgICAgICAgIC8vIHJldHVybiBnYW1lYm9hcmRzIHNwZWNpZmljIGNlbGwgdGhhdCBtYXRjaGVzIHRoZSBET00gY2VsbFxuLy8gICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgIH1cbi8vICAgICB9KSBcblxuLy8gICAgIGRpdi5zdHlsZS5oZWlnaHQgPSAnMzVweCc7XG4vLyAgICAgZGl2LnN0eWxlLndpZHRoID0gJzM1cHgnO1xuLy8gICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XG4vLyAgICAgZGl2LnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgYmxhY2snOyBcbi8vICAgICBwbGF5ZXJCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpOyAgIFxuLy8gICAgIGNvbnNvbGUubG9nKGRpdik7XG4vLyB9IFxuXG5cblxuXG4vLyBJIHdhbnQgdG8gY2xpY2sgb24gRE9NIGNlbGwgYW5kIGhhdmUgaXQgcmV0dXJuIGJhY2sgdGhlIGdhbWVib2FyZCBhcnJheSBjZWxsLCBob3cgY2FuIEkgdXNlIHRoZSBmaW5kIG1ldGhvZCB0byBhY2hpZXZlIHRoaXM/IFxuXG4vLyBUSElTISEhXG4vLyBjb25uZWN0IHRoZSBIVE1MIGJvYXJkIHVzaW5nIGRhdGEgc2V0cyB0byB0aGUgYXJyYXkgaW5kZXgncyB3aXRoaW4gdGhlIGdhbWVib2FyZCBhcnJheSBcblxuXG5cblxuLy8gaG93IHRvIG1ha2UgY3VycmVudCBnYW1lYm9hcmQgYSBncmlkPz8/Pz8gXG5cbi8vIEkgdGhpbmsgeW91IGtlZXAgdGhlIGdhbWVib2FyZCBhcyB0aGUgYXJyYXksIFxuXG4vLyB0aGF0IHdpbGwgYmUgdGhlIGJvYXJkIGJlaGluZCB0aGUgc2NlbmVzLCBtYWtlIGFub3RoZXIgYm9hcmQgd2hpY2ggYmUgdGhlIGRpc3BsYXkgYm9hcmQsIFxuXG4vLyBkaXNwbGF5IGJvYXJkIHdpbGwgc3RpbGwgY29ycmVsYXRlIHdpdGggcmVndWxhciBib2FyZCwgXG5cbi8vIHdoZXJldmVyIHRoZSB1c2VyIHBsYWNlcyBzaGlwcywgdGhvc2Ugc2FtZSBjb29yZGluYXRlcyB3aWxsIGJlIHNhdmVkIHRvIGJvYXJkIGluIHRoZSBjb25zb2xlIFxuXG5cblxuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8PSAxMDA7IGkrKykgeyAgXG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuLy8gICAgIGRpdi5zdHlsZS5oZWlnaHQgPSAnMjVweCc7XG4vLyAgICAgZGl2LnN0eWxlLndpZHRoID0gJzI1cHgnO1xuLy8gICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbi8vICAgICBkaXYuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBibGFjayc7IFxuLy8gICAgIHBsYXllckJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7ICAgXG4gICAgICBcbi8vIH0gXG5cbi8vIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLXN0eWxlcycpO1xuXG4vLyBjb25zb2xlLmxvZyhib2FyZCk7XG5cbi8vIHBsYXllckJvYXJkQ29udGFpbmVyLmFwcGVuZChib2FyZCk7IiwiaW1wb3J0IHNoaXAgZnJvbSAnLi9zaGlwRmFjdG9yeS5qcyc7XG5pbXBvcnQgZ2FtZWJvYXJkRmFjdG9yeSBmcm9tICcuL2dhbWVib2FyZEZhY3RvcnkuanMnOyBcbmltcG9ydCBwbGF5ZXJGYWN0b3J5IGZyb20gJy4vcGxheWVyRmFjdG9yeS5qcyc7XG4vLyBpbXBvcnQgeyBhbGxQbGF5ZXJTaGlwc1BsYWNlZCwgcGxhY2VDb21wdXRlclNoaXBzIH0gIGZyb20gJy4vZG9tTG9naWMuanMnO1xuaW1wb3J0IHsgcGxheWVyR2FtZWJvYXJkLCBjb21wdXRlckdhbWVib2FyZCB9IGZyb20gJy4vZG9tTG9naWMuanMnO1xuaW1wb3J0IHsgZGV0ZXJtaW5lSWZIaXRPck1pc3MgfSBmcm9tICcuL2RvbUxvZ2ljLmpzJztcbmltcG9ydCB7IGRldGVybWluZUlmSGl0T3JNaXNzQ29tcHV0ZXIgfSBmcm9tICcuL2RvbUxvZ2ljLmpzJztcblxubGV0IGN1cnJlbnRQbGF5ZXJHYW1lYm9hcmQgPSBwbGF5ZXJHYW1lYm9hcmQ7IFxubGV0IGN1cnJlbnRDb21wdXRlckdhbWVib2FyZCA9IGNvbXB1dGVyR2FtZWJvYXJkO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbmNvbnN0IG9wZW5Nb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLW9wZW5cIik7XG5jb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tY2xvc2VcIik7XG5sZXQgY3VycmVudEhpdFNob3RzQXJyYXkgPSBjdXJyZW50Q29tcHV0ZXJHYW1lYm9hcmQuZ2FtZWJvYXJkLmhpdFNob3RzO1xubGV0IGN1cnJlbnRNaXNzZWRTaG90c0FycmF5ID0gY3VycmVudENvbXB1dGVyR2FtZWJvYXJkLmdhbWVib2FyZC5taXNzZWRTaG90cztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUGxheWVyKG5hbWUsIHR5cGUpIHsgXG4gICAgaWYodHlwZSA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgY29uc3QgY29tcHV0ZXJOYW1lID0gcGxheWVyRmFjdG9yeShuYW1lKTsgLy8gYWRkIHR1cm4gdmFyXG4gICAgICByZXR1cm4gY29tcHV0ZXJOYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwbGF5ZXJOYW1lID0gcGxheWVyRmFjdG9yeShuYW1lKTsgICAvLyBhZGQgdHVybiB2YXJcbiAgICAgIHJldHVybiBwbGF5ZXJOYW1lO1xuICAgIH1cbiAgfSBcblxuICBleHBvcnQgZnVuY3Rpb24gY2hlY2tGb3JXaW5uZXIodXNlck9iaikgeyBcbiAgICBjb25zb2xlLmxvZygnQ0hFQ0tJTkcgRk9SIFdJTk5FUiEnKTtcbiAgICBjb25zdCBzZWxlY3RlZFVzZXIgPSB1c2VyT2JqO1xuICAgIGlmIChzZWxlY3RlZFVzZXIuZ2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7IFxuICAgICAgLy8gYWNjZXNzIGFub3RoZXIgaGVscGVyIGZ1bmN0aW9uIHRvIHByaW50IGEgdmljdG9yeSBtZXNzYWdlL21vZGFsIHBvcC11cFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gXG5cblxuICBleHBvcnQgZnVuY3Rpb24gYXR0YWNrKHVzZXJPYmosIHgsIHkpIHsgXG4gICAgY29uc3Qgc2VsZWN0ZWRVc2VyID0gdXNlck9iajtcbiAgICBzZWxlY3RlZFVzZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7IFxuICAgIGRldGVybWluZUlmSGl0T3JNaXNzKHNlbGVjdGVkVXNlciwgeCwgeSk7XG4gIH0gXG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKHVzZXJPYmosIHgsIHkpIHsgXG4gICAgY29uc3Qgc2VsZWN0ZWRVc2VyID0gdXNlck9iajtcbiAgICBzZWxlY3RlZFVzZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7IFxuICAgIGRldGVybWluZUlmSGl0T3JNaXNzQ29tcHV0ZXIoc2VsZWN0ZWRVc2VyLCB4LCB5KTtcblxuICB9IFxuXG4gIC8vIGNvbnN0IG9wZW5Nb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAvLyAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIC8vICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAvLyB9O1xuXG5mdW5jdGlvbiBvcGVuTW9kYWwodXNlcikgeyBcbiAgbGV0IGN1cnJlbnRVc2VyID0gdXNlcjtcbiAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xuICBsZXQgd2lubmVyTmFtZSA9IGN1cnJlbnRVc2VyLm5hbWU7XG4gIGNvbnNvbGUubG9nKHdpbm5lck5hbWUpO1xuICBsZXQgd2lubmVyVGl0bGVJbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lci1kaXNwbGF5LXRpdGxlJyk7XG4gIHdpbm5lclRpdGxlSW5Nb2RhbC50ZXh0Q29udGVudCA9IGAke3dpbm5lck5hbWV9IFdJTlMhYDtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufVxuXG5cblxuICBmdW5jdGlvbiBkZXRlcm1pbmVJZkluc2lkZUhpdFNob3RBcnJheSh4LCB5KSB7IFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudEhpdFNob3RzQXJyYXkubGVuZ3RoOyBpKyspIHsgXG4gICAgICBsZXQgY3VycmVudEhpdCA9IGN1cnJlbnRIaXRTaG90c0FycmF5W2ldO1xuICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnRIaXQgdmFyaWFibGUnLCBjdXJyZW50SGl0KTtcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGN1cnJlbnRIaXQpKVxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoW3gsIHldKSk7XG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoY3VycmVudEhpdCkgPT09IEpTT04uc3RyaW5naWZ5KFt4LCB5XSkpIHsgXG4gICAgICAgIHJldHVybiB0cnVlOyBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IFxuXG4gIGZ1bmN0aW9uIGRldGVybWluZUlmSW5zaWRlTWlzc2VkU2hvdEFycmF5KHgsIHkpIHsgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50TWlzc2VkU2hvdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcbiAgICAgIGxldCBjdXJyZW50TWlzcyA9IGN1cnJlbnRNaXNzZWRTaG90c0FycmF5W2ldO1xuICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGN1cnJlbnRNaXNzKSA9PT0gSlNPTi5zdHJpbmdpZnkoW3gsIHldKSkgeyBcbiAgICAgICAgcmV0dXJuIHRydWU7IFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gXG5cbiAgZnVuY3Rpb24gZGV0ZXJtaW5lSWZJbnNpZGVIaXRTaG90QXJyYXlDb21wdXRlcih4LCB5KSB7IFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudEhpdFNob3RzQXJyYXkubGVuZ3RoOyBpKyspIHsgXG4gICAgICBsZXQgY3VycmVudEhpdCA9IGN1cnJlbnRIaXRTaG90c0FycmF5W2ldO1xuICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnRIaXQgZnJvbSBoaXQgc2hvdCBhcnJheScsIGN1cnJlbnRIaXQpO1xuICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY3VycmVudEhpdCkpXG4gICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShbeCwgeV0pKTtcbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeShjdXJyZW50SGl0KSA9PT0gSlNPTi5zdHJpbmdpZnkoW3gsIHldKSkgeyBcbiAgICAgICAgcmV0dXJuIHRydWU7IFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gXG5cbiAgZnVuY3Rpb24gZGV0ZXJtaW5lSWZJbnNpZGVNaXNzZWRTaG90QXJyYXlDb21wdXRlcih4LCB5KSB7IFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudE1pc3NlZFNob3RzQXJyYXkubGVuZ3RoOyBpKyspIHsgXG4gICAgICBsZXQgY3VycmVudE1pc3MgPSBjdXJyZW50TWlzc2VkU2hvdHNBcnJheVtpXTtcbiAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IG1pc3MgY29vcmRpbmF0ZSBmcm9tIG1pc3NlZCBzaG90IGFycmF5JywgY3VycmVudE1pc3MpXG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoY3VycmVudE1pc3MpID09PSBKU09OLnN0cmluZ2lmeShbeCwgeV0pKSB7IFxuICAgICAgICByZXR1cm4gdHJ1ZTsgXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHBsYXlHYW1lKHhDb29yZGluYXRlLCB5Q29vcmRpbmF0ZSkgeyBcbiAgICBsZXQgcGxheWVyVHVybiA9IDE7IFxuICAgIGNvbnNvbGUubG9nKCdsb2dnaW5nIHBsYXllciB0dXJuIHZhcmlhYmxlIGFmdGVyIGluaXQnLCBwbGF5ZXJUdXJuKTtcbiAgICAgIFxuICAgIGlmIChwbGF5ZXJUdXJuID09PSAxKSB7XG4gICAgICBsZXQgcGxheWVyTWFya1ggPSB4Q29vcmRpbmF0ZTtcbiAgICAgIGxldCBwbGF5ZXJNYXJrWSA9IHlDb29yZGluYXRlO1xuXG4gICAgICBjb25zb2xlLmxvZyghZGV0ZXJtaW5lSWZJbnNpZGVIaXRTaG90QXJyYXkocGxheWVyTWFya1gsIHBsYXllck1hcmtZKSAmJiAoIWRldGVybWluZUlmSW5zaWRlTWlzc2VkU2hvdEFycmF5KHBsYXllck1hcmtYLCBwbGF5ZXJNYXJrWSkpKTtcblxuICAgICAgLy8gaWYgKCFkZXRlcm1pbmVJZkluc2lkZUhpdFNob3RBcnJheShwbGF5ZXJNYXJrWCwgcGxheWVyTWFya1kpICYmICghZGV0ZXJtaW5lSWZJbnNpZGVNaXNzZWRTaG90QXJyYXkocGxheWVyTWFya1gsIHBsYXllck1hcmtZKSkpIHsgXG5cbiAgICAgIGF0dGFjayhjdXJyZW50Q29tcHV0ZXJHYW1lYm9hcmQsIHBsYXllck1hcmtYLCBwbGF5ZXJNYXJrWSk7IFxuICAgICAgY29uc29sZS5sb2coJ2xvZ2dpbmcgcGxheWVyIHR1cm4gdmFyaWFibGUgYmVmb3JlIHBsYXllciBhdHRhY2snLCBwbGF5ZXJUdXJuKTtcbiAgICAgIHBsYXllclR1cm4gPSAyO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2xvZ2dpbmcgcGxheWVyIHR1cm4gdmFyaWFibGUgYWZ0ZXIgcGxheWVyIGF0dGFjaycsIHBsYXllclR1cm4pO1xuICAgICAgLy8gfSBlbHNlIHsgXG4gICAgICAvLyAgIHJldHVybjtcbiAgICAgIC8vIH1cblxuICAgICAgY29uc29sZS5sb2coJ0NPTVBVVEVSUyBHQU1FQk9BUkQgQUZURVIgUExBWUVSIEFUVEFDSycsIGN1cnJlbnRDb21wdXRlckdhbWVib2FyZCk7XG5cbiAgICAgIGlmIChjaGVja0Zvcldpbm5lcihjdXJyZW50Q29tcHV0ZXJHYW1lYm9hcmQpKSB7IFxuICAgICAgICBjb25zb2xlLmxvZygnUExBWUVSIFdJTlMnKTtcbiAgICAgICAgb3Blbk1vZGFsKHBsYXllckdhbWVib2FyZCk7XG4gICAgICAgIHJldHVybjsgLy8gcHJpbnQvYWNjZXNzIHdpbm5lciBtb2RhbFxuICAgICAgfVxuICAgICAgLy8gcGxheWVyVHVybiA9IDI7XG4gICAgfSBcbiAgICAvLyBlbHNlIHsgXG4gICAgICAvLyBjb25zb2xlLmxvZygnRUxTRSBTVEFURU1FTlQgQ0hFQ0shJylcbiAgICAgIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSkgKyAxO1xuICAgICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZTIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSArIDE7XG4gICAgICAvLyBjb21wdXRlckF0dGFjayhjdXJyZW50UGxheWVyR2FtZWJvYXJkLCByYW5kb21Db29yZGluYXRlMSwgcmFuZG9tQ29vcmRpbmF0ZTIpO1xuICAgICAgY29uc29sZS5sb2coJ1BMQVlFUlMgR0FNRUJPQVJEIEFGVEVSIENPTVBVVEVSIEFUVEFDSycsIGN1cnJlbnRQbGF5ZXJHYW1lYm9hcmQpO1xuICAgICAgY29uc29sZS5sb2coJ1JBTkRPTSBDT09SRElOQVRFUyBTRUxFQ1RFRCBGUk9NIENPTVBVVEVSJywgcmFuZG9tQ29vcmRpbmF0ZTEsIHJhbmRvbUNvb3JkaW5hdGUyKTtcblxuICAgICAgLy8gaWYgKCFkZXRlcm1pbmVJZkluc2lkZUhpdFNob3RBcnJheUNvbXB1dGVyKHJhbmRvbUNvb3JkaW5hdGUxLCByYW5kb21Db29yZGluYXRlMikgJiYgKCFkZXRlcm1pbmVJZkluc2lkZU1pc3NlZFNob3RBcnJheUNvbXB1dGVyKHJhbmRvbUNvb3JkaW5hdGUxLCByYW5kb21Db29yZGluYXRlMikpKSB7IFxuICAgICAgICBjb21wdXRlckF0dGFjayhjdXJyZW50UGxheWVyR2FtZWJvYXJkLCByYW5kb21Db29yZGluYXRlMSwgcmFuZG9tQ29vcmRpbmF0ZTIpO1xuICAgICAgICBjb25zb2xlLmxvZygnbG9nZ2luZyBwbGF5ZXIgdHVybiB2YXJpYWJsZSBiZWZvcmUgY29tcHV0ZXIgYXR0YWNrJywgcGxheWVyVHVybik7XG4gICAgICAgIHBsYXllclR1cm4gPSAxO1xuICAgICAgICBjb25zb2xlLmxvZygnbG9nZ2luZyBwbGF5ZXIgdHVybiB2YXJpYWJsZSBhZnRlciBjb21wdXRlciBhdHRhY2snLCBwbGF5ZXJUdXJuKTtcbiAgICAgIC8vIH0gZWxzZSB7IFxuICAgICAgLy8gICByZXR1cm47XG4gICAgICAvLyB9XG5cbiAgICAgIGlmIChjaGVja0Zvcldpbm5lcihjdXJyZW50UGxheWVyR2FtZWJvYXJkKSkgeyBcbiAgICAgICAgY29uc29sZS5sb2coJ0NPTVAgV0lOUycpO1xuICAgICAgICBvcGVuTW9kYWwoY29tcHV0ZXJHYW1lYm9hcmQpO1xuICAgICAgICByZXR1cm47IFxuICAgICAgfSBcbiAgICAgIC8vIHBsYXllclR1cm4gPSAxO1xuICAgIH0gXG4gIFxuXG5cblxuXG5cblxuXG4gIC8vIGV4cG9ydCBmdW5jdGlvbiBwbGFjZVNoaXBzT25QbGF5ZXJzQm9hcmQodXNlcikgeyBcbiAgLy8gICBjb25zdCBwbGF5ZXIgPSB1c2VyOyBcbiAgLy8gICBjb25zdCBiYXR0bGVTaGlwID0gc2hpcCgnQmF0dGxlc2hpcCcsIDQsICd2ZXJ0aWNhbCcpO1xuICAvLyAgIGNvbnN0IGRlc3Ryb3llciA9IHNoaXAoJ0Rlc3Ryb3llcicsIDQsICdob3Jpem9udGFsJyApO1xuICAvLyAgIGNvbnN0IHBhdHJvbEJvYXQgPSBzaGlwKCdQYXRyb2wtYm9hdCcsIDIsICd2ZXJ0aWNhbCcpO1xuICAvLyAgIGNvbnN0IGNhcnJpZXJCb2F0ID0gc2hpcCgnQ2FycmllcicsIDQsICdob3Jpem9udGFsJyk7XG4gIC8vICAgY29uc3Qgc3VibWFyaW5lID0gc2hpcCgnU3VibWFyaW5lJywgMywgJ3ZlcnRpY2FsJyk7XG4gIC8vICAgLy8gY29uc3QgcGxheWVyID0gY3JlYXRlUGxheWVyKCdwbGF5ZXInLCAncGxheWVyJyk7XG4gIC8vICAgLy8gY29uc29sZS5sb2cocGxheWVyKTtcbiAgLy8gICBjb25zdCBnZXRQbGF5ZXJCb2FyZCA9IHBsYXllci5nYW1lYm9hcmQuZ2V0R2FtZWJvYXJkKCk7XG4gIC8vICAgY29uc3QgcGxhY2VCYXR0bGVTaGlwID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoYmF0dGxlU2hpcCwgMCwgMCwgNCwgJ2hvcml6b250YWwnKTtcbiAgLy8gICBjb25zdCBwbGFjZURlc3Ryb3llciA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKGRlc3Ryb3llciwgMSwgMSwgNCwgJ2hvcml6b250YWwnKTtcbiAgLy8gICBjb25zdCBwbGFjZVBhdHJvbEJvYXQgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChwYXRyb2xCb2F0LCAyLCAyLCAyLCAnaG9yaXpvbnRhbCcpO1xuICAvLyAgIGNvbnN0IHBsYWNlQ2FycmllckJvYXQgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChjYXJyaWVyQm9hdCwgMywgMywgNCwgJ2hvcml6b250YWwnKTtcbiAgLy8gICBjb25zdCBwbGFjZVN1Ym1hcmluZSA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKHN1Ym1hcmluZSwgNCwgNCwgMywgJ2hvcml6b250YWwnKTtcbiAgLy8gICBjb25zb2xlLmxvZyhnZXRQbGF5ZXJCb2FyZCk7XG4gIC8vICAgcmV0dXJuIGdldFBsYXllckJvYXJkO1xuICAvLyB9IFxuXG4gIC8vIGV4cG9ydCBmdW5jdGlvbiBwbGFjZVNoaXBzT25Db21wdXRlcnNCb2FyZCh1c2VyKSB7IFxuICAvLyAgIGNvbnN0IGNvbXB1dGVyID0gdXNlcjtcbiAgLy8gICBjb25zdCBiYXR0bGVTaGlwID0gc2hpcCgnQmF0dGxlc2hpcCcsIDQsICd2ZXJ0aWNhbCcpO1xuICAvLyAgIGNvbnN0IGRlc3Ryb3llciA9IHNoaXAoJ0Rlc3Ryb3llcicsIDQsICdob3Jpem9udGFsJyApO1xuICAvLyAgIGNvbnN0IHBhdHJvbEJvYXQgPSBzaGlwKCdQYXRyb2wtYm9hdCcsIDIsICd2ZXJ0aWNhbCcpO1xuICAvLyAgIGNvbnN0IGNhcnJpZXJCb2F0ID0gc2hpcCgnQ2FycmllcicsIDQsICdob3Jpem9udGFsJyk7XG4gIC8vICAgY29uc3Qgc3VibWFyaW5lID0gc2hpcCgnU3VibWFyaW5lJywgMywgJ3ZlcnRpY2FsJyk7XG4gIC8vICAgLy8gY29uc3QgY29tcHV0ZXIgPSBjcmVhdGVQbGF5ZXIoJ1BDJywgJ2NvbXB1dGVyJyk7XG4gIC8vICAgY29uc3QgZ2V0Q29tcHV0ZXJCb2FyZCA9IGNvbXB1dGVyLmdhbWVib2FyZC5nZXRHYW1lYm9hcmQoKTtcbiAgLy8gICBjb25zdCBwbGFjZUJhdHRsZVNoaXAgPSBjb21wdXRlci5nYW1lYm9hcmQucGxhY2VTaGlwKGJhdHRsZVNoaXAsIDAsIDAsIDQsICdob3Jpem9udGFsJyk7XG4gIC8vICAgY29uc3QgcGxhY2VEZXN0cm95ZXIgPSBjb21wdXRlci5nYW1lYm9hcmQucGxhY2VTaGlwKGRlc3Ryb3llciwgMSwgMSwgNCwgJ2hvcml6b250YWwnKTtcbiAgLy8gICBjb25zdCBwbGFjZVBhdHJvbEJvYXQgPSBjb21wdXRlci5nYW1lYm9hcmQucGxhY2VTaGlwKHBhdHJvbEJvYXQsIDIsIDIsIDIsICdob3Jpem9udGFsJyk7XG4gIC8vICAgY29uc3QgcGxhY2VDYXJyaWVyQm9hdCA9IGNvbXB1dGVyLmdhbWVib2FyZC5wbGFjZVNoaXAoY2FycmllckJvYXQsIDMsIDMsIDQsICdob3Jpem9udGFsJyk7XG4gIC8vICAgY29uc3QgcGxhY2VTdWJtYXJpbmUgPSBjb21wdXRlci5nYW1lYm9hcmQucGxhY2VTaGlwKHN1Ym1hcmluZSwgNywgNCwgMywgJ2hvcml6b250YWwnKTtcbiAgLy8gICBjb25zb2xlLmxvZyhnZXRDb21wdXRlckJvYXJkKTtcbiAgLy8gICByZXR1cm4gZ2V0Q29tcHV0ZXJCb2FyZDtcblxuICAvLyB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIC8vICAvLyBzdW5rIGJhdHRsZXNoaXBcbiAgLy8gIGF0dGFjayhwbGF5ZXIsIDAsIDApOyBcbiAgLy8gIGF0dGFjayhwbGF5ZXIsIDAsIDEpOyBcbiAgLy8gIGF0dGFjayhwbGF5ZXIsIDAsIDIpOyBcbiAgLy8gIGF0dGFjayhwbGF5ZXIsIDAsIDMpOyBcbiAgLy8gIC8vIHN1bmsgZGVzdHJveWVyXG4gIC8vICBhdHRhY2socGxheWVyLCAxLCAyKTsgXG4gIC8vICBhdHRhY2socGxheWVyLCAxLCAzKTsgXG4gIC8vICBhdHRhY2socGxheWVyLCAxLCA0KTsgXG4gIC8vICBhdHRhY2socGxheWVyLCAxLCAxKTsgXG4gIC8vICAvLyBzdW5rIHBhdHJvbCBib2F0XG4gIC8vICBhdHRhY2socGxheWVyLCAyLCAyKTsgXG4gIC8vICBhdHRhY2socGxheWVyLCAyLCAzKTsgXG4gIC8vICAvLyBzdW5rIGNhcnJpZXIgYm9hdCBcbiAgLy8gIGF0dGFjayhwbGF5ZXIsIDMsIDMpOyBcbiAgLy8gIGF0dGFjayhwbGF5ZXIsIDMsIDQpOyBcbiAgLy8gIGF0dGFjayhwbGF5ZXIsIDMsIDUpOyBcbiAgLy8gIGF0dGFjayhwbGF5ZXIsIDMsIDYpOyBcbiAgLy8gIC8vIHN1bmsgc3VibWFyaW5lXG4gIC8vICBhdHRhY2socGxheWVyLCA0LCA0KTsgXG4gIC8vICBhdHRhY2socGxheWVyLCA0LCA1KTsgXG4gIC8vICBhdHRhY2socGxheWVyLCA0LCA2KTsgXG5cblxuXG4vLyAvLyBzdW5rIGJhdHRsZXNoaXBcbiAgICAgIC8vIGF0dGFjayhjb21wdXRlciwgMCwgMCk7IFxuICAgICAgLy8gYXR0YWNrKGNvbXB1dGVyLCAwLCAxKTsgXG4gICAgICAvLyBhdHRhY2soY29tcHV0ZXIsIDAsIDIpOyBcbiAgICAgIC8vIGF0dGFjayhjb21wdXRlciwgMCwgMyk7IFxuICAgICAgLy8gLy8gc3VuayBkZXN0cm95ZXJcbiAgICAgIC8vIGF0dGFjayhjb21wdXRlciwgMSwgMSk7IFxuICAgICAgLy8gYXR0YWNrKGNvbXB1dGVyLCAxLCAyKTsgXG4gICAgICAvLyBhdHRhY2soY29tcHV0ZXIsIDEsIDMpOyBcbiAgICAgIC8vIGF0dGFjayhjb21wdXRlciwgMSwgNCk7IFxuICAgICAgLy8gLy8gc3VuayBwYXRyb2wgYm9hdFxuICAgICAgLy8gYXR0YWNrKGNvbXB1dGVyLCAyLCAyKTsgXG4gICAgICAvLyBhdHRhY2soY29tcHV0ZXIsIDIsIDMpOyBcbiAgICAgIC8vIC8vIHN1bmsgY2FycmllciBib2F0IFxuICAgICAgLy8gYXR0YWNrKGNvbXB1dGVyLCAzLCAzKTsgXG4gICAgICAvLyBhdHRhY2soY29tcHV0ZXIsIDMsIDQpOyBcbiAgICAgIC8vIGF0dGFjayhjb21wdXRlciwgMywgNSk7IFxuICAgICAgLy8gYXR0YWNrKGNvbXB1dGVyLCAzLCA2KTsgXG4gICAgICAvLyAvLyBzdW5rIHN1Ym1hcmluZVxuICAgICAgLy8gYXR0YWNrKGNvbXB1dGVyLCA3LCA0KTsgXG4gICAgICAvLyBhdHRhY2soY29tcHV0ZXIsIDcsIDUpOyBcbiAgICAgIC8vIGF0dGFjayhjb21wdXRlciwgNywgNik7IFxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgLy8gb2xkIGF0dGFjayBmdW5jdGlvblxuICAvLyBmdW5jdGlvbiBhdHRhY2sodXNlcjEsIHVzZXIyLCkgeyBcbiAgLy8gICBsZXQgY29tcHV0ZXIgPSB1c2VyMTtcbiAgLy8gICBsZXQgcGxheWVyID0gdXNlcjI7XG5cbiAgLy8gICBjb25zb2xlLmxvZyhjb21wdXRlcik7XG4gIC8vICAgY29uc29sZS5sb2coJ2NvbXB1dGVycyB1c2VyVHVybiB2YWx1ZSBiZWZvcmUgYXR0YWNrJyxjb21wdXRlci51c2VyVHVybik7XG4gIC8vICAgY29uc29sZS5sb2coJ3BsYXllcnMgdXNlclR1cm4gdmFsdWUgYmVmb3JlIGF0dGFjaycsIHBsYXllci51c2VyVHVybik7XG5cbiAgLy8gICBpZiAocGxheWVyLnVzZXJUdXJuID09PSB0cnVlKSB7IFxuICAvLyAgICAgLy8gaWYgdHJ1ZSBsZXQgcGxheWVyIG1ha2UgYXR0YWNrLCBvbiBjb21wdXRlcnMgZ2FtZWJvYXJkXG4gIC8vICAgICBjb25zb2xlLmxvZyhjb21wdXRlci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjaygzLCAzKSk7XG4gIC8vICAgICBwbGF5ZXIudXNlclR1cm4gPSBmYWxzZTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdwbGF5ZXJzIHVzZXJUdXJuIHZhbHVlIGFmdGVyIGF0dGFjaycsIHBsYXllci51c2VyVHVybilcbiAgLy8gICAgIGNvbXB1dGVyLnVzZXJUdXJuID0gdHJ1ZTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdjb21wdXRlcnMgdXNlclR1cm4gdmFsdWUgYWZ0ZXIgYXR0YWNrJywgY29tcHV0ZXIudXNlclR1cm4pXG4gIC8vICAgfSBcblxuICAvLyAgIGNvbnNvbGUubG9nKCdwbGF5ZXJzIHVzZXJUdXJuIHZhbHVlIGF0dGFjaywgb3V0c2lkZSBpZiBibG9jaycsIHBsYXllci51c2VyVHVybik7XG5cbiAgLy8gICBpZiAoY29tcHV0ZXIudXNlclR1cm4gPT09IHRydWUpIHsgXG4gIC8vICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soMSwgMikpO1xuICAvLyAgICAgY29tcHV0ZXIudXNlclR1cm4gPSBmYWxzZTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdjb21wdXRlcnMgdXNlclR1cm4gdmFsdWUgYWZ0ZXIgYXR0YWNrJywgY29tcHV0ZXIudXNlclR1cm4pO1xuICAvLyAgICAgcGxheWVyLnVzZXJUdXJuID0gdHJ1ZTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdwbGF5ZXJzIHVzZXJUdXJuIHZhbHVlIGFmdGVyIGNvbXAgYXR0YWNrJywgcGxheWVyLnVzZXJUdXJuKTtcbiAgLy8gICB9IFxuICAvLyB9XG5cbi8vIGNvbnNvbGUubG9nKGNyZWF0ZVBsYXllcignQWxlYycsICdwbGF5ZXInKSk7IFxuXG4vLyBsZXQgdGVzdFBsYXllciA9IGNyZWF0ZVBsYXllcignQWxlYycsICdwbGF5ZXInKTtcblxuXG5cbi8vIGNvbnNvbGUubG9nKHBsYWNlU2hpcHNPblBsYXllcnNCb2FyZCh0ZXN0UGxheWVyKSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGF5R2FtZSgpIHsgXG5cbi8vICAgICBmdW5jdGlvbiBjcmVhdGVQbGF5ZXJOYW1lKG5hbWUpIHsgXG4vLyAgICAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBwbGF5ZXJGYWN0b3J5KG5hbWUpO1xuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soMywgMykpO1xuLy8gICAgICAgICByZXR1cm4gcGxheWVyTmFtZTtcbi8vICAgICB9IFxuXG4gICAgLy8gZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZXJOYW1lKG5hbWUpIHsgXG4gICAgLy8gICAgIGNvbnN0IGNvbXB1dGVyTmFtZSA9IHBsYXllckZhY3RvcnkobmFtZSk7XG4gICAgLy8gICAgIHJldHVybiBjb21wdXRlck5hbWU7XG4gICAgLy8gfSBcblxuICAgIC8vIGZ1bmN0aW9uIHBsYWNlU2hpcHNQbGF5ZXJCb2FyZCgpIHsgXG4gICAgLy8gICAgIC8vIGNyZWF0ZSBhbGwgc2hpcHMgb2JqZWN0cyB3aXRoaW4gaGVyZSwgdGhlbiBwbGFjZSB0aGVtIG9uIHRoZSBib2FyZCwgXG4gICAgLy8gICAgIC8vIGp1c3QgcGxhY2UgdGhlbVxuICAgIC8vICAgICBjb25zdCBiYXR0bGVTaGlwID0gc2hpcCgnQmF0dGxlc2hpcCcsIDQsICd2ZXJ0aWNhbCcpO1xuICAgIC8vICAgICBjb25zdCBkZXN0cm95ZXIgPSBzaGlwKCdEZXN0cm95ZXInLCA0LCAnaG9yaXpvbnRhbCcgKTtcbiAgICAvLyAgICAgY29uc3QgcGF0cm9sQm9hdCA9IHNoaXAoJ1BhdHJvbC1ib2F0JywgMiwgJ3ZlcnRpY2FsJyk7XG4gICAgLy8gICAgIGNvbnN0IGNhcnJpZXJCb2F0ID0gc2hpcCgnQ2FycmllcicsIDQsICdob3Jpem9udGFsJyk7XG4gICAgLy8gICAgIGNvbnN0IHN1Ym1hcmluZSA9IHNoaXAoJ1N1Ym1hcmluZScsIDMsICd2ZXJ0aWNhbCcpO1xuXG4gICAgLy8gICAgIGNvbnN0IGdldFBsYXllciA9IGNyZWF0ZVBsYXllck5hbWUoJ0FsZWMnKTtcbiAgICAvLyAgICAgY29uc3QgZ2V0UGxheWVyQm9hcmQgPSBnZXRQbGF5ZXIuZ2FtZWJvYXJkLmdldEdhbWVib2FyZCgpO1xuICAgIC8vICAgICBjb25zdCBwbGFjZUJhdHRsZVNoaXAgPSBnZXRQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChiYXR0bGVTaGlwLCAwLCAwLCA0LCAnaG9yaXpvbnRhbCcpO1xuICAgIC8vICAgICBjb25zdCBwbGFjZURlc3Ryb3llciA9IGdldFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKGRlc3Ryb3llciwgMSwgMSwgNCwgJ2hvcml6b250YWwnKTtcbiAgICAvLyAgICAgY29uc3QgcGxhY2VQYXRyb2xCb2F0ID0gZ2V0UGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAocGF0cm9sQm9hdCwgMiwgMiwgMiwgJ2hvcml6b250YWwnKTtcbiAgICAvLyAgICAgY29uc3QgcGxhY2VDYXJyaWVyQm9hdCA9IGdldFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKGNhcnJpZXJCb2F0LCAzLCAzLCA0LCAnaG9yaXpvbnRhbCcpO1xuICAgIC8vICAgICBjb25zdCBwbGFjZVN1Ym1hcmluZSA9IGdldFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKHN1Ym1hcmluZSwgNCwgNCwgMywgJ2hvcml6b250YWwnKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2cocGxhY2VCYXR0bGVTaGlwKTtcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coZGVzdHJveWVyKTtcbiAgICAvLyAgICAgcmV0dXJuIGdldFBsYXllckJvYXJkO1xuICAgIC8vIH1cblxuICAgIC8vIGZ1bmN0aW9uIHBsYWNlU2hpcHNDb21wdXRlckJvYXJkKCkgeyBcbiAgICAvLyAgICAgY29uc3QgYmF0dGxlU2hpcCA9IHNoaXAoJ0JhdHRsZXNoaXAnLCA0LCAndmVydGljYWwnKTtcbiAgICAvLyAgICAgY29uc3QgZGVzdHJveWVyID0gc2hpcCgnRGVzdHJveWVyJywgNCwgJ2hvcml6b250YWwnICk7XG4gICAgLy8gICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBzaGlwKCdQYXRyb2wtYm9hdCcsIDIsICd2ZXJ0aWNhbCcpO1xuICAgIC8vICAgICBjb25zdCBjYXJyaWVyQm9hdCA9IHNoaXAoJ0NhcnJpZXInLCA0LCAnaG9yaXpvbnRhbCcpO1xuICAgIC8vICAgICBjb25zdCBzdWJtYXJpbmUgPSBzaGlwKCdTdWJtYXJpbmUnLCAzLCAndmVydGljYWwnKTtcblxuICAgIC8vICAgICBjb25zdCBnZXRDb21wdXRlclBsYXllciA9IGNyZWF0ZUNvbXB1dGVyTmFtZSgnQ29tcHV0ZXInKTtcbiAgICAvLyAgICAgY29uc3QgZ2V0Q29tcHV0ZXJCb2FyZCA9IGdldENvbXB1dGVyUGxheWVyLmdhbWVib2FyZC5nZXRHYW1lYm9hcmQoKTtcbiAgICAvLyAgICAgY29uc3QgcGxhY2VCYXR0bGVTaGlwID0gZ2V0UGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoYmF0dGxlU2hpcCwgMCwgMCwgNCwgJ2hvcml6b250YWwnKTtcbiAgICAvLyAgICAgY29uc3QgcGxhY2VEZXN0cm95ZXIgPSBnZXRQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChkZXN0cm95ZXIsIDEsIDEsIDQsICdob3Jpem9udGFsJyk7XG4gICAgLy8gICAgIGNvbnN0IHBsYWNlUGF0cm9sQm9hdCA9IGdldFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKHBhdHJvbEJvYXQsIDIsIDIsIDIsICdob3Jpem9udGFsJyk7XG4gICAgLy8gICAgIGNvbnN0IHBsYWNlQ2FycmllckJvYXQgPSBnZXRQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChjYXJyaWVyQm9hdCwgMywgMywgNCwgJ2hvcml6b250YWwnKTtcbiAgICAvLyAgICAgY29uc3QgcGxhY2VTdWJtYXJpbmUgPSBnZXRQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChzdWJtYXJpbmUsIDQsIDQsIDMsICdob3Jpem9udGFsJyk7XG4gICAgLy8gfVxuXG4vLyAgICAgcmV0dXJuIHsgXG4vLyAgICAgICAgIGNyZWF0ZVBsYXllck5hbWUsXG4vLyAgICAgICAgIC8vIGNyZWF0ZUNvbXB1dGVyTmFtZSxcbi8vICAgICAgICAgLy8gcGxhY2VTaGlwc1BsYXllckJvYXJkLFxuLy8gICAgICAgICAvLyBwbGFjZVNoaXBzQ29tcHV0ZXJCb2FyZCxcbi8vICAgICB9XG4vLyB9IFxuXG5cbi8vIG1ha2luZyBhIG1ldGhvZCBmb3IgcmV0cmlldmluZyBwbGF5ZXIgYW5kIGNvbXB1dGVyLCBcbi8vIGxldCBwbGF5R2FtZVRlc3QgPSBwbGF5R2FtZSgpLmNyZWF0ZVBsYXllck5hbWUoJ0FsZWMnKTtcbi8vIGxldCBwbGF5R2FtZUNvbXBUZXN0ID0gcGxheUdhbWUoKS5jcmVhdGVDb21wdXRlck5hbWUoJ2N5cHJlc3MnKTtcblxuLy8gY29uc29sZS5sb2cocGxheUdhbWVUZXN0KTtcbi8vIGNvbnNvbGUubG9nKHBsYXlHYW1lQ29tcFRlc3QpO1xuXG4vLyBjb25zb2xlLmxvZyhwbGF5R2FtZSgpLnBsYWNlU2hpcHNQbGF5ZXJCb2FyZCgpKTtcblxuLy8gbG9va2luZyBhdCB0aGUgZGlyZWN0aW9ucyB3aGVyZSBkbyBJIHN0YXJ0PyBcblxuLy8gIiwiLy8gaW1wb3J0ICcuL3NoaXBGYWN0b3J5LmpzJztcbmltcG9ydCBzaGlwIGZyb20gJy4vc2hpcEZhY3RvcnkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lYm9hcmRGYWN0b3J5KCkge1xuICBsZXQgZ2FtZWJvYXJkID0gW107XG4gIGxldCBhbGxTaG90cyA9IFtdO1xuICBsZXQgaGl0U2hvdHMgPSBbXTtcbiAgbGV0IG1pc3NlZFNob3RzID0gW107IFxuICBsZXQgc3Vua2VuU2hpcHNBcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBnYW1lYm9hcmQucHVzaChbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddKTtcbiAgfSBcblxuICBmdW5jdGlvbiBnZXRHYW1lYm9hcmQoKSB7XG4gICAgcmV0dXJuIGdhbWVib2FyZDtcbiAgfVxuLy8gcHJldmlvdXNseSBmb3IgKGxldCBpID0gMTsgaSA8PSBsZW5ndGggLSAxOyBpKyspIFxuLy8gY2hhbmdlZCB0byAwLCBpIDwgbGVuZ3RoLCBcbi8vIHRoaXMgd29ya3MgdG9vIGZvciAobGV0IGkgPSAwOyBpIDw9IGxlbmd0aCAtIDE7IGkrKylcblxuICBmdW5jdGlvbiBjaGVja0ZvclNoaXAoeCwgeSwgbGVuZ3RoLCBwb3NpdGlvbikgeyBcbiAgICBpZiAocG9zaXRpb24gPT09ICd2ZXJ0aWNhbCcpIHsgXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7IFxuICAgICAgICBpZiAoeCArIGkgPiA5KSB7IFxuICAgICAgICAgIHJldHVybiBmYWxzZSBcbiAgICAgICAgfSAgICAgXG4gICAgICAgIGlmIChnYW1lYm9hcmRbeCArIGldW3ldICE9PSAnJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHsgXG4gICAgICAgIGlmICh5ICsgaSA+IDkpIHsgXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnYW1lYm9hcmRbeF1beSArIGldICE9PSAnJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBcblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcE9iaiwgeCwgeSwgbGVuZ3RoLCBwb3NpdGlvbikge1xuICAgIGlmICghY2hlY2tGb3JTaGlwKHgsIHksIGxlbmd0aCwgcG9zaXRpb24pKSB7XG4gICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ3NoaXAgaXMgYWxyZWFkeSB0aGVyZSBvciBzaGlwIGlzIHBsYWNlZCBvZmYgdGhlIGdhbWVib2FyZCwgcGxlYXNlIHBsYWNlIHNoaXAgc29tZXdoZXJlIGVsc2UsIGFuZCBvbiB0aGUgZ2FtZWJvYXJkJyk7XG4gICAgICBjb25zb2xlLmxvZygnRVJST1IgU0hJUCBPVkVSTEFQISBDdXJyZW50IHNoaXBPYmogaXMnLCBzaGlwT2JqKTtcbiAgICAgcmV0dXJuIGZhbHNlO1xuICAgICB9IFxuICAgICAvLyBlbHNlIGlmIChjaGVja0ZvclNoaXAoeCwgeSwgbGVuZ3RoLCBwb3NpdGlvbikpIHsgLy8gcmVjZW50bHkgYWRkZWQgdGhlIGVsc2UgaWYgXG4gICAgZ2FtZWJvYXJkW3hdW3ldID0gc2hpcE9iajtcbiAgICAgXG4gICAgaWYgKHBvc2l0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGdhbWVib2FyZFt4ICsgaV1beV0gPSBzaGlwT2JqO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGdhbWVib2FyZFt4XVt5ICsgaV0gPSBzaGlwT2JqO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ2FtZWJvYXJkO1xuICAvLyB9IFxufSBcblxuZnVuY3Rpb24gY2hlY2tGb3JIaXRzKHgsIHkpIHsgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaXRTaG90cy5sZW5ndGg7IGkrKykgeyBcbiAgICAgIGNvbnN0IGhpdFNob3RDb29yZGluYXRlcyA9IGhpdFNob3RzW2ldO1xuICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGhpdFNob3RDb29yZGluYXRlcykgPT09IEpTT04uc3RyaW5naWZ5KFt4LCB5XSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7IFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gXG5cbiAgZnVuY3Rpb24gY2hlY2tGb3JEdXBsaWNhdGVNaXNzZWRTaG90cyh4LCB5KSB7IFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWlzc2VkU2hvdHMubGVuZ3RoOyBpKyspIHsgXG4gICAgICBjb25zdCBtaXNzZWRTaG90Q29vcmRpbmF0ZXMgPSBtaXNzZWRTaG90c1tpXTtcbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeShtaXNzZWRTaG90Q29vcmRpbmF0ZXMpID09PSBKU09OLnN0cmluZ2lmeShbeCwgeV0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlOyBcbiAgICAgIH0gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgICB9IFxuXG4gICAgLy8gb2sgc28gd2UgZ28gdGhydSB0aGUgaGl0IGFuZCBtaXNzZWQgc2hvdHMgYnV0IHdlIG5lZWQgdG8gZ28gdGhydSB0aGUgZ2FtZWJvYXJkIGFuZCBmaWd1cmUgb3V0IGlmIGEgY2VsbCBpcyBhbHJlYWR5IG9jY3VwaWVkLCBcbiAgICAvLyBsb29wIHRocnUgZ2FtZWJvYXJkIGFuZCBkZXRlcm1pbmUgaWYgY2VsbCBpcyBmcmVlLCB0aGVuIHBsYXllciBjYW4gbWFrZSB0aGVpciBhdHRhY2ssIFxuICBcblxuLy8gYWxsb3dzIHVzZXIgdG8gcGxhY2UgaGl0cyBvbiB0aGUgYm9hcmQgaWYgdGhlIGhpdCBpcyB2YWxpZCwgXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkgeyBcbiAgICBjb25zdCBzaGlwT25Cb2FyZCA9IGdhbWVib2FyZFt4XVt5XTsgXG4gICAgaWYgKHR5cGVvZiBzaGlwT25Cb2FyZCA9PT0gJ29iamVjdCcpIHsgXG4gICAgICBpZiAoY2hlY2tGb3JIaXRzKHgsIHkpKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGFscmVhZHkgYSBoaXQgdGhlcmUsIFxuICAgICAgICAvLyBjaGVjayB0byBtYWtlIHN1cmUgc2FtZSBjZWxsIGlzIG5vdCBiZWluZyBoaXQgdHdpY2UsIFxuICAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdIaXQgd2FzIGFscmVhZHkgcGxhY2VkIGF0IHRoYXQgY2VsbCwgcGljayBhIGRpZmZlcmVudCBjZWxsJyk7XG4gICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gXG4gICAgICBzaGlwT25Cb2FyZC5oaXRJbmNyZW1lbnRvcigpO1xuICAgICAgaGl0U2hvdHMucHVzaChbeCwgeV0pXG5cbiAgICAgIGlmIChzaGlwT25Cb2FyZC5nZXRTaGlwU3RhdHVzKCkpIHsgXG4gICAgICAgIGNvbnNvbGUubG9nKHN1bmtlblNoaXBzQXJyYXkpO1xuICAgICAgIC8vICBpZiAoIXN1bmtlblNoaXBzQXJyYXkuaW5jbHVkZXMoc2hpcE9uQm9hcmQpKSB7IFxuICAgICAgICBzdW5rZW5TaGlwc0FycmF5LnB1c2goc2hpcE9uQm9hcmQpO1xuICAgICAgICAvLyB9IFxuICAgICAgfVxuXG4gICAgfSBlbHNlIHsgXG4gICAgICAvLyBjaGVjayBpZiB0aGVzZSBjb29yZGluYXRlcyBhcmUgaW4gbWlzc2VkU2hvdCBhcnJheSwgaWYgdGhleSBhcmUgbm90LCBwdXNoIHRoZW0gaW50byBtaXNzZWRTaG90IGFycmF5LCBcbiAgICAgIC8vIGlmIGZhbHNlLCBtZWFuaW5nIGNvb3JkaW5hdGVzIGFyZSBub3QgaW5zaWRlIHRoZSBtaXNzZWQgY29vcmRzIGFycmF5IHRoZW4gcHVzaCB1bmlxdWUgY29vcmRzIGluLCBcbiAgICAgIGlmICghY2hlY2tGb3JEdXBsaWNhdGVNaXNzZWRTaG90cyh4LCB5KSkgeyBcbiAgICAgIG1pc3NlZFNob3RzLnB1c2goW3gsIHldKSBcbiAgICAgIH0gXG4gICAgfSBcbiAgICByZXR1cm4geyBcbiAgICAgIG1pc3NlZFNob3RzLCBcbiAgICAgIGhpdFNob3RzXG4gIH1cbn0gICBcblxuZnVuY3Rpb24gYXJlQWxsU2hpcHNTdW5rKCkgeyBcbiAgY29uc29sZS5sb2coJ2FsbCBzaGlwcyBzdW5rIGZ1bmN0aW9uLCBsb2dnaW5nIGN1cnJlbnQgc3Vua2VuU2hpcHNBcnJheScsIHN1bmtlblNoaXBzQXJyYXkpO1xuICBpZiAoc3Vua2VuU2hpcHNBcnJheS5sZW5ndGggPT09IDUpIHsgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gXG4gIHJldHVybiBmYWxzZTtcbn0gXG5cbiAgcmV0dXJuIHtcbiAgICBnZXRHYW1lYm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgY2hlY2tGb3JTaGlwLFxuICAgIGhpdFNob3RzLFxuICAgIG1pc3NlZFNob3RzLFxuICAgIGFyZUFsbFNoaXBzU3VuayxcbiAgICBzdW5rZW5TaGlwc0FycmF5LFxuICAgIGNoZWNrRm9ySGl0c1xuICB9O1xufSBcblxuXG5sZXQgYmF0dGxlU2hpcCA9IHNoaXAoJ0JhdHRsZXNoaXAnLCA0LCAndmVydGljYWwnKTtcbmxldCBkZXN0cm95ZXIgPSBzaGlwKCdEZXN0cm95ZXInLCA0LCAnaG9yaXpvbnRhbCcgKTtcbmxldCBwYXRyb2xCb2F0ID0gc2hpcCgnUGF0cm9sLWJvYXQnLCAyLCAndmVydGljYWwnKTtcbmxldCBjYXJyaWVyQm9hdCA9IHNoaXAoJ0NhcnJpZXInLCA0LCAnaG9yaXpvbnRhbCcpO1xubGV0IHN1Ym1hcmluZSA9IHNoaXAoJ1N1Ym1hcmluZScsIDMsICd2ZXJ0aWNhbCcpO1xubGV0IGdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKTtcblxuXG5cblxuXG5cblxuLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcChiYXR0bGVTaGlwLCAzLCAyLCA0LCAndmVydGljYWwnKTtcbi8vIGdhbWVib2FyZC5wbGFjZVNoaXAoZGVzdHJveWVyLCA0LCA1LCA0LCAnaG9yaXpvbnRhbCcpO1xuLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcChwYXRyb2xCb2F0LCAwLCAwLCAyLCAndmVydGljYWwnKTtcbi8vIGdhbWVib2FyZC5wbGFjZVNoaXAoY2FycmllckJvYXQsIDEsIDIsIDQsICdob3Jpem9udGFsJyk7XG4vLyBnYW1lYm9hcmQucGxhY2VTaGlwKHN1Ym1hcmluZSwgNiwgMywgMywgJ3ZlcnRpY2FsJyk7XG4vLyAvLyBzaW5raW5nIGJhdHRsZXNoaXBcbi8vIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDMsIDIpO1xuLy8gLy8gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soMywgMik7XG4vLyBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayg0LCAyKTtcbi8vIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDUsIDIpO1xuLy8gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soNiwgMik7XG4vLyBnYW1lYm9hcmQuYXJlQWxsU2hpcHNTdW5rKCk7XG4vLyAvLyBzaW5raW5nIGRlc3Ryb3llciBcbi8vIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDQsIDUpO1xuLy8gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soNCwgNik7XG4vLyAvLyBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayg0LCA1KTtcbi8vIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDQsIDcpO1xuLy8gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soNCwgOCk7XG4vLyBnYW1lYm9hcmQuYXJlQWxsU2hpcHNTdW5rKCk7XG4vLyAvLyBzaW5raW5nIHBhdHJvbCBib2FyZFxuLy8gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soMCwgMCk7XG4vLyBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjaygxLCAwKTtcbi8vIGdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKTtcbi8vIC8vIHNpbmtpbmcgY2FycmllciBib2F0XG4vLyBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjaygxLCAyKTsgXG4vLyBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjaygxLCAzKTsgXG4vLyBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjaygxLCA0KTsgXG4vLyBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjaygxLCA1KTsgXG4vLyBnYW1lYm9hcmQuYXJlQWxsU2hpcHNTdW5rKCk7XG4vLyAvLyBzaW5raW5nIHN1Ym1hcmluZVxuLy8gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soNiwgMyk7XG4vLyBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayg3LCAzKTtcbi8vIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDgsIDMpO1xuLy8gZ2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpO1xuXG4vLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdhbWVib2FyZC5zdW5rZW5TaGlwc0FycmF5KSkpO1xuLy8gY29uc29sZS5sb2coJ2NoZWNraW5nIHRoZSBhcnJheSBhZnRlciBzaGlwcyBhcmUgcGxhY2VkIGFuZCBzdW5rJywgZ2FtZWJvYXJkLnN1bmtlblNoaXBzQXJyYXkpO1xuLy8gY29uc29sZS5sb2coZ2FtZWJvYXJkLmdldEdhbWVib2FyZCgpKTtcbi8vIGNvbnNvbGUubG9nKCdjaGVja2luZyB3aGF0IHRoZSBhcmVBbGxTaGlwc1N1bmsgY29uZGl0aW9uYWwgcmV0dXJucycsIGdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKSk7ICBcblxuLy8gY29uc29sZS5sb2coZ2FtZWJvYXJkLmhpdFNob3RzKTtcbi8vIGNvbnNvbGUubG9nKGdhbWVib2FyZC5taXNzZWRTaG90cyk7XG5cblxuXG5cblxuXG5cblxuLy8gY29uc29sZS5sb2coYXJlQWxsU2hpcHNTdW5rKCkpO1xuXG4vLyBmdW5jdGlvbiBhcmVBbGxTaGlwc1N1bmsoKSB7XG4vLyAgIGxldCBhbGxTaGlwcyA9IDU7XG4vLyAgIGxldCBzdW5rU2hpcHMgPSBbXTtcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQubGVuZ3RoOyBpKyspIHsgXG4vLyAgICAgbGV0IGdhbWVib2FyZEFycmF5cyA9IGdhbWVib2FyZFtpXTtcbi8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVib2FyZEFycmF5cy5sZW5ndGg7IGorKykgeyBcbi8vICAgICAgIGxldCBjZWxsID0gZ2FtZWJvYXJkQXJyYXlzW2pdO1xuLy8gICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnRseSBsb2dnaW5nIGFycmF5OicsIGdhbWVib2FyZEFycmF5cylcbi8vICAgICAgICBpZiAodHlwZW9mIGNlbGwgPT09ICdvYmplY3QnKSB7IC8vIGNoZWNraW5nIG9ubHkgb25lIHNoaXAsIGhvdyB0byBjaGVjayBhbGxcbi8vICAgICAgICAgY29uc29sZS5sb2coYGZvdW5kIGEgc2hpcCBhdDogWyR7aX0sICR7an1dYCwgY2VsbClcbi8vICAgICAgICAgY2VsbC5pc1N1bmtDb25kaXRpb25hbCgpO1xuLy8gICAgICAgICBpZiAoY2VsbC5nZXRTaGlwU3RhdHVzKCkpIHsgXG4vLyAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgIH0gZWxzZSB7IFxuLy8gICAgICAgICBjb25zb2xlLmxvZyhgbm8gc2hpcCBmb3VuZCBhdDogWyR7aX0sICR7an1dIWAsIGNlbGwpXG4vLyAgICAgICB9IFxuLy8gICAgIH1cbi8vICAgfSBcbi8vICAgcmV0dXJuIGZhbHNlOyBcbi8vIH0gXG5cblxuIiwiLy8gaW1wb3J0ICcuL3NoaXBGYWN0b3J5LmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgJy4vc2hpcEZhY3RvcnkuanMnO1xuXG5pbXBvcnQgJy4vZ2FtZWJvYXJkRmFjdG9yeS5qcyc7XG5cbmltcG9ydCAnLi9wbGF5ZXJGYWN0b3J5LmpzJztcblxuaW1wb3J0ICcuL2dhbWVNb2R1bGUuanMnO1xuXG5pbXBvcnQgJy4vZG9tTG9naWMuanMnOyBcblxuXG4vLyBpbXBvcnQgJ3NyYy9zdHlsZS5jc3MnO1xuXG4vLyBpbXBvcnQgJ2Rpc3Qvc3R5bGUuY3NzJzsgXG5cblxuLy8gd2hlbiBJIGNvbW1lbnQgb3V0IHN0eWxlcyBpbXBvcnQgaXQgd2lsbCAgd29yayBpbiBzcmMgYnV0IG5vdCBpbiBkaXN0IFxuXG4vLyB3aGVuIEkgdW5jb21tZW50IHRoZSBpbXBvcnQgaXQgd2lsbCB3b3JrIGluIGRpc3QsIGJ1dCBnYW1lYm9hcmQgd2lsbCBub3Qgc2hvdyB1cCBpbiBzcmMsIFxuXG4vLyBJIHN0aWxsIHJlY2VpdmUgdGhlIHNhbWUgZXJyb3IuIEkgbmVlZCB0byBhZGRyZXNzIHRoZSBtaW1lIHR5cGUgZXJyb3IuIFxuXG4vLyB3aGVyZSBkbyBJIHN0YXJ0LCB3ZWJwYWNrIGRldiBzZXJ2ZXIgdGhyb3dpbmcgdGhlIHNhbWUgZXJyb3IgYXMgYmVmb3JlLCBcbi8vIGl0cyB0aGUgc2FtZSBvdXQgb2YgYm91bmRzIGVycm9yLCB3aGVyZSBpdCBjYW4gbm90IGZpbmQgdGhlIGNlbGxzLCBcbi8vIGl0cyBwcmV2ZW50aW5nIG1lIGZyb20gdGVzdGluZyBhbnl0aGluZywgXG4vLyBJIGNhbm5vdCBldmVuIHBsYXkgdGhlIGdhbWUgaW4gZGV2IHNlcnZlciB5ZXQgd29ya3MgZmluZSBpbiBkaXN0LCBcbi8vIHdoYXQgdGhlIGZ1Y2sgYW0gSSBzdXBwb3NlZCB0byBkbz8gXG4vLyBcbi8vIFxuXG5cblxuXG5cblxuXG4vLyBmaWd1cmUgb3V0IHRoZSBsYXN0IGplc3QgZXJyb3IsIFxuLy8gaW4gdGhlIG1lYW50aW1lIHdlIG5lZWQgdG8gZmlndXJlIG91dCBob3cgdG8gc3RhcnQgdGhlIGdhbWUgXG4vLy8gYW5kIHdoYXQgd291bGQgbmVlZCB0byBoYXBwZW4gZm9yIHRoZSBnYW1lIHRvIHN0YXJ0PyBcbi8vIGFsbCBwbGF5ZXIgc2hpcHMgYXJlIHBsYWNlZCBcbi8vIGNvbXBzIHNoaXBzIGFyZSByYW5kb21seSBwbGFjZWQgb24gdGhlIGJvYXJkIFxuXG4vLyB3ZSBuZWVkIGEgd2F5IHRvIGRldGVybWluZSBpZiBhbGwgZml2ZSBwbGF5ZXIgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZFxuLy8gbG9vayBvdmVyIGFuZCBzZWUgd2hhdCB3ZSBjYW4gZmluZCBcblxuLy8gcGxhY2UgcGxheWVyIHNoaXAgZnVuY3Rpb24gXG4vLyBhY2Nlc3MgdGhlIGdhbWVib2FyZCBmb3IgcGxheWVyXG4vLyBsb29wIHRocnUgaXQgYW5kIGluaXQgYW4gYXJyYXksIFxuLy8gaWYgdGhlIGFyciBpcyBlbXB0eSBhbGwgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZCwgc3RhcnQgdGhlIGdhbWUuIFxuXG5cbi8vIGhvdyBjYW4gd2Ugc3RhcnQgdGhlIGdhbWUsIG9uY2UgYWxsIHBsYXllcnMgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZCwgXG4vLyBmaXJzdCBjaGVjayB0aGUgcGxhY2Ugc2hpcCBmdW5jdGlvbnMsIFxuLy8gc29tZXRoaW5nIHRoYXQgd2lsbCBkZXRlcm1pbmUgaWYgYWxsIDUgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZC4gXG4vLyBtYXliZSBpbiB0aGUgZXZlbnQgbGlzdGVuZXIsIFxuLy8gYmVjYXVzZSB0aGUgdXNlciB3aWxsIGhhdmUgdG8gY2xpY2sgYSBzaGlwIG9iamVjdCB0byBwbGFjZSBpdCBcbi8vIHdpdGhpbiB0aGUgcGxhY2Ugc2hpcCBmdW5jdGlvbiwgdXBkYXRlIGEgdmFyaWFibGUsIHRoYXQgcmV0dXJucyBhIGJvb2xlYW4gXG5cbi8vIHdvcmsgb24gY29ycmVjdGx5IGRpc3BsYXlpbmcgdGhlIGdyaWRzIG5leHQgdG8gZWFjaG90aGVyLCBcbi8vIHdpdGggYXBwcmlwcm9hdGUgc3R5bGluZywgXG4vLyB0d28gZ3JpZHMgbmV4dCB0byBlYWNob3RoZXIsIG9uY2UgdGhlIHN0YXJ0IGdhbWUgYnRuIGlzIHByZXNzZWQsIFxuLy8gZm9sbG93IHRoZSBzZXF1ZW5jZSBhZ2FpbiBhbmQgZ2V0IGZhbWlsaWFyLCBcblxuLy8gSSB3YW50IHRoZSBib2FyZCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGNlbnRlciB0byBzdGFydCwgXG4vLyBvbmNlIHRoZSBvdGhlciBzaGlwIGlzIGFkZGVkIHRvIG1ha2VzIHNwYWNlIGZvciB0aGUgbmV3IG9uZSwgXG4vLyBtYWtlIHN1cmUgdGhlIGJvYXJkcyBhcmUgcHJvcGVybHkgZGlzcGxheWVkLCBvbmNlIHRoZSBzdGFydCBnYW1lIGJ0biBpcyBwcmVzc2VkXG4vLyBidG4gaXMgcHJlc3NlZCwgcmVtb3ZlcyB0aGUgYnRucywgdGhlIHNoaXAgb2JqZWN0cywgZGlzcGxheXMgdGhlIGNvbXB1dGVyIGJvYXJkIFxuLy8gYW5kIHRoZSBwbGF5ZXJzIGJvYXJkLCB0aGVuIHRoZSBnYW1lIGNhbiBzdGFydCxcblxuLy8gY29tbWl0IGFuZCBzYXZlIHdvcmsgYmVmb3JlIG1vdmluZyBmb3J3YXJkLCBcbi8vIG5leHQgZ2FtZSB3aWxsIHN0YXJ0LCBcbi8vIGJ1dCBiZWZvcmUgdGhlbiwgbWFrZSBzdXJlIHlvdSBjb25uZWN0IHRoZSBuZXcgZ2FtZWJvYXJkIHRvIHRoZSBjb21wdXRlci9QQyB1c2VyXG4vLyBjb25uZWN0IHRoZSBnYW1lYm9hcmRzLiAgXG5cbi8vIGl0IHNlZW1zIGxpa2UgdGhlIGdhbWVib2FyZHMgYXJlIGNvbm5lY3RlZCwgXG4vLyB3ZSBjYW4gc3RhcnQgdGhlIGdhbWUsIFxuLy8gb25jZSBzdGFydCBnYW1lIGJ0biBpcyBjbGlja2VkLCBwbGF5ZXJzIGhhdmUgdGhlaXIgYm9hcmRzLiBcbi8vIGNhbGwgcGxheUdhbWUgYW5kIGdldCB0aGUgYm9hcmRzIHdpdGggc2hpcHMgb24gdGhlbSBcblxuLy8gc2hvdWxkIEkgdG90YWxseSByZWZhY3RvciBnYW1lIG1vZHVsZT8gXG4vLyBpdCBoYXMgYWxsIHRoZSBpbmZvIHdlIG5lZWQsIFxuLy8gY2hlY2tpbmcgaWYgYWxsIHNoaXBzIGFyZSBzdW5rIFxuLy8gYXR0YWNrIG1ldGhvZHMsIFxuLy8gZ2FtZSBsb29wIHRoYXQga2VlcHMgcGxheWluZyB1bmRlciBhIGNlcnRhaW4gY29uZGl0aW9uIFxuLy8gZmlyc3Qgd2UgbmVlZCBhIHdheSB0byBhY2Nlc3MgcGxheWVycyBhbmQgY29tcHV0ZXJzIGJvYXJkIHdpdGhpbiBnYW1lIG1vZHVsZSwgXG4vLyB0aGUgdXBkYXRlZCBib2FyZHMgbmVlZCB0byBiZSBhY2Nlc3NlZCB3aXRoaW4gdGhhdCBtb2R1bGUsIFxuXG4vLyBJIGNhbiBhY2Nlc3MgdGhlIGdhbWVib2FyZCB2YXJpYWJsZXMgd2l0aGluIGdhbWVNb2R1bGUgXG4vLyBob3cgd2lsbCBJIHVwZGF0ZSBteSBkYXRhIHdpdGhpbiBnYW1lIG1vZHVsZSwgXG4vLyB0byB1c2UgdGhlc2UgbmV3IHZhcmlhYmxlcy4gXG4vLyBJIHRoaW5rIEkgbmVlZCB0byBsb29rIG92ZXIgdGhlIGdhbWUgbW9kdWxlIFxuLy8gYW5kIGRldGVybWluZSBob3cgdGhpcyBjYW4gYmUgdXNlZCwgXG4vLyBJIHRoaW5rIHZhcmlhYmxlcyB3aWxsIG5lZWQgdG8gYmUgdXBkYXRlZCB3aXRoaW4gZ2FtZSBtb2R1bGUgXG4vLyB0aGUgZ2FtZWJvYXJkcyBhcmUgdXBkYXRlZCBhbmQgY29tcGxldGVkIHdpdGhpbiBkb21Mb2dpYyBcbi8vIHBhc3NlZCB0byBnYW1lIG1vZHVsZSBcbi8vIGFuZCB0aGF0IGJvYXJkIHVzZWQgd2l0aGluIHRoZSBnYW1lIG1vZHVsZSBcbi8vIHNhdmUgYW5kIGNvbW1pdCB3b3JrIHRoZW4gYmVnaW5cblxuXG4vLyBvayB3ZSBuZWVkIHRvIGZvbGxvdyB0aGlzIHByb2Nlc3MsIFxuLy8gYm9hcmRzIGFyZSBkaXNwbGF5ZWRcbi8vIHRpbWUgZm9yIHBsYXllcnMgYXR0YWNrLCBwbGF5ZXIgY2xpY2tzIG9uIGNvbXBzIGJvYXJkXG4vLyBzb21ldGhpbmcgd2lsbCBuZWVkIHRvIGRldGVybWluZSBpZiB0aGUgaGl0IHdhcyBzdWNjZXNzZnVsLFxuLy8gb25jZSBjbGlja2VkIG9uIGEgY2VsbCBvbiB0aGUgY29tcHMgYm9hcmQsIHRob3NlIGNvb3JkaW5hdGVzIHdpbGwgYmUgc2F2ZWQgXG5cblxuLy8gd2UgYXJlIGRpc3BsYXlpbmcgdGhlIGJvYXJkcywgXG4vLyBwbGF5ZXIgd2lsbCBjbGljayBvbiBjb21wdXRlcnMgYm9hcmQgXG4vLyBhbmQgdGhvc2UgY29vcmRpbmF0ZXMgd2lsbCBuZWVkIHRvIGdldCBzYXZlZCwgXG4vLyBpZiBhIGhpdCBhcHBseSBzdHlsZXMgdG8gdGhlbSwgXG4vLyBpZiBhIG1pc3MgYXBwbHkgc3R5bGVzIHRvIHRoZW0sIFxuLy8gd2UgbmVlZCB0byBmaWd1cmUgb3V0IHdoYXQgd2Ugd2lsbCBkbyB3aXRoIHRoZSBjb29yZGluYXRlcyBcbi8vIGNvb3JkaW5hdGVzIHRoYXQgYXJlIGNsaWNrZWQgb24gYXJlIHRoZSBwbGF5ZXJzIGF0dGFjayBcbi8vIGRldGVybWluZSBpZiB0aGUgY29vcmRpbmF0ZXMgYXJlIGEgaGl0IG9yIG1pc3MsIGluIHRoZSBhdHRhY2sgbWV0aG9kLCBcbi8vIHRoZW4gY2FsbCB0aGUgZG9tIGZpbGUgYWdhaW4gdG8gYSBmdW5jdGlvbiB3aGljaCBhcHBsaWVzIHN0eWxlcyB0byB0aGUgY29vcmRpbmF0ZXMgXG5cblxuLy8gQ1VSUkVOVCBQTEFOXG4vLyB3b3JraW5nIG9uIHBsYXlpbmcgdGhlIGdhbWUsIFxuLy8gcGxheSBnYW1lIGlzIGFjdHVhbGx5IGNhbGxlZCB3aXRoaW4gdGhlIGV2ZW50IGxpc3RlbmVyIFxuLy8gb25jZSBhIGNlbGwgaXMgY2xpY2tlZCBvbiB0aGUgY29tcHV0ZXJzIGJvYXJkLCB0aGF0IHdpbGwgYmUgdGhlIHBsYXllcnMgYXR0YWNrXG4vLyByaWdodCBub3cgSSBjYW4gb25seSBwbGFjZSBhdHRhY2tzIG9uIHRoZSBjb21wdXRlcnMgYm9hcmQsIEkgY2FuIHNpbmsgYWxsIHRoZSBzaGlwcyBhbmQgaXQgd2lsbCBkZXRlcm1pbmUgdGhhdCBJIHdvbiwgXG4vLyBidXQgdGhlIHByb2JsZW0gc2VlbXMgdG8gYmUgdGhlIGxvb3AsIFxuLy8gdGVzdCBhZ2FpbiBidXQgd2l0aG91dCB0aGUgbG9vcCwgIEkgY2FuIG1ha2UgdGhlIHBsYXllciB3aW4sIG9ubHkgcGxheWVyIHR1cm4gaXMgd29ya2luZywgSSBjYW4gc2luayBhbGwgdGhlIGNvbXBzIHNoaXAgXG4vLyBhbmQgcHJpbnQgdGhlIHdpbm5lciB3aGljaCB3b3VsZCBiZSBwbGF5ZXIgXG4vLyB3aHkgd2hlbiBJIGFkZCB0aGUgbG9vcCB3aGljaCBzaW1wbHkga2VlcHMgcGxheWluZyBpZiB0aGVyZSBhcmUgc3RpbGwgc2hpcHMgb24gcGxheWVycyBib2FyZCBhbmQgY29tcHV0ZXJzIGJvYXJkLCBpdCB3aWxsIG5vdCB3b3JrIGNvcnJlY3RseVxuLy8gV0hZIENBTiBDT01QIEhJVCBUSEUgU0FNRSBDRUxMIFRXSUNFLCBJIEhBVkUgQ0hFQ0tTIEFHQUlOU1QsIFdIWSBBUkUgVEhPU0UgTk9UIFdPUktJTkchISEhISE/IFxuXG4vLyBwcm9ibGVtIDEgdHJ5aW5nIHRvIGdldCB0aGUgZ2FtZSBsb29wIHRvIHByb3Blcmx5IHdvcmssIFxuLy8gcHJvYmxlbSAyIHdoeSBhcmUgY29tcHV0ZXIgYW5kIHVzZXIgc3RpbGwgYWJsZSB0byBoaXQgdGhlIHNhbWUgY2VsbCB0d2ljZT8gXG4vLyB1c2VyIGNsaWNrcyBvbiBjb21wcyBnYW1lYm9hcmQsIG9uY2UgY2xpY2tlZCBpdCB3aWxsIHRyaWdnZXIgdGhlIGdhbWUsIFxuLy8gd2hhdGV2ZXIgY2VsbCB1c2VyIGNsaWNrcyBpcyBoaXMgYXR0YWNrLCBcbi8vIHRoZW4gdGhlIGdhbWUga2VlcCBwbGF5aW5nIGFzIGxvbmcgYXMgYm90aCBwbGF5ZXIgYW5kIGNvbXB1dGVyIGhhdmUgc2hpcHMgc3RpbGwgb24gdGhlIGJvYXJkLCBcbi8vIGN1cnJlbnRseSB3aXRoIG15IGxvb3Agb25seSBwbGF5ZXIsIGNhbiBtYWtlIGhpcyBtYXJrLCBpdCB3b24ndCBzd2l0Y2ggdHVybnMsIGl0IHdpbGwgbGV0IG1lIHNpbmsgc2hpcHMgYW5kIHByaW50IHdpbm5lciwgXG4vLyBidXQgd2h5IHdpbGwgaXQgbm90IHN3aXRjaCB0dXJucyBhbmQgd2h5IGlzIGl0IGhpdHRpbmcgdGhlIHNhbWUgY2VsbCB0d2ljZT8gXG5cblxuXG4vLyBDVVJSRU5UIFBMQU4gOS8xMiBcbi8vIGZpcnN0IHNwZW5kIGEgbGl0dGxlIHRpbWUgdW5kZXJzdGFuZGluZyBiZWhhdmlvciBhZ2FpbiwgXG4vLyB0aGVuIHRoZSBwbGFuIHNlZW1zIHRvIGJlIGdldHRpbmcgdGhlIGhvdmVyIGNsYXNzIHdvcmtpbmcgZmlyc3QsIFxuLy8gd2UgbmVlZCB0byB0aGluayBvZiB0aGUgZmxvdyBvZiB0aGUgZ2FtZSwgXG4vLyB5b3Ugc2hvdWxkIGZpcnN0IGJlIGFibGUgdG8gaG92ZXIgb3ZlciB0aGUgY29tcHMgZ2FtZWJvYXJkIFxuLy8gdG8gZGV0ZXJtaW5lIHdoZXJlIHlvdSB3YW50IHRvIHBsYWNlIHRoZSBoaXRcbi8vIHBsYXllciBjbGlja3Mgb24gYSBjZWxsLCB0aGF0IGlzIGhpcyBhdHRhY2ssIHNvIHRoYXQgdHJpZ2dlcnMgdGhlIGdhbWUsIFxuLy8gcGxheUdhbWUgaXMgY2FsbGVkLCBpcyBpdCBhIHByb2JsZW0gdGhhdCBwbGF5R2FtZSBpcyBjYWxsZWQsIHdpdGhpbiB0aGUgbGlzdGVuZXIsIFxuLy8gYmVjYXVzZSBJIG5lZWQgc29tZXdheSB0byBwYXNzIHRoZSBjb29yZGluYXRlcywgd2hhdCBjZWxscyBkaWQgdGhlIHBsYXllciBjbGljaywgd2hhdCBpcyBwbGF5ZXJzIGF0dGFjaz8gXG4vLyB0aG9zZSBjb29yZGluYXRlcyBnZXQgcGFzc2VkIHRoZSBwbGF5R2FtZSBmdW5jdGlvbiwgcGxheWVyIG1ha2VzIG1hcmssIGNoZWNrcyBmb3Igd2lubmVyLCBcbi8vIHRoZW4gc3dpdGNoZXMgdHVybiwgdG8gY29tcCwgcmFuZG9tIGNvb3JkcyBhcmUgc2VsZWN0ZWQgYW5kIGNvbXAgbWFrZXMgdGhlaXIgbWFyayBcbi8vIGNoZWNrcyBmb3Igd2lubmVyLCBcbi8vIEkgZG9udCB0aGluayB3ZSBuZWVkIGEgbG9vcCBlaXRoZXIsIGkgbWF5IHBvc3NpYmx5IGhhdmUgdG8gcmVjb25zaWRlciBhbmQgcmVmYWN0b3IgYnV0IHRoZSBnYW1lIHdpbGwgZGVwZW5kIG9uIHBsYXllciBtYWtpbmcgaGlzIG1hcmssIFxuLy8gY29vcmRzIGFyZSBwYXNzZWQgdG8gcGxheSBnYW1lLCBjZWxsIHRoYXQgd2FzIGNsaWNrZWQgb24gY29tcHMgYm9hcmQgd2lsbCBiZSBwbGF5ZXJzIGF0dGFjaywgdGhlbiB0dXJuIHN3aXRjaGVzIHRvIGNvbXBzLCB3aGljaCBpcyByYW5kb20gYXR0YWNrLCBcbi8vIGFmdGVyIGVhY2ggcGxheWVyIG1ha2VzIGF0dGFjaywgdHVybiBzd2l0Y2hlcywgXG4vLyBnYW1lIGN5Y2xlIGRlcGVuZHMgb24gcGxheWVycyBjbGljaywgY2hlY2tpbmcgZm9yIHdpbm5lciwgc3dpdGNoaW5nIHR1cm5zLCBjeWNsZSByZXBlYXRzIFxuLy8gXG4vLyBmaXJzdCBsZXRzIGRvIGEgaG92ZXIgY2xhc3Mgb3ZlciB0aGUgY29tcHMgYm9hcmQsIHBsYXllciBzaG91bGQgc2VlIHdoZXJlIHRoZXkgYXJlIGFib3V0IHRvIHBsYWNlIHRoZWlyIGhpdC4gXG4vLyBob3ZlciBjbGFzcyB0YWtlbiBjYXJlIG9mLCBuZXh0IGxldHMgc3R5bGUgdGhlIHBsYXllcnMgbWFyaywgXG4vLyBhdHRhY2sgbWV0aG9kIHdpbGwgZGV0ZXJtaW5lIGlmIGhpdCBvciBub3QgXG4vLyBob3cgY2FuIHdlIGRldGVybWluZSBpZiBpdCB3YXMgYSBoaXQgb3Igbm90PyBcbi8vIEkgdGhpbmsgd2UgYWxzbyBuZWVkdG8gcGFzcyB0aGUgZW5lbXkncyBnYW1lYm9hcmQgdG8gZGV0ZXJtaW5lIGlmIGhpdCBvciBub3QgZnVuY3Rpb24sIFxuLy8gdGFrZXMgdGhlIGNvb3JkcyBhbmQgZW5lbXkncyBnYW1lYm9hcmQuIGlmIGl0IGhpdCBzdHlsZSB0aGUgY2VsbCBvbiB0aGUgZW5lbXlzIGJvYXJkLCBcbi8vIGxldCBlbmVteXNDdXJyZW50Qm9hcmQgPSBlbmVteXNib2FyZC5nYW1lYm9hcmQuaGl0U2hpdHMoKSBcblxuLy8gaGlnaGxpZ2h0aW5nIHRoZSBwbGF5ZXJzIGdhbWVib2FyZCwgcXVlcnkgc2VsZWN0IHRoZSBjb21wdXRlcnMgZ2FtZWJvYXJkIGNlbGxzIE9OTFkhIFxuLy8gbWFrZSBzdXJlIHlvdSBhY2Nlc3MgdGhlIGNvbXB1dGVycyBnYW1lYm9hcmQgY2VsbCB0aGF0IHdhcyBjbGlja2VkIG9uLCB5b3UgYXJlIGFjY2Vzc2luZyB0aGUgcGxheWVycyBnYW1lYm9hcmQgY2VsbCwgXG4vLyBjaGFuZ2UgdGhlIGRhdGEgcm93IGFuZCBjb2x1bW4gYXR0cmlidXRlIGZvciBjb21wdXRlciBnYW1lYm9hcmQgZnVuY3Rpb25cbi8vIEkgd2FudCB0byBsb2cgYmFjayB0aGUgY29tcHV0ZXJzIERPTSBjZWxsIHRoYXQgd2FzIGNsaWNrZWQgdXNpbmcgdGhlIGNvcnJlY3QgZGF0YSBhdHRyaWJ1dGVzIFxuLy8gc2hvdWxkIEkgY2hhbmdlIHRoZSB2YXJpYWJsZSB0aGF0IGFzc2lnbnMgdGhlIGRhdGEtc2V0LCBob3cgY2FuIEkgcHJvcGVybHkgc2V0IGEgZGF0YS1zZXQgZm9yIGNvbXBzIERPTSBjZWxscyBvbiB0aGUgZ2FtZWJvYXJkIFxuLy8gZGF0YSBzZXQgZm9yIGNvbXBzIGJvYXJkIG5vdyB3b3JraW5nIG9rLCBcbi8vIG5vdyB1c2UgY29uZGl0aW9uYWwgdG8gZGV0ZXJtaW5lIGlmIHRoZSBjbGlja2VkIG9uIGNvb3JkaW5hdGUgaXMgYSBoaXQsIG1lYW5pbmcgaXQncyBhbHJlYWR5IGluIHRoZSBoaXQgc2hvdHMgYXJyYXlcblxuLy8gaGl0IHNob3RzIGFyZSB3b3JraW5nIG9uIGNvbXBzIGJvYXJkLCBidXQgSSB0aGluayBJIG5lZWQgdG8gbWFrZSBhIG5ldyBmdW5jdGlvbiwgd2hpY2ggZG9lcyB0aGUgc2FtZSBsb2dpYywgYnV0IGZvciBjb21wdXRlciBhdHRhY2tcbi8vIGJlY2F1c2Ugd2l0aGluIGF0dGFjayBJIGFtIGFjY2Vzc2luZyB0d28gZGlmZmVyZW50IGJvYXJkcyB1c2luZyBxdWVyeSBzZWxlY3RvciwgSSBmaW5kIHRoYXQgZGlmZmljdWx0IHRvIGRvIGluIG9uZSBmdW5jdGlvbiwgXG5cbi8vIHRvbmlnaHQsIGNoYW5nZSBhdHRhY2sgY3VycmVudGx5IHRvIHBsYXllckF0dGFjaywgYW5kIG1ha2UgYW5vdGhlciBmdW5jdGlvbiBjb21wdXRlckF0dGFjaywgd2hpY2ggdXNlcyB0aGUgc2FtZSBwcm9jZXNzLCBcblxuLy8ganVzdCBwYXNzaW5nIGluIGEgZGlmZmVyZW50IGJvYXJkIGFuZCBjb29yZGluYXRlcywgXG5cbi8vIGZvciBwbGF5ZXIsIGl0IGhpdCBpcyBnb29kLCBoaWdobGlnaHQgcmVkLCBcbi8vIGVsc2UgaGlnaGxpZ2h0IHRoZSBjZWxsIGJsdWUgb3IgZ3JlZW4sIG1ha2Ugc3VyZSB0aGUgcGxheWVyIGtub3dzIHRoYXQgaXMgaXMgYSBtaXNzLCB0aGVuIGFwcGx5IHRoZSBzYW1lIGxvZ2ljIGZvciB0aGUgY29tcHV0ZXIsIFxuXG4vLyB0aGVuIHR1cm4gc3dpdGNoaW5nIGxvZ2ljL2xvb3AsIFxuLy8gbWFraW5nIHN1cmUgY2VsbHMsIGNhbm5vdCBnZXQgaGl0IHR3aWNlLCBcbi8vIHJlbW92ZSBob3ZlciBjbGFzcyBvbiBwbGF5ZXJzIGJvYXJkIGFmdGVyIHN0YXJ0IGdhbWUgXG5cbi8vIGNvbnRpbnVlIHRvIHdvcmsgb24gbWFraW5nIHN1cmUgaWYgYSBtaXNzIGhhcHBlbnMgb24gY29tcHMgYm9hcmQsIGl0IHdpbGwgdHVybiBibHVlIGZvciBtaXNzLCByZWQgZm9yIGhpdC4gXG4vLyB0aGVuIHdvcmsgb24gbWFraW5nIHN1cmUgdGhlIHR1cm5zIGFyZSBzd2l0Y2hpbmcsIFxuLy8gbWFrZSBzdXJlIGNlbGxzIGNhbm5vdCBnZXQgaGl0IHR3aWNlIGZvciBzdXJlLCBcbi8vIGZpcnN0IGxldHMgbWFrZSBzdXJlIG1pc3NlcyBvbiB0aGUgY29tcHMgYm9hcmQgdHVybiBibHVlIFxuXG4vLyB1c2UgYSBsb29wIHRvIGNoZWNrIGZvciBoaXQgc2hvdHMgb3IgbWlzc2VkIHNob3RzLCB0cnkgdGhlIHNhbWUgcHJvY2VzcyBhcyBoaXRzXG5cbi8vIE9LIGxvb2tzIGxpa2UgSSBoYXZlIGEgc3lzdGVtIGRvd24gZm9yIGhpdCBzaG90cyBhbmQgbWlzc2VkIHNob3RzIG9uIHBsYXllcnMgYm9hcmQsIFxuXG4vLyBub3cgSSB3aWxsIG5lZWQgdG8gZG8gdGhlIHNhbWUgZm9yIHRoZSBjb21wdXRlciwgcmFuZG9tIGF0dGFja3MsIGlmIGhpdCB0dXJuIHJlZCwgaWYgbWlzcyB0dXJuIGJsdWUsIFxuXG4vLyBpcyB0aGlzIHRoZSB0aW1lIHRvIGRldGVybWluZSB0dXJuIHN3aXRjaGluZyBsb2dpYz8gXG5cbi8vIGhhdmUgdGhlIGFiaWxpdHkgdG8gc3dpdGNoIHR1cm5zIG5vdywgXG4vLyBvciBqdXN0IG1ha2UgdGhlIGxvZ2ljIGZvciB0aGUgY29tcHV0ZXIgdG8gbWFrZSB0aGVpciBtYXJrIGFuZCBhcHBseSBzdHlsZXMsIFxuLy8gSSdtIGxlYW5pbmcgdG8ganVzdCBtYWtlIHRoZSBsb2dpYyBub3csIGFuZCBmbGlwIHRoZSBwbGF5ZXIgdHVybiB0byAyLCB0byB0ZXN0IGlmIGNvbXB1dGVyIHN0eWxlcyB3b3JrLCBcbi8vIHNob3VsZCBqdXN0IGtlZXAgcmFuZG9tbHkgZ2VuZXJhdGluZyBjb29yZGluYXRlcywgXG5cbi8vIG1ha2UgbG9naWMgZm9yIGNvbXBzIHNlbGVjdGlvbiwgc3R5bGluZyBcbi8vIGhpdCBjb29yZGluYXRlcyBkbyBub3QgZ2V0IGNvdW50ZWQgYWdhaW4sIGNhbm5vdCBoaXQgc2FtZSBjZWxsIHR3aWNlLCBidXQgbWlzc2VkIENvb3JkaW5hdGVzIGNhbiBiZSBzYXZlZCB0d2ljZSwgY2FuIGhpdCB0aGUgc2FtZSBtaXNzZWQgY2VsbCB0d2ljZSwgXG5cbi8vIHdlIG5lZWQgdG8gZmlndXJlIG91dCB0dXJuIHN3aXRjaGluZyBsb2dpYywgcGxheWVyIG1ha2VzIG1hcmssIGRldGVybWluZSBpZiBoaXQgb3IgbWlzcywgY2hlY2sgZm9yIHdpbm5lciwgc3dpdGNoIHBsYXllcnMsIFxuLy8gY29tcCBtYWtlcyBtYXJrLCBkZXRlcm1pbmUgaWYgaGl0IG9yIG1pc3MsIGNoZWNrIHdpbm5lciwgc3dpdGNoIHBsYXllcnMsIFxuLy8gd2hlcmUgZWxzZSBjb3VsZCBJIHN3aXRjaCBwbGF5ZXJzIGlmIEkgd2FudGVkIHRvIG1ha2UgdGhpcyB3b3JrLCBcbi8vIHBsYXllciB3aWxsIGdvIGZpcnN0IGJ1dCBvbmNlIGhlIG1ha2VzIGhpcyBtYXJrLCBjb21wIHNob3VsZCBiZSBhYmxlIHRvIG1ha2UgaGlzIG1hcmssIFxuXG4vLyB0dXJuIHN3aXRjaGluZyBsb2dpYywgXG4vLyBzZWVtcyBsaWtlIHdoZW4geW91IHNpbmsgYSBzaGlwIGl0IGlzIHNpbmtpbmcgdGhlIHNhbWUgc2hpcCBvYmplY3QgdHdpY2UsIFxuLy8gc28gd2hlbiBhbGwgc2hpcHMgYXJlIHN1bmsgMTAgc2hpcHMgYXJlIGluc2lkZSB0aGUgc3Vua2VuU2hpcHNBcnJheSBcbi8vIGRvdWJsZSBjaGVjaywgYW5kIG1heWJlIHVzZS9wbGFjZSBkaWZmZXJlbnQgc2hpcCBvYmplY3RzIG9uIGNvbXB1dGVycyBib2FyZCwgXG4vLyB3aGVuIHNoaXBzIGFyZSBwbGFjZWQsIHRoZXkgY291bGQgYmUgcGxhY2luZyB0d2ljZSwgb3Igb3ZlcmxhcHBpbmcgb3ZlciB0b3Agb2YgZWFjaG90aGVyLCB0aGF0IGlzIHdoeSBzb21lIHNoaXBzIGFyZSBiZWluZyBzdW5rIHR3aWNlLCBcbi8vIHRoZSB0YXJnZXQgd2lsIGJlIHRvIGxvb2sgb3ZlciB0aGUgcGxhY2VDb21wdXRlclNoaXBzIGZ1bmN0aW9uIGluIHRoZSBkb21Mb2dpYyBcblxuLy8gc29tZSBzaGlwcyBhcmUgYmVpbmcgc3VuayB0d2ljZT8gc28gdGhhdCBtZWFucyBwbGF5ZXIgY2FuIHdpbiBlYXJseSBpZiB0aGUgc3Vua2VuU2hpcHMgYXJyYXkgaXMgNSwgZXZlbiB0aG91Z2ggb25seSAzIHNoaXBzIGhhdmUgYmVlbiBzdW5rLiBcbi8vIGNhcnJpZXIgYmVpbmcgc3VuayB0d2ljZT8/PyBcblxuXG5cbi8vIDkvMTMgY3VycmVudCBwbGFuLCBcbi8vIGNsZWFuIHVwIHRoZSBjb21tZW50cyBpbiB0aGUgY29kZSwgZm9yIGRvbUxvZ2ljIGFuZCBnYW1lIG1vZHVsZSBcbi8vIHRoZW4gZmlndXJlIG91dCBhIGJldHRlciBtZXRob2QgZm9yIGNoZWNraW5nIGlmIGFsbCBzaGlwcyBhcmUgc3VuaywgdGhpcyBpcyBhIG11c3QsIFxuLy8gdGhlbiBkZXRlcm1pbmUgd2h5IHNvbWUgc2hpcCBvYmplY3RzIGFyZSBiZWluZyBzdW5rIHR3aWNlLCBcbi8vIEkgY2FuIGZpcnN0IHRlc3Qgd2l0aCB0aGUgbmVzdGVkIGxvb3AgYW5kIHNlZSBpZiB0aGF0IG1ha2VzIGEgZGlmZmVyZW5jZSwgaXQgdGhhdCBmYWlscywgdGhlbiBJIG5lZWQgdG8gdGhpbmsgb2YgYSBiZXR0ZXIgc3lzdGVtIFxuLy8gcGxhY2UgaXQgdmVydGljYWxseSBhbmQgaXQgd2lsbCBiZSA0LCBob3Jpem9udGFsbHkgd2lsbCBiZSBvbmUsIHNvIHNlZW1zIGxpa2UgaXQgaXMgbm90IGFjY291bnRpbmcgZm9yIGl0cyBmdWxsIGxlbmd0aCBcblxuLy8gdHJ5aW5nIHRvIGZpZ3VyZSBvdXQgYSBzeXN0ZW0gdG8gY2hlY2sgaWYgYWxsIHBsYXllciBzaGlwcyBhcmUgc3VuaywgYmVmb3JlIEkgd2FzIG1ha2luZyBhIGxvb3AgdGhlbiBkZXRlcm1pbmluZyBpZiB0aGF0IGNlbGwgaW5jbHVkZWQgYSBzaGlwIG9iamVjdCwgaWYgaXQgZGlkIFxuXG4vLyBJIFdvdWxkIGtlZXAgYSBjb3VudGVyLCBhbmQgaWYgYWxsIHNoaXBzIHBsYWNlZCBhbmQgZXF1YWxlZCAxOCAodGhlIGxlbmd0aCBvZiBhbGwgc2hpcHMgd2hlbiBwbGFjZWQpIHRoZSBnYW1lIGNvdWxkIHN0YXJ0LCB0aGF0IG9ubHkgd29ya3MgZm9yIG9uZSBkaXJlY3Rpb24sIFxuLy8gXG5cbi8vIHNvIG5vdyB0aGUgcHJvYmxlbSBpcyB3aHkgYXJlIGNlcnRhaW4gc2hpcHMgYmVpbmcgc3VuayB0d2ljZT8gXG4vLyB0aGF0IGludGVyZmVycyB3aXRoIHRoZSBkZXRlcm1pbmcgaWYgYWxsIHNoaXBzIGFyZSBzdW5rIGZ1bmN0aW9uLCBcbi8vIEkgd291bGQgZ28gYmFjayBhbmQgZGV0ZXJtaW5lIGhvdyBzaGlwcyBhcmUgYmVpbmcgcGxhY2VkLCBcbi8vIGJ1dCB5ZXQgdGhlIHBsYWNlbWVudCBvZiB0aGUgc2hpcHMgYXJlIGZpbmUsIFxuLy8gaXQgZG9lcyBub3Qgc2VlbSBsaWtlIHNoaXBzIGFyZSBvdmVybGFwcGluZyBcbi8vIEZvbGxvdyB0aGUgY29kZSBleGVjdXRpb24sIHRoZSBzdW5rZW4gc2hpcHMgYXJyYXkgYW5kIHdoZW4gdGhpbmdzIGFyZSBiZWluZyBwdXNoZWQgdG8gaXQuIFxuXG4vLyBnZXR0aW5nIHNvbWUgb2RkIGJlaGF2aW9yLCBcbi8vIHNvbWUgc2hpcHMgYXJlIGJlaW5nIHBsYWNlZCBmaW5lLCBvdGhlcnMgSXQgc2VlbXMgbGlrZSBhcmUgZ2V0dGluZyBwbGFjZWQgdG9vIGVhcmx5LFxuLy8gc28gc2hpcHMgZ2V0IGFkZGVkIHRvIHRoZSBzdW5rZW5TaGlwcyBhcnJheSBtb3JlIHRoYW4gb25jZSwgXG4vLyBob3dldmVyIGZvbGxvd2luZyB0aGUgY29kZSBleGVjdXRpb24gYW5kIGxvb2tpbmcgb3ZlciB0aGUgZnVuY3Rpb3NuIEkgaGF2ZSBjcmVhdGVkLCBJIGFtIG5vdCBzdXJlIHdoeSB0aGlzIHdvdWxkIGJlIG9jY3VyaW5nXG4vLyBJIHRoaW5rIEkgZm91bmQgdGhlIGlzc3VlLCBJIHRoaW5rIG9uY2UgYSBzaGlwIGlzIHN1bmssIHRoZSBpc1NVbmsgc3RhdHVzIHR1cm5zIHRvIHRydWUsIGFuZCBpdCBhbHNvIHNpbmtzIHRoZSBjb3JyZXNwb25kaW5nIHBsYXllciBzaGlwLCBcbi8vIGNvbXBhcmUgYm9hcmRzIHRvIHNlZSBpZiB5b3Ugc2luayBvbmUgc2hpcCwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IHNpbmsgdGhlIHBsYXllcnMgc2hpcHMsIFxuLy8gdGhhdCBpc250IHRoZSBpc3N1ZSwgcGF0cm9sIGJvYXQgb24gY29tcHMgYm9hcmQgd2FzIHN1bmsgYnV0IHlldCB5b3UgY2hlY2sgcGxheWVycyBib2FyZCwgdGhlIHN1bmtlbiBzaGlwIGFycmF5IHdhcyBzdGlsbCBlbXB0eS4gXG5cbi8vIGZpZ3VyZWQgb3V0IHRoZSBwcm9ibGVtIHRoZXJlLCBJIGFtIG5vIGxvbmdlciBzZWVpbmcgc2hpcHMgYmVpbmcgYWRkZWQgbW9yZSB0aGFuIG9uY2UgdG8gdGhlIHN1bmtlbiBzaGlwcyBhcnJheSwgXG4vLyBub3cgSSBuZWVkIHRvIGZpZ3VyZSBvdXQsIGhvdyB0byBwcmV2ZW50IHBsYXllciBmcm9tIGhpdHRpbmcgdGhlIHNhbWUgbWlzc2VkIGNvb3JkaW5hdGUgY2VsbCB0d2ljZS4gXG5cblxuXG4vLyA5LzE0IGN1cnJlbnQgcGxhbiwgXG5cbi8vIGdldCBmYW1pbGFyIHdpdGggdGhlIGdhbWUgYWdhaW4sIFxuLy8gbWFrZSBzdXJlIGEgd2lubmVyIG1vZGFsIGlzIHByaW50ZWQgd2l0aCBhbiBvcHRpb24gdG8gcmVzdGFydCB0aGUgZ2FtZSwgXG4vLyBtYWtlIHN1cmUgdGhhdCBlYWNoIHRpbWUgcGxheUdhbWUgaXMgY2FsbGVkIHdpdGggdGhlIHBhc3NlZCBjb29yZGluYXRlcywgdGhhdCBwbGF5ZXIgbXVzdCBtYWtlIGEgdW5pcXVlIGhpdCBlYWNoIHRpbWUsIFxuLy8gcmlnaHQgbm93IGZyb20gd2hhdCBJIHJlbWVtYmVyLCB5b3UgY2FuIGhpdCB0aGUgc2FtZSBjZWxsIHR3aWNlLCBhbmQgaXQgd2lsbCBzd2l0Y2ggdHVybnMsIFxuLy8gaXQgc3dpdGNoZXMgdHVybnMgYWZ0ZXIgeW91IGNsaWNrIGEgYnV0dG9uLCBzd2l0Y2ggdHVybnMgb25seSB3aGVuIHRoZSBwbGF5ZXIgaGFzIGhpdCBhIHVucWl1ZSBzcXVhcmUsIFxuLy8gSSB3b3VsZCBmaXJzdCB0cnkgdG8gd29yayBvbiB0aGF0LCBzbyB0aGUgZ29hbCBpcyB0byBtYWtlIHN1cmUgdGhlIHR1cm5zIG9ubHkgc3dpdGNoIHdoZW4gdGhlIHBsYXllciBoYXMgaGl0IGEgdW5pcXVlIHNxdWFyZSwgXG5cbi8vIE9LIEkgd291bGQgYXNrIGxhdGVyIGFib3V0IG5vdCBhbGxvd2luZyB0aGUgcGxheWVyIHRvIGhpdCB0aGUgc2FtZSBjZWxsIHR3aWNlLCBcbi8vIGlmIHlvdSBoaXQgdGhlIHNhbWUgY2VsbCB0d2ljZSwgaXQgd29udCBhZGQgb250byB0aGUgbWlzc2VkIG9yIGhpdHMgXG4vLyBidXQgaXQgd2lsbCBhbGxvdyB0aGUgdHVybiBzd2l0Y2hpbmcgIHRvIGhhcHBlbiwgXG5cbi8vIG1vdmUgb24sIGNvbWUgYmFjayB0byBpdCwgYW5kIHNlZSBpZiB5b3UgY2FuIHRyYWNlIHRoZSBleGVjdXRpb24gb2YgaXQgXG4vLyBpZiBub3QgYXNrIGZvciB0aGUgaGVscCwgXG4vLyBsZXRzIG1ha2UgdGhlIHdpbm5lciBtb2RhbCBmaXJzdCBhbmQgcHJpbnQgdGhlIHdpbm5lciwgYW5kIGhhdmUgYW4gb3B0b24gdG8gc3RhcnQgdGhlIGdhbWUgYWdhaW4gZnJvbSB0aGUgYmVnaW5uZ2luZyBcblxuLy8gdGhlc2UgYXJlIHRoZSB0d28gaXNzdWVzIHRoYXQgcmVtYWluLCBcblxuXG5cblxuLy8gOS8xNiBjdXJyZW50IHBsYW4sIFxuLy8gcmlnaHQgbm93IHVzZXIgY2FuIGRvdWJsZSBjbGljayBhIHNxdWFyZSwgYW5kIHRoYXQgd2lsbCBjb3VudCBhcyB0aGVyZSBtb3ZlLCBcbi8vIGV2ZW4gdGhvIHRoZSB1c2VyIGFscmVhZHkgaGl0IG9yIGhhZCBhIG1pc3MgaW4gdGhhdCBjZWxsIGFscmVhZHksIFxuLy8gSSB3YW50IHVzZXIgdG8gaGl0IHRoZSBib2FyZCBpbiB1bmlxdWUgc3BvdHMgb25seSxcbi8vIG15IGdvYWwgZm9yIGdvaW5nIGFib3V0IHRoaXMsIHdhcyB0byBjaGVjayBpZiB0aGUgYXR0YWNrIGNvb3JkaW5pbmF0ZXMgd2VyZSBhbHJlYWR5IFxuLy8gaW4gdGhlIGhpdCBzaG90cyBhbmQgbWlzc2VkIHNob3RzIGFycmF5LCBcblxuLy8gVXNlciBjYW4gb25seSBtYWtlIHVucWl1ZSBoaXRzLCBcbi8vIG91ciBmb2N1cyBuZWVkcyB0byBnbyB0byByZWNlaXZlQXR0YWNrIGZ1bmN0aW9uLCBcbi8vIGJlZm9yZSB0aGUgdXNlciBtYWtlcyB0aGVpciBhdHRhY2sgXG5cblxuXG5cbi8vIEhlbGxvIGV2ZXJ5b25lLCB0cnlpbmcgdG8gZmlndXJlIG91dCBvbmUgcHJvYmxlbSBoZXJlIG9uIGJhdHRsZXNoaXAsIHRoZW4gdGhlIGdhbWUgaXMgY29tcGxldGUuIEkgZG8gbmVlZCBzb21lIGhlbHAgd2l0aCB0aGlzLCBcblxuLy8gV2hhdCBJIHdhbnQ6IEkgd2FudCB0aGUgdXNlciB0byBoaXQgb25seSBvcGVuIHNwYWNlcyBvbiB0aGUgYm9hcmQsIHVzZXIgY2Fubm90IG1ha2UgdGhlaXIgbWFyayBvbiB0aGUgc2FtZSBjZWxsIHR3aWNlLiBcblxuLy8gVGhlIHByb2JsZW06IFR1cm5zIHN3aXRjaCB3aGVuIHVzZXIgbWFrZXMgYSBoaXQgb24gZW5lbXkncyBnYW1lYm9hcmQsIGN1cnJlbnRseSB0aGV5IGNhbiBoaXQgdGhlIHNhbWUgY2VsbCB0d2ljZSwgaG93ZXZlciB0aG9zZSBoaXRzIG9yIG1pc3NlZCBzaG90cyBkbyBub3QgZ2V0IHN0b3JlZCBhZ2FpbiAod2hpY2ggaXMgZ29vZCksLCBqdXN0IHRoYXQgdGhlIHR1cm5zIHdpbGwgc3dpdGNoIGV2ZW4gdGhvdWdoIHRoZSBwbGF5ZXIgYWxyZWFkeSBoaXQgdGhhdCBjZWxsLiBJdCBzaG91bGQgc3dpdGNoIHR1cm5zIHdoZW4gcGxheWVyIGhhcyBtYWRlIGEgaGl0IG9uIGFuIG9wZW4vdW5vY2N1cGllZCBjZWxsIGluIHRoZSBib2FyZC4gSSBhbSByZWFsbHkgc3R1Y2sgb24gd2hlcmUgdGhlIGxvZ2ljIHNob3VsZCBnbyB0byBwcmV2ZW50IHRoaXMuIFxuXG4vLyBXaGF0IEkndmUgdHJpZWQ6IENoZWNraW5nIGlmIHBsYXllciBoaXQgaXMgaW5zaWRlIHRoZSBtaXNzZWQgc2hvdCBvciBoaXQgc2hvdCBhcnJheSBhbHJlYWR5LiBUaGUgZnVuY3Rpb24gd291bGQgbm90IHdvcmsgYXMgaW5kZXRlbmRlZCBhbmQgd291bGQgYWx3YXlzIHJldHVybiBmYWxzZS4gSSB0cmllZCB1c2luZyB0aGF0IHNhbWUgbG9naWMgdGhyb3VnaG91dCBkaWZmZXJlbnQgcG9pbnRzIGluIHRoZSBjb2RlIGV4ZWN1dGlvbiBidXQgbm90aGluZyBzZWVtcyBiZSBnb2luZyB0aHJvdWdoIGFuZCB0aGUgY29uZGl0aW9uYWxzIGFyZSBub3Qgd29ya2luZy4gXG5cbi8vIEkgYW0gYXR0YWNraW5nIG15IGNvZGVwZW4gd2hpY2ggdHJhY2VzIHRoZSBjb2RlIGV4ZWN1dGlvbi4gUGxheWVyIG1ha2VzIG1hcmsgb24gY29tcHMgZ2FtZWJvYXJkLCB0aG9zZSBjb29yZGluYXRlcyBhcmUgcGFzc2VkIHRvIHBsYXlHYW1lLCB0aGUgYXR0YWNrIG1ldGhvZCBpcyBjYWxsZWQgd2hpY2ggdXNlcyByZWNlaXZlQXR0YWNrIGluc2lkZSBpdCB0byBzdG9yZSBoaXQgc2hvdHMgYW5kIG1pc3NlZCBzaG90cy4gSSd2ZSBhdHRhY2hlZCBzb21lIGNvbW1lbnRzIHRvIGV4cGxhaW4gdGhlIHByb2Nlc3MuIFxuXG4vLyBXb3VsZCBhcHByZWNpYXRlIGFueSBoZWxwIHdpdGggdGhpcy4gVGhpcyBpcyB0aGUgZmluYWwgc3RlcCBhbmQgZmluYWwgYnVnIEkgbXVzdCBnZXQgcGFzdC4gXG5cblxuLy8gOS8xNyBcblxuLy8gdHJ5IHRvIGZpZ3VyZSBvdXQgd2h5IGNvbmRpdGlvbmFsIGlzIG5vdCB3b3JraW5nIFxuXG4vLyBpZiB0aGUgY29vcmRpbmF0ZXMgdGhhdCB0aGUgcGxheWVyIGNsaWNrZWQgb24gaXMgTk9UIGluc2lkZSB0aGUgaGl0IHNob3Qgb3IgbWlzc2VkIHNob3QgYXJyYXkgXG4vLyB0aGVuIGdvIGFoZWFkIGFuZCBsZXQgcGxheWVyIG1ha2UgdGhlaXIgYXR0YWNrLiBcbi8vIHRoZSBwcm9ibGVtIGlzIHRoYXQgcGxheWVyIGNhbiBzdGlsbCBtYWtlIHRoZWlyIG1hcmsgdHdpY2Ugb24gdGhlIHNhbWUgY2VsbCwgaW5zdGVhZCBvZiBoaXR0aW5nIHVuaXF1ZSBjZWxscyBlYWNoIHRpbWUsIFxuLy8gdHVybnMgc2hvdWxkIG9ubHkgc3dpdGNoIHdoZW4gYSBwbGF5ZXIgaGFzIGEgaGl0IGEgdW5pcXVlIGNlbGwuICBcblxuLy8gcmVtb3ZpbmcgdGhlIGhvdmVyIGNsYXNzLiBcbi8vIHdoZW4gcGxheUdhbWUgaXMgY2FsbGVkLCBhY2Nlc3MgdGhlIGdhbWVib2FyZENlbGwgdmlhIGFuIElELCBcbi8vIHRoZW4gdHJ5IHRvIHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiBwbGF5R2FtZSBpcyBjYWxsZWQsIFxuLy8gdGhhdCBtZWFucyBhbGwgdGhlIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWQgYW5kIGdhbWUgaXMgcmVhZHkgdG8gc3RhcnQsIFxuXG5cbi8vIDkvMTggY3VycmVudCBwbGFuLCBuZWVkIHRvIGZpZ3VyZSBvdXQgd2h5IGNvbXB1dGVyIGlzIGhpdHRpbmcgdGhlIHNhbWUgY2VsbCB0d2ljZSwgXG4vLyBhbHNvIG5lZWQgdG8gZmlndXJlIG91dCwgd2h5IHN0eWxlcyBmaWxlIGlzIGdldHRpbmcgZGVsZXRlZCBmcm9tIGRpc3QgZXZlcnkgdGltZSBJIHJ1biB3ZWJwYWNrLCBcbi8vIGFsc28gbmVlZCB0byBmaWd1cmUgb3V0IGhvdyB0byByZW1vdmUgdGhlIGhvdmVyIGNsYXNzIG9uIHBsYXllcnMgYm9hcmQsIG9uY2UgZ2FtZSBzdGFydHMgYW5kIGJvdGggYm9hcmRzIGFyZSByZW5kZXJlZCBcbi8vIGZpcnN0IGlzIGZpZ3VyaW5nIG91dCB3aHkgdGhlIGNvbXB1dGVyIGJvYXJkIGlzIGVpdGhlciBoaXR0aW5nIHRoZSBzYW1lIGNlbGwgdHdpY2UsIG9yIGp1c3Qgc2tpcHBpbmcgdHVybnMgYWxsIHRvZ2V0aGVyLCBcbi8vIHdlbGwgbm93IGl0IGxvb2tzIGxpa2UgSSBOZWVkIHRvIGxvb2sgYXQgaG93IHRvIHByb3Blcmx5IHN0b3JlIHdlYnBhY2sgYXNzZXRzLCBhbmQgZmlndXJlIG91dCB3aGF0IGlzIGdvaW5nIHdpdGggc3R5bGVzIGJlaW5nIGRlbGV0ZWQgZnJvbSB0aGUgZm9sZGVyLCBcbi8vIG5vdyBJIG5lZWQgdG8gZmlndXJlIG91dCB0aGlzIHN0dXBpZCBmdWNraW5nIHdlYnBhY2sgYnVsbHNoaXQsIFxuLy8gSSdsbCByZWFkIG92ZXIgdGhlIHNlY3Rpb25zIGxpc3RlZCwgSSBuZWVkIHRvIG1ha2UgdGhpcyB3b3JrIHNvIHBlb3BsZSBjYW4gaGVscC4gXG5cbi8vIE1vdmUgIHRoZSBmaWxlIGJhY2sgaW50byBzcmMsIGFuZCBhZGRyZXNzIHRoZSBtaW1lIHR5cGUgZXJyb3IgZmlyc3QsIFxuLy8gaXQgc2hvdWxkIHdvcmtpbmcgZmluZSwgaW4gZGlzdCBhbmQgb3RoZXIgdXNlcnMgc2hvdWxkIGJlIGFibGUgdG8gc2VlIGl0IHdoZW4gdGhleSBsb29rIGF0IGl0LCBcblxuXG5cblxuLy8gbm93IHJhbmRvbWx5IHBsYWNlIGNvbXB1dGVycyBzaGlwcywgXG5cbi8vIGZpcnN0IHN0YXJ0IHdpdGggY3JlYXRpbmcgdGhlIGNvbXB1dGVyIGluc3RhbmNlL2dhbWViYW9yZCBcblxuLy8gaG93IHdpbGwgd2UgcmFuZG9tbHkgcGxhY2Ugc2hpcHMsIGhvdyBjYW4gd2UgcmFuZG9tbHkgY2hhbmdlIHNoaXAgZGlyZWN0aW9uLCBcblxuLy8gY3VycmVudGx5IGZvciBwbGF5ZXIgSSBzZXQgYSBkZWZhdWx0IHZhbHVlIGZvciBzaGlwIGRpcmVjdGlvbiwgYnV0IHRoYXQgY2FuIGJlIGNoYW5nZWQgZnJvbSBhIGJ1dHRvbiBjbGljaywgXG5cbi8vIGNhbiB3ZSByYW5kb21seSBwbGFjZSBzaGlwcyBmaXJzdD8gXG5cbi8vIHRoZSByYW5kb20gY29vcmRpbmF0ZXMgcGFzc2VkIGluIHdpbGwgZXZlbnR1YWxseSB0aHJvdyBhbiBlcnJvciBmcm9tIGdvaW5nIG91dCBvZiBib3VuZHMsIFxuLy8gaG93ZXZlciBJIGRvIGhhdmUgYSBtZXRob2Qgd2hpY2ggY2hlY2tzIGZvciBsZWdhbCBwbGFjZW1lbnQgYmVmb3JlIHNoaXAgaXMgcGxhY2VkLCBcbi8vIGhvdyBjYW4gSSBnZXQgYXJvdW5kIHRoaXMsIHNoaXBzIHdpbGwgbmVlZCB0byBiZSByYW5kb21seSBwbGFjZWQsIFxuLy8gYW5kIEkgbmVlZCB0byBwYXNzIGluIHJhbmRvbSBjb29yZGluYXRlcywgXG5cbi8vIHNhdmUgdGhlIHdvcmssIEkgd2lsbCBuZWVkIHRvIHJlZmFjdG9yIGNoZWNrRm9yU2hpcCwgaXQgc2hvdWxkIGJlIHJldHVybmluZyBhIHZhbHVlIGluc3RlYWQgb2YgZmFsc2UsIHJpZ2h0IG5vdyBpdHMganVzdCB0aHJvd2luZyBhbiBlcnJvciBcbi8vIGdldCB0aGUgcmV0dXJuIHZhbHVlLCBpZiB0aGUgcmV0dXJuIHZhbHVlIGlzIHRydWUsIHBsYWNlIHRoZSBzaGlwLCBlbHNlIHRyeSBhZ2FpbiB3aXRoIGFub3RoZXIgcGFpciBvZiByYW5kb20gY29vcmRpbmF0ZXMsIFxuLy8ga2VlcCB0cmFjayBvZiByZXBlYXRlZCBmYWlsZWQgc2hvdHMsIHNvIHRoZSBjb29yZGluYXRlcyBkbyBub3QgcmVwZWF0IHRoZW1zZWx2ZXMgXG5cbi8vIEkgV2lsbCBoYXZlIHRvIGdvIGJhY2sgdG8gdGhlIGhlbHAgY2hhbm5lbHMgdG9uaWdodCwgdGhpcyBpcyBub3QgcmVhbGx5IG1ha2luZyBzZW5zZSwgXG4vLyBJIGZlZWwgbGlrZSBJIGFtIGRvaW5nIHRoZSBzYW1lIHRoaW5nLCBhbHJlYWR5IGNoZWNraW5nIHdoYXQgdGhlIGZ1bmN0aW9uIGNhbGwgcmV0dXJucywgXG5cbi8vIEkgYW0gdHJ5aW5nIHRvIHJhbmRvbWx5IHBsYWNlIGNvbXB1dGVyIHNoaXBzIG9uIGl0cyBib2FyZCwgdGhlIHByb2JsZW0gaXMgZXZlbnR1YWxseSB0aGUgc2hpcCB3aWxsIGNvbGxpZGUgd2l0aCBhbm90aGVyIHNoaXAsIG9yIGdvIG91dCBvZiBib3VuZHMsIEkgYW0gdXNpbmcgcmFuZG9tIGNvb3JkaW5hdGVzIFxuXG4vLyBJIGFtIGFscmVhZHkgY2hlY2tpbmcgaWYgdGhlIG1vdmUgaXMgbGVnYWwsIHBsYWNlU2hpcCBjYWxscyBhIGNoZWNrRm9yU2hpcCBmdW5jdGlvbiB3aGljaCBjaGVja3MgaWYgbW92ZSBpcyBsZWdhbCwgXG5cbi8vIHdlbGwgSSB0cmllZCByZXR1cm5pbmcgZmFsc2UgaWYgdGhlIGNoZWNrRm9yU2hpcCByZXR1cm5zIGZhbHNlLCBpbnN0ZWFkIG9mIHRocm93aW5nIGFuIGVycm9yLCBidXQgdGhlcmUgaXMgc3RpbGwgbm8gd2F5IHRvIHN0b3AgaXQgZnJvbSBwbGFjaW5nLCBcblxuLy8gSSB0cmllZCByZXR1cm5pbmcgZmFsc2UgaWYgaWxsZWdhbCwgYnV0IHRoZXJlIGlzIHN0aWxsIG5vIHdheSB0byBwcmV2ZW50IHRoZSBzaGlwIGZyb20gc3RpbGwgYmVpbmcgcGxhY2VkLiBcblxuLy8gaXMgdGhlcmUgYSB3YXkgSSBjYW4gZml4IHRoaXM/IElTIHRoZXJlIHNvbWUgb3RoZXIgdHlwZSBvZiBjaGVjayBvciBjb25kaXRpb25hbCBJIGNhbiB1c2UgdG8gcHJldmVudCBzaGlwIGZyb20gYmVpbmcgcGxhY2VkIGlsbGVnYWxseT8gXG5cblxuXG4vLyBMb2dnaW5nIHRoZSBlcnJvciBpcyBqdXN0IGZvciB5b3Vyc2VsZiB0byBzZWVcbi8vIFRoZSBpbXBvcnRhbnQgcGFydCBpcyByZXR1cm5pbmcgZmFsc2UgaWYgdGhlIHBsYWNpbmcgZmFpbGVkIGFuZCB0cnVlIGlmIHRoZSBwbGFjaW5nIHN1Y2NlZWRlZFxuLy8gQW5kIHRoZW4geW91IGNhbiB1c2UgdGhhdCByZXR1cm4gdmFsdWVcbi8vIGNvbnN0IGlzUGxhY2luZ1N1Y2NlZWRlZCA9IGdhbWVib2FyZC5wbGFjZXNoaXAoKVxuLy8gQW5kIHRoZW4gaWYoaXNQbGFjaW5nU3VjY2VlZGVkKSB0cnkgbmV4dCBzaGlwXG4vLyBFbHNlIHRyeSB0byBwbGFjZSB0aGUgc2FtZSBzaGlwIGFnYWluIHdpdGggZGlmZmVyZW50IGNvb3JkaW5hdGVzXG4vLyBBbmQgdGhlbiwgeW91IGhhdmUgYW5vdGhlciBpc3N1ZSB0byBkZWFsIHdpdGgsIGJlY2F1c2Ugd2l0aCB0aGlzIGxvZ2ljIGl0IGNhbiBnZXQgaW50byBhIGxvb3Bcbi8vIEFuZCBwb3RlbnRpYWxseSByZXBlYXQgZmFpbGVkIGNvb3JkaW5hdGVzIG92ZXIgYW5kIG92ZXIsIGhvdyBjYW4geW91IHNvbHZlIHRoaXM/XG5cbi8vIGFsbG93IHRoZSBjb21wdXRlciB0byBnZW5lcmF0ZSByYW5kb20gY29vcmRpbmF0ZXMgYW5kIG1ha2Ugc3VyZSBlYWNoIGNvb3JkaW5hdGUgaXMgbGVnYWwsIFxuLy8gXG5cblxuXG5cbi8vIGNvbnN0IG1vY2tPYmplY3QgPSB7XG4vLyAgICAgbmFtZTogXCJqb2VcIixcbi8vICAgICBhZ2U6IDI1LFxuLy8gICAgIGluY3JlbWVudEFnZTogZnVuY3Rpb24oKSB7XG4vLyAgICAgICB0aGlzLmFnZSsrO1xuLy8gICAgIH1cbi8vICAgfSBcblxuXG5cbi8vICAgZnVuY3Rpb24gYWdlSW5jcmVtZW50b3IoZXhhbXBsZU9iaikgeyBcbi8vICAgICBleGFtcGxlT2JqLmluY3JlbWVudEFnZSgpO1xuLy8gICAgIGNvbnNvbGUubG9nKGV4YW1wbGVPYmouYWdlKTtcbi8vICAgfSBcblxuXG4vLyBsZXQgZXhhbXBsZU9iaiA9IG1vY2tPYmplY3Q7XG5cbi8vIGNvbnNvbGUubG9nKGFnZUluY3JlbWVudG9yKGV4YW1wbGVPYmopKTtcblxuXG5cbi8vICAgY29uc29sZS5sb2coYWdlSW5jcmVtZW50b3IoKSk7XG4vLyAgIGNvbnNvbGUubG9nKGFnZUluY3JlbWVudG9yKCkpO1xuLy8gICBjb25zb2xlLmxvZyhhZ2VJbmNyZW1lbnRvcihtb2NrT2JqZWN0KSk7XG5cblxuXG4gIC8vIGNhbGwgaXQgb3V0c2lkZSB0aGUgb2JqIGFuZCBsb2cgaXQgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBwcmV2ZW50IHRoZSB1c2VyIGZyb20gc2lua2luZyBhIHNoaXAgaWYgaGl0cyBhcmUgaW4gdGhlIHNhbWUgbG9jYXRpb24sIDQgaGl0cyBpbiB0aGUgc2FtZSBjb29yZGluYXRlIHdpbGwgc2luayBzaGlwLCBcbi8vIGNvbnNpZGVyIHRoZSBoaXRJbmNyZW1lbnRvciBmdW5jdGlvbiwgcmVjZWl2ZUF0dGFjayBmdW5jdGlvbiwgcmVjZWl2ZUF0dGFjayBzaG91bGQgaGF2ZSB0eXBlIG9mIGNvbmRpdGlvbmFsIGluc2lkZSBpdCwgXG4vLyB0aGF0IGNvbmRpdGlvbmFsIHdpbGwgY2hlY2sgaWYgdGhhdCBzcXVhcmUgaGFzIGFscmVhZHkgYmVlbiBoaXQsIGFuZCBwcmV2ZW50IGEgdXNlciBmcm9tIHBsYWNpbmcgYSBoaXQgaW4gdGhhdCBzcXVhcmUsIFxuXG4vLyBjaGVjayBmb3IgaGl0cyBmdW5jdGlvbiwgdGhhdCBkZXRlcm1pbmVzIGlmIHRoZSBtb3ZlIGlzIGxlZ2FsLiBcbi8vIHdlIGNvdWxkIGNoZWNrIGl0IGluIHRoZSBzYW1lIGNvbmRpdGlvbmFsLCBpZiB0aGUgY29vcmRpYW50ZXMgYXJlIGFuIG9iaiAmJiB0aGUgdmFsdWUgb2YgY2hlY2sgZm9yIGhpdHMgaXMgZmFsc2UsIHRoZW4gdGhlIGhpdEluY3JlbWVudG9yIGNhbiBiZSBjYWxsZWQsIFxuLy8gXG5cblxuLy8gMS4gd2hlbiBJIGNvbnNvbGUubG9nIHRoZSBzdW5rZW5TaGlwc0FycmF5IHJpZ2h0IGFmdGVyIEkgaW5pdGFsaXplIGl0LCBpdCBoYXMgYWxsIHRoZSBzdW5rZW4gc2hpcHMgaW4gaXQgYWxyZWFkeSBcbi8vIDIuIGFsbCB0aGUgc2hpcCBvYmplY3RzIGV2ZW4gYWZ0ZXIgcGxhY2luZywgYW5kIHNpbmtpbmcgZWFjaCBzaGlwLCBzdGlsbCByZXR1cm4gaXQncyBpc1N1bmsgdmFsdWUgYXMgZmFsc2UsIChpdCBoYXMgbm90IGJlZW4gc3VuaylcbiAvLyBob3dldmVyIHdoZW4gSSBjaGVjayBzY29wZSwgYW5kIGNsb3N1cmUgd2l0aGluIGRldiB0b29scywgZWFjaCBzaGlwJ3MgaXNTdW5rIHZhcmlhYmxlIGlzIHRydWUhXG4vLyB0d28gaXNzZXMgXG4vLyB3aHkgaXMgdGhlIHN1bmtlblNoaXBzQXJyYXkgYWZ0ZXIgaW5pdCBhbHJlYWR5IGhhdmUgdGhlIHN1bmtlbiBzaGlwcyBpbiBpdCwgc2hvdWxkIGJlIGVtcHR5LCBpdHMgXG4vLyBpdHMgc3RpbGwgc2F5aW5nIGZhbHNlLCBhbGwgdGhlIHNoaXBzIGFyZSBub3Qgc3VuayBidXQgeWV0IHRoZSBhcnJheSBjb250YWlucyBhbGwgc3Vua2VuIHNoaXBzLCBcbi8vIHdoeSBpcyB0aGUgaXNTdW5rIHZhcmlhYmxlIG9mIHRoZSBzaGlwcyBub3QgY2hhbmdpbmc/IEl0IHN0aWxsIHNob3dzIGZhbHNlIGJ1dCB5ZXQgdGhlIHNoaXBzIFxuLy8gYXJlIHN1bmsgYW5kIGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgYXJyYXksIFxuLy8gd2hlbiBJIGNoZWNrIHRoZSBzY29wZSBhbmQgY2xvc3VyZSBpbiBkZXYgdG9vbHMsIHRoZSBpc1N1bmsgdmFyaWFibGUgSVMgY2hhbmdpbmcgXG5cbi8vIHllc3RlcmRheXMgcHJvYmxlbSB3YXMgSSB3YXMgcHVzaGluZyB0aGUgc2hpcCBvYmplY3RzIHR3aWNlIGludG8gdGhlIGFycmF5IHNvIHRoZXJlIDEwIGl0ZW1zIGluc3RlYWQgb2YgNSBcbi8vIGl0IGRvZXMgcmV0dXJuIHRydWUsIGF0IHRoZSBlbmQgYnV0IHlldCBzaGlwIG9iamVjdHMgYXJlIHdpdGhpbiBhcnJheSBiZWZvcmUgSSBzaW5rIHRoZW0gXG4vLyBhbmQgdGhlIGlzU3VuayBwcm9wZXJ0eSBuZXZlciBjaGFuZ2VzIGJ1dCB5ZXQgaW4gZGV2IHRvb2xzIGNsb3N1cmVzIGFuZCBzY29wZSBvYmplY3RzIGhhcyB0aGVtIHNldCB0byB0cnVlXG4vLyBcblxuLy8gZnVuY3Rpb24gc2hpcChsZW5ndGgsIGhpdHMsIHN1bmspIHtcbi8vICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbi8vICAgICB0aGlzLmhpdHMgPSBoaXRzO1xuLy8gICAgIHRoaXMuc3VuayA9IHN1bms7XG5cbi8vICAgICB0aGlzLmhpdHMgPSBmdW5jdGlvbiBoaXRzICgpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2hpdCBmdW5jdGlvbicpO1xuLy8gICAgIH1cblxuLy8gICAgIHRoaXMuc3Vua09yTm90ID0gZnVuY3Rpb24gc3Vua09yTm90ICgpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3N1bmsgb3Igbm90Jyk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBjb25zdCBjcmVhdGVTaGlwMSA9IG5ldyBzaGlwKDMsIDAsIHRydWUpO1xuXG4vLyBjb25zb2xlLmxvZyhjcmVhdGVTaGlwMS5oaXRzKCkpO1xuXG4vLyBmdW5jdGlvbiBzaGlwKGxlbmd0aCwgaGl0cywgc3Vuaykge1xuLy8gICAgIHJldHVybiBzaGlwT2JqID0ge1xuLy8gICAgICAgICBsZW5ndGg6IGxlbmd0aCxcbi8vICAgICAgICAgaGl0czogaGl0cyxcbi8vICAgICAgICAgc3Vuazogc3VuayxcblxuLy8gICAgICAgICBoaXRDb3VudGVyOiBmdW5jdGlvbiBoaXRzKCkge1xuXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHN1bmtPck5vdDogZnVuY3Rpb24gaXNTdW5rKCkge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1bmshIG9yIG5vdCEnKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLy8gY29uc3QgY3JlYXRlU2hpcCA9IHNoaXAoNCwgMCwgZmFsc2UpO1xuXG4vLyBjb25zdCBjcmVhdGVTaGlwMiA9IHNoaXAoMiwgMSwgdHJ1ZSk7XG5cbi8vIGNvbnNvbGUubG9nKGNyZWF0ZVNoaXAyLnN1bmtPck5vdCgpKTtcblxuLy8gZnVuY3Rpb24gaXMgbm90IHJpZ2h0LCBpbml0IGEgaGl0IGNvdW50ZXIgdmFyaWFibGVcblxuLy8gaW5wdXQgYSBuYW1lLCBhbmQgYSBsZW5ndGgsXG5cbi8vIGluaXQgaGl0IGNvdW50ZXIsXG5cbi8vIGhpdCBtZXRob2Qgd2hpY2ggd2lsbCBpbmNyZW1lbnQgdGhlIGhpdCBjb3VudGVyXG5cbi8vIGlzdW5rIHdpbGwgZGV0ZXJtaW5lIGlmIGhpdHMgaXMgZ3JlYXRlciB0aGFuIHRoZSBzaGlwcyBsZW5ndGgsXG5cbi8vIGNoYW5nZSB0aGUgdmFsdWUgb2YgaXNzdW5rIHRvIGZhbHNlLFxuXG5cbi8vIHNoaXBGYWN0b3J5LmpzIGNvZGUgXG5cbi8vIGZ1bmN0aW9uIHNoaXAobmFtZSwgbGVuZ3RoKSB7XG4vLyAgIGxldCBoaXRDb3VudGVyID0gMDtcbi8vICAgbGV0IGlzU3VuayA9IGZhbHNlO1xuLy8gICBmdW5jdGlvbiBoaXRJbmNyZW1lbnRvcigpIHtcbi8vICAgICBoaXRDb3VudGVyKys7XG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBnZXRIaXRJbmNyZW1lbnRvcigpIHtcbi8vICAgICByZXR1cm4gaGl0Q291bnRlcjtcbi8vICAgfVxuLy8gICBmdW5jdGlvbiBpc1N1bmtDb25kaXRpb25hbCgpIHtcbi8vICAgICBpZiAoaGl0Q291bnRlciA+PSBsZW5ndGgpIHtcbi8vICAgICAgIGlzU3VuayA9IHRydWU7IC8vIHJldHVybiBpc1N1bmsgaW4gYW5vdGhlciBmdW5jdGlvbixcbi8vICAgICAgIC8vIHJldHVybiBpc1N1bms7XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gZ2V0U2hpcFN0YXR1cygpIHtcbi8vICAgICByZXR1cm4gaXNTdW5rO1xuLy8gICB9XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBzaGlwTmFtZTogbmFtZSxcbi8vICAgICBpc1N1bmssXG4vLyAgICAgc2hpcExlbmd0aDogbGVuZ3RoLFxuLy8gICAgIGhpdEluY3JlbWVudG9yLFxuLy8gICAgIGdldEhpdEluY3JlbWVudG9yLFxuLy8gICAgIGlzU3Vua0NvbmRpdGlvbmFsLFxuLy8gICAgIGdldFNoaXBTdGF0dXMsXG4vLyAgIH07XG4vLyB9XG5cbi8vIGxldCBwYXRyb2xCb2F0ID0gc2hpcCgncGF0cm9sLWJvYXQnLCAyKTtcblxuLy8gY29uc29sZS5sb2cocGF0cm9sQm9hdCk7XG4vLyBjb25zb2xlLmxvZyhwYXRyb2xCb2F0LmhpdEluY3JlbWVudG9yKCkpO1xuLy8gY29uc29sZS5sb2cocGF0cm9sQm9hdC5oaXRJbmNyZW1lbnRvcigpKTtcbi8vIGNvbnNvbGUubG9nKHBhdHJvbEJvYXQuZ2V0SGl0SW5jcmVtZW50b3IoKSk7XG4vLyBjb25zb2xlLmxvZyhwYXRyb2xCb2F0LmlzU3Vua0NvbmRpdGlvbmFsKCkpO1xuLy8gY29uc29sZS5sb2cocGF0cm9sQm9hdC5nZXRTaGlwU3RhdHVzKCkpO1xuLy8gY29uc29sZS5sb2cocGF0cm9sQm9hdCk7XG5cblxuXG5cblxuLy8gY29uc29sZS5sb2coc2hpcDEpO1xuLy8gY29uc29sZS5sb2coc2hpcDEuaGl0SW5jcmVtZW50b3IoKSk7XG4vLyBjb25zb2xlLmxvZyhzaGlwMS5oaXRJbmNyZW1lbnRvcigpKTtcbi8vIGNvbnNvbGUubG9nKHNoaXAxLmhpdEluY3JlbWVudG9yKCkpO1xuLy8gY29uc29sZS5sb2coc2hpcDEuaGl0SW5jcmVtZW50b3IoKSk7XG4vLyBjb25zb2xlLmxvZyhzaGlwMS5nZXRIaXRJbmNyZW1lbnRvcigpKTtcbi8vIGNvbnNvbGUubG9nKHNoaXAxLmdldFNoaXBTdGF0dXMoKSk7XG4vLyBjb25zb2xlLmxvZyhzaGlwMS5pc1N1bmtDb25kaXRpb25hbCgpKTtcbi8vIGNvbnNvbGUubG9nKHNoaXAxLmdldFNoaXBTdGF0dXMoKSk7XG4vLyBjb25zb2xlLmxvZyhzaGlwMSk7XG5cbi8vIGNvbnNvbGUubG9nKHNoaXAxLmhpdHMoKSk7XG4vLyBjb25zb2xlLmxvZyhzaGlwMSk7XG4vLyBjb25zb2xlLmxvZyhzaGlwMS5oaXRzKCkpO1xuLy8gY29uc29sZS5sb2coc2hpcDEpO1xuLy8gY29uc29sZS5sb2coc2hpcDEuaGl0cygpKTtcbi8vIGNvbnNvbGUubG9nKHNoaXAxKTtcbi8vIGNvbnNvbGUubG9nKHNoaXAxLnN1bmtPck5vdCgpKVxuLy8gY29uc29sZS5sb2coc2hpcDEpO1xuXG4vLyBjb25zb2xlLmxvZyhzaGlwMik7XG4vLyBjb25zb2xlLmxvZyhzaGlwMi5oaXRzKCkpO1xuLy8gY29uc29sZS5sb2coc2hpcDIpO1xuLy8gY29uc29sZS5sb2coc2hpcDIuaGl0cygpKTtcbi8vIGNvbnNvbGUubG9nKHNoaXAyKTtcbi8vIGNvbnNvbGUubG9nKHNoaXAyLmhpdHMoKSk7XG4vLyBjb25zb2xlLmxvZyhzaGlwMik7XG4vLyBjb25zb2xlLmxvZyhzaGlwMi5oaXRzKCkpO1xuLy8gY29uc29sZS5sb2coc2hpcDIpO1xuLy8gY29uc29sZS5sb2coc2hpcDIuc3Vua09yTm90KCkpXG4vLyBjb25zb2xlLmxvZyhzaGlwMik7XG5cbi8vIGV4YW1wbGUgbm9nZXRcblxuLy8gZnVuY3Rpb24gY291bnRlcjEoKSB7XG4vLyAgICAgbGV0IGNvdW50ID0gMDtcblxuLy8gICAgIGZ1bmN0aW9uIGluY3JlbWVudCgpIHtcbi8vICAgICAgICAgY291bnQgKz0gMTtcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiBnZXRDb3VudCgpIHtcbi8vICAgICAgICAgcmV0dXJuIGNvdW50XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgZ2V0Q291bnQsXG4vLyAgICAgICAgIGluY3JlbWVudCxcbi8vICAgICB9O1xuLy8gfVxuXG4vLyBjb25zdCBmb28gPSBjb3VudGVyMSgpO1xuXG4vLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShmb28pKTtcblxuLy8gLy8gSW5jcmVtZW50IHRoZSBjb3VudCB2YXJpYWJsZVxuLy8gZm9vLmluY3JlbWVudCgpO1xuXG4vLyBMb2dzIDEsIHRoZSBmdW5jdGlvbiByZXR1cm5zIHRoZSB2YXJpYWJsZSdzIHZhbHVlXG4vLyBjb25zb2xlLmxvZyhmb28uZ2V0Q291bnQoKSk7XG5cbi8vIGV4YW1wbGUgZ2V0XG5cbi8vIGZ1bmN0aW9uIGNvdW50ZXIyKCkge1xuLy8gICAgIGxldCBjb3VudCA9IDA7XG5cbi8vICAgICBmdW5jdGlvbiBpbmNyZW1lbnQoKSB7XG4vLyAgICAgICAgIGNvdW50ICs9IDE7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgZ2V0IGNvdW50KCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBpbmNyZW1lbnQsXG4vLyAgICAgfTtcbi8vIH1cblxuLy8gY29uc3QgeCA9IGNvdW50ZXIyKCk7XG5cbi8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHgpKTtcblxuLy8gLy8gSW5jcmVtZW50IHRoZSBjb3VudCB2YXJpYWJsZVxuLy8geC5pbmNyZW1lbnQoKTtcblxuLy8gTG9ncyAxLCB0aGUgZnVuY3Rpb24gcmV0dXJucyB0aGUgdmFyaWFibGUncyB2YWx1ZVxuLy8gY29uc29sZS5sb2coeC5jb3VudCk7XG5cbi8vIHJlZmFjdG9yZWRcblxuLy8gZnVuY3Rpb24gY291bnRlcigpIHtcbi8vICAgbGV0IGNvdW50ID0gMDtcblxuLy8gICBmdW5jdGlvbiBpbmNyZW1lbnQoKSB7XG4vLyAgICAgY291bnQgKz0gMTtcbi8vICAgfVxuXG4vLyAgIGZ1bmN0aW9uIGdldENvdW50KCkge1xuLy8gICAgIHJldHVybiBjb3VudDtcbi8vICAgfVxuXG4vLyAgIGZ1bmN0aW9uIHRvSlNPTigpIHtcbi8vICAgICByZXR1cm4geyBjb3VudCB9O1xuLy8gICB9XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICB0b0pTT04sXG4vLyAgICAgZ2V0Q291bnQsXG4vLyAgICAgaW5jcmVtZW50LFxuLy8gICB9O1xuLy8gfVxuLy8gY29uc3QgZm9vID0gY291bnRlcigpO1xuXG4vLyBmb28uaW5jcmVtZW50KCk7XG5cbi8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGZvbykpO1xuIiwiLy8gY3JlYXRlIHBsYXllclxuLy8gUGxheWVycyBjYW4gdGFrZSB0dXJucyBwbGF5aW5nIHRoZSBnYW1lIGJ5IGF0dGFja2luZyB0aGUgZW5lbXkgR2FtZWJvYXJkLlxuLy8gVGhlIGdhbWUgaXMgcGxheWVkIGFnYWluc3QgdGhlIGNvbXB1dGVyLCBzbyBtYWtlIHRoZSDigJhjb21wdXRlcuKAmSBjYXBhYmxlIG9mIG1ha2luZyByYW5kb20gcGxheXMuIFxuLy8gVGhlIEFJIGRvZXMgbm90IGhhdmUgdG8gYmUgc21hcnQsIGJ1dCBpdCBzaG91bGQga25vdyB3aGV0aGVyIG9yIG5vdCBhIGdpdmVuIG1vdmUgaXMgbGVnYWwuIChpLmUuIGl0IHNob3VsZG7igJl0IHNob290IHRoZSBzYW1lIGNvb3JkaW5hdGUgdHdpY2UpLiBcblxuLy8gaW1wb3J0ICcuL2dhbWVib2FyZEZhY3RvcnkuanMnO1xuaW1wb3J0IHNoaXAgZnJvbSAnLi9zaGlwRmFjdG9yeS5qcyc7XG5cbmltcG9ydCBnYW1lYm9hcmRGYWN0b3J5IGZyb20gJy4vZ2FtZWJvYXJkRmFjdG9yeS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXllckZhY3RvcnkobmFtZSkgeyBcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG4gICAgcmV0dXJuIHtuYW1lLCBnYW1lYm9hcmR9O1xufSBcblxuLy8gbWFrZSBhIHBsYXllciBmYWN0b3J5IGZ1bmN0aW9uLlxuLy8gdGhhdCBtYWtlcyBhIHBsYXllciBmb3IgdGhlIGdhbWUgXG4vLyBtYWtlIGEgY29tcHV0ZXIgXG4vLyBjb21wIHNob3VsZCBrbm93IGlmIG1vdmUgaXMgbGVnYWwgYW5kIGNhbm5vdCBoaXQgdGhlIHNhbWUgc3F1YXJlIHR3aWNlLiBcblxuLy8gd2hhdCBwcm9wZXJ0aWVzIHdvdWxkIHBsYXllciBoYXZlPyBcbi8vIGEgd2F5IHRvIHRyYWNrIHdob3NlIHR1cm4gaXQgaXMgXG4vLyBhIG5hbWVcbi8vIEkgd291bGQgc2F5IGEgbmFtZSBwcm9wZXJ0eSBhbmQgYSB3YXkgdG8gbWVhc3VyZSB0dXJucyBcbi8vIHNhbWUgdGhpbmcgZm9yIHRoZSBjb21wIGZ1bmN0aW9uLCBcbi8vIFxuXG4vLyBzdGFydCBnYW1lcGxhbm5pbmcsIHZpc3VhbGl6aW5nIHdoYXQgeW91IHdhbnQgdGhpcyBzZWN0aW9uIHRvIGxvb2sgbGlrZSwgXG4vLyB3ZSBhcmUgY3JlYXRpbmcgYSBmYWN0b3J5IGZvciBhIHBsYXllciBhbmQgbG9va3MgbGlrZSB0aGUgY29tcHV0ZXIgYXMgd2VsbCBcbi8vIHNvIGNyZWF0ZSB0aGUgcGxheWVyIG9iamVjdCBhcyB3ZWxsIGFzIHRoZWlyIHNwZWNpZmljIGdhbWVib2FyZCBcbi8vIGxvb2sgdXAgb2xkIHBvc3RzIGZvciBpbnNwaXJhdGlvbiwgXG4vLyBjcmVhdGUgYSBwbGF5ZXIgYW5kIGdyYWIgdGhlaXIgZ2FtZWJvYXJkIFxuLy8gc2VlIGlmIHlvdSBjYW4gbG9nIGJhY2sgYSBnYW1lYm9hcmRcbi8vIHNvIEkgY2FuIGluY2x1ZGUgdGhlIGdhbWVib2FyZCBpbiB0aGUgcmV0dXJuIG9iamVjdCwgdGhpcyBzZWVtcyBsaWtlIHRoZSBpbml0YWwgZ2FtZWJvYXJkcyBcbi8vIG1vZGFsIHdpbGwgcG9wLXVwIGFuZCBhbGxvdyB1c2VyIHRvIHBsYWNlIHNoaXBzIGF0IHNwZWNpZmljIHNwb3RzLFxuLy8gY3JlYXRlIGFub3RoZXIgZmFjdG9yeSBmb3IgY29tcHV0ZXIgXG5cbi8vIHNlZW1zIGxpa2UgcGxheWVyRmFjdG9yeSB3aWxsIGFsc28gbmVlZCBhbiBhdHRhY2sgbWV0aG9kLCBhbGxvd2luZyB0aGUgdXNlciB0byBoaXQgdGhlIGVuZW15J3MgYm9hcmQuIFxuXG4vLyB3aGF0IHdvdWxkIGJlIGluY2x1ZGVkIGluIHRoaXMgYXR0YWNrIG1ldGhvZD8gXG4vLyBhY2Nlc3MgdG8gdGhlIHJlY2VpdmVBdHRhY2sgbWV0aG9kLCBjYWxscyB0aGUgZnVuY3Rpb24sIHBhc3NpbmcgaW4gdGhlIGNvb3JkaW5hdGVzLiBcblxuLy8gYW4gYXR0YWNrIG1ldGhvZCwgaXMgdGhhdCBqdXN0IHVzaW5nIHJlY2VpdmVBdHRhY2s/IEJlY2F1c2UgcmVjZWl2ZUF0dGFjayBpcyB0aGUgb25lIHBsYWNpbmcgdGhlIHNoaXBzIGFuZCBkZXRlcm1pbmVzIHZhbGlkIHNoaXAgcGxhY2VtZW50LCBcbi8vIGEgd2F5IHRvIHN3aXRjaCBwbGF5ZXIgdHVybnMgXG5cbi8vIGF0dGFjayBtZXRob2Qgd2lsbCB0YWtlIGEgcGFpciBjb29yZGluYXRlcywgYW5kIHBhc3MgdGhlbSB0byByZWNlaXZlQXR0YWNrLCBcbi8vIG1ha2luZyB0aGUgYXR0YWNrIG1ldGhvZCwgYWNjZXNzIHRoZSBnYW1lYm9hcmQsIGFuZCByZWNlaXZlQXR0YWNrIG1ldGhvZCwgXG4vLyBcblxuLy8gSSdtIHN1cHBvc2VkIHRvIGFjY2VzcyB0aGUgZW5lbXkncyBnYW1lYm9hcmQsIGhvdz8gXG4vLyBtYWtlIGl0IHdpdGhpbiBjb21wdXRlciBmYWN0b3J5IGFuZCBzb21laG93IGFjY2VzcyBpdCwgXG4vLyBhdHRhY2sgbWV0aG9kLCBnZXRzIGVuZW15IGdhbWVib2FyZCggaG93ID8gKSBcbi8vIHVzZXMgdGhlIHJlY2VpdmVBdHRhY2sgbWV0aG9kIG9uIHRoZSBlbmVteSBnYW1lYm9hcmQgXG4vLyBob3cgY2FuIEkgdXNlIHJlY2VpdmVBdHRhY2sgbWV0aG9kIHdpdGhpbiBhdHRhY2sgbWV0aG9kIFxuLy8gZG8gSSBhY2Nlc3MgdGhlIGNvbXB1dGVycyBnYW1lYm9hcmQgZnJvbSBpdCdzIGZhY3Rvcnk/IFxuLy8geWVzIHNlZW1zIGxpa2UgdGhhdCBjb3VsZCB3b3JrXG5cblxuXG4vLyBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG4vLyBjb25zdCBjb21wdXRlckdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUGxheWVyKG5hbWUsIHR1cm4sIGJvYXJkKSB7IFxuLy8gICAgIGxldCBwbGF5ZXJCb2FyZCA9IGJvYXJkO1xuLy8gICAgIGZ1bmN0aW9uIGF0dGFjaygpIHsgXG4vLyAgICAgbGV0IGdldENvbXB1dGVyQm9hcmQgPSBjcmVhdGVDb21wdXRlclBsYXllcigpLmNvbXBCb2FyZDtcbi8vICAgICAvLyBJIGRvbnQga25vdyBob3cgdG8gdXNlIHJlY2VpdmVBdHRhY2sgb24gdGhlIGdhbWVib2FyZFxuLy8gICAgIGNvbnNvbGUubG9nKGdldENvbXB1dGVyQm9hcmQpO1xuLy8gfSBcbi8vICAgICByZXR1cm4geyBcbi8vICAgICAgICAgbmFtZTogbmFtZSwgXG4vLyAgICAgICAgIHR1cm46IHR1cm4sXG4vLyAgICAgICAgIGJvYXJkOiBwbGF5ZXJHYW1lYm9hcmQuZ2V0R2FtZWJvYXJkKCksXG4vLyAgICAgICAgIGF0dGFjayxcbi8vICAgICB9XG4vLyB9IFxuXG4vLyBleHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZXJQbGF5ZXIobmFtZSwgdHVybiwgY29tcEJvYXJkKSB7IFxuLy8gICAgIGxldCBjb21wdXRlckJvYXJkID0gY29tcEJvYXJkO1xuLy8gICAgIHJldHVybiB7IFxuLy8gICAgICAgICBuYW1lOiBuYW1lLCBcbi8vICAgICAgICAgdHVybjogdHVybixcbi8vICAgICAgICAgY29tcEJvYXJkOiBjb21wdXRlckdhbWVib2FyZC5nZXRHYW1lYm9hcmQoKSxcbi8vICAgICB9XG4vLyB9IFxuXG4vLyBsZXQgcGxheWVyMSA9IGNyZWF0ZVBsYXllcignYWxlYycsIHRydWUpO1xuLy8gY29uc29sZS5sb2cocGxheWVyMS5hdHRhY2soKSk7XG5cblxuLy8gbGV0IGNvbXB1dGVyID0gY3JlYXRlQ29tcHV0ZXJQbGF5ZXIoJ2NvbXAnLCBmYWxzZSk7XG4vLyBjb25zb2xlLmxvZyhjb21wdXRlci5ib2FyZCk7XG5cbi8vIGNvbnNvbGUubG9nKGdhbWVib2FyZC5nZXRHYW1lYm9hcmQoKSk7XG5cbi8vIG1ha2UgYSBmYWN0b3J5IGZvciBib3RoIHBsYXllciBhbmQgY29tcHV0ZXIgXG5cbi8vIGhhcyBhIG5hbWUgcHJvcGVydHksIGFuZCBhIHR1cm4gcHJvcGVydHksIFxuLy8gZWFjaCBmYWN0b3J5IGhhcyBpdHMgb3duIGdhbWVib2FyZCB3aXRoaW4gaXQgXG4vLyBoYXZlIGFuIGF0dGFjayBtZXRob2Qgd2hpY2ggZ3JhYnMgdGhlIGVuZW15J3MgZ2FtZWJvYXJkIFxuLy8gbWFrZSB0aGUgZW5lbXkncyBmYWN0b3J5LCBzYW1lIHNldC11cFxuLy8gZ3JhYiB0aGUgZW5lbXkncyBnYW1lYm9hcmQgXG4vLyBob3cgY2FuIEkgYWNjZXNzIHRoZSBlbmVteSdzIGdhbWVib2FyZCBpbiBhIGRpZmZlcmVudCBmYWN0b3J5IFxuLy8gcmV2aWV3IHBhc3RvcyBtZXNzYWdlcywgd29yayBvbiBtb2NrIG9iamVjdCBleGFtcGxlXG5cbi8vIGxvZyB0aGUgcHJvcGVydGllcyBvZiBnYW1lYm9hcmQgbW9kdWxlXG4vLyBPayBob3cgZG8gSSB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBmb3JtIGFuIGF0dGFjaz8gXG4vLyBJIGFtIG5vdCBzdXJlIGhvdyB0byBwcm9wZXJseSBjb25zdHJ1Y3QgdGhlIGF0dGFjayBtZXRob2QsIFxuXG5cbi8vIEFuZCB0aGVuIHRoaXMgaXMgdGhlIGV4YWN0IHNhbWUgc29sdXRpb24sIHdoZW4geW91IGJ1aWxkIHRoZSBhdHRhY2sgZnVuY3Rpb24sIHlvdSBuZWVkIHRvIG1ha2UgaXQgc28gaXQgdGFrZXMgYSBnYW1lYm9hcmQgYXMgYW4gYXJndW1lbnRcbi8vIEFuZCB0aGVuIGluc2lkZSB0aGUgZnVuY3Rpb24sIHlvdSBjYW4gdXNlIHRoZSBnYW1lYm9hcmQgbWV0aG9kcyAgXG5cbi8vIHdoeSBhbSBJIHN0aWxsIGhhdmluZyBpc3N1ZXMgYWNjZXNzaW5nIHRoZSBnYW1lYm9hcmRGYWN0b3JpZXMgbWV0aG9kcyA/IFxuLy8gSSBhbSBwYXNzaW5nIGluIHRoZSBvYmplY3QsIFxuLy8gT2sgaSBhbSBhYmxlIHRvIGFjY2VzcyB0aGUgZ2FtZWJvYXJkcyBwcm9wZXJ0aWVzL21ldGhvZHMgXG4vLyBub3cgY2hlY2sgaWYgSSBjYW4gcGxhY2UgYW4gYXR0YWNrIG9uIHRoZSBib2FyZCB1c2luZyByZWNlaXZlQXR0YWNrIFxuLy8gd2hhdCBpcyB0aGUgYXR0YWNrIG1ldGhvZCBzdXBwb3NlZCB0byBiZSBkb2luZz8/IGF0dGFja2luZyBhbiBlbmVteSBzaGlwIEhPVz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9cblxuLy8gd2hlcmUgZG8gSSBwbGF5IHRoZSBzaGlwcz8/PyBob3cgY2FuIEkgdXNlIHJlY2VpdmVBdHRhY2sgaWYgdGhlcmVzIG5vIGZ1Y2tpbmcgc2hpcHMgb24gdGhlIGJvYXJkPyBcbi8vIFRoaXMgc3RlcCBsaXRlcmFsbHkgbWFrZXMgbm8gc2Vuc2UgXG4vLyBhbSBJIHN1cHBvc2VkIHRvIHBsYWNlIHNoaXBzIGhlcmUsIHRoZW4gdXNlIHJlY2VpdmVBdHRhY2ssIFxuLy8gSSBhbSB0cnlpbmcgdG8gbWFrZSBhIHN0dXBpZCBmdWNraW5nIHRlc3QgcGFzcyxcbi8vIHRlc3QgdG8gc2VlIGlmIGF0dGFjayBtZXRob2QgcmV0dXJucyBiYWNrIHRoZSBjb29yZGluYXRlcyBwYXNzZWQgaW4sICBcblxuLy8gSSB3YW50IHRvIGJlZ2luIHRvIHRlc3QgbXkgZnVuY3Rpb24gYW5kIGl0J3MgbWV0aG9kcywgXG4vLyBmaXJzdCBJIGNhbiBtYWtlIGEgdGVzdCB0aGF0IGdldE5hbWUgaXMgcmV0dXJuaW5nIHRoZSBjb3JyZWN0IHZhbHVlIFxuLy8gY2FudCBldmVuIGFjY2VzcyBpdCwgXG5cbi8vIGF0dGFjayBtZXRob2Qgd2l0aGluIHRoZSBwbGF5ZXIgZmFjdG9yeSBcbi8vIHdoYXQgd291bGQgZ28gaW50byBpdCwgXG4vLyBhIHdheSB0byB1c2UgdGhlIHJlY2VpdmVBdHRhY2sgbWV0aG9kIHdpdGhpbiB0aGUgZnVuY3Rpb24gXG4vLyBhY2Nlc3MgYSBnYW1lYm9hcmQsIFxuLy8gdXNlIHRoZSByZWNlaXZlQXR0YWNrIG1ldGhvZCBvbiB0aGUgZ2FtZWJvYXJkLCBcbi8vIEkgdGhpbmsgdGhlIHJlY2VpdmVBdHRhY2sgbWV0aG9kIGlzIHdvcmtpbmcsIGl0IGxvb2tzIGxpa2UgaXQncyBsb2dnaW5nIGNvb3JkaW5hdGVzIG9mIG1pc3NlZCBzaG90cyBcbi8vIGNhbiB3ZSB0ZXN0IGl0PyBcbi8vIGl0IHdvdWxkIHRha2UgY29vcmRpYW50ZXMgdG9vLCBcbi8vIHRha2UgdGhlIGNvb3JkaW5hdGVzIGFuZCBoaXQgdGhlIGJvYXJkIFxuLy8gYnV0IGhvdyBjYW4gSSB0ZXN0IHRoZSBhdHRhY2sgbWV0aG9kLCBcbi8vIHNob3VsZG4ndCBJIGhhdmUgYSBkaWZmZXJlbnQgZmFjdG9yeSBmb3IgY29tcHV0ZXIsIHdoaWNoIGNyZWF0ZXMgaXRzIG93biBib2FyZCwgdGhlbiB1c2UgcmVjZWl2ZUF0dGFjayBvbiB0aGF0IGJvYXJkIFxuLy8gaWYgdGhlcmUgd2FzIG9uZSB0aGluZyB0aGF0IEkgd291bGQgY2hhbmdlLCBpdCB3b3VsZCBiZSBhY2Nlc3NpbmcgdGhlIGNvbXB1dGVycyBnYW1lYm9hcmQsIFxuXG4vLyBhY2Nlc3MgdGhlIGdhbWVib2FyZEZhY3RvcnkgbW9kdWxlIHdpdGhpbiB0aGUgcGxheWVyRmFjdG9yeSBcblxuLy8gYWNjZXNzIHRoZSBlbmVteXMgZ2FtZWJvYXJkIHVzaW5nIGEgZ2V0dGVyIGFuZCBzZXR0ZXIsIC8vIGRvbmVcblxuLy8gcGxhY2VQbGF5ZXJTaGlwcyBtZXRob2QsIHRha2VzIGEgc2hpcCBvYmogYW5kIHBsYWNlcyBpdCBvbiB0aGUgZ2FtZWJvYXJkIHRoYXQgd2FzIGNyZWF0ZWQsIFxuXG4vLyBpZiBJIGNhbGwgcGxhY2VTaGlwcyB3b3VsZCB0aGF0IG5vdCBwbGFjZSBpdCBjb3JyZWN0bHk/Pz8gXG5cbi8vIGlzIHRoZXJlIGEgd2F5IEkgY2FuIHRlc3QgdGhlIGF0dGFjayBtZXRob2Qgbm93PyBiZWZvcmUgSSBtYWtlIHRoZSBsb2dpYyBmb3Igc2hpcCBwbGFjZW1lbnQ/IFxuXG4vLyB0cnkgdG8gdGVzdCBhdHRhY2sgbWV0aG9kLCBcblxuLy8gSSBoYXZlIG1ldGhvZHMgd2l0aGluIHBsYXllckZhY3RvcnkgYW5kIGNvbXBGYWN0b3J5IHRoYXQgcmV0dXJucyBiYWNrIGVuZW15J3MgZ2FtZWJvYXJkIGFzIHdlbGwgcGxheWVycyBib2FyZCwgXG5cbi8vIEkgd2FudGVkIHRvIHN0YXJ0IHBsYWNpbmcgaGl0cyBvbiB0aGUgYm9hcmQsIEkgbmVlZCB0byB1c2UgcmVjZWl2ZUF0dGFjayBtZXRob2Qgd2hpY2ggaXMgaW4gZ2FtZWJvYXJkRmFjdG9yeSwgXG5cbi8vIGhvdyBkbyBJIHVzZSBtZXRob2RzIHdpdGhpbiBnYW1lYm9hcmRGYWN0b3J5IG9uIHRoZSBib2FyZCB2YXJpYWJsZXM/IFxuXG4vLyBsb29rIG92ZXIgbmV2eiBtZXNzYWdlcyBhbmQgY29tbWl0IHRvIHNhdmUgd29yaywgXG5cbi8vIHRoZW4gYmVnaW4gdG8gcmVmYWN0b3IgcGxheWVyRmFjdG9yeSwgb25seSByZXR1cm5zIGEgbmFtZSBhbmQgZ2FtZWJvYXJkLiBcblxuLy8gSSBkb250IHRoaW5rIGl0cyBuZWNlc3NhcnkgdG8gdGVzdCB0aGVzZSBtZXRob2RzLCBpdHMgcHJldHR5IGJhc2ljIHN0dWZmXG5cbi8vIEkgZGVsZXRlZCB0aGUgdGVzdCBmaWxlLCBub3cgSSB3aWxsIG1ha2UgdGhlIGdhbWUgbW9kdWxlL2xvb3AgXG5cbi8vIGdhbWUgbW9kdWxlIHdpbGwgdXNlIHRoZSByZWNlaXZlQXR0YWNrIG1ldGhvZCwgXG5cbi8vIGRldGVybWluZSB3aG9zZSB0dXJuIGl0IGlzLCBcblxuLy8gZGV0ZXJtaW5lIGlmIHRoZSBzaGlwcyBoYXZlIGJlZW4gc3VuaywgXG5cbi8vIGRldGVybWluZSBhIHdpbm5lciBhbmQgcHJpbnQgYSBtZXNzYWdlIG9yIG1vZGFsIHBvcC11cCB0aGF0IGRpc3BsYXlzIHdpbm5lciBcblxuXG5cbi8vIGNvbnN0IHBsYXllcjEgPSBwbGF5ZXJGYWN0b3J5KCdhbGVjJyk7XG4vLyBjb25zdCBjb21wdXRlciA9IHBsYXllckZhY3RvcnkoJ2NvbXB1dGVyJyk7XG5cbi8vIGNvbnNvbGUubG9nKHBsYXllcjEpO1xuLy8gY29uc29sZS5sb2coY29tcHV0ZXIpOyBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gZnVuY3Rpb24gcGxheWVyRmFjdG9yeShuYW1lLCB0dXJuKSB7IFxuLy8gICAgIGxldCBnYW1lYm9hcmRNb2R1bGVNZXRob2RzID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuLy8gICAgIGNvbnN0IGdldE5hbWUgPSAoKCkgPT4ge1xuLy8gICAgICAgICByZXR1cm4gbmFtZTsgXG4vLyAgICAgfSlcbi8vICAgICBsZXQgcGxheWVyVHVybiA9IHR1cm47IFxuLy8gICAgIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKS5nZXRHYW1lYm9hcmQoKTtcblxuLy8gICAgIGZ1bmN0aW9uIGdldEJvYXJkKCkgeyBcbi8vICAgICAgICAgcmV0dXJuIHBsYXllckdhbWVib2FyZDtcbi8vICAgICB9IFxuXG4vLyAgICAgZnVuY3Rpb24gZ2V0Q29tcHV0ZXJCb2FyZCgpIHsgXG4vLyAgICAgICBsZXQgZ2V0Q29tcEJvYXJkID0gZ2FtZWJvYXJkTW9kdWxlTWV0aG9kcy5nZXRHYW1lYm9hcmQoKTtcbi8vICAgICAgIHJldHVybiBnZXRDb21wQm9hcmQ7XG4vLyAgICAgfSBcblxuLy8gICAgIGZ1bmN0aW9uIGF0dGFjayh4LCB5KSB7XG4vLyAgICAgICAgIGxldCBjb21wdXRlckJvYXJkID0gZ2V0Q29tcHV0ZXJCb2FyZCgpO1xuLy8gICAgICAgICAvLyBjb21wdXRlckJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7ICAvLyBob3cgY2FuIEkgdXNlIHRoZSByZWNlaXZlQXR0YWNrIG1ldGhvZCBvbiB0aGUgYm9hcmQ/IFxuICAgICAgICBcbi8vICAgICB9IFxuLy8gICAgIHJldHVybiB7IFxuLy8gICAgICAgICBuYW1lOiBuYW1lLFxuLy8gICAgICAgICB0dXJuOiB0dXJuLFxuLy8gICAgICAgICBnZXRCb2FyZCxcbi8vICAgICAgICAgYXR0YWNrLCBcbi8vICAgICAgICAgZ2V0TmFtZSxcbi8vICAgICAgICAgZ2V0Q29tcHV0ZXJCb2FyZCxcbi8vICAgICAgICAgZ2FtZWJvYXJkTW9kdWxlTWV0aG9kcyxcbi8vICAgICB9XG4vLyB9IFxuXG5cbi8vIGZ1bmN0aW9uIGNvbXB1dGVyRmFjdG9yeShuYW1lLCB0dXJuKSB7IFxuLy8gICAgIGxldCBnYW1lYm9hcmRNb2R1bGVNZXRob2RzID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuLy8gICAgIGNvbnN0IGdldE5hbWUgPSAoKCkgPT4ge1xuLy8gICAgICAgICByZXR1cm4gbmFtZTsgXG4vLyAgICAgfSkgXG4vLyAgICAgbGV0IGNvbXB1dGVyVHVybiA9IHR1cm47XG4vLyAgICAgY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCkuZ2V0R2FtZWJvYXJkKCk7XG4vLyAgICAgY29uc29sZS5sb2coY29tcHV0ZXJHYW1lYm9hcmQpOyBcblxuLy8gICAgIGZ1bmN0aW9uIGdldENvbXB1dGVyQm9hcmQoKSB7IFxuLy8gICAgICAgICByZXR1cm4gY29tcHV0ZXJHYW1lYm9hcmQ7XG4vLyAgICAgfSBcblxuLy8gICAgIGZ1bmN0aW9uIGdldFBsYXllcnNCb2FyZCgpIHsgXG4vLyAgICAgICAgIGxldCBnZXRQbGF5ZXJCb2FyZCA9IHBsYXllckZhY3RvcnkoKS5nZXRCb2FyZCgpO1xuLy8gICAgICAgICByZXR1cm4gZ2V0UGxheWVyQm9hcmQ7XG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gYXR0YWNrKHgsIHkpIHsgXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdMT0dHSU5HIFRIRSBQTEFZRVJTIEdBTUVCT0FSRCBXSVRISU4gVEhFIENPTVBVVEVSRkFDVE9SWSBGVU5DVElPTicsIGdldFBsYXllcnNCb2FyZCgpKVxuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiB7IFxuLy8gICAgICAgICBuYW1lOiBuYW1lLFxuLy8gICAgICAgICB0dXJuOiB0dXJuLFxuLy8gICAgICAgICBhdHRhY2ssIFxuLy8gICAgICAgICBnZXROYW1lLFxuLy8gICAgICAgICBnZXRDb21wdXRlckJvYXJkLFxuLy8gICAgICAgICBnZXRQbGF5ZXJzQm9hcmQsXG4vLyAgICAgICAgIGdhbWVib2FyZE1vZHVsZU1ldGhvZHNcbi8vICAgICB9XG4vLyB9XG5cblxuXG4vLyBjb25zb2xlLmxvZyhwbGF5ZXJGYWN0b3J5KCdhbGVjJywgdHJ1ZSkpO1xuXG4vLyBjb25zb2xlLmxvZyhjb21wdXRlckZhY3RvcnkoJ2NvbXAnLCBmYWxzZSkpO1xuXG4vLyBjb25zb2xlLmxvZyhwbGF5ZXJGYWN0b3J5KCkuYXR0YWNrKDMsIDMpKTtcblxuLy8gY29uc29sZS5sb2coY29tcHV0ZXJGYWN0b3J5KCkuYXR0YWNrKDUsIDUpKTtcbi8vIGNvbnNvbGUubG9nKHBsYXllckZhY3RvcnkuZ2V0Q29tcHV0ZXJCb2FyZCgpKTtcblxuLy8gZnVuY3Rpb24gY29tcHV0ZXJGYWN0b3J5KG5hbWUsIHR1cm4pIHsgXG4vLyAgICAgZnVuY3Rpb24gYXR0YWNrKCkgeyBcbi8vICAgICAgICAgY29uc3QgY29tcHV0ZXJzR2FtZWJvYXJkID0gZ2FtZWJvYXJkTW9kdWxlLmdldEdhbWVib2FyZCgpO1xuLy8gICAgIH0gXG5cbi8vICAgICByZXR1cm4geyBcbi8vICAgICAgICAgbmFtZTogbmFtZSwgXG4vLyAgICAgICAgIHR1cm46IHR1cm4sXG4vLyAgICAgICAgIGF0dGFjaywgXG4vLyAgICAgfVxuLy8gfVxuXG5cbi8vIGNvbnN0IHBsYXllcjEgPSBwbGF5ZXJGYWN0b3J5KCdhbGVjJywgZmFsc2UsIGdhbWVib2FyZCk7XG5cbi8vIGNvbnNvbGUubG9nKHBsYXllcjEuZ2V0TmFtZSgpKTtcblxuLy8gY29uc29sZS5sb2cocGxheWVyMS5hdHRhY2soNiwgNikpO1xuXG4vLyBjb25zb2xlLmxvZyhwbGF5ZXIxLmdldE5hbWUoKSk7XG5cbi8vIC8vIGNvbnNvbGUubG9nKHBsYXllcjEuYXR0YWNrKCkpIFxuXG4vLyAvLyBwYXNzIHRoZSBnYW1lYm9hcmQgb2JqZWN0IHRvIHRoaXMgZmFjdG9yeSBzbyB5b3UgY2FuIGFjY2VzcyAgaXQncyBtZXRob2RzLCBcblxuLy8gbGV0IHggPSBnYW1lYm9hcmRGYWN0b3J5KCk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hpcChuYW1lLCBsZW5ndGgsIHBvc2l0aW9uKSB7XG4gICAgbGV0IGhpdENvdW50ZXIgPSAwO1xuICAgIGxldCBpc1N1bmsgPSBmYWxzZTtcbiAgICAvLyBsZXQgZ2FtZUJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeS5zdW5rZW5TaGlwc0FycmF5O1xuXG4gICAgZnVuY3Rpb24gaGl0SW5jcmVtZW50b3IoKSB7XG4gICAgICBoaXRDb3VudGVyKys7XG4gICAgICBpZiAoaGl0Q291bnRlciA+PSBsZW5ndGgpIHtcbiAgICAgICAgaXNTdW5rID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIGdldEhpdENvdW50ZXIoKSB7XG4gICAgICByZXR1cm4gaGl0Q291bnRlcjtcbiAgICB9XG4gICAgLy8gZnVuY3Rpb24gaXNTdW5rQ29uZGl0aW9uYWwoKSB7XG4gICAgLy8gICBpZiAoaGl0Q291bnRlciA+PSBsZW5ndGgpIHtcbiAgICAvLyAgICAgaXNTdW5rID0gdHJ1ZTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIFxuICAgIGZ1bmN0aW9uIGdldFNoaXBTdGF0dXMoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnbG9nZ2luZyB0aGUgc3RhdHVzIG9mIGlzU3VuayB2YXJpYWJsZSB3aXRoaW4gZ2V0U2hpcFN0YXR1cyBpbiB0aGUgc2hpcEZhY3RvcnkgbW9kdWxlJywgaXNTdW5rKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3Vua2VuU2hpcHNBcnJheSkpKTtcbiAgICAgIHJldHVybiBpc1N1bms7XG4gICAgfVxuICBcbiAgICByZXR1cm4ge1xuICAgICAgc2hpcE5hbWU6IG5hbWUsXG4gICAgICBnZXQgaXNTdW5rKCkge3JldHVybiBpc1N1bmt9LFxuICAgICAgLy8gaXNTdW5rLFxuICAgICAgc2hpcExlbmd0aDogbGVuZ3RoLFxuICAgICAgc2hpcFBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgIGhpdEluY3JlbWVudG9yLFxuICAgICAgZ2V0SGl0Q291bnRlcixcbiAgICAgIC8vIGlzU3Vua0NvbmRpdGlvbmFsLFxuICAgICAgZ2V0U2hpcFN0YXR1cyxcbiAgICB9O1xuICB9XG4gIFxuICAvLyBsZXQgcGF0cm9sQm9hdCA9IHNoaXAoJ3BhdHJvbC1ib2F0JywgMik7XG4gIFxuICAvLyBjb25zb2xlLmxvZyhwYXRyb2xCb2F0KTtcbiAgLy8gY29uc29sZS5sb2cocGF0cm9sQm9hdC5oaXRJbmNyZW1lbnRvcigpKTtcbiAgLy8gY29uc29sZS5sb2cocGF0cm9sQm9hdC5oaXRJbmNyZW1lbnRvcigpKTtcbiAgLy8gY29uc29sZS5sb2cocGF0cm9sQm9hdC5nZXRIaXRJbmNyZW1lbnRvcigpKTtcbiAgLy8gY29uc29sZS5sb2cocGF0cm9sQm9hdC5pc1N1bmtDb25kaXRpb25hbCgpKTtcbiAgLy8gY29uc29sZS5sb2cocGF0cm9sQm9hdC5nZXRTaGlwU3RhdHVzKCkpO1xuICAvLyBjb25zb2xlLmxvZyhwYXRyb2xCb2F0KTtcbiAgLy8gY29uc29sZS5sb2cocGF0cm9sQm9hdCk7XG5cbiAgLy8gZXhwb3J0IGRlZmF1bHQgc2hpcDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI21haW4tdGl0bGUtY29udGFpbmVyIHsgXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59IFxcblxcbmJvZHkgeyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXG59XFxuXFxuKiB7IFxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn0gXFxuXFxuXFxuI21haW4tdGl0bGUtY29udGFpbmVyID4gaDEgeyBcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbn0gXFxuXFxuLnN0YXJ0LWdhbWUtYnRuLWhpZGRlbi1jbGFzcyB7IFxcbiAgICBkaXNwbGF5OiBub25lO1xcbn0gXFxuXFxuI3N0YXJ0LWdhbWUtYnRuLWNvbnRhaW5lciB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogI3N0YXJ0LWdhbWUtYnRuLXZpc2FibGUtY2xhc3MgeyBcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59ICovXFxuXFxuI3dyYXBwaW5nLWNvbnRhaW5lciB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogZ2FwOiAxMGVtOyAgKi9cXG59XFxuXFxuI2dhbWVib2FyZC1ncmlkLWNvbnRhaW5lciB7IFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn0gXFxuXFxuI2dhbWVib2FyZC1ncmlkLWNvbnRhaW5lci1jb21wdXRlciB7IFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiAjY29tcHV0ZXItYm9hcmQtY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXFxufSAqL1xcblxcbi8qIHNoaXAgb2JqZWN0cyBmb3IgRE9NIGFuZCBjb250YWluZXIgc3R5bGVzIGJlbG93ICovXFxuXFxuI2NoYW5nZS1zaGlwLWRpcmVjdGlvbi1idG4tY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29udGFpbmVyLWZvci1zaGlwLW9iamVjdHMgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyZW07IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhaW5lci1mb3ItYmF0dGxlc2hpcC1kZXNjcmlwdGlvbi10ZXh0LCBcXG4jY29udGFpbmVyLWZvci1kZXN0cm95ZXItZGVzY3JpcHRpb24tdGV4dCwgXFxuI2NvbnRhaW5lci1mb3ItcGF0cm9sYm9hdC1kZXNjcmlwdGlvbi10ZXh0LCBcXG4jY29udGFpbmVyLWZvci1jYXJyaWVyLWJvYXQtZGVzY3JpcHRpb24tdGV4dCxcXG4jY29udGFpbmVyLWZvci1zdWJtYXJpbmUtZGVzY3JpcHRpb24tdGV4dCB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jY29udGFpbmVyLWZvci1iYXR0bGVzaGlwLCAjY29udGFpbmVyLWZvci1kZXN0cm95ZXIsICNjb250YWluZXItZm9yLXBhdHJvbC1ib2F0LCAjY29udGFpbmVyLWZvci1jYXJyaWVyLWJvYXQsICNjb250YWluZXItZm9yLXN1Ym1hcmluZSB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn0gXFxuXFxuI3NoaXAtb2JqLXN0eWxlcyB7IFxcbiAgICBoZWlnaHQ6IDM1cHg7IFxcbiAgICB3aWR0aDogMzVweDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufSBcXG5cXG5cXG4uYmF0dGxlc2hpcC1ob3Zlci1jbGFzcyB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyBcXG59XFxuXFxuLyogLmJhdHRsZXNoaXAtcmVtb3ZlLWNsYXNzIHsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxufSAqLyBcXG5cXG5cXG4vKiB3aW5uZXIgbW9kYWwgY2xhc3NlcyBiZWxvdyAqL1xcbi8qIFxcbnNlY3Rpb24gLm1vZGFse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59ICovXFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC40cmVtO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIC8qIHBhZGRpbmc6IDEuM3JlbTsgKi9cXG4gICAgbWluLWhlaWdodDogMjUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGxlZnQ6IDQwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB9XFxuICBcXG4gIC5tb2RhbCAuZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG4gIFxcbiAgLm1vZGFsIGlucHV0IHtcXG4gICAgcGFkZGluZzogMC43cmVtIDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG4gIH1cXG4gIFxcbiAgLm1vZGFsIHAge1xcbiAgICBmb250LXNpemU6IDEuOXJlbTtcXG4gICAgY29sb3I6ICM3Nzc7XFxuICAgIG1hcmdpbjogMC40cmVtIDAgMC4ycmVtO1xcbiAgfSBcXG5cXG4gIC5tb2RhbCBoMyB7IFxcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICAubW9kYWwgYnV0dG9uIHsgXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIC5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9IFxcblxcbiAgLm1vZGFsIHtcXG4gICAgei1pbmRleDogMjtcXG4gIH0gXFxuXFxuICAuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG5cXG5cXG4vKiBwbGF5ZXIgYm9hcmQsIGZsZXggY29udGFpbmVyXFxuI3BsYXllci1ib2FyZC1mbGV4LWNvbnRhaW5lciB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWVib2FyZC1jb250YWluZXIgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAvKiBoZWlnaHQ6IDM1MHB4OyBcXG4gICAgd2lkdGg6IDM1MHB4OyAqL1xcbiAgICAvKiBtYXgtaGVpZ2h0OiAzNTBweDsgICovXFxuICAgIC8qIG1heC13aWR0aDogMzUwcHg7ICovXFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgKi9cXG4vKiB9ICAqL1xcblxcbi8qICNjZWxsLXN0eWxlcyB7IFxcbiAgICBtaW4taGVpZ2h0OiAzNXB4OyBcXG4gICAgbWluLXdpZHRoOiAzNXB4OyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufSAgKi9cXG5cXG5cXG5cXG4vKiBET00gc2hpcCBwbGFjZW1lbnQgc3R5bGVzICovXFxuXFxuLyogI3NoaXAtY29udGFpbmVycy1mb3ItcGxhY2VtZW50IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7IFxcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNiYXR0bGVzaGlwLWNvbnRhaW5lciB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIC8qIGhlaWdodDogNTBweDsgXFxuICAgIHdpZHRoOiA1MHB4OyAqL1xcbi8qIH1cXG5cXG4jYmF0dGxlc2hpcC1vYmotc3R5bGVzIHsgXFxuICAgIGhlaWdodDogMzVweDsgXFxuICAgIHdpZHRoOiAzNXB4OyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59ICAqLyBcXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0k7OzBCQUVzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7OztHQUdHOztBQUVIO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7OztHQUdHOztBQUVILG9EQUFvRDs7QUFFcEQ7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUix1QkFBdUI7QUFDM0I7O0FBRUE7Ozs7O0lBS0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHVCQUF1QjtBQUMzQjs7O0FBR0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0dBRUc7OztBQUdILCtCQUErQjtBQUMvQjs7Ozs7R0FLRzs7QUFFSDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtFQUNmOzs7O0FBSUY7Ozs7Ozs7Ozs7O21CQVdtQjtJQUNmLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEI7MkJBQ3VCO0FBQzNCLE9BQU87O0FBRVA7Ozs7O0lBS0k7Ozs7QUFJSiw4QkFBOEI7O0FBRTlCOzs7Ozs7Ozs7Ozs7a0JBWWtCO0FBQ2xCOzs7Ozs7O0lBT0lcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI21haW4tdGl0bGUtY29udGFpbmVyIHsgXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59IFxcblxcbmJvZHkgeyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXG59XFxuXFxuKiB7IFxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn0gXFxuXFxuXFxuI21haW4tdGl0bGUtY29udGFpbmVyID4gaDEgeyBcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbn0gXFxuXFxuLnN0YXJ0LWdhbWUtYnRuLWhpZGRlbi1jbGFzcyB7IFxcbiAgICBkaXNwbGF5OiBub25lO1xcbn0gXFxuXFxuI3N0YXJ0LWdhbWUtYnRuLWNvbnRhaW5lciB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogI3N0YXJ0LWdhbWUtYnRuLXZpc2FibGUtY2xhc3MgeyBcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59ICovXFxuXFxuI3dyYXBwaW5nLWNvbnRhaW5lciB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogZ2FwOiAxMGVtOyAgKi9cXG59XFxuXFxuI2dhbWVib2FyZC1ncmlkLWNvbnRhaW5lciB7IFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn0gXFxuXFxuI2dhbWVib2FyZC1ncmlkLWNvbnRhaW5lci1jb21wdXRlciB7IFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiAjY29tcHV0ZXItYm9hcmQtY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXFxufSAqL1xcblxcbi8qIHNoaXAgb2JqZWN0cyBmb3IgRE9NIGFuZCBjb250YWluZXIgc3R5bGVzIGJlbG93ICovXFxuXFxuI2NoYW5nZS1zaGlwLWRpcmVjdGlvbi1idG4tY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29udGFpbmVyLWZvci1zaGlwLW9iamVjdHMgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyZW07IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhaW5lci1mb3ItYmF0dGxlc2hpcC1kZXNjcmlwdGlvbi10ZXh0LCBcXG4jY29udGFpbmVyLWZvci1kZXN0cm95ZXItZGVzY3JpcHRpb24tdGV4dCwgXFxuI2NvbnRhaW5lci1mb3ItcGF0cm9sYm9hdC1kZXNjcmlwdGlvbi10ZXh0LCBcXG4jY29udGFpbmVyLWZvci1jYXJyaWVyLWJvYXQtZGVzY3JpcHRpb24tdGV4dCxcXG4jY29udGFpbmVyLWZvci1zdWJtYXJpbmUtZGVzY3JpcHRpb24tdGV4dCB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jY29udGFpbmVyLWZvci1iYXR0bGVzaGlwLCAjY29udGFpbmVyLWZvci1kZXN0cm95ZXIsICNjb250YWluZXItZm9yLXBhdHJvbC1ib2F0LCAjY29udGFpbmVyLWZvci1jYXJyaWVyLWJvYXQsICNjb250YWluZXItZm9yLXN1Ym1hcmluZSB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn0gXFxuXFxuI3NoaXAtb2JqLXN0eWxlcyB7IFxcbiAgICBoZWlnaHQ6IDM1cHg7IFxcbiAgICB3aWR0aDogMzVweDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufSBcXG5cXG5cXG4uYmF0dGxlc2hpcC1ob3Zlci1jbGFzcyB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyBcXG59XFxuXFxuLyogLmJhdHRsZXNoaXAtcmVtb3ZlLWNsYXNzIHsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxufSAqLyBcXG5cXG5cXG4vKiB3aW5uZXIgbW9kYWwgY2xhc3NlcyBiZWxvdyAqL1xcbi8qIFxcbnNlY3Rpb24gLm1vZGFse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59ICovXFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC40cmVtO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIC8qIHBhZGRpbmc6IDEuM3JlbTsgKi9cXG4gICAgbWluLWhlaWdodDogMjUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGxlZnQ6IDQwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB9XFxuICBcXG4gIC5tb2RhbCAuZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG4gIFxcbiAgLm1vZGFsIGlucHV0IHtcXG4gICAgcGFkZGluZzogMC43cmVtIDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG4gIH1cXG4gIFxcbiAgLm1vZGFsIHAge1xcbiAgICBmb250LXNpemU6IDEuOXJlbTtcXG4gICAgY29sb3I6ICM3Nzc7XFxuICAgIG1hcmdpbjogMC40cmVtIDAgMC4ycmVtO1xcbiAgfSBcXG5cXG4gIC5tb2RhbCBoMyB7IFxcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICAubW9kYWwgYnV0dG9uIHsgXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIC5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9IFxcblxcbiAgLm1vZGFsIHtcXG4gICAgei1pbmRleDogMjtcXG4gIH0gXFxuXFxuICAuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG5cXG5cXG4vKiBwbGF5ZXIgYm9hcmQsIGZsZXggY29udGFpbmVyXFxuI3BsYXllci1ib2FyZC1mbGV4LWNvbnRhaW5lciB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWVib2FyZC1jb250YWluZXIgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAvKiBoZWlnaHQ6IDM1MHB4OyBcXG4gICAgd2lkdGg6IDM1MHB4OyAqL1xcbiAgICAvKiBtYXgtaGVpZ2h0OiAzNTBweDsgICovXFxuICAgIC8qIG1heC13aWR0aDogMzUwcHg7ICovXFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgKi9cXG4vKiB9ICAqL1xcblxcbi8qICNjZWxsLXN0eWxlcyB7IFxcbiAgICBtaW4taGVpZ2h0OiAzNXB4OyBcXG4gICAgbWluLXdpZHRoOiAzNXB4OyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufSAgKi9cXG5cXG5cXG5cXG4vKiBET00gc2hpcCBwbGFjZW1lbnQgc3R5bGVzICovXFxuXFxuLyogI3NoaXAtY29udGFpbmVycy1mb3ItcGxhY2VtZW50IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7IFxcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNiYXR0bGVzaGlwLWNvbnRhaW5lciB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIC8qIGhlaWdodDogNTBweDsgXFxuICAgIHdpZHRoOiA1MHB4OyAqL1xcbi8qIH1cXG5cXG4jYmF0dGxlc2hpcC1vYmotc3R5bGVzIHsgXFxuICAgIGhlaWdodDogMzVweDsgXFxuICAgIHdpZHRoOiAzNXB4OyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59ICAqLyBcXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbInNoaXAiLCJnYW1lYm9hcmRGYWN0b3J5IiwicGxheWVyRmFjdG9yeSIsImNyZWF0ZVBsYXllciIsInBsYXlHYW1lIiwiZ3JpZENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3cmFwcGluZ0NvbnRhaW5lciIsImNvbXB1dGVyR3JpZENvbnRhaW5lciIsImNvbnNvbGUiLCJsb2ciLCJnYW1lYm9hcmQiLCJwbGF5ZXJHYW1lYm9hcmQiLCJjb21wdXRlckdhbWVib2FyZCIsImN1cnJlbnRTaGlwIiwiY3VycmVudENlbGwiLCJjdXJyZW50U2hpcExlbmd0aCIsImN1cnJlbnRTaGlwRGlyZWN0aW9uIiwiYmF0dGxlU2hpcCIsImRlc3Ryb3llciIsInBhdHJvbEJvYXQiLCJjYXJyaWVyQm9hdCIsInN1Ym1hcmluZSIsImNvb3JkaW5hdGVGcm9tQ29tcHV0ZXJCb2FyZFgiLCJjb29yZGluYXRlRnJvbUNvbXB1dGVyQm9hcmRZIiwic2hpcENvdW50ZXIiLCJjb21wdXRlckJhdHRsZVNoaXAiLCJjb21wdXRlckRlc3Ryb3llciIsImNvbXB1dGVyUGF0cm9sQm9hdCIsImNvbXB1dGVyQ2FycmllckJvYXQiLCJjb21wdXRlclN1Ym1hcmluZSIsImNvbXB1dGVyU2hpcEFycmF5IiwiaGl0U2hvdHNBcnJheSIsImhpdFNob3RzIiwicGxhY2VDb21wdXRlclNoaXBzIiwiY3VycmVudENvbXB1dGVyU2hpcCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInZlcnRpY2FsRGlyZWN0aW9uIiwiaG9yaXpvbnRhbERpcmVjdGlvbiIsInJhbmRvbVNoaXBEaXJlY3Rpb24iLCJNYXRoIiwicmFuZG9tIiwiZmFpbGVkQ29vcmRpbmF0ZXMiLCJyYW5kb21Db29yZGluYXRlWCIsImZsb29yIiwicmFuZG9tQ29vcmRpbmF0ZVkiLCJpc1ZhbGlkU2hpcFBsYWNlbWVudCIsInBsYWNlU2hpcCIsInNoaXBMZW5ndGgiLCJpbmNsdWRlcyIsInNwbGljZSIsInB1c2giLCJnZXRHYW1lYm9hcmQiLCJjaGFuZ2VTaGlwUG9zaXRpb25CdG4iLCJjaGFuZ2VTaGlwUG9zaXRpb25CdG5Ib3Jpem9udGFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJmaW5kQ29vcmRzIiwic2VsZWN0ZWRDZWxsIiwic2VsZWN0ZWRTaGlwRGlyZWN0aW9uIiwic2VsZWN0ZWRTaGlwTGVuZ3RoIiwidXBkYXRlZENvb3JkaW5hdGVzWCIsImN1cnJlbnRSb3ciLCJkYXRhc2V0Iiwicm93IiwiY3VycmVudENvbHVtbiIsImNvbHVtbiIsImNvbnZlcnRDb2x1bW5Ub051bWJlciIsIk51bWJlciIsImNvbnZlcnRSb3dUb051bWJlciIsImkiLCJ1cGRhdGVkWENvb3JkaW5hdGUiLCJ1c2VDb29yZHMiLCJ1cGRhdGVkQ29vcmRpbmF0ZXNZIiwidXBkYXRlZFlDb29yZGluYXRlIiwiY29vcmRzIiwicGFzc2VkQ29vcmRpbmF0ZXMiLCJjb29yZGluYXRlIiwiY2VsbCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhbGxQbGF5ZXJTaGlwc1BsYWNlZCIsIm1haW5UaXRsZUNvbnRhaW5lciIsInN0YXJ0R2FtZUJ0blZpc2libGUiLCJzdHlsZSIsImRpc3BsYXkiLCJwbGFjZUN1cnJlbnRTaGlwIiwieCIsInkiLCJzZWxlY3RlZFhDb29yZGluYXRlIiwic2VsZWN0ZWRZQ29vcmRpbmF0ZSIsInNlbGVjdGVkU2hpcCIsImdldFNoaXBDb29yZGluYXRlcyIsImN1cnJlbnRHYW1lYm9hcmQiLCJwb3NpdGlvbiIsImNvb3JkaWFudGVYIiwiY29vcmRpbmF0ZVkiLCJjdXJyZW50U2hpcFBvc2l0aW9uIiwiZGlzcGxheVNoaXBTdHlsZXMiLCJqIiwiZ2FtZWJvYXJkQ2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJib3JkZXIiLCJoZWlnaHQiLCJ3aWR0aCIsImlkIiwiYXBwZW5kIiwiY3VycmVudFBsYXllckJvYXJkIiwieENvb3JkaW5hdGUiLCJ5Q29vcmRpbmF0ZSIsInRhcmdldCIsIm51bWJlcmVkWENvb3JkaW5hdGUiLCJudW1iZXJlZFlDb29yZGluYXRlIiwic3RhcnRHYW1lQnRuIiwiY3JlYXRlQ29tcHV0ZXJCb2FyZERPTSIsImdhcCIsImNvbXByb3ciLCJjb21wY29sdW1uIiwicmVtb3ZlIiwiY29udGFpbmVyRm9yU2hpcE9iaiIsImNvbnRhaW5lckZvckNoYW5naW5nU2hpcERpcmVjdGlvbiIsImNvbnRhaW5lckZvclN0YXJ0R2FtZUJ0biIsImRldGVybWluZUlmSGl0T3JNaXNzIiwic2VsZWN0ZWRVc2VyIiwiY29vcmRpbmF0ZVgiLCJjb29yZGluYXRlQ2hlY2siLCJzZWxlY3RlZENlbGxPbkdhbWVib2FyZCIsIm1pc3NlZFNob3RzQXJyYXkiLCJtaXNzZWRTaG90cyIsInNlbGVjdGVkQ29vcmRpbmF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWxlY3RlZENvb3JkaW5hdGVNaXNzZWRTaG90IiwiZGV0ZXJtaW5lSWZIaXRPck1pc3NDb21wdXRlciIsImNyZWF0ZUJhdHRsZVNoaXBET01PYmoiLCJkaXYiLCJiYXR0bGVzaGlwQ29udGFpbmVyIiwic2hpcElEIiwic2hpcFBvc2l0aW9uIiwiY3JlYXRlRGVzdHJveWVyRE9NT2JqIiwiZGVzdHJveWVyQ29udGFpbmVyIiwiY3JlYXRlUGF0cm9sQm9hdERPTU9iaiIsInBhdHJvbEJvYXRDb250YWluZXIiLCJjcmVhdGVDYXJyaWVyQm9hdERPTU9iaiIsImNhcnJpZXJCb2F0Q29udGFpbmVyIiwiY3JlYXRlU3VibWFyaW5lRE9NT2JqIiwic3VibWFyaW5lQ29udGFpbmVyIiwiY3VycmVudFBsYXllckdhbWVib2FyZCIsImN1cnJlbnRDb21wdXRlckdhbWVib2FyZCIsIm1vZGFsIiwib3ZlcmxheSIsIm9wZW5Nb2RhbEJ0biIsImNsb3NlTW9kYWxCdG4iLCJjdXJyZW50SGl0U2hvdHNBcnJheSIsImN1cnJlbnRNaXNzZWRTaG90c0FycmF5IiwibmFtZSIsInR5cGUiLCJjb21wdXRlck5hbWUiLCJwbGF5ZXJOYW1lIiwiY2hlY2tGb3JXaW5uZXIiLCJ1c2VyT2JqIiwiYXJlQWxsU2hpcHNTdW5rIiwiYXR0YWNrIiwicmVjZWl2ZUF0dGFjayIsImNvbXB1dGVyQXR0YWNrIiwib3Blbk1vZGFsIiwidXNlciIsImN1cnJlbnRVc2VyIiwid2lubmVyTmFtZSIsIndpbm5lclRpdGxlSW5Nb2RhbCIsInRleHRDb250ZW50IiwiZGV0ZXJtaW5lSWZJbnNpZGVIaXRTaG90QXJyYXkiLCJjdXJyZW50SGl0IiwiZGV0ZXJtaW5lSWZJbnNpZGVNaXNzZWRTaG90QXJyYXkiLCJjdXJyZW50TWlzcyIsImRldGVybWluZUlmSW5zaWRlSGl0U2hvdEFycmF5Q29tcHV0ZXIiLCJkZXRlcm1pbmVJZkluc2lkZU1pc3NlZFNob3RBcnJheUNvbXB1dGVyIiwicGxheWVyVHVybiIsInBsYXllck1hcmtYIiwicGxheWVyTWFya1kiLCJyYW5kb21Db29yZGluYXRlMSIsInJhbmRvbUNvb3JkaW5hdGUyIiwiYWxsU2hvdHMiLCJzdW5rZW5TaGlwc0FycmF5IiwiY2hlY2tGb3JTaGlwIiwic2hpcE9iaiIsImNoZWNrRm9ySGl0cyIsImhpdFNob3RDb29yZGluYXRlcyIsImNoZWNrRm9yRHVwbGljYXRlTWlzc2VkU2hvdHMiLCJtaXNzZWRTaG90Q29vcmRpbmF0ZXMiLCJzaGlwT25Cb2FyZCIsImhpdEluY3JlbWVudG9yIiwiZ2V0U2hpcFN0YXR1cyIsImhpdENvdW50ZXIiLCJpc1N1bmsiLCJnZXRIaXRDb3VudGVyIiwic2hpcE5hbWUiXSwic291cmNlUm9vdCI6IiJ9