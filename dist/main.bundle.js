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
    if (!determineIfInsideHitShotArray(playerMarkX, playerMarkY) && !determineIfInsideMissedShotArray(playerMarkX, playerMarkY)) {
      attack(currentComputerGameboard, playerMarkX, playerMarkY);
      console.log('logging player turn variable before player attack', playerTurn);
      playerTurn = 2;
      console.log('logging player turn variable after player attack', playerTurn);
    } else {
      return;
    }
    console.log('COMPUTERS GAMEBOARD AFTER PLAYER ATTACK', currentComputerGameboard);
    if (checkForWinner(currentComputerGameboard)) {
      console.log('PLAYER WINS');
      openModal(_domLogic_js__WEBPACK_IMPORTED_MODULE_3__.playerGameboard);
      return; // print/access winner modal
    }
    // playerTurn = 2;
  }
  // else { 
  console.log('ELSE STATEMENT CHECK!');
  const randomCoordinate1 = Math.floor(Math.random() * 9) + 1;
  const randomCoordinate2 = Math.floor(Math.random() * 9) + 1;
  // computerAttack(currentPlayerGameboard, randomCoordinate1, randomCoordinate2);
  console.log('PLAYERS GAMEBOARD AFTER COMPUTER ATTACK', currentPlayerGameboard);
  console.log('RANDOM COORDINATES SELECTED FROM COMPUTER', randomCoordinate1, randomCoordinate2);
  if (!determineIfInsideHitShotArrayComputer(randomCoordinate1, randomCoordinate2) && !determineIfInsideMissedShotArrayComputer(randomCoordinate1, randomCoordinate2)) {
    computerAttack(currentPlayerGameboard, randomCoordinate1, randomCoordinate2);
    console.log('logging player turn variable before computer attack', playerTurn);
    playerTurn = 1;
    console.log('logging player turn variable after computer attack', playerTurn);
  } else {
    return;
  }
  if (checkForWinner(currentPlayerGameboard)) {
    console.log('COMP WINS');
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
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ "./src/shipFactory.js");
/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardFactory.js */ "./src/gameboardFactory.js");
/* harmony import */ var _playerFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playerFactory.js */ "./src/playerFactory.js");
/* harmony import */ var _gameModule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameModule.js */ "./src/gameModule.js");
/* harmony import */ var _domLogic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domLogic.js */ "./src/domLogic.js");
// import './shipFactory.js';






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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7O0FBRUE7O0FBSUE7QUFDQTtBQUNBOztBQUlFOztBQWFGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbm5CQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNvQztBQUVpQjtBQUV0QyxTQUFTQyxhQUFhQSxDQUFDOEosSUFBSSxFQUFFO0VBQ3hDLE1BQU1wSixTQUFTLEdBQUdYLGdFQUFnQixDQUFDLENBQUM7RUFDcEMsT0FBTztJQUFDK0osSUFBSTtJQUFFcEo7RUFBUyxDQUFDO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBSUE7QUFDQTs7QUFFQTtBQUNBOztBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3ZUZSxTQUFTWixJQUFJQSxDQUFDZ0ssSUFBSSxFQUFFMUgsTUFBTSxFQUFFNEQsUUFBUSxFQUFFO0VBQ2pELElBQUlvRyxVQUFVLEdBQUcsQ0FBQztFQUNsQixJQUFJQyxNQUFNLEdBQUcsS0FBSztFQUNsQjs7RUFFQSxTQUFTSCxjQUFjQSxDQUFBLEVBQUc7SUFDeEJFLFVBQVUsRUFBRTtJQUNaLElBQUlBLFVBQVUsSUFBSWhLLE1BQU0sRUFBRTtNQUN4QmlLLE1BQU0sR0FBRyxJQUFJO0lBQ2Y7RUFDRjtFQUVBLFNBQVNDLGFBQWFBLENBQUEsRUFBRztJQUN2QixPQUFPRixVQUFVO0VBQ25CO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQSxTQUFTRCxhQUFhQSxDQUFBLEVBQUc7SUFDdkI7SUFDQTtJQUNBLE9BQU9FLE1BQU07RUFDZjtFQUVBLE9BQU87SUFDTEUsUUFBUSxFQUFFekMsSUFBSTtJQUNkLElBQUl1QyxNQUFNQSxDQUFBLEVBQUc7TUFBQyxPQUFPQSxNQUFNO0lBQUEsQ0FBQztJQUM1QjtJQUNBcEosVUFBVSxFQUFFYixNQUFNO0lBQ2xCeUcsWUFBWSxFQUFFN0MsUUFBUTtJQUN0QmtHLGNBQWM7SUFDZEksYUFBYTtJQUNiO0lBQ0FIO0VBQ0YsQ0FBQztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2RvbUxvZ2ljLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZ2FtZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2dhbWVib2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zaGlwRmFjdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hpcCBmcm9tICcuL3NoaXBGYWN0b3J5LmpzJztcbmltcG9ydCBnYW1lYm9hcmRGYWN0b3J5IGZyb20gJy4vZ2FtZWJvYXJkRmFjdG9yeS5qcyc7IFxuaW1wb3J0IHBsYXllckZhY3RvcnkgZnJvbSAnLi9wbGF5ZXJGYWN0b3J5LmpzJztcbi8vIGltcG9ydCAnLi9nYW1lTW9kdWxlLmpzJztcbmltcG9ydCBjcmVhdGVQbGF5ZXIsIHsgcGxheUdhbWUgfSBmcm9tICcuL2dhbWVNb2R1bGUuanMnO1xuLy8gaW1wb3J0IHsgcGxhY2VTaGlwc09uUGxheWVyc0JvYXJkLCBwbGF5R2FtZSB9IGZyb20gJy4vZ2FtZU1vZHVsZS5qcyc7XG4vLyBpbXBvcnQgZ2FtZWJvYXJkRmFjdG9yeSBmcm9tICcuL2dhbWVib2FyZEZhY3RvcnkuanMnO1xuLy8gaW1wb3J0IHsgZGV0ZXJtaW5lSWZJbnNpZGVIaXRTaG90cyB9IGZyb20gJy4vZ2FtZU1vZHVsZS5qcyc7XG5cbmNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWdyaWQtY29udGFpbmVyJyk7XG5jb25zdCB3cmFwcGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGluZy1jb250YWluZXInKTtcbmNvbnN0IGNvbXB1dGVyR3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtZ3JpZC1jb250YWluZXItY29tcHV0ZXInKTtcbmNvbnNvbGUubG9nKGNvbXB1dGVyR3JpZENvbnRhaW5lcik7XG5cbmxldCBnYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG5cbmV4cG9ydCBsZXQgcGxheWVyR2FtZWJvYXJkID0gY3JlYXRlUGxheWVyKCdBbGVjJywgJ3BsYXllcicpO1xuY29uc29sZS5sb2cocGxheWVyR2FtZWJvYXJkKTtcbmV4cG9ydCBsZXQgY29tcHV0ZXJHYW1lYm9hcmQgPSBjcmVhdGVQbGF5ZXIoJ0lCTScsICdjb21wdXRlcicpO1xuY29uc29sZS5sb2coY29tcHV0ZXJHYW1lYm9hcmQpOyBcblxubGV0IGN1cnJlbnRTaGlwIFxubGV0IGN1cnJlbnRDZWxsXG5sZXQgY3VycmVudFNoaXBMZW5ndGhcbmxldCBjdXJyZW50U2hpcERpcmVjdGlvblxubGV0IGJhdHRsZVNoaXAgPSBzaGlwKCdCYXR0bGVzaGlwJywgNCwgJ3ZlcnRpY2FsJyk7XG5sZXQgZGVzdHJveWVyID0gc2hpcCgnRGVzdHJveWVyJywgNCwgJ3ZlcnRpY2FsJyApO1xubGV0IHBhdHJvbEJvYXQgPSBzaGlwKCdQYXRyb2wtYm9hdCcsIDIsICd2ZXJ0aWNhbCcpO1xubGV0IGNhcnJpZXJCb2F0ID0gc2hpcCgnQ2FycmllcicsIDUsICd2ZXJ0aWNhbCcpO1xubGV0IHN1Ym1hcmluZSA9IHNoaXAoJ1N1Ym1hcmluZScsIDMsICd2ZXJ0aWNhbCcpOyBcbmxldCBjb29yZGluYXRlRnJvbUNvbXB1dGVyQm9hcmRYXG5sZXQgY29vcmRpbmF0ZUZyb21Db21wdXRlckJvYXJkWVxubGV0IHNoaXBDb3VudGVyID0gMDsgXG4vLyBsZXQgY29tcHV0ZXJBcnJheSA9IFtiYXR0bGVTaGlwLCBkZXN0cm95ZXIsIHBhdHJvbEJvYXQsIGNhcnJpZXJCb2F0LCBzdWJtYXJpbmVdOyBcblxubGV0IGNvbXB1dGVyQmF0dGxlU2hpcCA9IHNoaXAoJ0JhdHRsZXNoaXAnLCA0LCAndmVydGljYWwnKTtcbmxldCBjb21wdXRlckRlc3Ryb3llciA9IHNoaXAoJ0Rlc3Ryb3llcicsIDQsICd2ZXJ0aWNhbCcgKTtcbmxldCBjb21wdXRlclBhdHJvbEJvYXQgPSBzaGlwKCdQYXRyb2wtYm9hdCcsIDIsICd2ZXJ0aWNhbCcpO1xubGV0IGNvbXB1dGVyQ2FycmllckJvYXQgPSBzaGlwKCdDYXJyaWVyJywgNSwgJ3ZlcnRpY2FsJyk7XG5sZXQgY29tcHV0ZXJTdWJtYXJpbmUgPSBzaGlwKCdTdWJtYXJpbmUnLCAzLCAndmVydGljYWwnKTsgXG5sZXQgY29tcHV0ZXJTaGlwQXJyYXkgPSBbY29tcHV0ZXJCYXR0bGVTaGlwLCBjb21wdXRlckRlc3Ryb3llciwgY29tcHV0ZXJQYXRyb2xCb2F0LCBjb21wdXRlckNhcnJpZXJCb2F0ICwgY29tcHV0ZXJTdWJtYXJpbmVdO1xubGV0IGhpdFNob3RzQXJyYXkgPSBjb21wdXRlckdhbWVib2FyZC5nYW1lYm9hcmQuaGl0U2hvdHM7XG4gICAgXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHBsYWNlQ29tcHV0ZXJTaGlwcyhjdXJyZW50Q29tcHV0ZXJTaGlwID0gY29tcHV0ZXJTaGlwQXJyYXlbMF0pIHsgXG4gICAgICAgIGlmIChjb21wdXRlclNoaXBBcnJheS5sZW5ndGggPT09IDApIHsgXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gXG5cbiAgICAgICAgbGV0IHZlcnRpY2FsRGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgbGV0IGhvcml6b250YWxEaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7IFxuICAgICAgICBsZXQgcmFuZG9tU2hpcERpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyB2ZXJ0aWNhbERpcmVjdGlvbiA6IGhvcml6b250YWxEaXJlY3Rpb247XG4gICAgICAgIGNvbnNvbGUubG9nKHJhbmRvbVNoaXBEaXJlY3Rpb24pO1xuXG4gICAgICAgIGxldCBmYWlsZWRDb29yZGluYXRlcyA9IFtdO1xuICAgICAgICBsZXQgcmFuZG9tQ29vcmRpbmF0ZVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSArIDE7XG4gICAgICAgIGxldCByYW5kb21Db29yZGluYXRlWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpICsgMTsgXG4gICAgICAgIGxldCBpc1ZhbGlkU2hpcFBsYWNlbWVudCA9IGNvbXB1dGVyR2FtZWJvYXJkLmdhbWVib2FyZC5wbGFjZVNoaXAoY3VycmVudENvbXB1dGVyU2hpcCwgcmFuZG9tQ29vcmRpbmF0ZVgsIHJhbmRvbUNvb3JkaW5hdGVZLCBjdXJyZW50Q29tcHV0ZXJTaGlwLnNoaXBMZW5ndGgsIHJhbmRvbVNoaXBEaXJlY3Rpb24pO1xuICAgICAgICBpZiAoZmFpbGVkQ29vcmRpbmF0ZXMuaW5jbHVkZXMoW3JhbmRvbUNvb3JkaW5hdGVYLCByYW5kb21Db29yZGluYXRlWV0pKSB7IFxuICAgICAgICAgICAgIHBsYWNlQ29tcHV0ZXJTaGlwcygpO1xuICAgICAgICB9IGlmIChpc1ZhbGlkU2hpcFBsYWNlbWVudCkge1xuICAgICAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQuZ2FtZWJvYXJkLnBsYWNlU2hpcChjdXJyZW50Q29tcHV0ZXJTaGlwLCByYW5kb21Db29yZGluYXRlWCwgcmFuZG9tQ29vcmRpbmF0ZVksIGN1cnJlbnRDb21wdXRlclNoaXAuc2hpcExlbmd0aCwgcmFuZG9tU2hpcERpcmVjdGlvbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTE9HR0lORyBUSEUgQ09NUFVURVJTSElQQVJSQVkgQUZURVIgVkFMSUQgU0hJUCBQTEFDRU1FTlQsIFVTSU5HIFNQTElDRSBCRUZPUkUnLCBjb21wdXRlclNoaXBBcnJheSk7XG4gICAgICAgICAgICBjb21wdXRlclNoaXBBcnJheS5zcGxpY2UoY3VycmVudENvbXB1dGVyU2hpcCwgMSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTE9HR0lORyBUSEUgQ09NUFVURVJTSElQQVJSQVkgQUZURVIgVkFMSUQgU0hJUCBQTEFDRU1FTlQsIFVTSU5HIFNQTElDRSBBRlRFUicsIGNvbXB1dGVyU2hpcEFycmF5KTtcbiAgICAgICAgICAgIHBsYWNlQ29tcHV0ZXJTaGlwcygpO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc1ZhbGlkU2hpcFBsYWNlbWVudCkgIHsgXG4gICAgICAgICAgICBmYWlsZWRDb29yZGluYXRlcy5wdXNoKFtyYW5kb21Db29yZGluYXRlWCwgcmFuZG9tQ29vcmRpbmF0ZVldKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMT0dHSU5HIFRIRSBDT01QVVRFUlNISVBBUlJBWSBBRlRFUiBJTlZBTElEIFNISVAgUExBQ0VNRU5UJywgY29tcHV0ZXJTaGlwQXJyYXkpO1xuICAgICAgICAgICAgcGxhY2VDb21wdXRlclNoaXBzKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJHYW1lYm9hcmQuZ2FtZWJvYXJkLmdldEdhbWVib2FyZCgpKTtcbiAgICAgICAgLy8gbGV0IHVwZGF0ZWRDb21wdXRlckJvYXJkID0gY29tcHV0ZXJHYW1lYm9hcmQuZ2FtZWJvYXJkLmdldEdhbWVib2FyZCgpO1xuICAgICAgICAvLyByZXR1cm4gY29tcHV0ZXJHYW1lYm9hcmQuZ2FtZWJvYXJkLmdldEdhbWVib2FyZCgpO1xuICAgIH0gXG5cbnBsYWNlQ29tcHV0ZXJTaGlwcygpO1xuXG5cbmNvbnN0IGNoYW5nZVNoaXBQb3NpdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2Utc2hpcC1kaXJlY3Rpb24tYnRuJyk7XG5jb25zdCBjaGFuZ2VTaGlwUG9zaXRpb25CdG5Ib3Jpem9udGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYW5nZS1zaGlwLWRpcmVjdGlvbi1idG4taCcpO1xuXG5jaGFuZ2VTaGlwUG9zaXRpb25CdG5Ib3Jpem9udGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgXG4gICAgY3VycmVudFNoaXBEaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG59KVxuXG5jaGFuZ2VTaGlwUG9zaXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyAgXG4gICAgY3VycmVudFNoaXBEaXJlY3Rpb24gPSAndmVydGljYWwnO1xufSkgXG4vLyBob3ZlciBjbGFzc1xuZnVuY3Rpb24gZmluZENvb3JkcyhjdXJyZW50Q2VsbCwgY3VycmVudFNoaXBEaXJlY3Rpb24sIGN1cnJlbnRTaGlwTGVuZ3RoKSB7IFxuICAgIGxldCBzZWxlY3RlZENlbGwgPSBjdXJyZW50Q2VsbDtcbiAgICBsZXQgc2VsZWN0ZWRTaGlwRGlyZWN0aW9uID0gY3VycmVudFNoaXBEaXJlY3Rpb247XG4gICAgbGV0IHNlbGVjdGVkU2hpcExlbmd0aCA9IGN1cnJlbnRTaGlwTGVuZ3RoOyBcblxuICAgIGlmIChzZWxlY3RlZFNoaXBEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHsgXG4gICAgICAgIGxldCB1cGRhdGVkQ29vcmRpbmF0ZXNYID0gW107XG4gICAgICAgIGxldCBjdXJyZW50Um93ID0gc2VsZWN0ZWRDZWxsLmRhdGFzZXQucm93O1xuICAgICAgICBsZXQgY3VycmVudENvbHVtbiA9IHNlbGVjdGVkQ2VsbC5kYXRhc2V0LmNvbHVtbjtcbiAgICAgICAgbGV0IGNvbnZlcnRDb2x1bW5Ub051bWJlciA9IE51bWJlcihjdXJyZW50Q29sdW1uKTtcbiAgICAgICAgbGV0IGNvbnZlcnRSb3dUb051bWJlciA9IE51bWJlcihjdXJyZW50Um93KTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRTaGlwTGVuZ3RoOyBpKyspIHsgXG4gICAgICAgICAgICBsZXQgdXBkYXRlZFhDb29yZGluYXRlIFxuICAgICAgICAgICAgdXBkYXRlZFhDb29yZGluYXRlID0gY29udmVydFJvd1RvTnVtYmVyICsgaTtcbiAgICAgICAgICAgIHVwZGF0ZWRDb29yZGluYXRlc1gucHVzaChbdXBkYXRlZFhDb29yZGluYXRlLCBjb252ZXJ0Q29sdW1uVG9OdW1iZXJdKTtcbiAgICAgICAgfSBcblxuICAgICAgICB1c2VDb29yZHModXBkYXRlZENvb3JkaW5hdGVzWCk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZFNoaXBEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykgeyBcbiAgICAgICAgbGV0IHVwZGF0ZWRDb29yZGluYXRlc1kgPSBbXTtcbiAgICAgICAgbGV0IGN1cnJlbnRSb3cgPSBzZWxlY3RlZENlbGwuZGF0YXNldC5yb3c7XG4gICAgICAgIGxldCBjdXJyZW50Q29sdW1uID0gc2VsZWN0ZWRDZWxsLmRhdGFzZXQuY29sdW1uO1xuICAgICAgICBsZXQgY29udmVydENvbHVtblRvTnVtYmVyID0gTnVtYmVyKGN1cnJlbnRDb2x1bW4pO1xuICAgICAgICBsZXQgY29udmVydFJvd1RvTnVtYmVyID0gTnVtYmVyKGN1cnJlbnRSb3cpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRTaGlwTGVuZ3RoOyBpKyspIHsgXG4gICAgICAgICAgICBsZXQgdXBkYXRlZFlDb29yZGluYXRlIFxuICAgICAgICAgICAgdXBkYXRlZFlDb29yZGluYXRlID0gY29udmVydENvbHVtblRvTnVtYmVyICsgaTtcbiAgICAgICAgICAgIHVwZGF0ZWRDb29yZGluYXRlc1kucHVzaChbY29udmVydFJvd1RvTnVtYmVyLCB1cGRhdGVkWUNvb3JkaW5hdGVdKTtcbiAgICAgICAgfSBcbiAgICAgICAgdXNlQ29vcmRzKHVwZGF0ZWRDb29yZGluYXRlc1kpO1xuICAgIH1cbn0gXG5cblxuLy8gaG92ZXIgY2xhc3MsIGZpbGxpbmcgaW4gdGhlIHNlbGVjdGVkIGNlbGxzIFxuZnVuY3Rpb24gdXNlQ29vcmRzKGNvb3Jkcykge1xuICAgIGxldCBwYXNzZWRDb29yZGluYXRlcyA9IGNvb3JkcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhc3NlZENvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7IFxuICAgICAgICBsZXQgY29vcmRpbmF0ZSA9IHBhc3NlZENvb3JkaW5hdGVzW2ldO1xuICAgICAgICBsZXQgcm93ID0gY29vcmRpbmF0ZVswXTtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGNvb3JkaW5hdGVbMV07XG4gICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sdW1uPVwiJHtjb2x1bW59XCJdYCk7XG4gICAgICAgLy8gIGNvbnNvbGUubG9nKGNlbGwpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoJ2JhdHRsZXNoaXAtaG92ZXItY2xhc3MnKTsgICAgIFxuICAgIH0gXG59IFxuXG5cbmZ1bmN0aW9uIGFsbFBsYXllclNoaXBzUGxhY2VkKCkgeyAgXG5cbiAgICBjb25zb2xlLmxvZygnTE9HR0lORyBUSEUgU0hJUCBDT1VOVEVSLCBXSVRISU4gQUxMIFBMQVlFUiBTSElQUyBQTEFDRUQnLCBzaGlwQ291bnRlcik7XG4gXG4gICAgaWYgKHNoaXBDb3VudGVyID09PSA1KSB7IFxuICAgICAgICBsZXQgbWFpblRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tdGl0bGUtY29udGFpbmVyJyk7XG4gICAgICAgIGxldCBzdGFydEdhbWVCdG5WaXNpYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWdhbWUtYnRuJyk7XG4gICAgICAgIHN0YXJ0R2FtZUJ0blZpc2libGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG5cbn1cblxuXG4vLyBwbGFjZXMgc2hpcCBvbiB0aGUgZ2FtZWJvYXJkLCBjYWxscyBhbm90aGVyIGZ1bmN0aW9uIHRoYXQgdXNlcyBjb29yZGlhbnRlcywgcG9zaXRpb24gYW5kIGxlbmd0aCB0byBmaWxsIGluIHRoZSBhcHByb3ByaWF0ZSBjZWxscyBcbmZ1bmN0aW9uIHBsYWNlQ3VycmVudFNoaXAoeCwgeSwgY3VycmVudFNoaXAsIGN1cnJlbnRTaGlwTGVuZ3RoLCBjdXJyZW50U2hpcERpcmVjdGlvbikgeyBcbiAgICBsZXQgc2VsZWN0ZWRYQ29vcmRpbmF0ZSA9IHg7XG4gICAgbGV0IHNlbGVjdGVkWUNvb3JkaW5hdGUgPSB5OyBcbiAgICBcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFhDb29yZGluYXRlKTtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFlDb29yZGluYXRlKTtcblxuICAgIGxldCBzZWxlY3RlZFNoaXAgPSBjdXJyZW50U2hpcDtcbiAgICBsZXQgc2VsZWN0ZWRTaGlwTGVuZ3RoID0gY3VycmVudFNoaXBMZW5ndGg7XG4gICAgbGV0IHNlbGVjdGVkU2hpcERpcmVjdGlvbiA9IGN1cnJlbnRTaGlwRGlyZWN0aW9uO1xuXG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRTaGlwKTtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFNoaXBMZW5ndGgpO1xuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkU2hpcERpcmVjdGlvbik7IFxuXG4gICAgcGxheWVyR2FtZWJvYXJkLmdhbWVib2FyZC5wbGFjZVNoaXAoc2VsZWN0ZWRTaGlwLCBzZWxlY3RlZFhDb29yZGluYXRlLCBzZWxlY3RlZFlDb29yZGluYXRlLCBzZWxlY3RlZFNoaXBMZW5ndGgsIHNlbGVjdGVkU2hpcERpcmVjdGlvbik7XG4gICAgLy8gY29uc29sZS5sb2coJ2hlcmUgaXMgdGhlIHVwZGF0ZWQgcGxheWVyIGdhbWVib2FyZCcsIHBsYXllckdhbWVib2FyZC5nYW1lYm9hcmQuZ2V0R2FtZWJvYXJkKCkpO1xuICAgIGdldFNoaXBDb29yZGluYXRlcyhzZWxlY3RlZFhDb29yZGluYXRlLCBzZWxlY3RlZFlDb29yZGluYXRlLCBzZWxlY3RlZFNoaXBMZW5ndGgsIHNlbGVjdGVkU2hpcERpcmVjdGlvbik7XG4gICAgbGV0IGN1cnJlbnRHYW1lYm9hcmQgPSBwbGF5ZXJHYW1lYm9hcmQuZ2FtZWJvYXJkLmdldEdhbWVib2FyZCgpO1xuICAgIHNoaXBDb3VudGVyKytcbiAgICBhbGxQbGF5ZXJTaGlwc1BsYWNlZCgpO1xufSBcbi8vIGRldGVybWluZXMgaG93IG1hbnkgY2VsbHMgd2lsbCBiZSBmaWxsZWQsIHdoZW4gc2hpcCBpcyBwbGFjZWQgXG5mdW5jdGlvbiBnZXRTaGlwQ29vcmRpbmF0ZXMoeCwgeSwgbGVuZ3RoLCBwb3NpdGlvbikgeyBcbiAgICBsZXQgY29vcmRpYW50ZVggPSB4O1xuICAgIGxldCBjb29yZGluYXRlWSA9IHk7IFxuICAgIGxldCBjdXJyZW50U2hpcExlbmd0aCA9IGxlbmd0aDsgXG4gICAgbGV0IGN1cnJlbnRTaGlwUG9zaXRpb24gPSBwb3NpdGlvbjtcblxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiBjb29yZGlhbnRlWCk7XG4gICAgY29uc29sZS5sb2coY29vcmRpbmF0ZVkpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTaGlwTGVuZ3RoKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50U2hpcFBvc2l0aW9uKTsgXG5cbiAgICBpZiAoY3VycmVudFNoaXBQb3NpdGlvbiA9PT0gJ3ZlcnRpY2FsJykgeyBcbiAgICAgICAgbGV0IHVwZGF0ZWRDb29yZGluYXRlc1ggPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcExlbmd0aDsgaSsrKSB7IFxuICAgICAgICAgICAgbGV0IHVwZGF0ZWRYQ29vcmRpbmF0ZVxuICAgICAgICAgICAgdXBkYXRlZFhDb29yZGluYXRlID0gY29vcmRpYW50ZVggKyBpO1xuICAgICAgICAgICAgdXBkYXRlZENvb3JkaW5hdGVzWC5wdXNoKFt1cGRhdGVkWENvb3JkaW5hdGUsIGNvb3JkaW5hdGVZXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVkQ29vcmRpbmF0ZXNYKTtcbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5U2hpcFN0eWxlcyh1cGRhdGVkQ29vcmRpbmF0ZXNYKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRTaGlwUG9zaXRpb24gPT09ICdob3Jpem9udGFsJykgeyBcbiAgICAgbGV0IHVwZGF0ZWRDb29yZGluYXRlc1kgPSBbXTsgICBcbiAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcExlbmd0aDsgaSsrKSB7IFxuICAgICAgICBsZXQgdXBkYXRlZFlDb29yZGluYXRlXG4gICAgICAgIHVwZGF0ZWRZQ29vcmRpbmF0ZSA9IGNvb3JkaW5hdGVZICsgaTtcbiAgICAgICAgdXBkYXRlZENvb3JkaW5hdGVzWS5wdXNoKFtjb29yZGlhbnRlWCwgdXBkYXRlZFlDb29yZGluYXRlXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRDb29yZGluYXRlc1kpO1xuICAgIH1cbiAgICBkaXNwbGF5U2hpcFN0eWxlcyh1cGRhdGVkQ29vcmRpbmF0ZXNZKTtcbiAgICB9IFxuICAgIC8vIGRpc3BsYXlzIHRob3NlIHN0eWxlcyB3aGVuIHNoaXAgaXMgcGxhY2VkXG4gICAgZnVuY3Rpb24gZGlzcGxheVNoaXBTdHlsZXMoY29vcmRzKSB7IFxuICAgICAgICBsZXQgcGFzc2VkQ29vcmRpbmF0ZXMgPSBjb29yZHM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFzc2VkQ29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHsgXG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZSA9IHBhc3NlZENvb3JkaW5hdGVzW2ldO1xuICAgICAgICAgICAgbGV0IHJvdyA9IGNvb3JkaW5hdGVbMF07XG4gICAgICAgICAgICBsZXQgY29sdW1uID0gY29vcmRpbmF0ZVsxXTtcbiAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sdW1uPVwiJHtjb2x1bW59XCJdYClcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnRvZ2dsZSgnYmF0dGxlc2hpcC1ob3Zlci1jbGFzcycpOyBcbiAgICAgICAgfVxuICAgIH0gICBcbn0gXG5cbi8vIGdhbWVib2FyZCBncmlkLCBmb3IgcGxheWVycyBib2FyZFxuZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IFxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykgeyBcbiAgICBsZXQgZ2FtZWJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKS5nZXRHYW1lYm9hcmQoKTtcbiAgICAvLyBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuICAgIGdhbWVib2FyZENlbGwuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBibGFjayc7XG4gICAgZ2FtZWJvYXJkQ2VsbC5zdHlsZS5oZWlnaHQgPSAnMzVweCc7XG4gICAgZ2FtZWJvYXJkQ2VsbC5zdHlsZS53aWR0aCA9ICczNXB4JztcbiAgICBnYW1lYm9hcmRDZWxsLmRhdGFzZXQucm93ID0gaTtcbiAgICBnYW1lYm9hcmRDZWxsLmRhdGFzZXQuY29sdW1uID0gajtcbiAgICBnYW1lYm9hcmRDZWxsLmlkID0gJ3BsYXllci1nYW1lYm9hcmRDZWxsJztcbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZChnYW1lYm9hcmRDZWxsKTtcbiAgICBnYW1lYm9hcmRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgXG4gICAgICAgIGxldCBjdXJyZW50UGxheWVyQm9hcmQgPSBwbGF5ZXJHYW1lYm9hcmQuZ2FtZWJvYXJkLmdldEdhbWVib2FyZCgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdJTiBUSEUgRVZFTlQgTElTVEVORVIsIFRISVMgSVMgQ1VSUkVOVCBTSElQJywgY3VycmVudFNoaXApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnSU4gVEhFIEVWRU5UIExJU1RFTkVSLCBUSElTIElTIENVUlJFTlQgU0hJUCBMRU5HVEgnLCBjdXJyZW50U2hpcExlbmd0aCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdJTiBUSEUgRVZFTlQgTElTVEVORVIsIFRISVMgSVMgQ1VSUkVOVCBTSElQIERJUkVDVElPTicsIGN1cnJlbnRTaGlwRGlyZWN0aW9uKTtcbiAgICAgICAgbGV0IHhDb29yZGluYXRlIFxuICAgICAgICBsZXQgeUNvb3JkaW5hdGVcbiAgICAgICAgeENvb3JkaW5hdGUgPSBlLnRhcmdldC5kYXRhc2V0LnJvdzsgXG4gICAgICAgIHlDb29yZGluYXRlID0gIGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uO1xuICAgICAgICBsZXQgbnVtYmVyZWRYQ29vcmRpbmF0ZSA9IE51bWJlcih4Q29vcmRpbmF0ZSk7XG4gICAgICAgIGxldCBudW1iZXJlZFlDb29yZGluYXRlID0gTnVtYmVyKHlDb29yZGluYXRlKTtcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIG51bWJlcmVkWENvb3JkaW5hdGUpO1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgbnVtYmVyZWRZQ29vcmRpbmF0ZSk7IFxuICAgICAgICBwbGFjZUN1cnJlbnRTaGlwKG51bWJlcmVkWENvb3JkaW5hdGUsIG51bWJlcmVkWUNvb3JkaW5hdGUsIGN1cnJlbnRTaGlwLCBjdXJyZW50U2hpcExlbmd0aCwgY3VycmVudFNoaXBEaXJlY3Rpb24pO1xuXG4gICAgfSkgXG5cbiAgICBnYW1lYm9hcmRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZSkgPT4geyBcbiAgICAgICAgY3VycmVudENlbGwgPSBlLnRhcmdldDsgXG4gICAgICAgIGZpbmRDb29yZHMoY3VycmVudENlbGwsIGN1cnJlbnRTaGlwRGlyZWN0aW9uLCBjdXJyZW50U2hpcExlbmd0aCk7XG4gICAgfSkgXG5cblxuICAgIGdhbWVib2FyZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlKSA9PiB7XG4gICAgICAgIGZpbmRDb29yZHMoY3VycmVudENlbGwsIGN1cnJlbnRTaGlwRGlyZWN0aW9uLCBjdXJyZW50U2hpcExlbmd0aCk7XG4gICAgfSkgXG4gICAgfSBcbn0gIFxuXG5cblxubGV0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lLWJ0bicpO1xuY29uc29sZS5sb2coJ2xvZ2dpbmcgc3RhcnQgZ2FtZSBidG4nLCBzdGFydEdhbWVCdG4pOyAgXG4gXG4vLyBjcmVhdGVzIHRoZSBjb21wdXRlcnMgZ2FtZWJvYXJkIGdyaWRcbmZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVyQm9hcmRET00oKSB7IFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IFxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHsgXG4gICAgICAgIHdyYXBwaW5nQ29udGFpbmVyLnN0eWxlLmdhcCA9ICcxNWVtJztcbiAgICAgICAgbGV0IGdhbWVib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpLmdldEdhbWVib2FyZCgpO1xuXG4gICAgICAgIGdhbWVib2FyZENlbGwuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBibGFjayc7XG4gICAgICAgIGdhbWVib2FyZENlbGwuc3R5bGUuaGVpZ2h0ID0gJzM1cHgnO1xuICAgICAgICBnYW1lYm9hcmRDZWxsLnN0eWxlLndpZHRoID0gJzM1cHgnO1xuICAgICAgICBnYW1lYm9hcmRDZWxsLmRhdGFzZXQuY29tcHJvdyA9IGk7XG4gICAgICAgIGdhbWVib2FyZENlbGwuZGF0YXNldC5jb21wY29sdW1uID0gajtcbiAgICAgICAgLy8gZ2FtZWJvYXJkQ2VsbC5pZCA9ICdjb21wdXRlci1nYW1lYm9hcmRDZWxsJztcbiAgICAgICAgY29tcHV0ZXJHcmlkQ29udGFpbmVyLmFwcGVuZChnYW1lYm9hcmRDZWxsKTtcbiAgICAgICAgZ2FtZWJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IFxuICAgICAgICAgICAgbGV0IHhDb29yZGluYXRlXG4gICAgICAgICAgICBsZXQgeUNvb3JkaW5hdGVcbiAgICAgICAgICAgIHhDb29yZGluYXRlID0gZS50YXJnZXQuZGF0YXNldC5jb21wcm93O1xuICAgICAgICAgICAgeUNvb3JkaW5hdGUgPSAgZS50YXJnZXQuZGF0YXNldC5jb21wY29sdW1uO1xuICAgICAgICAgICAgbGV0IG51bWJlcmVkWENvb3JkaW5hdGUgPSBOdW1iZXIoeENvb3JkaW5hdGUpO1xuICAgICAgICAgICAgbGV0IG51bWJlcmVkWUNvb3JkaW5hdGUgPSBOdW1iZXIoeUNvb3JkaW5hdGUpO1xuXG4gICAgICAgICAgICAgcGxheUdhbWUobnVtYmVyZWRYQ29vcmRpbmF0ZSwgbnVtYmVyZWRZQ29vcmRpbmF0ZSk7XG5cbiAgICAgICAgICAgIC8vICBsZXQgZ2V0UGxheWVyR2FtZWJvYXJkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItZ2FtZWJvYXJkQ2VsbCcpO1xuICAgICAgICAgICAgLy8gIC8vIGNvbnNvbGUubG9nKGdldFBsYXllckdhbWVib2FyZENlbGwpO1xuICAgICAgICAgICAgLy8gIGxldCBnZXRBbGxQbGF5ZXJHYW1lYm9hcmRDZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllci1nYW1lYm9hcmRDZWxsJykpO1xuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKGdldEFsbFBsYXllckdhbWVib2FyZENlbGxzKTtcbiAgICAgICAgICAgIC8vICBnZXRBbGxQbGF5ZXJHYW1lYm9hcmRDZWxscy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZ2V0QWxsUGxheWVyR2FtZWJvYXJkQ2VsbHMpO1xuICAgICAgICAgICAgIC8vIGdldFBsYXllckdhbWVib2FyZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYmF0dGxlc2hpcC1ob3Zlci1jbGFzcycpO1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgZ2FtZWJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYmF0dGxlc2hpcC1ob3Zlci1jbGFzcycpO1xuICAgIH0pXG5cbiAgICAgICAgZ2FtZWJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2JhdHRsZXNoaXAtaG92ZXItY2xhc3MnKTtcbiAgICAgICAgfSlcblxuICAgIH0gICAgICAgXG4gICAgfSBcbn0gXG5cbi8vIGdlbmVyYXRlcyBzdGFydCBnYW1lIGJ0biwgYW5kIHdoZW4gY2xpY2tlZCByZW1vdmVzIGJ0bnMsIGFuZCBzaGlwIG9iamVjdHMgaW4gdGhlIERPTVxuc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgXG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQgdGhlIHN0YXJ0IGdhbWUgYnRuJyk7XG4gICAgbGV0IGNvbnRhaW5lckZvclNoaXBPYmogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLWZvci1zaGlwLW9iamVjdHMnKTtcbiAgICBjb25zb2xlLmxvZyhjb250YWluZXJGb3JTaGlwT2JqKTtcbiAgICBjb250YWluZXJGb3JTaGlwT2JqLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbGV0IGNvbnRhaW5lckZvckNoYW5naW5nU2hpcERpcmVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2Utc2hpcC1kaXJlY3Rpb24tYnRuLWNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lckZvckNoYW5naW5nU2hpcERpcmVjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGxldCBjb250YWluZXJGb3JTdGFydEdhbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtZ2FtZS1idG4tY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyRm9yU3RhcnRHYW1lQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY3JlYXRlQ29tcHV0ZXJCb2FyZERPTSgpO1xuICAgIC8vIHBsYXlHYW1lKCk7XG59KSBcblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluZUlmSGl0T3JNaXNzKHNlbGVjdGVkVXNlciwgeCwgeSkgeyBcbiAgICBjb25zb2xlLmxvZygnREVURVJNSU5FIElGIENPT1JEUyBBUkUgQSBISVQgT1IgTUlTUywgQ0IgRlVOQ1RJT04gRlJPTSBBVFRBQ0sgRlVOQ1RJT04gSU4gR0FNRSBNT0RVTEUnLCB4LCB5LCBzZWxlY3RlZFVzZXIpO1xuICAgIGxldCBjb29yZGluYXRlWCA9IHg7XG4gICAgbGV0IGNvb3JkaW5hdGVZID0geTtcbiAgICBsZXQgY29vcmRpbmF0ZUNoZWNrID0gW2Nvb3JkaW5hdGVYLCBjb29yZGluYXRlWV07XG4gICAgY29uc29sZS5sb2coJ0NPT1JESU5BVEUgQ0hFQ0sgVkFSSUFCTEUsIFdJTEwgQ0hFQ0sgSUYgSU5DTFVERUQgSU4gSElUIFNIT1RTIEFSUkFZJywgY29vcmRpbmF0ZUNoZWNrKTtcbiAgICBsZXQgc2VsZWN0ZWRDZWxsT25HYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb21wcm93PVwiJHtjb29yZGluYXRlWH1cIl1bZGF0YS1jb21wY29sdW1uPVwiJHtjb29yZGluYXRlWX1cIl1gKTtcbiAgICBjb25zb2xlLmxvZygnU0VMRUNURUQgQ0VMTCwgVEhBVCBDT09SRVNQT05EUyBUTyBDT01QUyBHQU1FQk9BUkQnLCBzZWxlY3RlZENlbGxPbkdhbWVib2FyZCk7XG4gICAgbGV0IGhpdFNob3RzQXJyYXkgPSBzZWxlY3RlZFVzZXIuZ2FtZWJvYXJkLmhpdFNob3RzOyBcbiAgICBsZXQgbWlzc2VkU2hvdHNBcnJheSA9IHNlbGVjdGVkVXNlci5nYW1lYm9hcmQubWlzc2VkU2hvdHM7XG4gICAgY29uc29sZS5sb2cobWlzc2VkU2hvdHNBcnJheSk7XG4gICAgY29uc29sZS5sb2coaGl0U2hvdHNBcnJheSk7IFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGl0U2hvdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcbiAgICAgICAgbGV0IHNlbGVjdGVkQ29vcmRpbmF0ZSA9IGhpdFNob3RzQXJyYXlbaV07XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkQ29vcmRpbmF0ZSkuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZUNoZWNrKSkpO1xuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRDb29yZGluYXRlKS5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShjb29yZGluYXRlQ2hlY2spKSkgeyBcbiAgICAgICAgICAgIHNlbGVjdGVkQ2VsbE9uR2FtZWJvYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICB9IFxuICAgIH0gXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaXNzZWRTaG90c0FycmF5Lmxlbmd0aDsgaSsrKSB7IFxuICAgICAgICBsZXQgc2VsZWN0ZWRDb29yZGluYXRlTWlzc2VkU2hvdCA9IG1pc3NlZFNob3RzQXJyYXlbaV07XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkQ29vcmRpbmF0ZU1pc3NlZFNob3QpO1xuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRDb29yZGluYXRlTWlzc2VkU2hvdCkuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZUNoZWNrKSkpIHsgXG4gICAgICAgICAgICBzZWxlY3RlZENlbGxPbkdhbWVib2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XG4gICAgICAgIH0gXG4gICAgfVxufSBcblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluZUlmSGl0T3JNaXNzQ29tcHV0ZXIoc2VsZWN0ZWRVc2VyLCB4LCB5KSB7IFxuICAgIGxldCBjb29yZGluYXRlWCA9IHg7XG4gICAgbGV0IGNvb3JkaW5hdGVZID0geTtcbiAgICBsZXQgY29vcmRpbmF0ZUNoZWNrID0gW2Nvb3JkaW5hdGVYLCBjb29yZGluYXRlWV07XG4gICAgLy8gY29uc29sZS5sb2coJ0NPT1JESU5BVEUgQ0hFQ0sgVkFSSUFCTEUsIFdJTEwgQ0hFQ0sgSUYgSU5DTFVERUQgSU4gSElUIFNIT1RTIEFSUkFZJywgY29vcmRpbmF0ZUNoZWNrKTtcbiAgICBsZXQgc2VsZWN0ZWRDZWxsT25HYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke2Nvb3JkaW5hdGVYfVwiXVtkYXRhLWNvbHVtbj1cIiR7Y29vcmRpbmF0ZVl9XCJdYCk7XG4gICAgLy8gY29uc29sZS5sb2coJ1NFTEVDVEVEIENFTEwsIFRIQVQgQ09PUkVTUE9ORFMgVE8gQ09NUFMgR0FNRUJPQVJEJywgc2VsZWN0ZWRDZWxsT25HYW1lYm9hcmQpO1xuICAgIGxldCBoaXRTaG90c0FycmF5ID0gc2VsZWN0ZWRVc2VyLmdhbWVib2FyZC5oaXRTaG90czsgXG4gICAgbGV0IG1pc3NlZFNob3RzQXJyYXkgPSBzZWxlY3RlZFVzZXIuZ2FtZWJvYXJkLm1pc3NlZFNob3RzO1xuICAgIC8vIGNvbnNvbGUubG9nKG1pc3NlZFNob3RzQXJyYXkpO1xuICAgIC8vIGNvbnNvbGUubG9nKGhpdFNob3RzQXJyYXkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGl0U2hvdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcbiAgICAgICAgbGV0IHNlbGVjdGVkQ29vcmRpbmF0ZSA9IGhpdFNob3RzQXJyYXlbaV07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkQ29vcmRpbmF0ZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkQ29vcmRpbmF0ZSkuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZUNoZWNrKSkpO1xuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRDb29yZGluYXRlKS5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShjb29yZGluYXRlQ2hlY2spKSkgeyBcbiAgICAgICAgICAgIHNlbGVjdGVkQ2VsbE9uR2FtZWJvYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICB9IFxuICAgIH0gXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaXNzZWRTaG90c0FycmF5Lmxlbmd0aDsgaSsrKSB7IFxuICAgICAgICBsZXQgc2VsZWN0ZWRDb29yZGluYXRlTWlzc2VkU2hvdCA9IG1pc3NlZFNob3RzQXJyYXlbaV07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkQ29vcmRpbmF0ZU1pc3NlZFNob3QpO1xuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRDb29yZGluYXRlTWlzc2VkU2hvdCkuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZUNoZWNrKSkpIHsgXG4gICAgICAgICAgICBzZWxlY3RlZENlbGxPbkdhbWVib2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XG4gICAgICAgIH0gXG4gICAgfVxufVxuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVCYXR0bGVTaGlwRE9NT2JqKCkgeyBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykgeyBcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5pZCA9ICdzaGlwLW9iai1zdHlsZXMnO1xuICAgICAgICBjb25zdCBiYXR0bGVzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lci1mb3ItYmF0dGxlc2hpcCcpO1xuICAgICAgICBiYXR0bGVzaGlwQ29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAgICAgICBiYXR0bGVzaGlwQ29udGFpbmVyLmRhdGFzZXQuc2hpcElEID0gSlNPTi5zdHJpbmdpZnkoYmF0dGxlU2hpcCk7XG4gICAgICAgIGJhdHRsZXNoaXBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBcbiAgICAgICAgICAgIGN1cnJlbnRTaGlwID0gYmF0dGxlU2hpcDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgY3VycmVudCBzaGlwIGNsaWNrZWQgb24gaXMuLicsIGN1cnJlbnRTaGlwKVxuICAgICAgICAgICAgY3VycmVudFNoaXBMZW5ndGggPSBiYXR0bGVTaGlwLnNoaXBMZW5ndGg7XG4gICAgICAgICAgICBjdXJyZW50U2hpcERpcmVjdGlvbiA9IGJhdHRsZVNoaXAuc2hpcFBvc2l0aW9uO1xuICAgICAgICB9KVxuICAgIH0gXG59IFxuXG5jcmVhdGVCYXR0bGVTaGlwRE9NT2JqKCk7IFxuXG5mdW5jdGlvbiBjcmVhdGVEZXN0cm95ZXJET01PYmooKSB7IFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7IFxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlkID0gJ3NoaXAtb2JqLXN0eWxlcyc7XG4gICAgICAgIGNvbnN0IGRlc3Ryb3llckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXItZm9yLWRlc3Ryb3llcicpO1xuICAgICAgICBkZXN0cm95ZXJDb250YWluZXIuYXBwZW5kKGRpdik7XG4gICAgICAgIGRlc3Ryb3llckNvbnRhaW5lci5kYXRhc2V0LnNoaXBJRCA9IEpTT04uc3RyaW5naWZ5KGRlc3Ryb3llcik7XG4gICAgICAgIGRlc3Ryb3llckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IFxuICAgICAgICAgICAgY3VycmVudFNoaXAgPSBkZXN0cm95ZXI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhlIGN1cnJlbnQgc2hpcCBjbGlja2VkIG9uIGlzLi4nLCBjdXJyZW50U2hpcClcbiAgICAgICAgICAgIGN1cnJlbnRTaGlwTGVuZ3RoID0gZGVzdHJveWVyLnNoaXBMZW5ndGg7XG4gICAgICAgICAgICBjdXJyZW50U2hpcERpcmVjdGlvbiA9IGRlc3Ryb3llci5zaGlwUG9zaXRpb247XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5jcmVhdGVEZXN0cm95ZXJET01PYmooKTtcblxuZnVuY3Rpb24gY3JlYXRlUGF0cm9sQm9hdERPTU9iaigpIHsgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHsgXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaWQgPSAnc2hpcC1vYmotc3R5bGVzJztcbiAgICAgICAgY29uc3QgcGF0cm9sQm9hdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXItZm9yLXBhdHJvbC1ib2F0Jyk7XG4gICAgICAgIHBhdHJvbEJvYXRDb250YWluZXIuYXBwZW5kKGRpdik7XG4gICAgICAgIHBhdHJvbEJvYXRDb250YWluZXIuZGF0YXNldC5zaGlwSUQgPSBKU09OLnN0cmluZ2lmeShwYXRyb2xCb2F0KTtcbiAgICAgICAgcGF0cm9sQm9hdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IFxuICAgICAgICAgICAgY3VycmVudFNoaXAgPSBwYXRyb2xCb2F0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZSBjdXJyZW50IHNoaXAgY2xpY2tlZCBvbiBpcy4uJywgY3VycmVudFNoaXApXG4gICAgICAgICAgICBjdXJyZW50U2hpcExlbmd0aCA9IHBhdHJvbEJvYXQuc2hpcExlbmd0aDtcbiAgICAgICAgICAgIGN1cnJlbnRTaGlwRGlyZWN0aW9uID0gcGF0cm9sQm9hdC5zaGlwUG9zaXRpb247XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cbmNyZWF0ZVBhdHJvbEJvYXRET01PYmooKTsgXG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcnJpZXJCb2F0RE9NT2JqKCkgeyBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykgeyBcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5pZCA9ICdzaGlwLW9iai1zdHlsZXMnO1xuICAgICAgICBjb25zdCBjYXJyaWVyQm9hdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXItZm9yLWNhcnJpZXItYm9hdCcpO1xuICAgICAgICBjYXJyaWVyQm9hdENvbnRhaW5lci5hcHBlbmQoZGl2KTtcbiAgICAgICAgY2FycmllckJvYXRDb250YWluZXIuZGF0YXNldC5zaGlwSUQgPSBKU09OLnN0cmluZ2lmeShjYXJyaWVyQm9hdCk7XG4gICAgICAgIGNhcnJpZXJCb2F0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgXG4gICAgICAgICAgICBjdXJyZW50U2hpcCA9IGNhcnJpZXJCb2F0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZSBjdXJyZW50IHNoaXAgY2xpY2tlZCBvbiBpcy4uJywgY3VycmVudFNoaXApXG4gICAgICAgICAgICBjdXJyZW50U2hpcExlbmd0aCA9IGNhcnJpZXJCb2F0LnNoaXBMZW5ndGg7XG4gICAgICAgICAgICBjdXJyZW50U2hpcERpcmVjdGlvbiA9IGNhcnJpZXJCb2F0LnNoaXBQb3NpdGlvbjtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmNyZWF0ZUNhcnJpZXJCb2F0RE9NT2JqKCk7IFxuXG5mdW5jdGlvbiBjcmVhdGVTdWJtYXJpbmVET01PYmooKSB7IFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7IFxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlkID0gJ3NoaXAtb2JqLXN0eWxlcyc7XG4gICAgICAgIGNvbnN0IHN1Ym1hcmluZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXItZm9yLXN1Ym1hcmluZScpO1xuICAgICAgICBzdWJtYXJpbmVDb250YWluZXIuYXBwZW5kKGRpdik7XG4gICAgICAgIHN1Ym1hcmluZUNvbnRhaW5lci5kYXRhc2V0LnNoaXBJRCA9IEpTT04uc3RyaW5naWZ5KHN1Ym1hcmluZSk7XG4gICAgICAgIHN1Ym1hcmluZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IFxuICAgICAgICAgICAgY3VycmVudFNoaXAgPSBzdWJtYXJpbmU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhlIGN1cnJlbnQgc2hpcCBjbGlja2VkIG9uIGlzLi4nLCBjdXJyZW50U2hpcClcbiAgICAgICAgICAgIGN1cnJlbnRTaGlwTGVuZ3RoID0gc3VibWFyaW5lLnNoaXBMZW5ndGg7XG4gICAgICAgICAgICBjdXJyZW50U2hpcERpcmVjdGlvbiA9IHN1Ym1hcmluZS5zaGlwUG9zaXRpb247XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5jcmVhdGVTdWJtYXJpbmVET01PYmooKTtcblxuLy8gY29uc29sZS5sb2cocGxheWVyR2FtZWJvYXJkLmdhbWVib2FyZC5nZXRHYW1lYm9hcmQoKSk7IFxuXG5cblxuLy8gY29tcHV0ZXIgcGxhY2VtZW50IGFuZCByYW5kb20gY29vcmRpbmF0ZXMgXG4gLy8gYW5vdGhlciBzZXQgb2YgcmFuZG9tIGNvb3JkaW5hdGVzIGZvciB0aGUgZWxzZSxcbiAgICAgICAgLy8gaXQgd2lsbCBwbGFjZSBzb21lIG9mIHRoZSBzaGlwcywgYnV0IGV2ZW50dWFsbHkgaXQgd2lsbCB0aHJvdyBhbiBlcnJvciB0aGF0IHNoaXAgZ29lcyBvdXQgb2YgYm91bmRzIG9yIG92ZXJsYXBzIHdpdGggYW5vdGhlciBzaGlwLCBcbiAgICAgICAgLy8gcGxhY2Ugc2hpcCBhbHJlYWR5IGhhcyBhIGNoZWNrRm9yU2hpcCBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aHJvd2luZyBlcnJvciwgc2hvdWxkIGJlIHJldHVybmluZyBhIGJvb2xlYW4gdG8gbWFrZSBzdXJlIHBsYWNlbWVudCBpcyBsZWdhbCwgdGhpcyB3aWxsIGFmZmVjdCBhIGZldyBvZiBteSB1bml0IHRlc3RzLiBcbiAgICAgICAgLy8gY2FwdHVyZSB2YWx1ZSBcbiAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gY29tcHV0ZXJHYW1lYm9hcmQuZ2FtZWJvYXJkLnBsYWNlU2hpcChjb21wdXRlcnNTaGlwLCByYW5kb21Db29yZGluYXRlMSwgcmFuZG9tQ29vcmRpbmF0ZTIsIGNvbXB1dGVyc1NoaXAuc2hpcExlbmd0aCwgY29tcHV0ZXJzU2hpcC5zaGlwUG9zaXRpb24pO1xuXG4gICAgICAgIC8vIGlmIGZhbHNlLCBpdCBuZWVkcyB0byB0cnkgYWdhaW4sIG5vIHNoaXBzIGNhbiBiZSBwbGFjZWQgXG4gICAgICAgIC8vIHdlIGZvdW5kIGEgZmFsc2Ugc2hpcCwgYWxsIHRoZSB0cnVlIG9uZXMgcGxhY2Ugb2ssIGlmIGEgY29vcmRpbmF0ZSBpcyBmYWxzZSwgXG4gICAgICAgIC8vIGhvdyBjYW4gSSBtYWtlIHRoZSBzaGlwIHRyeSB0byBwbGFjZSBpdCBhZ2Fpbj8gc29tZXRoaW5nIHdpdGhpbiB0aGUgY29uZGl0aW9uYWxcbiAgICAgICAgLy8gcmlnaHQgbm93IGl0IHdpbGwgb25seSBwbGFjZSB0cnVlIHNoaXBzLCBvbmNlIGEgc2hpcCBpcyBmYWxzZSwgaG93IGNhbiB3ZSBnZXQgaXQgdG8gYmVjb21lIHRydWU/IFxuICAgICAgICAvLyBob3cgdG8gbWFrZSBhbiBpbnZhbGlkIHNoaXAgcGxhY2VtZW50IHZhbGlkIGFnYWluLCBpdCB3aWxsIHBsYWNlIHNoaXBzIHRoYXQgYXJlIGxlZ2FsIHRvIHBsYWNlICh0cnVlKVxuICAgICAgICAvLyBidXQgdGhlIG9uZXMgdGhhdCByZXR1cm4gZmFsc2UsIHdoYXQgY2FuIHdlIGRvIGFib3V0IHRob3NlPyBjYW4gd2UgdHJ5IGFnYWluIHdpdGggZGlmZmVyZW50IGNvb3JkaW5hdGVzXG4gICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgZmFsc2UgY29vcmRpbmF0ZXMgYW5kIG1ha2Ugc3VyZSBub3QgdG8gdXNlIHRoZW0gYWdhaW4/IFxuICAgICAgICAvLyB1c2UgYW5vdGhlciBpZiBpbnNpZGUgdGhlIGVsc2UgYW5kIHJldHVybiBhbmQgZXhpdCBpZiBmYWlsZWQgY29vcmRpbmF0ZXMgYXJlIHRyeWluZyB0byBiZSB1c2VkIGFnYWluLiBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIG5vdyB3ZSBuZWVkIHRvIHBsYWNlIHRoZSBiYXR0bGVzaGlwLiBcbi8vIHNob3VsZCB3ZSBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIGdhbWVib2FyZCBjZWxsLCB0aGF0IG9uY2UgY2xpY2tlZCBmaW5kcyB0aGUgc2VsZWN0ZWQgc2hpcCwgYW5kIGFwcGxpZXMgdG8gYmF0dGxlc2hpcC9zaGlwIG9iaiBzdHlsZXMgdG8gYWxsIG9mIHRoZW0sIFxuLy8gcGxhY2luZyBzaGlwIGZ1bmN0aW9uLCB0YWtlcyBmcm9tIHRoZSB2YXJpYWJsZXMgY3VycmVudFNoaXAsIGN1cnJlbnRTaGlwTGVuZ3RoIGFuZCBwb3NpdGlvbiBcbi8vIHNob3VsZCAgaXQgZm9sbG93IHRoZSBzYW1lIHByb2Nlc3MgYXMgdGhlIHByZXZpb3VzIGZ1bmN0aW9ucz8gXG5cbi8vIGZ1bmN0aW9uIHRha2VzIGluIGN1cnJlbnRTaGlwLCBsZW5ndGggYW5kIHBvc2l0aW9uLCBcbi8vIGFjY2Vzc2VzIGdhbWVib2FyZCBcbi8vIGNsaWNrIG9uIGEgY2VsbCwgbWF5YmUgc29tZWhvdyB1c2Ugc2hpcCBsZW5ndGggb3IgZ2V0IGluZm8gZnJvbSBmaW5kQ29vcmRzIHRvIG1ha2Ugc3VyZSBzdHlsZXMgYXJlIGFwcGxpZWQgdG8gYWxsIHRoZSBjZWxscyBvZiBzaGlwcyBsZW5ndGggXG5cbi8vIHRoZSBwcm9ibGVtIGlzIEkgY2FuIHVzZSB0aGUgaG92ZXIgY2xhc3MgdG8gaGlnaGxpZ2h0IHNoaXAgb3ZlciBnYW1lYm9hcmQgbm93IEknbSBzdHVjayBvbiBob3cgdG8gcGxhY2UgdGhlIHNoaXBzIG5vdywgXG5cbi8vIGl0IGZvbGxvd3MgdGhlIHNpbWlsYXIgcHJvY2VzcywgY2xpY2tpbmcgb24gYSBjZWxsIG9uIHRoZSBib2FyZCwgc2hvd2luZyBpdHMgY2xhc3NlcyB3aGlsZSBhbHNvIHVwZGF0aW5nIHRoZSBkYXRhIGluIG91ciAyRCBhcnJheSBcbi8vIGdhbWVib2FyZCBjZWxsIGlzIGNsaWNrZWQsIHNlbmRzIGluZm8gdG8gZnVuY3Rpb24gd2hpY2ggcGxhY2VzIGl0IG9uIHRoZSBib2FyZC4gYWNjZXNzIGN1cnJlbnQgc2hpcCBcbi8vIFxuXG4vLyBmdW5jdGlvbiBwbGFjZUNvb3JkcyAgeyBcblxuICAgIC8vIHRha2UgaW4gY29vcmRpbmF0ZXMgZnJvbSB1c2UgY29vcmRzLCBcbiAgICAvLyBsb29wIHRocnUgdGhlbSwgXG4gICAgLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZW0sIFxuICAgIC8vIG9uY2UgY2xja2VkIGFkZCB0aGUgc3R5bGVzIHRvIHRoZW1cbi8vIH1cblxuXG5cblxuXG5cblxuXG4vLyBnZXQgdGhlIGNvb3JkaW5hdGVzIGZpcnN0LCB0aGVuIHBsYWNlIHRoZW0sIHNhbWUgcHJvY2VzcyBhcyBoaWdobGlnaHQsIGJ1dCB3aGVuIHdlIHBhc3MgdGhlbSB0byB1c2UvcHJpbnQgZnVuY3Rpb24sIFxuLy8gY2VsbCBpcyBjbGlja2VkIHdlIGRldGVybWluZSB3aGF0IGNvb3JkaW5hdGVzIHdpbGwgbmVlZCB0byBmaWxsZWQsIGJhc2VkIG9uIHNoaXAgbGVuZ3RoIGFuZCBwb3NpdGlvbiBcbi8vIHBhc3NlZCB0byBhbm90aGVyIGZ1bmN0aW9uIHdoaWNoIGFwcGxpZXMgdGhlIHN0eWxlcyBhbmQgY2xhc3MgdG8gYWxsIHRob3NlIGNlbGxzLiBcbi8vIHNhbWUgYXMgaG92ZXIgY2xhc3MgYnV0IHRoaXMgdGltZSB3ZSBhcmUgdXNpbmcgYW4gZXZlbnQgbGlzdGVuZXIsIFxuXG5cbi8vIGV2ZW50IGxpc3RlbmVyIGNsaWNrIGNsYXNzZXNcbi8vIHVzZWQgc2FtZSBwcm9jZXNzIGZvciBzaG93aW5nIHRoZSBob3ZlciBjbGFzcy4gXG4vLyBjaGFuZ2UgdmFyaWFibGUgbmFtZXMuICBcbi8vIGZ1bmN0aW9uIGdldFNoaXBDb29yZGluYXRlcyhjdXJyZW50Q2VsbCwgY3VycmVudFNoaXBEaXJlY3Rpb24sIGN1cnJlbnRTaGlwTGVuZ3RoKSB7IFxuLy8gbGV0IGNsaWNrZWRHYW1lYm9hcmRDZWxsID0gY3VycmVudENlbGw7XG4vLyBsZXQgc2hpcERpcmVjdGlvbiA9IGN1cnJlbnRTaGlwRGlyZWN0aW9uOyBcbi8vIGxldCBzaGlwTGVuZ3RoID0gY3VycmVudFNoaXBMZW5ndGg7XG5cbi8vIGlmIChzaGlwRGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7IFxuLy8gICAgIGxldCB1cGRhdGVkQ29vcmRpbmF0ZXNYRm9yQ2xpY2tFdmVudCA9IFtdO1xuLy8gICAgIGxldCBjdXJyZW50Um93ID0gY2xpY2tlZEdhbWVib2FyZENlbGwuZGF0YXNldC5yb3c7XG4vLyAgICAgbGV0IGN1cnJlbnRDb2x1bW4gPSBjbGlja2VkR2FtZWJvYXJkQ2VsbC5kYXRhc2V0LmNvbHVtbjtcbi8vICAgICBsZXQgY29udmVydENvbHVtblRvTnVtYmVyID0gTnVtYmVyKGN1cnJlbnRDb2x1bW4pO1xuLy8gICAgIGxldCBjb252ZXJ0Um93VG9OdW1iZXIgPSBOdW1iZXIoY3VycmVudFJvdyk7XG4gICAgXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHsgXG4vLyAgICAgICAgIGxldCB1cGRhdGVkWENvb3JkaW5hdGVDbGljayBcbi8vICAgICAgICAgdXBkYXRlZFhDb29yZGluYXRlQ2xpY2sgPSBjb252ZXJ0Um93VG9OdW1iZXIgKyBpO1xuLy8gICAgICAgICB1cGRhdGVkQ29vcmRpbmF0ZXNYRm9yQ2xpY2tFdmVudC5wdXNoKFt1cGRhdGVkWENvb3JkaW5hdGVDbGljaywgY29udmVydENvbHVtblRvTnVtYmVyXSk7XG4vLyAgICAgfSBcbi8vICAgICBjb25zb2xlLmxvZygndGhlc2UgYXJlIHVwZGF0ZWQgY29vcmRzIGZvciB4JywgdXBkYXRlZENvb3JkaW5hdGVzWEZvckNsaWNrRXZlbnQpO1xuLy8gICAgIHByaW50Q29vcmRpbmF0ZXNDbGljayh1cGRhdGVkQ29vcmRpbmF0ZXNYRm9yQ2xpY2tFdmVudCk7XG5cbi8vICAgICAvLyB1c2VDb29yZHModXBkYXRlZENvb3JkaW5hdGVzWCk7XG4vLyB9IGVsc2UgaWYgKHNoaXBEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykgeyBcbi8vICAgICBsZXQgdXBkYXRlZENvb3JkaW5hdGVzWUNsaWNrRXZlbnQgPSBbXTtcbi8vICAgICBsZXQgY3VycmVudFJvdyA9IGNsaWNrZWRHYW1lYm9hcmRDZWxsLmRhdGFzZXQucm93O1xuLy8gICAgIGxldCBjdXJyZW50Q29sdW1uID0gY2xpY2tlZEdhbWVib2FyZENlbGwuZGF0YXNldC5jb2x1bW47XG4vLyAgICAgbGV0IGNvbnZlcnRDb2x1bW5Ub051bWJlciA9IE51bWJlcihjdXJyZW50Q29sdW1uKTtcbi8vICAgICBsZXQgY29udmVydFJvd1RvTnVtYmVyID0gTnVtYmVyKGN1cnJlbnRSb3cpO1xuXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHsgXG4vLyAgICAgICAgIGxldCB1cGRhdGVkWUNvb3JkaW5hdGVDbGljayBcbi8vICAgICAgICAgdXBkYXRlZFlDb29yZGluYXRlQ2xpY2sgPSBjb252ZXJ0Q29sdW1uVG9OdW1iZXIgKyBpO1xuLy8gICAgICAgICB1cGRhdGVkQ29vcmRpbmF0ZXNZQ2xpY2tFdmVudC5wdXNoKFtjb252ZXJ0Um93VG9OdW1iZXIsIHVwZGF0ZWRZQ29vcmRpbmF0ZUNsaWNrXSk7XG4vLyAgICAgfSBcbi8vICAgICBjb25zb2xlLmxvZygndGhlc2UgYXJlIHVwZGF0ZWQgY29vcmRzIGZvciB5JywgdXBkYXRlZENvb3JkaW5hdGVzWUNsaWNrRXZlbnQpO1xuLy8gICAgIC8vIHVzZUNvb3Jkcyh1cGRhdGVkQ29vcmRpbmF0ZXNZKTtcbi8vICAgICBwcmludENvb3JkaW5hdGVzQ2xpY2sodXBkYXRlZENvb3JkaW5hdGVzWUNsaWNrRXZlbnQpXG4vLyB9IFxuXG4vLyBldmVudCBsaXN0ZW5lciBjbGljayBjbGFzc2VzIFxuLy8gdXNlZCBzYW1lIHByb2Nlc3MgZm9yIHNob3dpbmcgdGhlIGhvdmVyIGNsYXNzLiBcbi8vIGZ1bmN0aW9uIHByaW50Q29vcmRpbmF0ZXNDbGljayhjb29yZHMpIHsgXG4vLyAgICAgbGV0IHBhc3NlZENvb3JkaW5hdGVzID0gY29vcmRzO1xuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHBhc3NlZENvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7IFxuLy8gICAgICAgICBsZXQgY29vcmRpbmF0ZSA9IHBhc3NlZENvb3JkaW5hdGVzW2ldO1xuLy8gICAgICAgICBsZXQgcm93ID0gY29vcmRpbmF0ZVswXTtcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2cocm93KTtcbi8vICAgICAgICAgbGV0IGNvbHVtbiA9IGNvb3JkaW5hdGVbMV07XG4vLyAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sdW1uPVwiJHtjb2x1bW59XCJdYCk7IC8vIGZpbmQgdGhlIERPTSBjZWxscyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhlIGNvb3JkaW5hdGVzIHBhc3NlZCBpbixcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2coY2VsbCk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHNoaXAgaXMsICcsIGN1cnJlbnRTaGlwKTtcbi8vICAgICAgICAgLy8gY2VsbC5jbGFzc0xpc3QuYWRkKCdiYXR0bGVzaGlwLWhvdmVyLWNsYXNzJyk7IFxuLy8gICAgICAgICBjZWxsLmNsYXNzTGlzdC50b2dnbGUoJ2JhdHRsZXNoaXAtaG92ZXItY2xhc3MnKTsgIFxuLy8gICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U2hpcERpcmVjdGlvbik7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKGdhbWVib2FyZEZhY3RvcnkoKS5wbGFjZVNoaXAoY3VycmVudFNoaXAsIHJvdywgY29sdW1uLCBjdXJyZW50U2hpcC5zaGlwTGVuZ3RoLCBjdXJyZW50U2hpcERpcmVjdGlvbikpOyBcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2coZ2FtZWJvYXJkRmFjdG9yeSgpLmdldEdhbWVib2FyZCgpKTtcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2coZ2FtZWJvYXJkRmFjdG9yeSgpLnBsYWNlU2hpcChiYXR0bGVTaGlwLCBgW2RhdGEtcm93PVwiJHtyb3d9XCJdLCBbZGF0YS1jb2x1bW49XCIke2NvbHVtbn1cIl1gLCA0LCAndmVydGljYWwnKSk7XG5cbi8vICAgICAgICAgLy8gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IFxuLy8gICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ0hFTExMTE8nKTtcbi8vICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbi8vICAgICAgICAgLy8gfSkgICAgXG4vLyAgICAgfSBcbi8vIH1cblxuXG5cblxuXG5cblxuXG5cbi8vIG9sZCBCU1xuLy8gY29uc3QgcGxheWVyQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWNvbnRhaW5lcicpO1xuXG4vLyBjb25zdCBnYW1lYm9hcmRNb2R1bGUgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG5cbi8vIGNvbnN0IHBsYXllckJvYXJkID0gZ2FtZWJvYXJkTW9kdWxlLmdldEdhbWVib2FyZCgpOyBcblxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmRHcmlkRE9NKCkgeyAgXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHsgXG4vLyAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHsgXG4vLyAgICAgICAgIGNvbnN0IGdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKS5nZXRHYW1lYm9hcmQoKTtcbi8vICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuLy8gICAgICAgICBwbGF5ZXJCb2FyZENvbnRhaW5lci5hcHBlbmQoZGl2KTtcbi8vICAgICAgICAgZGl2LmRhdGFzZXQucm93ID0gaTtcbi8vICAgICAgICAgZGl2LmRhdGFzZXQuY29sdW1uID0gajtcbi8vICAgICAgICAgZGl2LmlkID0gJ2NlbGwtc3R5bGVzJztcbi8vICAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4vLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyb3cpO1xuLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29sdW1uKTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dnaW5nIGdhbWVib2FyZCB3aXRoaW4gZXZlbnQgbGlzdGVuZXInLCBnYW1lYm9hcmQpO1xuLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZ2FtZWJvYXJkKTtcbi8vICAgICAgICAgICAgICAvLyBBY2Nlc3NpbmcgdGhlIGNvcnJlc3BvbmRpbmcgY2VsbCBpbiB0aGUgZ2FtZWJvYXJkIGFycmF5XG4vLyAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZ2FtZWJvYXJkW3Jvd11bY29sdW1uXSk7XG4vLyAgICAgICAgICAgICAgLy8gcmV0dXJucyB0aGUgY29vcmVzcG9uZGluZyBjb29yZGluYXRlcyB3aXRoaW4gdGhlIGdhbWVib2FyZFxuLy8gICAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRDZWxsID0gZ2FtZWJvYXJkW2ldW2pdOyBcbi8vICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2xpY2tlZCBjZWxsIGluIGdhbWVib2FyZDonLCBjbGlja2VkQ2VsbCk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH0gXG4vLyB9XG5cbi8vIH0gXG5cbi8vIGNyZWF0ZUdhbWVib2FyZEdyaWRET00oKTtcblxuXG4vLyAvLyBwbGFjaW5nIHNoaXBzIG9uIHBsYXllcnMgYm9hcmQsIFxuXG4vLyAvLyB1c2UgYW5vdGhlciBsb29wIHRvIGNyZWF0ZSB0aGUgc2hpcCBpbiB0aGUgRE9NLCB5b3Ugd2lsbCBwcm9iYWJseSB3YW50IHRvIGNhbGwgc2hpcCBmYWN0b3J5IHNvIHlvdSBoYXZlIGFjY2VzcyB0byBpdHMgb2JqZWN0LCBcblxuLy8gLy8gc3RhcnQgdGhlcmUgZmlyc3QsIHRoZW4gd29ycnkgYWJvdXQgdGhlIGNsaWNrIGFuZCBwbGFjZSBvbiB0aGUgYm9hcmQsIFxuXG4vLyBmdW5jdGlvbiBiYXR0bGVTaGlwRE9NT2JqZWN0KCkgeyBcbi8vICAgICBjb25zdCBiYXR0bGVzaGlwT2JqID0gc2hpcCgnQmF0dGxlc2hpcCcsIDQsICd2ZXJ0aWNhbCcpO1xuLy8gICAgIGNvbnNvbGUubG9nKGJhdHRsZXNoaXBPYmopO1xuXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHsgXG4vLyAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgICAgICBkaXYuaWQgPSAnYmF0dGxlc2hpcC1vYmotc3R5bGVzJztcbi8vICAgICAgICAgY29uc3QgYmF0dGxlU2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXR0bGVzaGlwLWNvbnRhaW5lcicpO1xuLy8gICAgICAgICBiYXR0bGVTaGlwQ29udGFpbmVyLmFwcGVuZChkaXYpOyAgICAgICAgXG4vLyAgICAgfSAgICBcbi8vIH0gXG5cbi8vIC8vIHJlZmFjdG9yIHRvIGNyZWF0ZSBhIGZ1bmN0aW9uIHdoaWNoIGFjY2VwdHMgc2hpcCBvYmplY3RzLCBhbmQgbGVuZ3RoIGFuZCBwb3NpdGlvbiBcblxuLy8gLy8gdGhhdCB3YXkgd2UgY2FuIGNyZWF0ZSBzaGlwIG9iamVjdHMgdGhlbiBwYXNzIHRoZW0gdG8gdGhpcyBmdW5jdGlvbiBcblxuLy8gLy8gd2hpY2ggbWFrZXMgc2hpcCBvYmogaW4gdGhlIERPTS4gXG5cbi8vIC8vIEJlZm9yZSBtb3Zpbmcgb24gSSB3b3VsZCBtYWtlIHN1cmUgdGhlIGdhbWVib2FyZCBncmlkIGlzIDEwMCUgcmVzcG9uc2l2ZSBiZWZvcmUgbW92aW5nLCBNT0JJTEUgRklSU1QsIG1heWJlIG1pbiB3aWR0aHMsIFxuXG4vLyAvLyBJIHdhbnQgdG8gbWFrZSBzdXJlIHRoaXMgYm9hcmQgZG9lcyBub3QgYnJlYWsgb24gc21hbGxlciBzY3JlZW5zLiBcblxuLy8gYmF0dGxlU2hpcERPTU9iamVjdCgpO1xuXG5cblxuXG5cblxuXG5cblxuXG4vLyB3ZWxsIEkgaGF2ZSB0aGUgbG9vcCBjcmVhdGVkLCB3aGVyZSBzaG91bGQgdGhpcyBsb29wIGdvPyBcbi8vIHNob3VsZCB0aGUgbG9vcCBnbyB3aXRoaW4gYSBmdW5jdGlvbiwgdGhlbiBiZSBjYWxsZWQgaW4gdGhlIHBsYXlHYW1lKCk/XG5cbi8vIEkgcHV0IHRoZSBnYW1lYm9hcmQgZ3JpZCB3aXRoaW4gdGhlIGZ1bmN0aW9uLCBcbiBcbi8vIEkgdGhpbmsgSSB3aWxsIGhhdmUgdG8gY3JlYXRlIGFub3RoZXIgb25lIGZvciB0aGUgY29tcHV0ZXIsIHRoZSBjb21wdXRlcnMgYm9hcmQgd2lsbCBiZSBhdXRvIHBsYWNlZCwgXG5cbi8vIG9uY2UgcGxheWVyIHBsYWNlcyBoaXMgc2hpcHMgb24gaGlzIGJvYXJkLCBhIHN0YXJ0IGdhbWUgb3B0aW9uIHdpbGwgcG9wLXVwLCBvbmNlIHByZXNzZWQsIGNvbXBzIGJvYXJkIHdpbGwgYXV0byBmaWxsLCBhbmQgd2lsbCBkaXNwbGF5IGNvbXBzIGJvYXJkIGJ1dCBoaWRkZW4sIFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICsrKSB7IFxuLy8gICAgIGNvbnN0IHJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbi8vICAgICByb3dEaXYuZGF0YXNldC5yb3cgPSBpO1xuLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykgeyBcbi8vICAgICBjb25zdCBnYW1lYm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5KCkuZ2V0R2FtZWJvYXJkKCk7XG4vLyAgICAgY29uc3QgY29sdW1uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgY29sdW1uRGl2LmRhdGFzZXQuY29sdW1uID0gajtcblxuLy8gICAgIHJvd0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IFxuLy8gICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4vLyAgICAgfSkgXG5cbi8vICAgICBjb2x1bW5EaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBcbi8vICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuLy8gICAgIH0pXG5cbi8vICAgICByb3dEaXYuc3R5bGUuaGVpZ2h0ID0gJzM1cHgnO1xuLy8gICAgIHJvd0Rpdi5zdHlsZS53aWR0aCA9ICczNXB4Jztcbi8vICAgICByb3dEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuLy8gICAgIHJvd0Rpdi5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGJsYWNrJzsgXG5cbi8vICAgICBjb2x1bW5EaXYuc3R5bGUuaGVpZ2h0ID0gJzM1cHgnO1xuLy8gICAgIGNvbHVtbkRpdi5zdHlsZS53aWR0aCA9ICczNXB4Jztcbi8vICAgICBjb2x1bW5EaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuLy8gICAgIGNvbHVtbkRpdi5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGJsYWNrJzsgXG4vLyAgICAgcGxheWVyQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocm93RGl2KTtcbi8vICAgICBwbGF5ZXJCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb2x1bW5EaXYpOyAgIFxuLy8gICAgIGNvbnNvbGUubG9nKHJvd0Rpdik7XG4vLyAgICAgY29uc29sZS5sb2coY29sdW1uRGl2KTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIHBsYXllckJvYXJkQ29udGFpbmVyLmFwcGVuZChwbGF5ZXJCb2FyZCk7XG5cbi8vIG1ha2luZyBET00gZ2FtZWJvYXJkLCBcblxuLy8gaG93IGNhbiBJIGNvbm5lY3QgbXkgRE9NIGdhbWVib2FyZCB0byB0aGUgYXJyYXkgZ2FtZWJvYXJkPz8/Pz8/Pz8/IFxuXG4vLyBET00gY2VsbCBpcyBjbGlja2VkIG9uLCBob3cgY2FuIEkgZmluZCB0aGUgY29ycmVzcG9uZGluZyBhcnJheSBjZWxsIHdpdGhpbiBnYW1lYm9hcmQ/IHVzaW5nIGZpbmQgPyBcblxuLy8gSWYgSSBjbGljayBvbiBhIERPTSBjZWxsLCBJIHNob3VsZCBnZXQgYmFjayB0aGUgY29ycmVzcG9uZGluZyBhcnJheSBjZWxsIHdpdGhpbiBnYW1lYm9hcmQgXG5cbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykgeyAgXG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuLy8gICAgIC8vIGRpdi5zZXRBdHRyaWJ1dGUoXCJpbmRleFwiLCBpKTtcbi8vICAgICAvLyBkaXYuaWQgPSBpO1xuLy8gICAgIGRpdi5kYXRhc2V0LnJvdyA9IGk7XG4vLyAgICAgZGl2LmRhdGFzZXQuY29sdW1uID0gaTtcblxuLy8gICAgIGNvbnN0IGdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKS5nZXRHYW1lYm9hcmQoKTtcbi8vICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBcbi8vICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuLy8gICAgICAgICAvLyBnYW1lYm9hcmQuZmluZChjZWxsID0+IGNlbGwgPT09IGRpdik7XG4vLyAgICAgICAgIGlmIChnYW1lYm9hcmRbNV1bMl0uaW5jbHVkZXMoZS50YXJnZXQudmFsdWUpKSB7IFxuLy8gICAgICAgICAgICAgLy8gcmV0dXJuIGdhbWVib2FyZHMgc3BlY2lmaWMgY2VsbCB0aGF0IG1hdGNoZXMgdGhlIERPTSBjZWxsXG4vLyAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pIFxuXG4vLyAgICAgZGl2LnN0eWxlLmhlaWdodCA9ICczNXB4Jztcbi8vICAgICBkaXYuc3R5bGUud2lkdGggPSAnMzVweCc7XG4vLyAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcbi8vICAgICBkaXYuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBibGFjayc7IFxuLy8gICAgIHBsYXllckJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7ICAgXG4vLyAgICAgY29uc29sZS5sb2coZGl2KTtcbi8vIH0gXG5cblxuXG5cbi8vIEkgd2FudCB0byBjbGljayBvbiBET00gY2VsbCBhbmQgaGF2ZSBpdCByZXR1cm4gYmFjayB0aGUgZ2FtZWJvYXJkIGFycmF5IGNlbGwsIGhvdyBjYW4gSSB1c2UgdGhlIGZpbmQgbWV0aG9kIHRvIGFjaGlldmUgdGhpcz8gXG5cbi8vIFRISVMhISFcbi8vIGNvbm5lY3QgdGhlIEhUTUwgYm9hcmQgdXNpbmcgZGF0YSBzZXRzIHRvIHRoZSBhcnJheSBpbmRleCdzIHdpdGhpbiB0aGUgZ2FtZWJvYXJkIGFycmF5IFxuXG5cblxuXG4vLyBob3cgdG8gbWFrZSBjdXJyZW50IGdhbWVib2FyZCBhIGdyaWQ/Pz8/PyBcblxuLy8gSSB0aGluayB5b3Uga2VlcCB0aGUgZ2FtZWJvYXJkIGFzIHRoZSBhcnJheSwgXG5cbi8vIHRoYXQgd2lsbCBiZSB0aGUgYm9hcmQgYmVoaW5kIHRoZSBzY2VuZXMsIG1ha2UgYW5vdGhlciBib2FyZCB3aGljaCBiZSB0aGUgZGlzcGxheSBib2FyZCwgXG5cbi8vIGRpc3BsYXkgYm9hcmQgd2lsbCBzdGlsbCBjb3JyZWxhdGUgd2l0aCByZWd1bGFyIGJvYXJkLCBcblxuLy8gd2hlcmV2ZXIgdGhlIHVzZXIgcGxhY2VzIHNoaXBzLCB0aG9zZSBzYW1lIGNvb3JkaW5hdGVzIHdpbGwgYmUgc2F2ZWQgdG8gYm9hcmQgaW4gdGhlIGNvbnNvbGUgXG5cblxuXG5cbi8vIGZvciAobGV0IGkgPSAwOyBpIDw9IDEwMDsgaSsrKSB7ICBcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4vLyAgICAgZGl2LnN0eWxlLmhlaWdodCA9ICcyNXB4Jztcbi8vICAgICBkaXYuc3R5bGUud2lkdGggPSAnMjVweCc7XG4vLyAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuLy8gICAgIGRpdi5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGJsYWNrJzsgXG4vLyAgICAgcGxheWVyQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTsgICBcbiAgICAgIFxuLy8gfSBcblxuLy8gYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQtc3R5bGVzJyk7XG5cbi8vIGNvbnNvbGUubG9nKGJvYXJkKTtcblxuLy8gcGxheWVyQm9hcmRDb250YWluZXIuYXBwZW5kKGJvYXJkKTsiLCJpbXBvcnQgc2hpcCBmcm9tICcuL3NoaXBGYWN0b3J5LmpzJztcbmltcG9ydCBnYW1lYm9hcmRGYWN0b3J5IGZyb20gJy4vZ2FtZWJvYXJkRmFjdG9yeS5qcyc7IFxuaW1wb3J0IHBsYXllckZhY3RvcnkgZnJvbSAnLi9wbGF5ZXJGYWN0b3J5LmpzJztcbi8vIGltcG9ydCB7IGFsbFBsYXllclNoaXBzUGxhY2VkLCBwbGFjZUNvbXB1dGVyU2hpcHMgfSAgZnJvbSAnLi9kb21Mb2dpYy5qcyc7XG5pbXBvcnQgeyBwbGF5ZXJHYW1lYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkIH0gZnJvbSAnLi9kb21Mb2dpYy5qcyc7XG5pbXBvcnQgeyBkZXRlcm1pbmVJZkhpdE9yTWlzcyB9IGZyb20gJy4vZG9tTG9naWMuanMnO1xuaW1wb3J0IHsgZGV0ZXJtaW5lSWZIaXRPck1pc3NDb21wdXRlciB9IGZyb20gJy4vZG9tTG9naWMuanMnO1xuXG5sZXQgY3VycmVudFBsYXllckdhbWVib2FyZCA9IHBsYXllckdhbWVib2FyZDsgXG5sZXQgY3VycmVudENvbXB1dGVyR2FtZWJvYXJkID0gY29tcHV0ZXJHYW1lYm9hcmQ7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuY29uc3Qgb3Blbk1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tb3BlblwiKTtcbmNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jbG9zZVwiKTtcbmxldCBjdXJyZW50SGl0U2hvdHNBcnJheSA9IGN1cnJlbnRDb21wdXRlckdhbWVib2FyZC5nYW1lYm9hcmQuaGl0U2hvdHM7XG5sZXQgY3VycmVudE1pc3NlZFNob3RzQXJyYXkgPSBjdXJyZW50Q29tcHV0ZXJHYW1lYm9hcmQuZ2FtZWJvYXJkLm1pc3NlZFNob3RzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQbGF5ZXIobmFtZSwgdHlwZSkgeyBcbiAgICBpZih0eXBlID09PSAnY29tcHV0ZXInKSB7XG4gICAgICBjb25zdCBjb21wdXRlck5hbWUgPSBwbGF5ZXJGYWN0b3J5KG5hbWUpOyAvLyBhZGQgdHVybiB2YXJcbiAgICAgIHJldHVybiBjb21wdXRlck5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBwbGF5ZXJGYWN0b3J5KG5hbWUpOyAgIC8vIGFkZCB0dXJuIHZhclxuICAgICAgcmV0dXJuIHBsYXllck5hbWU7XG4gICAgfVxuICB9IFxuXG4gIGV4cG9ydCBmdW5jdGlvbiBjaGVja0Zvcldpbm5lcih1c2VyT2JqKSB7IFxuICAgIGNvbnNvbGUubG9nKCdDSEVDS0lORyBGT1IgV0lOTkVSIScpO1xuICAgIGNvbnN0IHNlbGVjdGVkVXNlciA9IHVzZXJPYmo7XG4gICAgaWYgKHNlbGVjdGVkVXNlci5nYW1lYm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpIHsgXG4gICAgICAvLyBhY2Nlc3MgYW5vdGhlciBoZWxwZXIgZnVuY3Rpb24gdG8gcHJpbnQgYSB2aWN0b3J5IG1lc3NhZ2UvbW9kYWwgcG9wLXVwXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IFxuICAgIHJldHVybiBmYWxzZTtcbiAgfSBcblxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhdHRhY2sodXNlck9iaiwgeCwgeSkgeyBcbiAgICBjb25zdCBzZWxlY3RlZFVzZXIgPSB1c2VyT2JqO1xuICAgIHNlbGVjdGVkVXNlci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTsgXG4gICAgZGV0ZXJtaW5lSWZIaXRPck1pc3Moc2VsZWN0ZWRVc2VyLCB4LCB5KTtcbiAgfSBcblxuICBleHBvcnQgZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2sodXNlck9iaiwgeCwgeSkgeyBcbiAgICBjb25zdCBzZWxlY3RlZFVzZXIgPSB1c2VyT2JqO1xuICAgIHNlbGVjdGVkVXNlci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTsgXG4gICAgZGV0ZXJtaW5lSWZIaXRPck1pc3NDb21wdXRlcihzZWxlY3RlZFVzZXIsIHgsIHkpO1xuXG4gIH0gXG5cbiAgLy8gY29uc3Qgb3Blbk1vZGFsID0gZnVuY3Rpb24oKSB7XG4gIC8vICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgLy8gICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIC8vIH07XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbCh1c2VyKSB7IFxuICBsZXQgY3VycmVudFVzZXIgPSB1c2VyO1xuICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XG4gIGxldCB3aW5uZXJOYW1lID0gY3VycmVudFVzZXIubmFtZTtcbiAgY29uc29sZS5sb2cod2lubmVyTmFtZSk7XG4gIGxldCB3aW5uZXJUaXRsZUluTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVyLWRpc3BsYXktdGl0bGUnKTtcbiAgd2lubmVyVGl0bGVJbk1vZGFsLnRleHRDb250ZW50ID0gYCR7d2lubmVyTmFtZX0gV0lOUyFgO1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59XG5cblxuXG4gIGZ1bmN0aW9uIGRldGVybWluZUlmSW5zaWRlSGl0U2hvdEFycmF5KHgsIHkpIHsgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50SGl0U2hvdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcbiAgICAgIGxldCBjdXJyZW50SGl0ID0gY3VycmVudEhpdFNob3RzQXJyYXlbaV07XG4gICAgICBjb25zb2xlLmxvZygnY3VycmVudEhpdCB2YXJpYWJsZScsIGN1cnJlbnRIaXQpO1xuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY3VycmVudEhpdCkpXG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShbeCwgeV0pKTtcbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeShjdXJyZW50SGl0KSA9PT0gSlNPTi5zdHJpbmdpZnkoW3gsIHldKSkgeyBcbiAgICAgICAgcmV0dXJuIHRydWU7IFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gXG5cbiAgZnVuY3Rpb24gZGV0ZXJtaW5lSWZJbnNpZGVNaXNzZWRTaG90QXJyYXkoeCwgeSkgeyBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRNaXNzZWRTaG90c0FycmF5Lmxlbmd0aDsgaSsrKSB7IFxuICAgICAgbGV0IGN1cnJlbnRNaXNzID0gY3VycmVudE1pc3NlZFNob3RzQXJyYXlbaV07XG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoY3VycmVudE1pc3MpID09PSBKU09OLnN0cmluZ2lmeShbeCwgeV0pKSB7IFxuICAgICAgICByZXR1cm4gdHJ1ZTsgXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSBcblxuICBmdW5jdGlvbiBkZXRlcm1pbmVJZkluc2lkZUhpdFNob3RBcnJheUNvbXB1dGVyKHgsIHkpIHsgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50SGl0U2hvdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcbiAgICAgIGxldCBjdXJyZW50SGl0ID0gY3VycmVudEhpdFNob3RzQXJyYXlbaV07XG4gICAgICBjb25zb2xlLmxvZygnY3VycmVudEhpdCBmcm9tIGhpdCBzaG90IGFycmF5JywgY3VycmVudEhpdCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjdXJyZW50SGl0KSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KFt4LCB5XSkpO1xuICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGN1cnJlbnRIaXQpID09PSBKU09OLnN0cmluZ2lmeShbeCwgeV0pKSB7IFxuICAgICAgICByZXR1cm4gdHJ1ZTsgXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSBcblxuICBmdW5jdGlvbiBkZXRlcm1pbmVJZkluc2lkZU1pc3NlZFNob3RBcnJheUNvbXB1dGVyKHgsIHkpIHsgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50TWlzc2VkU2hvdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcbiAgICAgIGxldCBjdXJyZW50TWlzcyA9IGN1cnJlbnRNaXNzZWRTaG90c0FycmF5W2ldO1xuICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnQgbWlzcyBjb29yZGluYXRlIGZyb20gbWlzc2VkIHNob3QgYXJyYXknLCBjdXJyZW50TWlzcylcbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeShjdXJyZW50TWlzcykgPT09IEpTT04uc3RyaW5naWZ5KFt4LCB5XSkpIHsgXG4gICAgICAgIHJldHVybiB0cnVlOyBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cblxuICBleHBvcnQgZnVuY3Rpb24gcGxheUdhbWUoeENvb3JkaW5hdGUsIHlDb29yZGluYXRlKSB7IFxuICAgIGxldCBwbGF5ZXJUdXJuID0gMTsgXG4gICAgY29uc29sZS5sb2coJ2xvZ2dpbmcgcGxheWVyIHR1cm4gdmFyaWFibGUgYWZ0ZXIgaW5pdCcsIHBsYXllclR1cm4pO1xuICAgICAgXG4gICAgaWYgKHBsYXllclR1cm4gPT09IDEpIHtcbiAgICAgIGxldCBwbGF5ZXJNYXJrWCA9IHhDb29yZGluYXRlO1xuICAgICAgbGV0IHBsYXllck1hcmtZID0geUNvb3JkaW5hdGU7XG5cbiAgICAgIGNvbnNvbGUubG9nKCFkZXRlcm1pbmVJZkluc2lkZUhpdFNob3RBcnJheShwbGF5ZXJNYXJrWCwgcGxheWVyTWFya1kpICYmICghZGV0ZXJtaW5lSWZJbnNpZGVNaXNzZWRTaG90QXJyYXkocGxheWVyTWFya1gsIHBsYXllck1hcmtZKSkpO1xuXG4gICAgICBpZiAoIWRldGVybWluZUlmSW5zaWRlSGl0U2hvdEFycmF5KHBsYXllck1hcmtYLCBwbGF5ZXJNYXJrWSkgJiYgKCFkZXRlcm1pbmVJZkluc2lkZU1pc3NlZFNob3RBcnJheShwbGF5ZXJNYXJrWCwgcGxheWVyTWFya1kpKSkgeyBcblxuICAgICAgYXR0YWNrKGN1cnJlbnRDb21wdXRlckdhbWVib2FyZCwgcGxheWVyTWFya1gsIHBsYXllck1hcmtZKTsgXG4gICAgICBjb25zb2xlLmxvZygnbG9nZ2luZyBwbGF5ZXIgdHVybiB2YXJpYWJsZSBiZWZvcmUgcGxheWVyIGF0dGFjaycsIHBsYXllclR1cm4pO1xuICAgICAgcGxheWVyVHVybiA9IDI7XG4gICAgICBjb25zb2xlLmxvZygnbG9nZ2luZyBwbGF5ZXIgdHVybiB2YXJpYWJsZSBhZnRlciBwbGF5ZXIgYXR0YWNrJywgcGxheWVyVHVybik7XG4gICAgICB9IGVsc2UgeyBcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZygnQ09NUFVURVJTIEdBTUVCT0FSRCBBRlRFUiBQTEFZRVIgQVRUQUNLJywgY3VycmVudENvbXB1dGVyR2FtZWJvYXJkKTtcblxuICAgICAgaWYgKGNoZWNrRm9yV2lubmVyKGN1cnJlbnRDb21wdXRlckdhbWVib2FyZCkpIHsgXG4gICAgICAgIGNvbnNvbGUubG9nKCdQTEFZRVIgV0lOUycpO1xuICAgICAgICBvcGVuTW9kYWwocGxheWVyR2FtZWJvYXJkKTtcbiAgICAgICAgcmV0dXJuOyAvLyBwcmludC9hY2Nlc3Mgd2lubmVyIG1vZGFsXG4gICAgICB9XG4gICAgICAvLyBwbGF5ZXJUdXJuID0gMjtcbiAgICB9IFxuICAgIC8vIGVsc2UgeyBcbiAgICAgIGNvbnNvbGUubG9nKCdFTFNFIFNUQVRFTUVOVCBDSEVDSyEnKVxuICAgICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZTEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSArIDE7XG4gICAgICBjb25zdCByYW5kb21Db29yZGluYXRlMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpICsgMTtcbiAgICAgIC8vIGNvbXB1dGVyQXR0YWNrKGN1cnJlbnRQbGF5ZXJHYW1lYm9hcmQsIHJhbmRvbUNvb3JkaW5hdGUxLCByYW5kb21Db29yZGluYXRlMik7XG4gICAgICBjb25zb2xlLmxvZygnUExBWUVSUyBHQU1FQk9BUkQgQUZURVIgQ09NUFVURVIgQVRUQUNLJywgY3VycmVudFBsYXllckdhbWVib2FyZCk7XG4gICAgICBjb25zb2xlLmxvZygnUkFORE9NIENPT1JESU5BVEVTIFNFTEVDVEVEIEZST00gQ09NUFVURVInLCByYW5kb21Db29yZGluYXRlMSwgcmFuZG9tQ29vcmRpbmF0ZTIpO1xuXG4gICAgICBpZiAoIWRldGVybWluZUlmSW5zaWRlSGl0U2hvdEFycmF5Q29tcHV0ZXIocmFuZG9tQ29vcmRpbmF0ZTEsIHJhbmRvbUNvb3JkaW5hdGUyKSAmJiAoIWRldGVybWluZUlmSW5zaWRlTWlzc2VkU2hvdEFycmF5Q29tcHV0ZXIocmFuZG9tQ29vcmRpbmF0ZTEsIHJhbmRvbUNvb3JkaW5hdGUyKSkpIHsgXG4gICAgICAgIGNvbXB1dGVyQXR0YWNrKGN1cnJlbnRQbGF5ZXJHYW1lYm9hcmQsIHJhbmRvbUNvb3JkaW5hdGUxLCByYW5kb21Db29yZGluYXRlMik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dnaW5nIHBsYXllciB0dXJuIHZhcmlhYmxlIGJlZm9yZSBjb21wdXRlciBhdHRhY2snLCBwbGF5ZXJUdXJuKTtcbiAgICAgICAgcGxheWVyVHVybiA9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dnaW5nIHBsYXllciB0dXJuIHZhcmlhYmxlIGFmdGVyIGNvbXB1dGVyIGF0dGFjaycsIHBsYXllclR1cm4pO1xuICAgICAgfSBlbHNlIHsgXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoZWNrRm9yV2lubmVyKGN1cnJlbnRQbGF5ZXJHYW1lYm9hcmQpKSB7IFxuICAgICAgICBjb25zb2xlLmxvZygnQ09NUCBXSU5TJyk7XG4gICAgICAgIHJldHVybjsgXG4gICAgICB9IFxuICAgICAgLy8gcGxheWVyVHVybiA9IDE7XG4gICAgfSBcbiAgXG5cblxuXG5cblxuXG5cbiAgLy8gZXhwb3J0IGZ1bmN0aW9uIHBsYWNlU2hpcHNPblBsYXllcnNCb2FyZCh1c2VyKSB7IFxuICAvLyAgIGNvbnN0IHBsYXllciA9IHVzZXI7IFxuICAvLyAgIGNvbnN0IGJhdHRsZVNoaXAgPSBzaGlwKCdCYXR0bGVzaGlwJywgNCwgJ3ZlcnRpY2FsJyk7XG4gIC8vICAgY29uc3QgZGVzdHJveWVyID0gc2hpcCgnRGVzdHJveWVyJywgNCwgJ2hvcml6b250YWwnICk7XG4gIC8vICAgY29uc3QgcGF0cm9sQm9hdCA9IHNoaXAoJ1BhdHJvbC1ib2F0JywgMiwgJ3ZlcnRpY2FsJyk7XG4gIC8vICAgY29uc3QgY2FycmllckJvYXQgPSBzaGlwKCdDYXJyaWVyJywgNCwgJ2hvcml6b250YWwnKTtcbiAgLy8gICBjb25zdCBzdWJtYXJpbmUgPSBzaGlwKCdTdWJtYXJpbmUnLCAzLCAndmVydGljYWwnKTtcbiAgLy8gICAvLyBjb25zdCBwbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoJ3BsYXllcicsICdwbGF5ZXInKTtcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIpO1xuICAvLyAgIGNvbnN0IGdldFBsYXllckJvYXJkID0gcGxheWVyLmdhbWVib2FyZC5nZXRHYW1lYm9hcmQoKTtcbiAgLy8gICBjb25zdCBwbGFjZUJhdHRsZVNoaXAgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChiYXR0bGVTaGlwLCAwLCAwLCA0LCAnaG9yaXpvbnRhbCcpO1xuICAvLyAgIGNvbnN0IHBsYWNlRGVzdHJveWVyID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoZGVzdHJveWVyLCAxLCAxLCA0LCAnaG9yaXpvbnRhbCcpO1xuICAvLyAgIGNvbnN0IHBsYWNlUGF0cm9sQm9hdCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKHBhdHJvbEJvYXQsIDIsIDIsIDIsICdob3Jpem9udGFsJyk7XG4gIC8vICAgY29uc3QgcGxhY2VDYXJyaWVyQm9hdCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKGNhcnJpZXJCb2F0LCAzLCAzLCA0LCAnaG9yaXpvbnRhbCcpO1xuICAvLyAgIGNvbnN0IHBsYWNlU3VibWFyaW5lID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lLCA0LCA0LCAzLCAnaG9yaXpvbnRhbCcpO1xuICAvLyAgIGNvbnNvbGUubG9nKGdldFBsYXllckJvYXJkKTtcbiAgLy8gICByZXR1cm4gZ2V0UGxheWVyQm9hcmQ7XG4gIC8vIH0gXG5cbiAgLy8gZXhwb3J0IGZ1bmN0aW9uIHBsYWNlU2hpcHNPbkNvbXB1dGVyc0JvYXJkKHVzZXIpIHsgXG4gIC8vICAgY29uc3QgY29tcHV0ZXIgPSB1c2VyO1xuICAvLyAgIGNvbnN0IGJhdHRsZVNoaXAgPSBzaGlwKCdCYXR0bGVzaGlwJywgNCwgJ3ZlcnRpY2FsJyk7XG4gIC8vICAgY29uc3QgZGVzdHJveWVyID0gc2hpcCgnRGVzdHJveWVyJywgNCwgJ2hvcml6b250YWwnICk7XG4gIC8vICAgY29uc3QgcGF0cm9sQm9hdCA9IHNoaXAoJ1BhdHJvbC1ib2F0JywgMiwgJ3ZlcnRpY2FsJyk7XG4gIC8vICAgY29uc3QgY2FycmllckJvYXQgPSBzaGlwKCdDYXJyaWVyJywgNCwgJ2hvcml6b250YWwnKTtcbiAgLy8gICBjb25zdCBzdWJtYXJpbmUgPSBzaGlwKCdTdWJtYXJpbmUnLCAzLCAndmVydGljYWwnKTtcbiAgLy8gICAvLyBjb25zdCBjb21wdXRlciA9IGNyZWF0ZVBsYXllcignUEMnLCAnY29tcHV0ZXInKTtcbiAgLy8gICBjb25zdCBnZXRDb21wdXRlckJvYXJkID0gY29tcHV0ZXIuZ2FtZWJvYXJkLmdldEdhbWVib2FyZCgpO1xuICAvLyAgIGNvbnN0IHBsYWNlQmF0dGxlU2hpcCA9IGNvbXB1dGVyLmdhbWVib2FyZC5wbGFjZVNoaXAoYmF0dGxlU2hpcCwgMCwgMCwgNCwgJ2hvcml6b250YWwnKTtcbiAgLy8gICBjb25zdCBwbGFjZURlc3Ryb3llciA9IGNvbXB1dGVyLmdhbWVib2FyZC5wbGFjZVNoaXAoZGVzdHJveWVyLCAxLCAxLCA0LCAnaG9yaXpvbnRhbCcpO1xuICAvLyAgIGNvbnN0IHBsYWNlUGF0cm9sQm9hdCA9IGNvbXB1dGVyLmdhbWVib2FyZC5wbGFjZVNoaXAocGF0cm9sQm9hdCwgMiwgMiwgMiwgJ2hvcml6b250YWwnKTtcbiAgLy8gICBjb25zdCBwbGFjZUNhcnJpZXJCb2F0ID0gY29tcHV0ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChjYXJyaWVyQm9hdCwgMywgMywgNCwgJ2hvcml6b250YWwnKTtcbiAgLy8gICBjb25zdCBwbGFjZVN1Ym1hcmluZSA9IGNvbXB1dGVyLmdhbWVib2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lLCA3LCA0LCAzLCAnaG9yaXpvbnRhbCcpO1xuICAvLyAgIGNvbnNvbGUubG9nKGdldENvbXB1dGVyQm9hcmQpO1xuICAvLyAgIHJldHVybiBnZXRDb21wdXRlckJvYXJkO1xuXG4gIC8vIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgLy8gIC8vIHN1bmsgYmF0dGxlc2hpcFxuICAvLyAgYXR0YWNrKHBsYXllciwgMCwgMCk7IFxuICAvLyAgYXR0YWNrKHBsYXllciwgMCwgMSk7IFxuICAvLyAgYXR0YWNrKHBsYXllciwgMCwgMik7IFxuICAvLyAgYXR0YWNrKHBsYXllciwgMCwgMyk7IFxuICAvLyAgLy8gc3VuayBkZXN0cm95ZXJcbiAgLy8gIGF0dGFjayhwbGF5ZXIsIDEsIDIpOyBcbiAgLy8gIGF0dGFjayhwbGF5ZXIsIDEsIDMpOyBcbiAgLy8gIGF0dGFjayhwbGF5ZXIsIDEsIDQpOyBcbiAgLy8gIGF0dGFjayhwbGF5ZXIsIDEsIDEpOyBcbiAgLy8gIC8vIHN1bmsgcGF0cm9sIGJvYXRcbiAgLy8gIGF0dGFjayhwbGF5ZXIsIDIsIDIpOyBcbiAgLy8gIGF0dGFjayhwbGF5ZXIsIDIsIDMpOyBcbiAgLy8gIC8vIHN1bmsgY2FycmllciBib2F0IFxuICAvLyAgYXR0YWNrKHBsYXllciwgMywgMyk7IFxuICAvLyAgYXR0YWNrKHBsYXllciwgMywgNCk7IFxuICAvLyAgYXR0YWNrKHBsYXllciwgMywgNSk7IFxuICAvLyAgYXR0YWNrKHBsYXllciwgMywgNik7IFxuICAvLyAgLy8gc3VuayBzdWJtYXJpbmVcbiAgLy8gIGF0dGFjayhwbGF5ZXIsIDQsIDQpOyBcbiAgLy8gIGF0dGFjayhwbGF5ZXIsIDQsIDUpOyBcbiAgLy8gIGF0dGFjayhwbGF5ZXIsIDQsIDYpOyBcblxuXG5cbi8vIC8vIHN1bmsgYmF0dGxlc2hpcFxuICAgICAgLy8gYXR0YWNrKGNvbXB1dGVyLCAwLCAwKTsgXG4gICAgICAvLyBhdHRhY2soY29tcHV0ZXIsIDAsIDEpOyBcbiAgICAgIC8vIGF0dGFjayhjb21wdXRlciwgMCwgMik7IFxuICAgICAgLy8gYXR0YWNrKGNvbXB1dGVyLCAwLCAzKTsgXG4gICAgICAvLyAvLyBzdW5rIGRlc3Ryb3llclxuICAgICAgLy8gYXR0YWNrKGNvbXB1dGVyLCAxLCAxKTsgXG4gICAgICAvLyBhdHRhY2soY29tcHV0ZXIsIDEsIDIpOyBcbiAgICAgIC8vIGF0dGFjayhjb21wdXRlciwgMSwgMyk7IFxuICAgICAgLy8gYXR0YWNrKGNvbXB1dGVyLCAxLCA0KTsgXG4gICAgICAvLyAvLyBzdW5rIHBhdHJvbCBib2F0XG4gICAgICAvLyBhdHRhY2soY29tcHV0ZXIsIDIsIDIpOyBcbiAgICAgIC8vIGF0dGFjayhjb21wdXRlciwgMiwgMyk7IFxuICAgICAgLy8gLy8gc3VuayBjYXJyaWVyIGJvYXQgXG4gICAgICAvLyBhdHRhY2soY29tcHV0ZXIsIDMsIDMpOyBcbiAgICAgIC8vIGF0dGFjayhjb21wdXRlciwgMywgNCk7IFxuICAgICAgLy8gYXR0YWNrKGNvbXB1dGVyLCAzLCA1KTsgXG4gICAgICAvLyBhdHRhY2soY29tcHV0ZXIsIDMsIDYpOyBcbiAgICAgIC8vIC8vIHN1bmsgc3VibWFyaW5lXG4gICAgICAvLyBhdHRhY2soY29tcHV0ZXIsIDcsIDQpOyBcbiAgICAgIC8vIGF0dGFjayhjb21wdXRlciwgNywgNSk7IFxuICAgICAgLy8gYXR0YWNrKGNvbXB1dGVyLCA3LCA2KTsgXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAvLyBvbGQgYXR0YWNrIGZ1bmN0aW9uXG4gIC8vIGZ1bmN0aW9uIGF0dGFjayh1c2VyMSwgdXNlcjIsKSB7IFxuICAvLyAgIGxldCBjb21wdXRlciA9IHVzZXIxO1xuICAvLyAgIGxldCBwbGF5ZXIgPSB1c2VyMjtcblxuICAvLyAgIGNvbnNvbGUubG9nKGNvbXB1dGVyKTtcbiAgLy8gICBjb25zb2xlLmxvZygnY29tcHV0ZXJzIHVzZXJUdXJuIHZhbHVlIGJlZm9yZSBhdHRhY2snLGNvbXB1dGVyLnVzZXJUdXJuKTtcbiAgLy8gICBjb25zb2xlLmxvZygncGxheWVycyB1c2VyVHVybiB2YWx1ZSBiZWZvcmUgYXR0YWNrJywgcGxheWVyLnVzZXJUdXJuKTtcblxuICAvLyAgIGlmIChwbGF5ZXIudXNlclR1cm4gPT09IHRydWUpIHsgXG4gIC8vICAgICAvLyBpZiB0cnVlIGxldCBwbGF5ZXIgbWFrZSBhdHRhY2ssIG9uIGNvbXB1dGVycyBnYW1lYm9hcmRcbiAgLy8gICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDMsIDMpKTtcbiAgLy8gICAgIHBsYXllci51c2VyVHVybiA9IGZhbHNlO1xuICAvLyAgICAgY29uc29sZS5sb2coJ3BsYXllcnMgdXNlclR1cm4gdmFsdWUgYWZ0ZXIgYXR0YWNrJywgcGxheWVyLnVzZXJUdXJuKVxuICAvLyAgICAgY29tcHV0ZXIudXNlclR1cm4gPSB0cnVlO1xuICAvLyAgICAgY29uc29sZS5sb2coJ2NvbXB1dGVycyB1c2VyVHVybiB2YWx1ZSBhZnRlciBhdHRhY2snLCBjb21wdXRlci51c2VyVHVybilcbiAgLy8gICB9IFxuXG4gIC8vICAgY29uc29sZS5sb2coJ3BsYXllcnMgdXNlclR1cm4gdmFsdWUgYXR0YWNrLCBvdXRzaWRlIGlmIGJsb2NrJywgcGxheWVyLnVzZXJUdXJuKTtcblxuICAvLyAgIGlmIChjb21wdXRlci51c2VyVHVybiA9PT0gdHJ1ZSkgeyBcbiAgLy8gICAgIGNvbnNvbGUubG9nKHBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjaygxLCAyKSk7XG4gIC8vICAgICBjb21wdXRlci51c2VyVHVybiA9IGZhbHNlO1xuICAvLyAgICAgY29uc29sZS5sb2coJ2NvbXB1dGVycyB1c2VyVHVybiB2YWx1ZSBhZnRlciBhdHRhY2snLCBjb21wdXRlci51c2VyVHVybik7XG4gIC8vICAgICBwbGF5ZXIudXNlclR1cm4gPSB0cnVlO1xuICAvLyAgICAgY29uc29sZS5sb2coJ3BsYXllcnMgdXNlclR1cm4gdmFsdWUgYWZ0ZXIgY29tcCBhdHRhY2snLCBwbGF5ZXIudXNlclR1cm4pO1xuICAvLyAgIH0gXG4gIC8vIH1cblxuLy8gY29uc29sZS5sb2coY3JlYXRlUGxheWVyKCdBbGVjJywgJ3BsYXllcicpKTsgXG5cbi8vIGxldCB0ZXN0UGxheWVyID0gY3JlYXRlUGxheWVyKCdBbGVjJywgJ3BsYXllcicpO1xuXG5cblxuLy8gY29uc29sZS5sb2cocGxhY2VTaGlwc09uUGxheWVyc0JvYXJkKHRlc3RQbGF5ZXIpKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXlHYW1lKCkgeyBcblxuLy8gICAgIGZ1bmN0aW9uIGNyZWF0ZVBsYXllck5hbWUobmFtZSkgeyBcbi8vICAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IHBsYXllckZhY3RvcnkobmFtZSk7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjaygzLCAzKSk7XG4vLyAgICAgICAgIHJldHVybiBwbGF5ZXJOYW1lO1xuLy8gICAgIH0gXG5cbiAgICAvLyBmdW5jdGlvbiBjcmVhdGVDb21wdXRlck5hbWUobmFtZSkgeyBcbiAgICAvLyAgICAgY29uc3QgY29tcHV0ZXJOYW1lID0gcGxheWVyRmFjdG9yeShuYW1lKTtcbiAgICAvLyAgICAgcmV0dXJuIGNvbXB1dGVyTmFtZTtcbiAgICAvLyB9IFxuXG4gICAgLy8gZnVuY3Rpb24gcGxhY2VTaGlwc1BsYXllckJvYXJkKCkgeyBcbiAgICAvLyAgICAgLy8gY3JlYXRlIGFsbCBzaGlwcyBvYmplY3RzIHdpdGhpbiBoZXJlLCB0aGVuIHBsYWNlIHRoZW0gb24gdGhlIGJvYXJkLCBcbiAgICAvLyAgICAgLy8ganVzdCBwbGFjZSB0aGVtXG4gICAgLy8gICAgIGNvbnN0IGJhdHRsZVNoaXAgPSBzaGlwKCdCYXR0bGVzaGlwJywgNCwgJ3ZlcnRpY2FsJyk7XG4gICAgLy8gICAgIGNvbnN0IGRlc3Ryb3llciA9IHNoaXAoJ0Rlc3Ryb3llcicsIDQsICdob3Jpem9udGFsJyApO1xuICAgIC8vICAgICBjb25zdCBwYXRyb2xCb2F0ID0gc2hpcCgnUGF0cm9sLWJvYXQnLCAyLCAndmVydGljYWwnKTtcbiAgICAvLyAgICAgY29uc3QgY2FycmllckJvYXQgPSBzaGlwKCdDYXJyaWVyJywgNCwgJ2hvcml6b250YWwnKTtcbiAgICAvLyAgICAgY29uc3Qgc3VibWFyaW5lID0gc2hpcCgnU3VibWFyaW5lJywgMywgJ3ZlcnRpY2FsJyk7XG5cbiAgICAvLyAgICAgY29uc3QgZ2V0UGxheWVyID0gY3JlYXRlUGxheWVyTmFtZSgnQWxlYycpO1xuICAgIC8vICAgICBjb25zdCBnZXRQbGF5ZXJCb2FyZCA9IGdldFBsYXllci5nYW1lYm9hcmQuZ2V0R2FtZWJvYXJkKCk7XG4gICAgLy8gICAgIGNvbnN0IHBsYWNlQmF0dGxlU2hpcCA9IGdldFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKGJhdHRsZVNoaXAsIDAsIDAsIDQsICdob3Jpem9udGFsJyk7XG4gICAgLy8gICAgIGNvbnN0IHBsYWNlRGVzdHJveWVyID0gZ2V0UGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoZGVzdHJveWVyLCAxLCAxLCA0LCAnaG9yaXpvbnRhbCcpO1xuICAgIC8vICAgICBjb25zdCBwbGFjZVBhdHJvbEJvYXQgPSBnZXRQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChwYXRyb2xCb2F0LCAyLCAyLCAyLCAnaG9yaXpvbnRhbCcpO1xuICAgIC8vICAgICBjb25zdCBwbGFjZUNhcnJpZXJCb2F0ID0gZ2V0UGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoY2FycmllckJvYXQsIDMsIDMsIDQsICdob3Jpem9udGFsJyk7XG4gICAgLy8gICAgIGNvbnN0IHBsYWNlU3VibWFyaW5lID0gZ2V0UGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lLCA0LCA0LCAzLCAnaG9yaXpvbnRhbCcpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhwbGFjZUJhdHRsZVNoaXApO1xuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhkZXN0cm95ZXIpO1xuICAgIC8vICAgICByZXR1cm4gZ2V0UGxheWVyQm9hcmQ7XG4gICAgLy8gfVxuXG4gICAgLy8gZnVuY3Rpb24gcGxhY2VTaGlwc0NvbXB1dGVyQm9hcmQoKSB7IFxuICAgIC8vICAgICBjb25zdCBiYXR0bGVTaGlwID0gc2hpcCgnQmF0dGxlc2hpcCcsIDQsICd2ZXJ0aWNhbCcpO1xuICAgIC8vICAgICBjb25zdCBkZXN0cm95ZXIgPSBzaGlwKCdEZXN0cm95ZXInLCA0LCAnaG9yaXpvbnRhbCcgKTtcbiAgICAvLyAgICAgY29uc3QgcGF0cm9sQm9hdCA9IHNoaXAoJ1BhdHJvbC1ib2F0JywgMiwgJ3ZlcnRpY2FsJyk7XG4gICAgLy8gICAgIGNvbnN0IGNhcnJpZXJCb2F0ID0gc2hpcCgnQ2FycmllcicsIDQsICdob3Jpem9udGFsJyk7XG4gICAgLy8gICAgIGNvbnN0IHN1Ym1hcmluZSA9IHNoaXAoJ1N1Ym1hcmluZScsIDMsICd2ZXJ0aWNhbCcpO1xuXG4gICAgLy8gICAgIGNvbnN0IGdldENvbXB1dGVyUGxheWVyID0gY3JlYXRlQ29tcHV0ZXJOYW1lKCdDb21wdXRlcicpO1xuICAgIC8vICAgICBjb25zdCBnZXRDb21wdXRlckJvYXJkID0gZ2V0Q29tcHV0ZXJQbGF5ZXIuZ2FtZWJvYXJkLmdldEdhbWVib2FyZCgpO1xuICAgIC8vICAgICBjb25zdCBwbGFjZUJhdHRsZVNoaXAgPSBnZXRQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChiYXR0bGVTaGlwLCAwLCAwLCA0LCAnaG9yaXpvbnRhbCcpO1xuICAgIC8vICAgICBjb25zdCBwbGFjZURlc3Ryb3llciA9IGdldFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKGRlc3Ryb3llciwgMSwgMSwgNCwgJ2hvcml6b250YWwnKTtcbiAgICAvLyAgICAgY29uc3QgcGxhY2VQYXRyb2xCb2F0ID0gZ2V0UGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAocGF0cm9sQm9hdCwgMiwgMiwgMiwgJ2hvcml6b250YWwnKTtcbiAgICAvLyAgICAgY29uc3QgcGxhY2VDYXJyaWVyQm9hdCA9IGdldFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKGNhcnJpZXJCb2F0LCAzLCAzLCA0LCAnaG9yaXpvbnRhbCcpO1xuICAgIC8vICAgICBjb25zdCBwbGFjZVN1Ym1hcmluZSA9IGdldFBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKHN1Ym1hcmluZSwgNCwgNCwgMywgJ2hvcml6b250YWwnKTtcbiAgICAvLyB9XG5cbi8vICAgICByZXR1cm4geyBcbi8vICAgICAgICAgY3JlYXRlUGxheWVyTmFtZSxcbi8vICAgICAgICAgLy8gY3JlYXRlQ29tcHV0ZXJOYW1lLFxuLy8gICAgICAgICAvLyBwbGFjZVNoaXBzUGxheWVyQm9hcmQsXG4vLyAgICAgICAgIC8vIHBsYWNlU2hpcHNDb21wdXRlckJvYXJkLFxuLy8gICAgIH1cbi8vIH0gXG5cblxuLy8gbWFraW5nIGEgbWV0aG9kIGZvciByZXRyaWV2aW5nIHBsYXllciBhbmQgY29tcHV0ZXIsIFxuLy8gbGV0IHBsYXlHYW1lVGVzdCA9IHBsYXlHYW1lKCkuY3JlYXRlUGxheWVyTmFtZSgnQWxlYycpO1xuLy8gbGV0IHBsYXlHYW1lQ29tcFRlc3QgPSBwbGF5R2FtZSgpLmNyZWF0ZUNvbXB1dGVyTmFtZSgnY3lwcmVzcycpO1xuXG4vLyBjb25zb2xlLmxvZyhwbGF5R2FtZVRlc3QpO1xuLy8gY29uc29sZS5sb2cocGxheUdhbWVDb21wVGVzdCk7XG5cbi8vIGNvbnNvbGUubG9nKHBsYXlHYW1lKCkucGxhY2VTaGlwc1BsYXllckJvYXJkKCkpO1xuXG4vLyBsb29raW5nIGF0IHRoZSBkaXJlY3Rpb25zIHdoZXJlIGRvIEkgc3RhcnQ/IFxuXG4vLyAiLCIvLyBpbXBvcnQgJy4vc2hpcEZhY3RvcnkuanMnO1xuaW1wb3J0IHNoaXAgZnJvbSAnLi9zaGlwRmFjdG9yeS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVib2FyZEZhY3RvcnkoKSB7XG4gIGxldCBnYW1lYm9hcmQgPSBbXTtcbiAgbGV0IGFsbFNob3RzID0gW107XG4gIGxldCBoaXRTaG90cyA9IFtdO1xuICBsZXQgbWlzc2VkU2hvdHMgPSBbXTsgXG4gIGxldCBzdW5rZW5TaGlwc0FycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGdhbWVib2FyZC5wdXNoKFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10pO1xuICB9IFxuXG4gIGZ1bmN0aW9uIGdldEdhbWVib2FyZCgpIHtcbiAgICByZXR1cm4gZ2FtZWJvYXJkO1xuICB9XG4vLyBwcmV2aW91c2x5IGZvciAobGV0IGkgPSAxOyBpIDw9IGxlbmd0aCAtIDE7IGkrKykgXG4vLyBjaGFuZ2VkIHRvIDAsIGkgPCBsZW5ndGgsIFxuLy8gdGhpcyB3b3JrcyB0b28gZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuZ3RoIC0gMTsgaSsrKVxuXG4gIGZ1bmN0aW9uIGNoZWNrRm9yU2hpcCh4LCB5LCBsZW5ndGgsIHBvc2l0aW9uKSB7IFxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ3ZlcnRpY2FsJykgeyBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHsgXG4gICAgICAgIGlmICh4ICsgaSA+IDkpIHsgXG4gICAgICAgICAgcmV0dXJuIGZhbHNlIFxuICAgICAgICB9ICAgICBcbiAgICAgICAgaWYgKGdhbWVib2FyZFt4ICsgaV1beV0gIT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocG9zaXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykgeyBcbiAgICAgICAgaWYgKHkgKyBpID4gOSkgeyBcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdhbWVib2FyZFt4XVt5ICsgaV0gIT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9IFxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwT2JqLCB4LCB5LCBsZW5ndGgsIHBvc2l0aW9uKSB7XG4gICAgaWYgKCFjaGVja0ZvclNoaXAoeCwgeSwgbGVuZ3RoLCBwb3NpdGlvbikpIHtcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcignc2hpcCBpcyBhbHJlYWR5IHRoZXJlIG9yIHNoaXAgaXMgcGxhY2VkIG9mZiB0aGUgZ2FtZWJvYXJkLCBwbGVhc2UgcGxhY2Ugc2hpcCBzb21ld2hlcmUgZWxzZSwgYW5kIG9uIHRoZSBnYW1lYm9hcmQnKTtcbiAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBTSElQIE9WRVJMQVAhIEN1cnJlbnQgc2hpcE9iaiBpcycsIHNoaXBPYmopO1xuICAgICByZXR1cm4gZmFsc2U7XG4gICAgIH0gXG4gICAgIC8vIGVsc2UgaWYgKGNoZWNrRm9yU2hpcCh4LCB5LCBsZW5ndGgsIHBvc2l0aW9uKSkgeyAvLyByZWNlbnRseSBhZGRlZCB0aGUgZWxzZSBpZiBcbiAgICBnYW1lYm9hcmRbeF1beV0gPSBzaGlwT2JqO1xuICAgICBcbiAgICBpZiAocG9zaXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZ2FtZWJvYXJkW3ggKyBpXVt5XSA9IHNoaXBPYmo7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZ2FtZWJvYXJkW3hdW3kgKyBpXSA9IHNoaXBPYmo7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gIC8vIH0gXG59IFxuXG5mdW5jdGlvbiBjaGVja0ZvckhpdHMoeCwgeSkgeyBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpdFNob3RzLmxlbmd0aDsgaSsrKSB7IFxuICAgICAgY29uc3QgaGl0U2hvdENvb3JkaW5hdGVzID0gaGl0U2hvdHNbaV07XG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoaGl0U2hvdENvb3JkaW5hdGVzKSA9PT0gSlNPTi5zdHJpbmdpZnkoW3gsIHldKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTsgXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSBcblxuICBmdW5jdGlvbiBjaGVja0ZvckR1cGxpY2F0ZU1pc3NlZFNob3RzKHgsIHkpIHsgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaXNzZWRTaG90cy5sZW5ndGg7IGkrKykgeyBcbiAgICAgIGNvbnN0IG1pc3NlZFNob3RDb29yZGluYXRlcyA9IG1pc3NlZFNob3RzW2ldO1xuICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KG1pc3NlZFNob3RDb29yZGluYXRlcykgPT09IEpTT04uc3RyaW5naWZ5KFt4LCB5XSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7IFxuICAgICAgfSBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gXG5cbiAgICAvLyBvayBzbyB3ZSBnbyB0aHJ1IHRoZSBoaXQgYW5kIG1pc3NlZCBzaG90cyBidXQgd2UgbmVlZCB0byBnbyB0aHJ1IHRoZSBnYW1lYm9hcmQgYW5kIGZpZ3VyZSBvdXQgaWYgYSBjZWxsIGlzIGFscmVhZHkgb2NjdXBpZWQsIFxuICAgIC8vIGxvb3AgdGhydSBnYW1lYm9hcmQgYW5kIGRldGVybWluZSBpZiBjZWxsIGlzIGZyZWUsIHRoZW4gcGxheWVyIGNhbiBtYWtlIHRoZWlyIGF0dGFjaywgXG4gIFxuXG4vLyBhbGxvd3MgdXNlciB0byBwbGFjZSBoaXRzIG9uIHRoZSBib2FyZCBpZiB0aGUgaGl0IGlzIHZhbGlkLCBcbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayh4LCB5KSB7IFxuICAgIGNvbnN0IHNoaXBPbkJvYXJkID0gZ2FtZWJvYXJkW3hdW3ldOyBcbiAgICBpZiAodHlwZW9mIHNoaXBPbkJvYXJkID09PSAnb2JqZWN0JykgeyBcbiAgICAgIGlmIChjaGVja0ZvckhpdHMoeCwgeSkpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYWxyZWFkeSBhIGhpdCB0aGVyZSwgXG4gICAgICAgIC8vIGNoZWNrIHRvIG1ha2Ugc3VyZSBzYW1lIGNlbGwgaXMgbm90IGJlaW5nIGhpdCB0d2ljZSwgXG4gICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ0hpdCB3YXMgYWxyZWFkeSBwbGFjZWQgYXQgdGhhdCBjZWxsLCBwaWNrIGEgZGlmZmVyZW50IGNlbGwnKTtcbiAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBcbiAgICAgIHNoaXBPbkJvYXJkLmhpdEluY3JlbWVudG9yKCk7XG4gICAgICBoaXRTaG90cy5wdXNoKFt4LCB5XSlcblxuICAgICAgaWYgKHNoaXBPbkJvYXJkLmdldFNoaXBTdGF0dXMoKSkgeyBcbiAgICAgICAgY29uc29sZS5sb2coc3Vua2VuU2hpcHNBcnJheSk7XG4gICAgICAgLy8gIGlmICghc3Vua2VuU2hpcHNBcnJheS5pbmNsdWRlcyhzaGlwT25Cb2FyZCkpIHsgXG4gICAgICAgIHN1bmtlblNoaXBzQXJyYXkucHVzaChzaGlwT25Cb2FyZCk7XG4gICAgICAgIC8vIH0gXG4gICAgICB9XG5cbiAgICB9IGVsc2UgeyBcbiAgICAgIC8vIGNoZWNrIGlmIHRoZXNlIGNvb3JkaW5hdGVzIGFyZSBpbiBtaXNzZWRTaG90IGFycmF5LCBpZiB0aGV5IGFyZSBub3QsIHB1c2ggdGhlbSBpbnRvIG1pc3NlZFNob3QgYXJyYXksIFxuICAgICAgLy8gaWYgZmFsc2UsIG1lYW5pbmcgY29vcmRpbmF0ZXMgYXJlIG5vdCBpbnNpZGUgdGhlIG1pc3NlZCBjb29yZHMgYXJyYXkgdGhlbiBwdXNoIHVuaXF1ZSBjb29yZHMgaW4sIFxuICAgICAgaWYgKCFjaGVja0ZvckR1cGxpY2F0ZU1pc3NlZFNob3RzKHgsIHkpKSB7IFxuICAgICAgbWlzc2VkU2hvdHMucHVzaChbeCwgeV0pIFxuICAgICAgfSBcbiAgICB9IFxuICAgIHJldHVybiB7IFxuICAgICAgbWlzc2VkU2hvdHMsIFxuICAgICAgaGl0U2hvdHNcbiAgfVxufSAgIFxuXG5mdW5jdGlvbiBhcmVBbGxTaGlwc1N1bmsoKSB7IFxuICBjb25zb2xlLmxvZygnYWxsIHNoaXBzIHN1bmsgZnVuY3Rpb24sIGxvZ2dpbmcgY3VycmVudCBzdW5rZW5TaGlwc0FycmF5Jywgc3Vua2VuU2hpcHNBcnJheSk7XG4gIGlmIChzdW5rZW5TaGlwc0FycmF5Lmxlbmd0aCA9PT0gNSkgeyBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBcbiAgcmV0dXJuIGZhbHNlO1xufSBcblxuICByZXR1cm4ge1xuICAgIGdldEdhbWVib2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBjaGVja0ZvclNoaXAsXG4gICAgaGl0U2hvdHMsXG4gICAgbWlzc2VkU2hvdHMsXG4gICAgYXJlQWxsU2hpcHNTdW5rLFxuICAgIHN1bmtlblNoaXBzQXJyYXksXG4gICAgY2hlY2tGb3JIaXRzXG4gIH07XG59IFxuXG5cbmxldCBiYXR0bGVTaGlwID0gc2hpcCgnQmF0dGxlc2hpcCcsIDQsICd2ZXJ0aWNhbCcpO1xubGV0IGRlc3Ryb3llciA9IHNoaXAoJ0Rlc3Ryb3llcicsIDQsICdob3Jpem9udGFsJyApO1xubGV0IHBhdHJvbEJvYXQgPSBzaGlwKCdQYXRyb2wtYm9hdCcsIDIsICd2ZXJ0aWNhbCcpO1xubGV0IGNhcnJpZXJCb2F0ID0gc2hpcCgnQ2FycmllcicsIDQsICdob3Jpem9udGFsJyk7XG5sZXQgc3VibWFyaW5lID0gc2hpcCgnU3VibWFyaW5lJywgMywgJ3ZlcnRpY2FsJyk7XG5sZXQgZ2FtZWJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuXG5cblxuXG5cblxuXG4vLyBnYW1lYm9hcmQucGxhY2VTaGlwKGJhdHRsZVNoaXAsIDMsIDIsIDQsICd2ZXJ0aWNhbCcpO1xuLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcChkZXN0cm95ZXIsIDQsIDUsIDQsICdob3Jpem9udGFsJyk7XG4vLyBnYW1lYm9hcmQucGxhY2VTaGlwKHBhdHJvbEJvYXQsIDAsIDAsIDIsICd2ZXJ0aWNhbCcpO1xuLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcChjYXJyaWVyQm9hdCwgMSwgMiwgNCwgJ2hvcml6b250YWwnKTtcbi8vIGdhbWVib2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lLCA2LCAzLCAzLCAndmVydGljYWwnKTtcbi8vIC8vIHNpbmtpbmcgYmF0dGxlc2hpcFxuLy8gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soMywgMik7XG4vLyAvLyBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjaygzLCAyKTtcbi8vIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDQsIDIpO1xuLy8gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soNSwgMik7XG4vLyBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayg2LCAyKTtcbi8vIGdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKTtcbi8vIC8vIHNpbmtpbmcgZGVzdHJveWVyIFxuLy8gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soNCwgNSk7XG4vLyBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayg0LCA2KTtcbi8vIC8vIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDQsIDUpO1xuLy8gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soNCwgNyk7XG4vLyBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayg0LCA4KTtcbi8vIGdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKTtcbi8vIC8vIHNpbmtpbmcgcGF0cm9sIGJvYXJkXG4vLyBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjaygwLCAwKTtcbi8vIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDEsIDApO1xuLy8gZ2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpO1xuLy8gLy8gc2lua2luZyBjYXJyaWVyIGJvYXRcbi8vIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDEsIDIpOyBcbi8vIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDEsIDMpOyBcbi8vIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDEsIDQpOyBcbi8vIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDEsIDUpOyBcbi8vIGdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKTtcbi8vIC8vIHNpbmtpbmcgc3VibWFyaW5lXG4vLyBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayg2LCAzKTtcbi8vIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDcsIDMpO1xuLy8gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soOCwgMyk7XG4vLyBnYW1lYm9hcmQuYXJlQWxsU2hpcHNTdW5rKCk7XG5cbi8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2FtZWJvYXJkLnN1bmtlblNoaXBzQXJyYXkpKSk7XG4vLyBjb25zb2xlLmxvZygnY2hlY2tpbmcgdGhlIGFycmF5IGFmdGVyIHNoaXBzIGFyZSBwbGFjZWQgYW5kIHN1bmsnLCBnYW1lYm9hcmQuc3Vua2VuU2hpcHNBcnJheSk7XG4vLyBjb25zb2xlLmxvZyhnYW1lYm9hcmQuZ2V0R2FtZWJvYXJkKCkpO1xuLy8gY29uc29sZS5sb2coJ2NoZWNraW5nIHdoYXQgdGhlIGFyZUFsbFNoaXBzU3VuayBjb25kaXRpb25hbCByZXR1cm5zJywgZ2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKTsgIFxuXG4vLyBjb25zb2xlLmxvZyhnYW1lYm9hcmQuaGl0U2hvdHMpO1xuLy8gY29uc29sZS5sb2coZ2FtZWJvYXJkLm1pc3NlZFNob3RzKTtcblxuXG5cblxuXG5cblxuXG4vLyBjb25zb2xlLmxvZyhhcmVBbGxTaGlwc1N1bmsoKSk7XG5cbi8vIGZ1bmN0aW9uIGFyZUFsbFNoaXBzU3VuaygpIHtcbi8vICAgbGV0IGFsbFNoaXBzID0gNTtcbi8vICAgbGV0IHN1bmtTaGlwcyA9IFtdO1xuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5sZW5ndGg7IGkrKykgeyBcbi8vICAgICBsZXQgZ2FtZWJvYXJkQXJyYXlzID0gZ2FtZWJvYXJkW2ldO1xuLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2FtZWJvYXJkQXJyYXlzLmxlbmd0aDsgaisrKSB7IFxuLy8gICAgICAgbGV0IGNlbGwgPSBnYW1lYm9hcmRBcnJheXNbal07XG4vLyAgICAgICBjb25zb2xlLmxvZygnY3VycmVudGx5IGxvZ2dpbmcgYXJyYXk6JywgZ2FtZWJvYXJkQXJyYXlzKVxuLy8gICAgICAgIGlmICh0eXBlb2YgY2VsbCA9PT0gJ29iamVjdCcpIHsgLy8gY2hlY2tpbmcgb25seSBvbmUgc2hpcCwgaG93IHRvIGNoZWNrIGFsbFxuLy8gICAgICAgICBjb25zb2xlLmxvZyhgZm91bmQgYSBzaGlwIGF0OiBbJHtpfSwgJHtqfV1gLCBjZWxsKVxuLy8gICAgICAgICBjZWxsLmlzU3Vua0NvbmRpdGlvbmFsKCk7XG4vLyAgICAgICAgIGlmIChjZWxsLmdldFNoaXBTdGF0dXMoKSkgeyBcbi8vICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgfSBlbHNlIHsgXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGBubyBzaGlwIGZvdW5kIGF0OiBbJHtpfSwgJHtqfV0hYCwgY2VsbClcbi8vICAgICAgIH0gXG4vLyAgICAgfVxuLy8gICB9IFxuLy8gICByZXR1cm4gZmFsc2U7IFxuLy8gfSBcblxuXG4iLCIvLyBpbXBvcnQgJy4vc2hpcEZhY3RvcnkuanMnO1xuaW1wb3J0ICcuL3NoaXBGYWN0b3J5LmpzJztcblxuaW1wb3J0ICcuL2dhbWVib2FyZEZhY3RvcnkuanMnO1xuXG5pbXBvcnQgJy4vcGxheWVyRmFjdG9yeS5qcyc7XG5cbmltcG9ydCAnLi9nYW1lTW9kdWxlLmpzJztcblxuaW1wb3J0ICcuL2RvbUxvZ2ljLmpzJzsgXG5cbi8vIGZpZ3VyZSBvdXQgdGhlIGxhc3QgamVzdCBlcnJvciwgXG4vLyBpbiB0aGUgbWVhbnRpbWUgd2UgbmVlZCB0byBmaWd1cmUgb3V0IGhvdyB0byBzdGFydCB0aGUgZ2FtZSBcbi8vLyBhbmQgd2hhdCB3b3VsZCBuZWVkIHRvIGhhcHBlbiBmb3IgdGhlIGdhbWUgdG8gc3RhcnQ/IFxuLy8gYWxsIHBsYXllciBzaGlwcyBhcmUgcGxhY2VkIFxuLy8gY29tcHMgc2hpcHMgYXJlIHJhbmRvbWx5IHBsYWNlZCBvbiB0aGUgYm9hcmQgXG5cbi8vIHdlIG5lZWQgYSB3YXkgdG8gZGV0ZXJtaW5lIGlmIGFsbCBmaXZlIHBsYXllciBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkXG4vLyBsb29rIG92ZXIgYW5kIHNlZSB3aGF0IHdlIGNhbiBmaW5kIFxuXG4vLyBwbGFjZSBwbGF5ZXIgc2hpcCBmdW5jdGlvbiBcbi8vIGFjY2VzcyB0aGUgZ2FtZWJvYXJkIGZvciBwbGF5ZXJcbi8vIGxvb3AgdGhydSBpdCBhbmQgaW5pdCBhbiBhcnJheSwgXG4vLyBpZiB0aGUgYXJyIGlzIGVtcHR5IGFsbCBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkLCBzdGFydCB0aGUgZ2FtZS4gXG5cblxuLy8gaG93IGNhbiB3ZSBzdGFydCB0aGUgZ2FtZSwgb25jZSBhbGwgcGxheWVycyBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkLCBcbi8vIGZpcnN0IGNoZWNrIHRoZSBwbGFjZSBzaGlwIGZ1bmN0aW9ucywgXG4vLyBzb21ldGhpbmcgdGhhdCB3aWxsIGRldGVybWluZSBpZiBhbGwgNSBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkLiBcbi8vIG1heWJlIGluIHRoZSBldmVudCBsaXN0ZW5lciwgXG4vLyBiZWNhdXNlIHRoZSB1c2VyIHdpbGwgaGF2ZSB0byBjbGljayBhIHNoaXAgb2JqZWN0IHRvIHBsYWNlIGl0IFxuLy8gd2l0aGluIHRoZSBwbGFjZSBzaGlwIGZ1bmN0aW9uLCB1cGRhdGUgYSB2YXJpYWJsZSwgdGhhdCByZXR1cm5zIGEgYm9vbGVhbiBcblxuLy8gd29yayBvbiBjb3JyZWN0bHkgZGlzcGxheWluZyB0aGUgZ3JpZHMgbmV4dCB0byBlYWNob3RoZXIsIFxuLy8gd2l0aCBhcHByaXByb2F0ZSBzdHlsaW5nLCBcbi8vIHR3byBncmlkcyBuZXh0IHRvIGVhY2hvdGhlciwgb25jZSB0aGUgc3RhcnQgZ2FtZSBidG4gaXMgcHJlc3NlZCwgXG4vLyBmb2xsb3cgdGhlIHNlcXVlbmNlIGFnYWluIGFuZCBnZXQgZmFtaWxpYXIsIFxuXG4vLyBJIHdhbnQgdGhlIGJvYXJkIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgY2VudGVyIHRvIHN0YXJ0LCBcbi8vIG9uY2UgdGhlIG90aGVyIHNoaXAgaXMgYWRkZWQgdG8gbWFrZXMgc3BhY2UgZm9yIHRoZSBuZXcgb25lLCBcbi8vIG1ha2Ugc3VyZSB0aGUgYm9hcmRzIGFyZSBwcm9wZXJseSBkaXNwbGF5ZWQsIG9uY2UgdGhlIHN0YXJ0IGdhbWUgYnRuIGlzIHByZXNzZWRcbi8vIGJ0biBpcyBwcmVzc2VkLCByZW1vdmVzIHRoZSBidG5zLCB0aGUgc2hpcCBvYmplY3RzLCBkaXNwbGF5cyB0aGUgY29tcHV0ZXIgYm9hcmQgXG4vLyBhbmQgdGhlIHBsYXllcnMgYm9hcmQsIHRoZW4gdGhlIGdhbWUgY2FuIHN0YXJ0LFxuXG4vLyBjb21taXQgYW5kIHNhdmUgd29yayBiZWZvcmUgbW92aW5nIGZvcndhcmQsIFxuLy8gbmV4dCBnYW1lIHdpbGwgc3RhcnQsIFxuLy8gYnV0IGJlZm9yZSB0aGVuLCBtYWtlIHN1cmUgeW91IGNvbm5lY3QgdGhlIG5ldyBnYW1lYm9hcmQgdG8gdGhlIGNvbXB1dGVyL1BDIHVzZXJcbi8vIGNvbm5lY3QgdGhlIGdhbWVib2FyZHMuICBcblxuLy8gaXQgc2VlbXMgbGlrZSB0aGUgZ2FtZWJvYXJkcyBhcmUgY29ubmVjdGVkLCBcbi8vIHdlIGNhbiBzdGFydCB0aGUgZ2FtZSwgXG4vLyBvbmNlIHN0YXJ0IGdhbWUgYnRuIGlzIGNsaWNrZWQsIHBsYXllcnMgaGF2ZSB0aGVpciBib2FyZHMuIFxuLy8gY2FsbCBwbGF5R2FtZSBhbmQgZ2V0IHRoZSBib2FyZHMgd2l0aCBzaGlwcyBvbiB0aGVtIFxuXG4vLyBzaG91bGQgSSB0b3RhbGx5IHJlZmFjdG9yIGdhbWUgbW9kdWxlPyBcbi8vIGl0IGhhcyBhbGwgdGhlIGluZm8gd2UgbmVlZCwgXG4vLyBjaGVja2luZyBpZiBhbGwgc2hpcHMgYXJlIHN1bmsgXG4vLyBhdHRhY2sgbWV0aG9kcywgXG4vLyBnYW1lIGxvb3AgdGhhdCBrZWVwcyBwbGF5aW5nIHVuZGVyIGEgY2VydGFpbiBjb25kaXRpb24gXG4vLyBmaXJzdCB3ZSBuZWVkIGEgd2F5IHRvIGFjY2VzcyBwbGF5ZXJzIGFuZCBjb21wdXRlcnMgYm9hcmQgd2l0aGluIGdhbWUgbW9kdWxlLCBcbi8vIHRoZSB1cGRhdGVkIGJvYXJkcyBuZWVkIHRvIGJlIGFjY2Vzc2VkIHdpdGhpbiB0aGF0IG1vZHVsZSwgXG5cbi8vIEkgY2FuIGFjY2VzcyB0aGUgZ2FtZWJvYXJkIHZhcmlhYmxlcyB3aXRoaW4gZ2FtZU1vZHVsZSBcbi8vIGhvdyB3aWxsIEkgdXBkYXRlIG15IGRhdGEgd2l0aGluIGdhbWUgbW9kdWxlLCBcbi8vIHRvIHVzZSB0aGVzZSBuZXcgdmFyaWFibGVzLiBcbi8vIEkgdGhpbmsgSSBuZWVkIHRvIGxvb2sgb3ZlciB0aGUgZ2FtZSBtb2R1bGUgXG4vLyBhbmQgZGV0ZXJtaW5lIGhvdyB0aGlzIGNhbiBiZSB1c2VkLCBcbi8vIEkgdGhpbmsgdmFyaWFibGVzIHdpbGwgbmVlZCB0byBiZSB1cGRhdGVkIHdpdGhpbiBnYW1lIG1vZHVsZSBcbi8vIHRoZSBnYW1lYm9hcmRzIGFyZSB1cGRhdGVkIGFuZCBjb21wbGV0ZWQgd2l0aGluIGRvbUxvZ2ljIFxuLy8gcGFzc2VkIHRvIGdhbWUgbW9kdWxlIFxuLy8gYW5kIHRoYXQgYm9hcmQgdXNlZCB3aXRoaW4gdGhlIGdhbWUgbW9kdWxlIFxuLy8gc2F2ZSBhbmQgY29tbWl0IHdvcmsgdGhlbiBiZWdpblxuXG5cbi8vIG9rIHdlIG5lZWQgdG8gZm9sbG93IHRoaXMgcHJvY2VzcywgXG4vLyBib2FyZHMgYXJlIGRpc3BsYXllZFxuLy8gdGltZSBmb3IgcGxheWVycyBhdHRhY2ssIHBsYXllciBjbGlja3Mgb24gY29tcHMgYm9hcmRcbi8vIHNvbWV0aGluZyB3aWxsIG5lZWQgdG8gZGV0ZXJtaW5lIGlmIHRoZSBoaXQgd2FzIHN1Y2Nlc3NmdWwsXG4vLyBvbmNlIGNsaWNrZWQgb24gYSBjZWxsIG9uIHRoZSBjb21wcyBib2FyZCwgdGhvc2UgY29vcmRpbmF0ZXMgd2lsbCBiZSBzYXZlZCBcblxuXG4vLyB3ZSBhcmUgZGlzcGxheWluZyB0aGUgYm9hcmRzLCBcbi8vIHBsYXllciB3aWxsIGNsaWNrIG9uIGNvbXB1dGVycyBib2FyZCBcbi8vIGFuZCB0aG9zZSBjb29yZGluYXRlcyB3aWxsIG5lZWQgdG8gZ2V0IHNhdmVkLCBcbi8vIGlmIGEgaGl0IGFwcGx5IHN0eWxlcyB0byB0aGVtLCBcbi8vIGlmIGEgbWlzcyBhcHBseSBzdHlsZXMgdG8gdGhlbSwgXG4vLyB3ZSBuZWVkIHRvIGZpZ3VyZSBvdXQgd2hhdCB3ZSB3aWxsIGRvIHdpdGggdGhlIGNvb3JkaW5hdGVzIFxuLy8gY29vcmRpbmF0ZXMgdGhhdCBhcmUgY2xpY2tlZCBvbiBhcmUgdGhlIHBsYXllcnMgYXR0YWNrIFxuLy8gZGV0ZXJtaW5lIGlmIHRoZSBjb29yZGluYXRlcyBhcmUgYSBoaXQgb3IgbWlzcywgaW4gdGhlIGF0dGFjayBtZXRob2QsIFxuLy8gdGhlbiBjYWxsIHRoZSBkb20gZmlsZSBhZ2FpbiB0byBhIGZ1bmN0aW9uIHdoaWNoIGFwcGxpZXMgc3R5bGVzIHRvIHRoZSBjb29yZGluYXRlcyBcblxuXG4vLyBDVVJSRU5UIFBMQU5cbi8vIHdvcmtpbmcgb24gcGxheWluZyB0aGUgZ2FtZSwgXG4vLyBwbGF5IGdhbWUgaXMgYWN0dWFsbHkgY2FsbGVkIHdpdGhpbiB0aGUgZXZlbnQgbGlzdGVuZXIgXG4vLyBvbmNlIGEgY2VsbCBpcyBjbGlja2VkIG9uIHRoZSBjb21wdXRlcnMgYm9hcmQsIHRoYXQgd2lsbCBiZSB0aGUgcGxheWVycyBhdHRhY2tcbi8vIHJpZ2h0IG5vdyBJIGNhbiBvbmx5IHBsYWNlIGF0dGFja3Mgb24gdGhlIGNvbXB1dGVycyBib2FyZCwgSSBjYW4gc2luayBhbGwgdGhlIHNoaXBzIGFuZCBpdCB3aWxsIGRldGVybWluZSB0aGF0IEkgd29uLCBcbi8vIGJ1dCB0aGUgcHJvYmxlbSBzZWVtcyB0byBiZSB0aGUgbG9vcCwgXG4vLyB0ZXN0IGFnYWluIGJ1dCB3aXRob3V0IHRoZSBsb29wLCAgSSBjYW4gbWFrZSB0aGUgcGxheWVyIHdpbiwgb25seSBwbGF5ZXIgdHVybiBpcyB3b3JraW5nLCBJIGNhbiBzaW5rIGFsbCB0aGUgY29tcHMgc2hpcCBcbi8vIGFuZCBwcmludCB0aGUgd2lubmVyIHdoaWNoIHdvdWxkIGJlIHBsYXllciBcbi8vIHdoeSB3aGVuIEkgYWRkIHRoZSBsb29wIHdoaWNoIHNpbXBseSBrZWVwcyBwbGF5aW5nIGlmIHRoZXJlIGFyZSBzdGlsbCBzaGlwcyBvbiBwbGF5ZXJzIGJvYXJkIGFuZCBjb21wdXRlcnMgYm9hcmQsIGl0IHdpbGwgbm90IHdvcmsgY29ycmVjdGx5XG4vLyBXSFkgQ0FOIENPTVAgSElUIFRIRSBTQU1FIENFTEwgVFdJQ0UsIEkgSEFWRSBDSEVDS1MgQUdBSU5TVCwgV0hZIEFSRSBUSE9TRSBOT1QgV09SS0lORyEhISEhIT8gXG5cbi8vIHByb2JsZW0gMSB0cnlpbmcgdG8gZ2V0IHRoZSBnYW1lIGxvb3AgdG8gcHJvcGVybHkgd29yaywgXG4vLyBwcm9ibGVtIDIgd2h5IGFyZSBjb21wdXRlciBhbmQgdXNlciBzdGlsbCBhYmxlIHRvIGhpdCB0aGUgc2FtZSBjZWxsIHR3aWNlPyBcbi8vIHVzZXIgY2xpY2tzIG9uIGNvbXBzIGdhbWVib2FyZCwgb25jZSBjbGlja2VkIGl0IHdpbGwgdHJpZ2dlciB0aGUgZ2FtZSwgXG4vLyB3aGF0ZXZlciBjZWxsIHVzZXIgY2xpY2tzIGlzIGhpcyBhdHRhY2ssIFxuLy8gdGhlbiB0aGUgZ2FtZSBrZWVwIHBsYXlpbmcgYXMgbG9uZyBhcyBib3RoIHBsYXllciBhbmQgY29tcHV0ZXIgaGF2ZSBzaGlwcyBzdGlsbCBvbiB0aGUgYm9hcmQsIFxuLy8gY3VycmVudGx5IHdpdGggbXkgbG9vcCBvbmx5IHBsYXllciwgY2FuIG1ha2UgaGlzIG1hcmssIGl0IHdvbid0IHN3aXRjaCB0dXJucywgaXQgd2lsbCBsZXQgbWUgc2luayBzaGlwcyBhbmQgcHJpbnQgd2lubmVyLCBcbi8vIGJ1dCB3aHkgd2lsbCBpdCBub3Qgc3dpdGNoIHR1cm5zIGFuZCB3aHkgaXMgaXQgaGl0dGluZyB0aGUgc2FtZSBjZWxsIHR3aWNlPyBcblxuXG5cbi8vIENVUlJFTlQgUExBTiA5LzEyIFxuLy8gZmlyc3Qgc3BlbmQgYSBsaXR0bGUgdGltZSB1bmRlcnN0YW5kaW5nIGJlaGF2aW9yIGFnYWluLCBcbi8vIHRoZW4gdGhlIHBsYW4gc2VlbXMgdG8gYmUgZ2V0dGluZyB0aGUgaG92ZXIgY2xhc3Mgd29ya2luZyBmaXJzdCwgXG4vLyB3ZSBuZWVkIHRvIHRoaW5rIG9mIHRoZSBmbG93IG9mIHRoZSBnYW1lLCBcbi8vIHlvdSBzaG91bGQgZmlyc3QgYmUgYWJsZSB0byBob3ZlciBvdmVyIHRoZSBjb21wcyBnYW1lYm9hcmQgXG4vLyB0byBkZXRlcm1pbmUgd2hlcmUgeW91IHdhbnQgdG8gcGxhY2UgdGhlIGhpdFxuLy8gcGxheWVyIGNsaWNrcyBvbiBhIGNlbGwsIHRoYXQgaXMgaGlzIGF0dGFjaywgc28gdGhhdCB0cmlnZ2VycyB0aGUgZ2FtZSwgXG4vLyBwbGF5R2FtZSBpcyBjYWxsZWQsIGlzIGl0IGEgcHJvYmxlbSB0aGF0IHBsYXlHYW1lIGlzIGNhbGxlZCwgd2l0aGluIHRoZSBsaXN0ZW5lciwgXG4vLyBiZWNhdXNlIEkgbmVlZCBzb21ld2F5IHRvIHBhc3MgdGhlIGNvb3JkaW5hdGVzLCB3aGF0IGNlbGxzIGRpZCB0aGUgcGxheWVyIGNsaWNrLCB3aGF0IGlzIHBsYXllcnMgYXR0YWNrPyBcbi8vIHRob3NlIGNvb3JkaW5hdGVzIGdldCBwYXNzZWQgdGhlIHBsYXlHYW1lIGZ1bmN0aW9uLCBwbGF5ZXIgbWFrZXMgbWFyaywgY2hlY2tzIGZvciB3aW5uZXIsIFxuLy8gdGhlbiBzd2l0Y2hlcyB0dXJuLCB0byBjb21wLCByYW5kb20gY29vcmRzIGFyZSBzZWxlY3RlZCBhbmQgY29tcCBtYWtlcyB0aGVpciBtYXJrIFxuLy8gY2hlY2tzIGZvciB3aW5uZXIsIFxuLy8gSSBkb250IHRoaW5rIHdlIG5lZWQgYSBsb29wIGVpdGhlciwgaSBtYXkgcG9zc2libHkgaGF2ZSB0byByZWNvbnNpZGVyIGFuZCByZWZhY3RvciBidXQgdGhlIGdhbWUgd2lsbCBkZXBlbmQgb24gcGxheWVyIG1ha2luZyBoaXMgbWFyaywgXG4vLyBjb29yZHMgYXJlIHBhc3NlZCB0byBwbGF5IGdhbWUsIGNlbGwgdGhhdCB3YXMgY2xpY2tlZCBvbiBjb21wcyBib2FyZCB3aWxsIGJlIHBsYXllcnMgYXR0YWNrLCB0aGVuIHR1cm4gc3dpdGNoZXMgdG8gY29tcHMsIHdoaWNoIGlzIHJhbmRvbSBhdHRhY2ssIFxuLy8gYWZ0ZXIgZWFjaCBwbGF5ZXIgbWFrZXMgYXR0YWNrLCB0dXJuIHN3aXRjaGVzLCBcbi8vIGdhbWUgY3ljbGUgZGVwZW5kcyBvbiBwbGF5ZXJzIGNsaWNrLCBjaGVja2luZyBmb3Igd2lubmVyLCBzd2l0Y2hpbmcgdHVybnMsIGN5Y2xlIHJlcGVhdHMgXG4vLyBcbi8vIGZpcnN0IGxldHMgZG8gYSBob3ZlciBjbGFzcyBvdmVyIHRoZSBjb21wcyBib2FyZCwgcGxheWVyIHNob3VsZCBzZWUgd2hlcmUgdGhleSBhcmUgYWJvdXQgdG8gcGxhY2UgdGhlaXIgaGl0LiBcbi8vIGhvdmVyIGNsYXNzIHRha2VuIGNhcmUgb2YsIG5leHQgbGV0cyBzdHlsZSB0aGUgcGxheWVycyBtYXJrLCBcbi8vIGF0dGFjayBtZXRob2Qgd2lsbCBkZXRlcm1pbmUgaWYgaGl0IG9yIG5vdCBcbi8vIGhvdyBjYW4gd2UgZGV0ZXJtaW5lIGlmIGl0IHdhcyBhIGhpdCBvciBub3Q/IFxuLy8gSSB0aGluayB3ZSBhbHNvIG5lZWR0byBwYXNzIHRoZSBlbmVteSdzIGdhbWVib2FyZCB0byBkZXRlcm1pbmUgaWYgaGl0IG9yIG5vdCBmdW5jdGlvbiwgXG4vLyB0YWtlcyB0aGUgY29vcmRzIGFuZCBlbmVteSdzIGdhbWVib2FyZC4gaWYgaXQgaGl0IHN0eWxlIHRoZSBjZWxsIG9uIHRoZSBlbmVteXMgYm9hcmQsIFxuLy8gbGV0IGVuZW15c0N1cnJlbnRCb2FyZCA9IGVuZW15c2JvYXJkLmdhbWVib2FyZC5oaXRTaGl0cygpIFxuXG4vLyBoaWdobGlnaHRpbmcgdGhlIHBsYXllcnMgZ2FtZWJvYXJkLCBxdWVyeSBzZWxlY3QgdGhlIGNvbXB1dGVycyBnYW1lYm9hcmQgY2VsbHMgT05MWSEgXG4vLyBtYWtlIHN1cmUgeW91IGFjY2VzcyB0aGUgY29tcHV0ZXJzIGdhbWVib2FyZCBjZWxsIHRoYXQgd2FzIGNsaWNrZWQgb24sIHlvdSBhcmUgYWNjZXNzaW5nIHRoZSBwbGF5ZXJzIGdhbWVib2FyZCBjZWxsLCBcbi8vIGNoYW5nZSB0aGUgZGF0YSByb3cgYW5kIGNvbHVtbiBhdHRyaWJ1dGUgZm9yIGNvbXB1dGVyIGdhbWVib2FyZCBmdW5jdGlvblxuLy8gSSB3YW50IHRvIGxvZyBiYWNrIHRoZSBjb21wdXRlcnMgRE9NIGNlbGwgdGhhdCB3YXMgY2xpY2tlZCB1c2luZyB0aGUgY29ycmVjdCBkYXRhIGF0dHJpYnV0ZXMgXG4vLyBzaG91bGQgSSBjaGFuZ2UgdGhlIHZhcmlhYmxlIHRoYXQgYXNzaWducyB0aGUgZGF0YS1zZXQsIGhvdyBjYW4gSSBwcm9wZXJseSBzZXQgYSBkYXRhLXNldCBmb3IgY29tcHMgRE9NIGNlbGxzIG9uIHRoZSBnYW1lYm9hcmQgXG4vLyBkYXRhIHNldCBmb3IgY29tcHMgYm9hcmQgbm93IHdvcmtpbmcgb2ssIFxuLy8gbm93IHVzZSBjb25kaXRpb25hbCB0byBkZXRlcm1pbmUgaWYgdGhlIGNsaWNrZWQgb24gY29vcmRpbmF0ZSBpcyBhIGhpdCwgbWVhbmluZyBpdCdzIGFscmVhZHkgaW4gdGhlIGhpdCBzaG90cyBhcnJheVxuXG4vLyBoaXQgc2hvdHMgYXJlIHdvcmtpbmcgb24gY29tcHMgYm9hcmQsIGJ1dCBJIHRoaW5rIEkgbmVlZCB0byBtYWtlIGEgbmV3IGZ1bmN0aW9uLCB3aGljaCBkb2VzIHRoZSBzYW1lIGxvZ2ljLCBidXQgZm9yIGNvbXB1dGVyIGF0dGFja1xuLy8gYmVjYXVzZSB3aXRoaW4gYXR0YWNrIEkgYW0gYWNjZXNzaW5nIHR3byBkaWZmZXJlbnQgYm9hcmRzIHVzaW5nIHF1ZXJ5IHNlbGVjdG9yLCBJIGZpbmQgdGhhdCBkaWZmaWN1bHQgdG8gZG8gaW4gb25lIGZ1bmN0aW9uLCBcblxuLy8gdG9uaWdodCwgY2hhbmdlIGF0dGFjayBjdXJyZW50bHkgdG8gcGxheWVyQXR0YWNrLCBhbmQgbWFrZSBhbm90aGVyIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrLCB3aGljaCB1c2VzIHRoZSBzYW1lIHByb2Nlc3MsIFxuXG4vLyBqdXN0IHBhc3NpbmcgaW4gYSBkaWZmZXJlbnQgYm9hcmQgYW5kIGNvb3JkaW5hdGVzLCBcblxuLy8gZm9yIHBsYXllciwgaXQgaGl0IGlzIGdvb2QsIGhpZ2hsaWdodCByZWQsIFxuLy8gZWxzZSBoaWdobGlnaHQgdGhlIGNlbGwgYmx1ZSBvciBncmVlbiwgbWFrZSBzdXJlIHRoZSBwbGF5ZXIga25vd3MgdGhhdCBpcyBpcyBhIG1pc3MsIHRoZW4gYXBwbHkgdGhlIHNhbWUgbG9naWMgZm9yIHRoZSBjb21wdXRlciwgXG5cbi8vIHRoZW4gdHVybiBzd2l0Y2hpbmcgbG9naWMvbG9vcCwgXG4vLyBtYWtpbmcgc3VyZSBjZWxscywgY2Fubm90IGdldCBoaXQgdHdpY2UsIFxuLy8gcmVtb3ZlIGhvdmVyIGNsYXNzIG9uIHBsYXllcnMgYm9hcmQgYWZ0ZXIgc3RhcnQgZ2FtZSBcblxuLy8gY29udGludWUgdG8gd29yayBvbiBtYWtpbmcgc3VyZSBpZiBhIG1pc3MgaGFwcGVucyBvbiBjb21wcyBib2FyZCwgaXQgd2lsbCB0dXJuIGJsdWUgZm9yIG1pc3MsIHJlZCBmb3IgaGl0LiBcbi8vIHRoZW4gd29yayBvbiBtYWtpbmcgc3VyZSB0aGUgdHVybnMgYXJlIHN3aXRjaGluZywgXG4vLyBtYWtlIHN1cmUgY2VsbHMgY2Fubm90IGdldCBoaXQgdHdpY2UgZm9yIHN1cmUsIFxuLy8gZmlyc3QgbGV0cyBtYWtlIHN1cmUgbWlzc2VzIG9uIHRoZSBjb21wcyBib2FyZCB0dXJuIGJsdWUgXG5cbi8vIHVzZSBhIGxvb3AgdG8gY2hlY2sgZm9yIGhpdCBzaG90cyBvciBtaXNzZWQgc2hvdHMsIHRyeSB0aGUgc2FtZSBwcm9jZXNzIGFzIGhpdHNcblxuLy8gT0sgbG9va3MgbGlrZSBJIGhhdmUgYSBzeXN0ZW0gZG93biBmb3IgaGl0IHNob3RzIGFuZCBtaXNzZWQgc2hvdHMgb24gcGxheWVycyBib2FyZCwgXG5cbi8vIG5vdyBJIHdpbGwgbmVlZCB0byBkbyB0aGUgc2FtZSBmb3IgdGhlIGNvbXB1dGVyLCByYW5kb20gYXR0YWNrcywgaWYgaGl0IHR1cm4gcmVkLCBpZiBtaXNzIHR1cm4gYmx1ZSwgXG5cbi8vIGlzIHRoaXMgdGhlIHRpbWUgdG8gZGV0ZXJtaW5lIHR1cm4gc3dpdGNoaW5nIGxvZ2ljPyBcblxuLy8gaGF2ZSB0aGUgYWJpbGl0eSB0byBzd2l0Y2ggdHVybnMgbm93LCBcbi8vIG9yIGp1c3QgbWFrZSB0aGUgbG9naWMgZm9yIHRoZSBjb21wdXRlciB0byBtYWtlIHRoZWlyIG1hcmsgYW5kIGFwcGx5IHN0eWxlcywgXG4vLyBJJ20gbGVhbmluZyB0byBqdXN0IG1ha2UgdGhlIGxvZ2ljIG5vdywgYW5kIGZsaXAgdGhlIHBsYXllciB0dXJuIHRvIDIsIHRvIHRlc3QgaWYgY29tcHV0ZXIgc3R5bGVzIHdvcmssIFxuLy8gc2hvdWxkIGp1c3Qga2VlcCByYW5kb21seSBnZW5lcmF0aW5nIGNvb3JkaW5hdGVzLCBcblxuLy8gbWFrZSBsb2dpYyBmb3IgY29tcHMgc2VsZWN0aW9uLCBzdHlsaW5nIFxuLy8gaGl0IGNvb3JkaW5hdGVzIGRvIG5vdCBnZXQgY291bnRlZCBhZ2FpbiwgY2Fubm90IGhpdCBzYW1lIGNlbGwgdHdpY2UsIGJ1dCBtaXNzZWQgQ29vcmRpbmF0ZXMgY2FuIGJlIHNhdmVkIHR3aWNlLCBjYW4gaGl0IHRoZSBzYW1lIG1pc3NlZCBjZWxsIHR3aWNlLCBcblxuLy8gd2UgbmVlZCB0byBmaWd1cmUgb3V0IHR1cm4gc3dpdGNoaW5nIGxvZ2ljLCBwbGF5ZXIgbWFrZXMgbWFyaywgZGV0ZXJtaW5lIGlmIGhpdCBvciBtaXNzLCBjaGVjayBmb3Igd2lubmVyLCBzd2l0Y2ggcGxheWVycywgXG4vLyBjb21wIG1ha2VzIG1hcmssIGRldGVybWluZSBpZiBoaXQgb3IgbWlzcywgY2hlY2sgd2lubmVyLCBzd2l0Y2ggcGxheWVycywgXG4vLyB3aGVyZSBlbHNlIGNvdWxkIEkgc3dpdGNoIHBsYXllcnMgaWYgSSB3YW50ZWQgdG8gbWFrZSB0aGlzIHdvcmssIFxuLy8gcGxheWVyIHdpbGwgZ28gZmlyc3QgYnV0IG9uY2UgaGUgbWFrZXMgaGlzIG1hcmssIGNvbXAgc2hvdWxkIGJlIGFibGUgdG8gbWFrZSBoaXMgbWFyaywgXG5cbi8vIHR1cm4gc3dpdGNoaW5nIGxvZ2ljLCBcbi8vIHNlZW1zIGxpa2Ugd2hlbiB5b3Ugc2luayBhIHNoaXAgaXQgaXMgc2lua2luZyB0aGUgc2FtZSBzaGlwIG9iamVjdCB0d2ljZSwgXG4vLyBzbyB3aGVuIGFsbCBzaGlwcyBhcmUgc3VuayAxMCBzaGlwcyBhcmUgaW5zaWRlIHRoZSBzdW5rZW5TaGlwc0FycmF5IFxuLy8gZG91YmxlIGNoZWNrLCBhbmQgbWF5YmUgdXNlL3BsYWNlIGRpZmZlcmVudCBzaGlwIG9iamVjdHMgb24gY29tcHV0ZXJzIGJvYXJkLCBcbi8vIHdoZW4gc2hpcHMgYXJlIHBsYWNlZCwgdGhleSBjb3VsZCBiZSBwbGFjaW5nIHR3aWNlLCBvciBvdmVybGFwcGluZyBvdmVyIHRvcCBvZiBlYWNob3RoZXIsIHRoYXQgaXMgd2h5IHNvbWUgc2hpcHMgYXJlIGJlaW5nIHN1bmsgdHdpY2UsIFxuLy8gdGhlIHRhcmdldCB3aWwgYmUgdG8gbG9vayBvdmVyIHRoZSBwbGFjZUNvbXB1dGVyU2hpcHMgZnVuY3Rpb24gaW4gdGhlIGRvbUxvZ2ljIFxuXG4vLyBzb21lIHNoaXBzIGFyZSBiZWluZyBzdW5rIHR3aWNlPyBzbyB0aGF0IG1lYW5zIHBsYXllciBjYW4gd2luIGVhcmx5IGlmIHRoZSBzdW5rZW5TaGlwcyBhcnJheSBpcyA1LCBldmVuIHRob3VnaCBvbmx5IDMgc2hpcHMgaGF2ZSBiZWVuIHN1bmsuIFxuLy8gY2FycmllciBiZWluZyBzdW5rIHR3aWNlPz8/IFxuXG5cblxuLy8gOS8xMyBjdXJyZW50IHBsYW4sIFxuLy8gY2xlYW4gdXAgdGhlIGNvbW1lbnRzIGluIHRoZSBjb2RlLCBmb3IgZG9tTG9naWMgYW5kIGdhbWUgbW9kdWxlIFxuLy8gdGhlbiBmaWd1cmUgb3V0IGEgYmV0dGVyIG1ldGhvZCBmb3IgY2hlY2tpbmcgaWYgYWxsIHNoaXBzIGFyZSBzdW5rLCB0aGlzIGlzIGEgbXVzdCwgXG4vLyB0aGVuIGRldGVybWluZSB3aHkgc29tZSBzaGlwIG9iamVjdHMgYXJlIGJlaW5nIHN1bmsgdHdpY2UsIFxuLy8gSSBjYW4gZmlyc3QgdGVzdCB3aXRoIHRoZSBuZXN0ZWQgbG9vcCBhbmQgc2VlIGlmIHRoYXQgbWFrZXMgYSBkaWZmZXJlbmNlLCBpdCB0aGF0IGZhaWxzLCB0aGVuIEkgbmVlZCB0byB0aGluayBvZiBhIGJldHRlciBzeXN0ZW0gXG4vLyBwbGFjZSBpdCB2ZXJ0aWNhbGx5IGFuZCBpdCB3aWxsIGJlIDQsIGhvcml6b250YWxseSB3aWxsIGJlIG9uZSwgc28gc2VlbXMgbGlrZSBpdCBpcyBub3QgYWNjb3VudGluZyBmb3IgaXRzIGZ1bGwgbGVuZ3RoIFxuXG4vLyB0cnlpbmcgdG8gZmlndXJlIG91dCBhIHN5c3RlbSB0byBjaGVjayBpZiBhbGwgcGxheWVyIHNoaXBzIGFyZSBzdW5rLCBiZWZvcmUgSSB3YXMgbWFraW5nIGEgbG9vcCB0aGVuIGRldGVybWluaW5nIGlmIHRoYXQgY2VsbCBpbmNsdWRlZCBhIHNoaXAgb2JqZWN0LCBpZiBpdCBkaWQgXG5cbi8vIEkgV291bGQga2VlcCBhIGNvdW50ZXIsIGFuZCBpZiBhbGwgc2hpcHMgcGxhY2VkIGFuZCBlcXVhbGVkIDE4ICh0aGUgbGVuZ3RoIG9mIGFsbCBzaGlwcyB3aGVuIHBsYWNlZCkgdGhlIGdhbWUgY291bGQgc3RhcnQsIHRoYXQgb25seSB3b3JrcyBmb3Igb25lIGRpcmVjdGlvbiwgXG4vLyBcblxuLy8gc28gbm93IHRoZSBwcm9ibGVtIGlzIHdoeSBhcmUgY2VydGFpbiBzaGlwcyBiZWluZyBzdW5rIHR3aWNlPyBcbi8vIHRoYXQgaW50ZXJmZXJzIHdpdGggdGhlIGRldGVybWluZyBpZiBhbGwgc2hpcHMgYXJlIHN1bmsgZnVuY3Rpb24sIFxuLy8gSSB3b3VsZCBnbyBiYWNrIGFuZCBkZXRlcm1pbmUgaG93IHNoaXBzIGFyZSBiZWluZyBwbGFjZWQsIFxuLy8gYnV0IHlldCB0aGUgcGxhY2VtZW50IG9mIHRoZSBzaGlwcyBhcmUgZmluZSwgXG4vLyBpdCBkb2VzIG5vdCBzZWVtIGxpa2Ugc2hpcHMgYXJlIG92ZXJsYXBwaW5nIFxuLy8gRm9sbG93IHRoZSBjb2RlIGV4ZWN1dGlvbiwgdGhlIHN1bmtlbiBzaGlwcyBhcnJheSBhbmQgd2hlbiB0aGluZ3MgYXJlIGJlaW5nIHB1c2hlZCB0byBpdC4gXG5cbi8vIGdldHRpbmcgc29tZSBvZGQgYmVoYXZpb3IsIFxuLy8gc29tZSBzaGlwcyBhcmUgYmVpbmcgcGxhY2VkIGZpbmUsIG90aGVycyBJdCBzZWVtcyBsaWtlIGFyZSBnZXR0aW5nIHBsYWNlZCB0b28gZWFybHksXG4vLyBzbyBzaGlwcyBnZXQgYWRkZWQgdG8gdGhlIHN1bmtlblNoaXBzIGFycmF5IG1vcmUgdGhhbiBvbmNlLCBcbi8vIGhvd2V2ZXIgZm9sbG93aW5nIHRoZSBjb2RlIGV4ZWN1dGlvbiBhbmQgbG9va2luZyBvdmVyIHRoZSBmdW5jdGlvc24gSSBoYXZlIGNyZWF0ZWQsIEkgYW0gbm90IHN1cmUgd2h5IHRoaXMgd291bGQgYmUgb2NjdXJpbmdcbi8vIEkgdGhpbmsgSSBmb3VuZCB0aGUgaXNzdWUsIEkgdGhpbmsgb25jZSBhIHNoaXAgaXMgc3VuaywgdGhlIGlzU1VuayBzdGF0dXMgdHVybnMgdG8gdHJ1ZSwgYW5kIGl0IGFsc28gc2lua3MgdGhlIGNvcnJlc3BvbmRpbmcgcGxheWVyIHNoaXAsIFxuLy8gY29tcGFyZSBib2FyZHMgdG8gc2VlIGlmIHlvdSBzaW5rIG9uZSBzaGlwLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgc2luayB0aGUgcGxheWVycyBzaGlwcywgXG4vLyB0aGF0IGlzbnQgdGhlIGlzc3VlLCBwYXRyb2wgYm9hdCBvbiBjb21wcyBib2FyZCB3YXMgc3VuayBidXQgeWV0IHlvdSBjaGVjayBwbGF5ZXJzIGJvYXJkLCB0aGUgc3Vua2VuIHNoaXAgYXJyYXkgd2FzIHN0aWxsIGVtcHR5LiBcblxuLy8gZmlndXJlZCBvdXQgdGhlIHByb2JsZW0gdGhlcmUsIEkgYW0gbm8gbG9uZ2VyIHNlZWluZyBzaGlwcyBiZWluZyBhZGRlZCBtb3JlIHRoYW4gb25jZSB0byB0aGUgc3Vua2VuIHNoaXBzIGFycmF5LCBcbi8vIG5vdyBJIG5lZWQgdG8gZmlndXJlIG91dCwgaG93IHRvIHByZXZlbnQgcGxheWVyIGZyb20gaGl0dGluZyB0aGUgc2FtZSBtaXNzZWQgY29vcmRpbmF0ZSBjZWxsIHR3aWNlLiBcblxuXG5cbi8vIDkvMTQgY3VycmVudCBwbGFuLCBcblxuLy8gZ2V0IGZhbWlsYXIgd2l0aCB0aGUgZ2FtZSBhZ2FpbiwgXG4vLyBtYWtlIHN1cmUgYSB3aW5uZXIgbW9kYWwgaXMgcHJpbnRlZCB3aXRoIGFuIG9wdGlvbiB0byByZXN0YXJ0IHRoZSBnYW1lLCBcbi8vIG1ha2Ugc3VyZSB0aGF0IGVhY2ggdGltZSBwbGF5R2FtZSBpcyBjYWxsZWQgd2l0aCB0aGUgcGFzc2VkIGNvb3JkaW5hdGVzLCB0aGF0IHBsYXllciBtdXN0IG1ha2UgYSB1bmlxdWUgaGl0IGVhY2ggdGltZSwgXG4vLyByaWdodCBub3cgZnJvbSB3aGF0IEkgcmVtZW1iZXIsIHlvdSBjYW4gaGl0IHRoZSBzYW1lIGNlbGwgdHdpY2UsIGFuZCBpdCB3aWxsIHN3aXRjaCB0dXJucywgXG4vLyBpdCBzd2l0Y2hlcyB0dXJucyBhZnRlciB5b3UgY2xpY2sgYSBidXR0b24sIHN3aXRjaCB0dXJucyBvbmx5IHdoZW4gdGhlIHBsYXllciBoYXMgaGl0IGEgdW5xaXVlIHNxdWFyZSwgXG4vLyBJIHdvdWxkIGZpcnN0IHRyeSB0byB3b3JrIG9uIHRoYXQsIHNvIHRoZSBnb2FsIGlzIHRvIG1ha2Ugc3VyZSB0aGUgdHVybnMgb25seSBzd2l0Y2ggd2hlbiB0aGUgcGxheWVyIGhhcyBoaXQgYSB1bmlxdWUgc3F1YXJlLCBcblxuLy8gT0sgSSB3b3VsZCBhc2sgbGF0ZXIgYWJvdXQgbm90IGFsbG93aW5nIHRoZSBwbGF5ZXIgdG8gaGl0IHRoZSBzYW1lIGNlbGwgdHdpY2UsIFxuLy8gaWYgeW91IGhpdCB0aGUgc2FtZSBjZWxsIHR3aWNlLCBpdCB3b250IGFkZCBvbnRvIHRoZSBtaXNzZWQgb3IgaGl0cyBcbi8vIGJ1dCBpdCB3aWxsIGFsbG93IHRoZSB0dXJuIHN3aXRjaGluZyAgdG8gaGFwcGVuLCBcblxuLy8gbW92ZSBvbiwgY29tZSBiYWNrIHRvIGl0LCBhbmQgc2VlIGlmIHlvdSBjYW4gdHJhY2UgdGhlIGV4ZWN1dGlvbiBvZiBpdCBcbi8vIGlmIG5vdCBhc2sgZm9yIHRoZSBoZWxwLCBcbi8vIGxldHMgbWFrZSB0aGUgd2lubmVyIG1vZGFsIGZpcnN0IGFuZCBwcmludCB0aGUgd2lubmVyLCBhbmQgaGF2ZSBhbiBvcHRvbiB0byBzdGFydCB0aGUgZ2FtZSBhZ2FpbiBmcm9tIHRoZSBiZWdpbm5naW5nIFxuXG4vLyB0aGVzZSBhcmUgdGhlIHR3byBpc3N1ZXMgdGhhdCByZW1haW4sIFxuXG5cblxuXG4vLyA5LzE2IGN1cnJlbnQgcGxhbiwgXG4vLyByaWdodCBub3cgdXNlciBjYW4gZG91YmxlIGNsaWNrIGEgc3F1YXJlLCBhbmQgdGhhdCB3aWxsIGNvdW50IGFzIHRoZXJlIG1vdmUsIFxuLy8gZXZlbiB0aG8gdGhlIHVzZXIgYWxyZWFkeSBoaXQgb3IgaGFkIGEgbWlzcyBpbiB0aGF0IGNlbGwgYWxyZWFkeSwgXG4vLyBJIHdhbnQgdXNlciB0byBoaXQgdGhlIGJvYXJkIGluIHVuaXF1ZSBzcG90cyBvbmx5LFxuLy8gbXkgZ29hbCBmb3IgZ29pbmcgYWJvdXQgdGhpcywgd2FzIHRvIGNoZWNrIGlmIHRoZSBhdHRhY2sgY29vcmRpbmluYXRlcyB3ZXJlIGFscmVhZHkgXG4vLyBpbiB0aGUgaGl0IHNob3RzIGFuZCBtaXNzZWQgc2hvdHMgYXJyYXksIFxuXG4vLyBVc2VyIGNhbiBvbmx5IG1ha2UgdW5xaXVlIGhpdHMsIFxuLy8gb3VyIGZvY3VzIG5lZWRzIHRvIGdvIHRvIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb24sIFxuLy8gYmVmb3JlIHRoZSB1c2VyIG1ha2VzIHRoZWlyIGF0dGFjayBcblxuXG5cblxuLy8gSGVsbG8gZXZlcnlvbmUsIHRyeWluZyB0byBmaWd1cmUgb3V0IG9uZSBwcm9ibGVtIGhlcmUgb24gYmF0dGxlc2hpcCwgdGhlbiB0aGUgZ2FtZSBpcyBjb21wbGV0ZS4gSSBkbyBuZWVkIHNvbWUgaGVscCB3aXRoIHRoaXMsIFxuXG4vLyBXaGF0IEkgd2FudDogSSB3YW50IHRoZSB1c2VyIHRvIGhpdCBvbmx5IG9wZW4gc3BhY2VzIG9uIHRoZSBib2FyZCwgdXNlciBjYW5ub3QgbWFrZSB0aGVpciBtYXJrIG9uIHRoZSBzYW1lIGNlbGwgdHdpY2UuIFxuXG4vLyBUaGUgcHJvYmxlbTogVHVybnMgc3dpdGNoIHdoZW4gdXNlciBtYWtlcyBhIGhpdCBvbiBlbmVteSdzIGdhbWVib2FyZCwgY3VycmVudGx5IHRoZXkgY2FuIGhpdCB0aGUgc2FtZSBjZWxsIHR3aWNlLCBob3dldmVyIHRob3NlIGhpdHMgb3IgbWlzc2VkIHNob3RzIGRvIG5vdCBnZXQgc3RvcmVkIGFnYWluICh3aGljaCBpcyBnb29kKSwsIGp1c3QgdGhhdCB0aGUgdHVybnMgd2lsbCBzd2l0Y2ggZXZlbiB0aG91Z2ggdGhlIHBsYXllciBhbHJlYWR5IGhpdCB0aGF0IGNlbGwuIEl0IHNob3VsZCBzd2l0Y2ggdHVybnMgd2hlbiBwbGF5ZXIgaGFzIG1hZGUgYSBoaXQgb24gYW4gb3Blbi91bm9jY3VwaWVkIGNlbGwgaW4gdGhlIGJvYXJkLiBJIGFtIHJlYWxseSBzdHVjayBvbiB3aGVyZSB0aGUgbG9naWMgc2hvdWxkIGdvIHRvIHByZXZlbnQgdGhpcy4gXG5cbi8vIFdoYXQgSSd2ZSB0cmllZDogQ2hlY2tpbmcgaWYgcGxheWVyIGhpdCBpcyBpbnNpZGUgdGhlIG1pc3NlZCBzaG90IG9yIGhpdCBzaG90IGFycmF5IGFscmVhZHkuIFRoZSBmdW5jdGlvbiB3b3VsZCBub3Qgd29yayBhcyBpbmRldGVuZGVkIGFuZCB3b3VsZCBhbHdheXMgcmV0dXJuIGZhbHNlLiBJIHRyaWVkIHVzaW5nIHRoYXQgc2FtZSBsb2dpYyB0aHJvdWdob3V0IGRpZmZlcmVudCBwb2ludHMgaW4gdGhlIGNvZGUgZXhlY3V0aW9uIGJ1dCBub3RoaW5nIHNlZW1zIGJlIGdvaW5nIHRocm91Z2ggYW5kIHRoZSBjb25kaXRpb25hbHMgYXJlIG5vdCB3b3JraW5nLiBcblxuLy8gSSBhbSBhdHRhY2tpbmcgbXkgY29kZXBlbiB3aGljaCB0cmFjZXMgdGhlIGNvZGUgZXhlY3V0aW9uLiBQbGF5ZXIgbWFrZXMgbWFyayBvbiBjb21wcyBnYW1lYm9hcmQsIHRob3NlIGNvb3JkaW5hdGVzIGFyZSBwYXNzZWQgdG8gcGxheUdhbWUsIHRoZSBhdHRhY2sgbWV0aG9kIGlzIGNhbGxlZCB3aGljaCB1c2VzIHJlY2VpdmVBdHRhY2sgaW5zaWRlIGl0IHRvIHN0b3JlIGhpdCBzaG90cyBhbmQgbWlzc2VkIHNob3RzLiBJJ3ZlIGF0dGFjaGVkIHNvbWUgY29tbWVudHMgdG8gZXhwbGFpbiB0aGUgcHJvY2Vzcy4gXG5cbi8vIFdvdWxkIGFwcHJlY2lhdGUgYW55IGhlbHAgd2l0aCB0aGlzLiBUaGlzIGlzIHRoZSBmaW5hbCBzdGVwIGFuZCBmaW5hbCBidWcgSSBtdXN0IGdldCBwYXN0LiBcblxuXG4vLyA5LzE3IFxuXG4vLyB0cnkgdG8gZmlndXJlIG91dCB3aHkgY29uZGl0aW9uYWwgaXMgbm90IHdvcmtpbmcgXG5cbi8vIGlmIHRoZSBjb29yZGluYXRlcyB0aGF0IHRoZSBwbGF5ZXIgY2xpY2tlZCBvbiBpcyBOT1QgaW5zaWRlIHRoZSBoaXQgc2hvdCBvciBtaXNzZWQgc2hvdCBhcnJheSBcbi8vIHRoZW4gZ28gYWhlYWQgYW5kIGxldCBwbGF5ZXIgbWFrZSB0aGVpciBhdHRhY2suIFxuLy8gdGhlIHByb2JsZW0gaXMgdGhhdCBwbGF5ZXIgY2FuIHN0aWxsIG1ha2UgdGhlaXIgbWFyayB0d2ljZSBvbiB0aGUgc2FtZSBjZWxsLCBpbnN0ZWFkIG9mIGhpdHRpbmcgdW5pcXVlIGNlbGxzIGVhY2ggdGltZSwgXG4vLyB0dXJucyBzaG91bGQgb25seSBzd2l0Y2ggd2hlbiBhIHBsYXllciBoYXMgYSBoaXQgYSB1bmlxdWUgY2VsbC4gIFxuXG4vLyByZW1vdmluZyB0aGUgaG92ZXIgY2xhc3MuIFxuLy8gd2hlbiBwbGF5R2FtZSBpcyBjYWxsZWQsIGFjY2VzcyB0aGUgZ2FtZWJvYXJkQ2VsbCB2aWEgYW4gSUQsIFxuLy8gdGhlbiB0cnkgdG8gcmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lciB3aGVuIHBsYXlHYW1lIGlzIGNhbGxlZCwgXG4vLyB0aGF0IG1lYW5zIGFsbCB0aGUgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZCBhbmQgZ2FtZSBpcyByZWFkeSB0byBzdGFydCwgXG5cblxuXG5cblxuXG4vLyBub3cgcmFuZG9tbHkgcGxhY2UgY29tcHV0ZXJzIHNoaXBzLCBcblxuLy8gZmlyc3Qgc3RhcnQgd2l0aCBjcmVhdGluZyB0aGUgY29tcHV0ZXIgaW5zdGFuY2UvZ2FtZWJhb3JkIFxuXG4vLyBob3cgd2lsbCB3ZSByYW5kb21seSBwbGFjZSBzaGlwcywgaG93IGNhbiB3ZSByYW5kb21seSBjaGFuZ2Ugc2hpcCBkaXJlY3Rpb24sIFxuXG4vLyBjdXJyZW50bHkgZm9yIHBsYXllciBJIHNldCBhIGRlZmF1bHQgdmFsdWUgZm9yIHNoaXAgZGlyZWN0aW9uLCBidXQgdGhhdCBjYW4gYmUgY2hhbmdlZCBmcm9tIGEgYnV0dG9uIGNsaWNrLCBcblxuLy8gY2FuIHdlIHJhbmRvbWx5IHBsYWNlIHNoaXBzIGZpcnN0PyBcblxuLy8gdGhlIHJhbmRvbSBjb29yZGluYXRlcyBwYXNzZWQgaW4gd2lsbCBldmVudHVhbGx5IHRocm93IGFuIGVycm9yIGZyb20gZ29pbmcgb3V0IG9mIGJvdW5kcywgXG4vLyBob3dldmVyIEkgZG8gaGF2ZSBhIG1ldGhvZCB3aGljaCBjaGVja3MgZm9yIGxlZ2FsIHBsYWNlbWVudCBiZWZvcmUgc2hpcCBpcyBwbGFjZWQsIFxuLy8gaG93IGNhbiBJIGdldCBhcm91bmQgdGhpcywgc2hpcHMgd2lsbCBuZWVkIHRvIGJlIHJhbmRvbWx5IHBsYWNlZCwgXG4vLyBhbmQgSSBuZWVkIHRvIHBhc3MgaW4gcmFuZG9tIGNvb3JkaW5hdGVzLCBcblxuLy8gc2F2ZSB0aGUgd29yaywgSSB3aWxsIG5lZWQgdG8gcmVmYWN0b3IgY2hlY2tGb3JTaGlwLCBpdCBzaG91bGQgYmUgcmV0dXJuaW5nIGEgdmFsdWUgaW5zdGVhZCBvZiBmYWxzZSwgcmlnaHQgbm93IGl0cyBqdXN0IHRocm93aW5nIGFuIGVycm9yIFxuLy8gZ2V0IHRoZSByZXR1cm4gdmFsdWUsIGlmIHRoZSByZXR1cm4gdmFsdWUgaXMgdHJ1ZSwgcGxhY2UgdGhlIHNoaXAsIGVsc2UgdHJ5IGFnYWluIHdpdGggYW5vdGhlciBwYWlyIG9mIHJhbmRvbSBjb29yZGluYXRlcywgXG4vLyBrZWVwIHRyYWNrIG9mIHJlcGVhdGVkIGZhaWxlZCBzaG90cywgc28gdGhlIGNvb3JkaW5hdGVzIGRvIG5vdCByZXBlYXQgdGhlbXNlbHZlcyBcblxuLy8gSSBXaWxsIGhhdmUgdG8gZ28gYmFjayB0byB0aGUgaGVscCBjaGFubmVscyB0b25pZ2h0LCB0aGlzIGlzIG5vdCByZWFsbHkgbWFraW5nIHNlbnNlLCBcbi8vIEkgZmVlbCBsaWtlIEkgYW0gZG9pbmcgdGhlIHNhbWUgdGhpbmcsIGFscmVhZHkgY2hlY2tpbmcgd2hhdCB0aGUgZnVuY3Rpb24gY2FsbCByZXR1cm5zLCBcblxuLy8gSSBhbSB0cnlpbmcgdG8gcmFuZG9tbHkgcGxhY2UgY29tcHV0ZXIgc2hpcHMgb24gaXRzIGJvYXJkLCB0aGUgcHJvYmxlbSBpcyBldmVudHVhbGx5IHRoZSBzaGlwIHdpbGwgY29sbGlkZSB3aXRoIGFub3RoZXIgc2hpcCwgb3IgZ28gb3V0IG9mIGJvdW5kcywgSSBhbSB1c2luZyByYW5kb20gY29vcmRpbmF0ZXMgXG5cbi8vIEkgYW0gYWxyZWFkeSBjaGVja2luZyBpZiB0aGUgbW92ZSBpcyBsZWdhbCwgcGxhY2VTaGlwIGNhbGxzIGEgY2hlY2tGb3JTaGlwIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBpZiBtb3ZlIGlzIGxlZ2FsLCBcblxuLy8gd2VsbCBJIHRyaWVkIHJldHVybmluZyBmYWxzZSBpZiB0aGUgY2hlY2tGb3JTaGlwIHJldHVybnMgZmFsc2UsIGluc3RlYWQgb2YgdGhyb3dpbmcgYW4gZXJyb3IsIGJ1dCB0aGVyZSBpcyBzdGlsbCBubyB3YXkgdG8gc3RvcCBpdCBmcm9tIHBsYWNpbmcsIFxuXG4vLyBJIHRyaWVkIHJldHVybmluZyBmYWxzZSBpZiBpbGxlZ2FsLCBidXQgdGhlcmUgaXMgc3RpbGwgbm8gd2F5IHRvIHByZXZlbnQgdGhlIHNoaXAgZnJvbSBzdGlsbCBiZWluZyBwbGFjZWQuIFxuXG4vLyBpcyB0aGVyZSBhIHdheSBJIGNhbiBmaXggdGhpcz8gSVMgdGhlcmUgc29tZSBvdGhlciB0eXBlIG9mIGNoZWNrIG9yIGNvbmRpdGlvbmFsIEkgY2FuIHVzZSB0byBwcmV2ZW50IHNoaXAgZnJvbSBiZWluZyBwbGFjZWQgaWxsZWdhbGx5PyBcblxuXG5cbi8vIExvZ2dpbmcgdGhlIGVycm9yIGlzIGp1c3QgZm9yIHlvdXJzZWxmIHRvIHNlZVxuLy8gVGhlIGltcG9ydGFudCBwYXJ0IGlzIHJldHVybmluZyBmYWxzZSBpZiB0aGUgcGxhY2luZyBmYWlsZWQgYW5kIHRydWUgaWYgdGhlIHBsYWNpbmcgc3VjY2VlZGVkXG4vLyBBbmQgdGhlbiB5b3UgY2FuIHVzZSB0aGF0IHJldHVybiB2YWx1ZVxuLy8gY29uc3QgaXNQbGFjaW5nU3VjY2VlZGVkID0gZ2FtZWJvYXJkLnBsYWNlc2hpcCgpXG4vLyBBbmQgdGhlbiBpZihpc1BsYWNpbmdTdWNjZWVkZWQpIHRyeSBuZXh0IHNoaXBcbi8vIEVsc2UgdHJ5IHRvIHBsYWNlIHRoZSBzYW1lIHNoaXAgYWdhaW4gd2l0aCBkaWZmZXJlbnQgY29vcmRpbmF0ZXNcbi8vIEFuZCB0aGVuLCB5b3UgaGF2ZSBhbm90aGVyIGlzc3VlIHRvIGRlYWwgd2l0aCwgYmVjYXVzZSB3aXRoIHRoaXMgbG9naWMgaXQgY2FuIGdldCBpbnRvIGEgbG9vcFxuLy8gQW5kIHBvdGVudGlhbGx5IHJlcGVhdCBmYWlsZWQgY29vcmRpbmF0ZXMgb3ZlciBhbmQgb3ZlciwgaG93IGNhbiB5b3Ugc29sdmUgdGhpcz9cblxuLy8gYWxsb3cgdGhlIGNvbXB1dGVyIHRvIGdlbmVyYXRlIHJhbmRvbSBjb29yZGluYXRlcyBhbmQgbWFrZSBzdXJlIGVhY2ggY29vcmRpbmF0ZSBpcyBsZWdhbCwgXG4vLyBcblxuXG5cblxuLy8gY29uc3QgbW9ja09iamVjdCA9IHtcbi8vICAgICBuYW1lOiBcImpvZVwiLFxuLy8gICAgIGFnZTogMjUsXG4vLyAgICAgaW5jcmVtZW50QWdlOiBmdW5jdGlvbigpIHtcbi8vICAgICAgIHRoaXMuYWdlKys7XG4vLyAgICAgfVxuLy8gICB9IFxuXG5cblxuLy8gICBmdW5jdGlvbiBhZ2VJbmNyZW1lbnRvcihleGFtcGxlT2JqKSB7IFxuLy8gICAgIGV4YW1wbGVPYmouaW5jcmVtZW50QWdlKCk7XG4vLyAgICAgY29uc29sZS5sb2coZXhhbXBsZU9iai5hZ2UpO1xuLy8gICB9IFxuXG5cbi8vIGxldCBleGFtcGxlT2JqID0gbW9ja09iamVjdDtcblxuLy8gY29uc29sZS5sb2coYWdlSW5jcmVtZW50b3IoZXhhbXBsZU9iaikpO1xuXG5cblxuLy8gICBjb25zb2xlLmxvZyhhZ2VJbmNyZW1lbnRvcigpKTtcbi8vICAgY29uc29sZS5sb2coYWdlSW5jcmVtZW50b3IoKSk7XG4vLyAgIGNvbnNvbGUubG9nKGFnZUluY3JlbWVudG9yKG1vY2tPYmplY3QpKTtcblxuXG5cbiAgLy8gY2FsbCBpdCBvdXRzaWRlIHRoZSBvYmogYW5kIGxvZyBpdCBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBzaW5raW5nIGEgc2hpcCBpZiBoaXRzIGFyZSBpbiB0aGUgc2FtZSBsb2NhdGlvbiwgNCBoaXRzIGluIHRoZSBzYW1lIGNvb3JkaW5hdGUgd2lsbCBzaW5rIHNoaXAsIFxuLy8gY29uc2lkZXIgdGhlIGhpdEluY3JlbWVudG9yIGZ1bmN0aW9uLCByZWNlaXZlQXR0YWNrIGZ1bmN0aW9uLCByZWNlaXZlQXR0YWNrIHNob3VsZCBoYXZlIHR5cGUgb2YgY29uZGl0aW9uYWwgaW5zaWRlIGl0LCBcbi8vIHRoYXQgY29uZGl0aW9uYWwgd2lsbCBjaGVjayBpZiB0aGF0IHNxdWFyZSBoYXMgYWxyZWFkeSBiZWVuIGhpdCwgYW5kIHByZXZlbnQgYSB1c2VyIGZyb20gcGxhY2luZyBhIGhpdCBpbiB0aGF0IHNxdWFyZSwgXG5cbi8vIGNoZWNrIGZvciBoaXRzIGZ1bmN0aW9uLCB0aGF0IGRldGVybWluZXMgaWYgdGhlIG1vdmUgaXMgbGVnYWwuIFxuLy8gd2UgY291bGQgY2hlY2sgaXQgaW4gdGhlIHNhbWUgY29uZGl0aW9uYWwsIGlmIHRoZSBjb29yZGlhbnRlcyBhcmUgYW4gb2JqICYmIHRoZSB2YWx1ZSBvZiBjaGVjayBmb3IgaGl0cyBpcyBmYWxzZSwgdGhlbiB0aGUgaGl0SW5jcmVtZW50b3IgY2FuIGJlIGNhbGxlZCwgXG4vLyBcblxuXG4vLyAxLiB3aGVuIEkgY29uc29sZS5sb2cgdGhlIHN1bmtlblNoaXBzQXJyYXkgcmlnaHQgYWZ0ZXIgSSBpbml0YWxpemUgaXQsIGl0IGhhcyBhbGwgdGhlIHN1bmtlbiBzaGlwcyBpbiBpdCBhbHJlYWR5IFxuLy8gMi4gYWxsIHRoZSBzaGlwIG9iamVjdHMgZXZlbiBhZnRlciBwbGFjaW5nLCBhbmQgc2lua2luZyBlYWNoIHNoaXAsIHN0aWxsIHJldHVybiBpdCdzIGlzU3VuayB2YWx1ZSBhcyBmYWxzZSwgKGl0IGhhcyBub3QgYmVlbiBzdW5rKVxuIC8vIGhvd2V2ZXIgd2hlbiBJIGNoZWNrIHNjb3BlLCBhbmQgY2xvc3VyZSB3aXRoaW4gZGV2IHRvb2xzLCBlYWNoIHNoaXAncyBpc1N1bmsgdmFyaWFibGUgaXMgdHJ1ZSFcbi8vIHR3byBpc3NlcyBcbi8vIHdoeSBpcyB0aGUgc3Vua2VuU2hpcHNBcnJheSBhZnRlciBpbml0IGFscmVhZHkgaGF2ZSB0aGUgc3Vua2VuIHNoaXBzIGluIGl0LCBzaG91bGQgYmUgZW1wdHksIGl0cyBcbi8vIGl0cyBzdGlsbCBzYXlpbmcgZmFsc2UsIGFsbCB0aGUgc2hpcHMgYXJlIG5vdCBzdW5rIGJ1dCB5ZXQgdGhlIGFycmF5IGNvbnRhaW5zIGFsbCBzdW5rZW4gc2hpcHMsIFxuLy8gd2h5IGlzIHRoZSBpc1N1bmsgdmFyaWFibGUgb2YgdGhlIHNoaXBzIG5vdCBjaGFuZ2luZz8gSXQgc3RpbGwgc2hvd3MgZmFsc2UgYnV0IHlldCB0aGUgc2hpcHMgXG4vLyBhcmUgc3VuayBhbmQgaGF2ZSBiZWVuIGFkZGVkIHRvIHRoZSBhcnJheSwgXG4vLyB3aGVuIEkgY2hlY2sgdGhlIHNjb3BlIGFuZCBjbG9zdXJlIGluIGRldiB0b29scywgdGhlIGlzU3VuayB2YXJpYWJsZSBJUyBjaGFuZ2luZyBcblxuLy8geWVzdGVyZGF5cyBwcm9ibGVtIHdhcyBJIHdhcyBwdXNoaW5nIHRoZSBzaGlwIG9iamVjdHMgdHdpY2UgaW50byB0aGUgYXJyYXkgc28gdGhlcmUgMTAgaXRlbXMgaW5zdGVhZCBvZiA1IFxuLy8gaXQgZG9lcyByZXR1cm4gdHJ1ZSwgYXQgdGhlIGVuZCBidXQgeWV0IHNoaXAgb2JqZWN0cyBhcmUgd2l0aGluIGFycmF5IGJlZm9yZSBJIHNpbmsgdGhlbSBcbi8vIGFuZCB0aGUgaXNTdW5rIHByb3BlcnR5IG5ldmVyIGNoYW5nZXMgYnV0IHlldCBpbiBkZXYgdG9vbHMgY2xvc3VyZXMgYW5kIHNjb3BlIG9iamVjdHMgaGFzIHRoZW0gc2V0IHRvIHRydWVcbi8vIFxuXG4vLyBmdW5jdGlvbiBzaGlwKGxlbmd0aCwgaGl0cywgc3Vuaykge1xuLy8gICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuLy8gICAgIHRoaXMuaGl0cyA9IGhpdHM7XG4vLyAgICAgdGhpcy5zdW5rID0gc3VuaztcblxuLy8gICAgIHRoaXMuaGl0cyA9IGZ1bmN0aW9uIGhpdHMgKCkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnaGl0IGZ1bmN0aW9uJyk7XG4vLyAgICAgfVxuXG4vLyAgICAgdGhpcy5zdW5rT3JOb3QgPSBmdW5jdGlvbiBzdW5rT3JOb3QgKCkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnc3VuayBvciBub3QnKTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIGNvbnN0IGNyZWF0ZVNoaXAxID0gbmV3IHNoaXAoMywgMCwgdHJ1ZSk7XG5cbi8vIGNvbnNvbGUubG9nKGNyZWF0ZVNoaXAxLmhpdHMoKSk7XG5cbi8vIGZ1bmN0aW9uIHNoaXAobGVuZ3RoLCBoaXRzLCBzdW5rKSB7XG4vLyAgICAgcmV0dXJuIHNoaXBPYmogPSB7XG4vLyAgICAgICAgIGxlbmd0aDogbGVuZ3RoLFxuLy8gICAgICAgICBoaXRzOiBoaXRzLFxuLy8gICAgICAgICBzdW5rOiBzdW5rLFxuXG4vLyAgICAgICAgIGhpdENvdW50ZXI6IGZ1bmN0aW9uIGhpdHMoKSB7XG5cbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgc3Vua09yTm90OiBmdW5jdGlvbiBpc1N1bmsoKSB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VuayEgb3Igbm90IScpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBjb25zdCBjcmVhdGVTaGlwID0gc2hpcCg0LCAwLCBmYWxzZSk7XG5cbi8vIGNvbnN0IGNyZWF0ZVNoaXAyID0gc2hpcCgyLCAxLCB0cnVlKTtcblxuLy8gY29uc29sZS5sb2coY3JlYXRlU2hpcDIuc3Vua09yTm90KCkpO1xuXG4vLyBmdW5jdGlvbiBpcyBub3QgcmlnaHQsIGluaXQgYSBoaXQgY291bnRlciB2YXJpYWJsZVxuXG4vLyBpbnB1dCBhIG5hbWUsIGFuZCBhIGxlbmd0aCxcblxuLy8gaW5pdCBoaXQgY291bnRlcixcblxuLy8gaGl0IG1ldGhvZCB3aGljaCB3aWxsIGluY3JlbWVudCB0aGUgaGl0IGNvdW50ZXJcblxuLy8gaXN1bmsgd2lsbCBkZXRlcm1pbmUgaWYgaGl0cyBpcyBncmVhdGVyIHRoYW4gdGhlIHNoaXBzIGxlbmd0aCxcblxuLy8gY2hhbmdlIHRoZSB2YWx1ZSBvZiBpc3N1bmsgdG8gZmFsc2UsXG5cblxuLy8gc2hpcEZhY3RvcnkuanMgY29kZSBcblxuLy8gZnVuY3Rpb24gc2hpcChuYW1lLCBsZW5ndGgpIHtcbi8vICAgbGV0IGhpdENvdW50ZXIgPSAwO1xuLy8gICBsZXQgaXNTdW5rID0gZmFsc2U7XG4vLyAgIGZ1bmN0aW9uIGhpdEluY3JlbWVudG9yKCkge1xuLy8gICAgIGhpdENvdW50ZXIrKztcbi8vICAgfVxuXG4vLyAgIGZ1bmN0aW9uIGdldEhpdEluY3JlbWVudG9yKCkge1xuLy8gICAgIHJldHVybiBoaXRDb3VudGVyO1xuLy8gICB9XG4vLyAgIGZ1bmN0aW9uIGlzU3Vua0NvbmRpdGlvbmFsKCkge1xuLy8gICAgIGlmIChoaXRDb3VudGVyID49IGxlbmd0aCkge1xuLy8gICAgICAgaXNTdW5rID0gdHJ1ZTsgLy8gcmV0dXJuIGlzU3VuayBpbiBhbm90aGVyIGZ1bmN0aW9uLFxuLy8gICAgICAgLy8gcmV0dXJuIGlzU3Vuaztcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBnZXRTaGlwU3RhdHVzKCkge1xuLy8gICAgIHJldHVybiBpc1N1bms7XG4vLyAgIH1cblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHNoaXBOYW1lOiBuYW1lLFxuLy8gICAgIGlzU3Vuayxcbi8vICAgICBzaGlwTGVuZ3RoOiBsZW5ndGgsXG4vLyAgICAgaGl0SW5jcmVtZW50b3IsXG4vLyAgICAgZ2V0SGl0SW5jcmVtZW50b3IsXG4vLyAgICAgaXNTdW5rQ29uZGl0aW9uYWwsXG4vLyAgICAgZ2V0U2hpcFN0YXR1cyxcbi8vICAgfTtcbi8vIH1cblxuLy8gbGV0IHBhdHJvbEJvYXQgPSBzaGlwKCdwYXRyb2wtYm9hdCcsIDIpO1xuXG4vLyBjb25zb2xlLmxvZyhwYXRyb2xCb2F0KTtcbi8vIGNvbnNvbGUubG9nKHBhdHJvbEJvYXQuaGl0SW5jcmVtZW50b3IoKSk7XG4vLyBjb25zb2xlLmxvZyhwYXRyb2xCb2F0LmhpdEluY3JlbWVudG9yKCkpO1xuLy8gY29uc29sZS5sb2cocGF0cm9sQm9hdC5nZXRIaXRJbmNyZW1lbnRvcigpKTtcbi8vIGNvbnNvbGUubG9nKHBhdHJvbEJvYXQuaXNTdW5rQ29uZGl0aW9uYWwoKSk7XG4vLyBjb25zb2xlLmxvZyhwYXRyb2xCb2F0LmdldFNoaXBTdGF0dXMoKSk7XG4vLyBjb25zb2xlLmxvZyhwYXRyb2xCb2F0KTtcblxuXG5cblxuXG4vLyBjb25zb2xlLmxvZyhzaGlwMSk7XG4vLyBjb25zb2xlLmxvZyhzaGlwMS5oaXRJbmNyZW1lbnRvcigpKTtcbi8vIGNvbnNvbGUubG9nKHNoaXAxLmhpdEluY3JlbWVudG9yKCkpO1xuLy8gY29uc29sZS5sb2coc2hpcDEuaGl0SW5jcmVtZW50b3IoKSk7XG4vLyBjb25zb2xlLmxvZyhzaGlwMS5oaXRJbmNyZW1lbnRvcigpKTtcbi8vIGNvbnNvbGUubG9nKHNoaXAxLmdldEhpdEluY3JlbWVudG9yKCkpO1xuLy8gY29uc29sZS5sb2coc2hpcDEuZ2V0U2hpcFN0YXR1cygpKTtcbi8vIGNvbnNvbGUubG9nKHNoaXAxLmlzU3Vua0NvbmRpdGlvbmFsKCkpO1xuLy8gY29uc29sZS5sb2coc2hpcDEuZ2V0U2hpcFN0YXR1cygpKTtcbi8vIGNvbnNvbGUubG9nKHNoaXAxKTtcblxuLy8gY29uc29sZS5sb2coc2hpcDEuaGl0cygpKTtcbi8vIGNvbnNvbGUubG9nKHNoaXAxKTtcbi8vIGNvbnNvbGUubG9nKHNoaXAxLmhpdHMoKSk7XG4vLyBjb25zb2xlLmxvZyhzaGlwMSk7XG4vLyBjb25zb2xlLmxvZyhzaGlwMS5oaXRzKCkpO1xuLy8gY29uc29sZS5sb2coc2hpcDEpO1xuLy8gY29uc29sZS5sb2coc2hpcDEuc3Vua09yTm90KCkpXG4vLyBjb25zb2xlLmxvZyhzaGlwMSk7XG5cbi8vIGNvbnNvbGUubG9nKHNoaXAyKTtcbi8vIGNvbnNvbGUubG9nKHNoaXAyLmhpdHMoKSk7XG4vLyBjb25zb2xlLmxvZyhzaGlwMik7XG4vLyBjb25zb2xlLmxvZyhzaGlwMi5oaXRzKCkpO1xuLy8gY29uc29sZS5sb2coc2hpcDIpO1xuLy8gY29uc29sZS5sb2coc2hpcDIuaGl0cygpKTtcbi8vIGNvbnNvbGUubG9nKHNoaXAyKTtcbi8vIGNvbnNvbGUubG9nKHNoaXAyLmhpdHMoKSk7XG4vLyBjb25zb2xlLmxvZyhzaGlwMik7XG4vLyBjb25zb2xlLmxvZyhzaGlwMi5zdW5rT3JOb3QoKSlcbi8vIGNvbnNvbGUubG9nKHNoaXAyKTtcblxuLy8gZXhhbXBsZSBub2dldFxuXG4vLyBmdW5jdGlvbiBjb3VudGVyMSgpIHtcbi8vICAgICBsZXQgY291bnQgPSAwO1xuXG4vLyAgICAgZnVuY3Rpb24gaW5jcmVtZW50KCkge1xuLy8gICAgICAgICBjb3VudCArPSAxO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIGdldENvdW50KCkge1xuLy8gICAgICAgICByZXR1cm4gY291bnRcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBnZXRDb3VudCxcbi8vICAgICAgICAgaW5jcmVtZW50LFxuLy8gICAgIH07XG4vLyB9XG5cbi8vIGNvbnN0IGZvbyA9IGNvdW50ZXIxKCk7XG5cbi8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGZvbykpO1xuXG4vLyAvLyBJbmNyZW1lbnQgdGhlIGNvdW50IHZhcmlhYmxlXG4vLyBmb28uaW5jcmVtZW50KCk7XG5cbi8vIExvZ3MgMSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgdGhlIHZhcmlhYmxlJ3MgdmFsdWVcbi8vIGNvbnNvbGUubG9nKGZvby5nZXRDb3VudCgpKTtcblxuLy8gZXhhbXBsZSBnZXRcblxuLy8gZnVuY3Rpb24gY291bnRlcjIoKSB7XG4vLyAgICAgbGV0IGNvdW50ID0gMDtcblxuLy8gICAgIGZ1bmN0aW9uIGluY3JlbWVudCgpIHtcbi8vICAgICAgICAgY291bnQgKz0gMTtcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBnZXQgY291bnQoKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gY291bnQ7XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIGluY3JlbWVudCxcbi8vICAgICB9O1xuLy8gfVxuXG4vLyBjb25zdCB4ID0gY291bnRlcjIoKTtcblxuLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoeCkpO1xuXG4vLyAvLyBJbmNyZW1lbnQgdGhlIGNvdW50IHZhcmlhYmxlXG4vLyB4LmluY3JlbWVudCgpO1xuXG4vLyBMb2dzIDEsIHRoZSBmdW5jdGlvbiByZXR1cm5zIHRoZSB2YXJpYWJsZSdzIHZhbHVlXG4vLyBjb25zb2xlLmxvZyh4LmNvdW50KTtcblxuLy8gcmVmYWN0b3JlZFxuXG4vLyBmdW5jdGlvbiBjb3VudGVyKCkge1xuLy8gICBsZXQgY291bnQgPSAwO1xuXG4vLyAgIGZ1bmN0aW9uIGluY3JlbWVudCgpIHtcbi8vICAgICBjb3VudCArPSAxO1xuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gZ2V0Q291bnQoKSB7XG4vLyAgICAgcmV0dXJuIGNvdW50O1xuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gdG9KU09OKCkge1xuLy8gICAgIHJldHVybiB7IGNvdW50IH07XG4vLyAgIH1cblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHRvSlNPTixcbi8vICAgICBnZXRDb3VudCxcbi8vICAgICBpbmNyZW1lbnQsXG4vLyAgIH07XG4vLyB9XG4vLyBjb25zdCBmb28gPSBjb3VudGVyKCk7XG5cbi8vIGZvby5pbmNyZW1lbnQoKTtcblxuLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZm9vKSk7XG4iLCIvLyBjcmVhdGUgcGxheWVyXG4vLyBQbGF5ZXJzIGNhbiB0YWtlIHR1cm5zIHBsYXlpbmcgdGhlIGdhbWUgYnkgYXR0YWNraW5nIHRoZSBlbmVteSBHYW1lYm9hcmQuXG4vLyBUaGUgZ2FtZSBpcyBwbGF5ZWQgYWdhaW5zdCB0aGUgY29tcHV0ZXIsIHNvIG1ha2UgdGhlIOKAmGNvbXB1dGVy4oCZIGNhcGFibGUgb2YgbWFraW5nIHJhbmRvbSBwbGF5cy4gXG4vLyBUaGUgQUkgZG9lcyBub3QgaGF2ZSB0byBiZSBzbWFydCwgYnV0IGl0IHNob3VsZCBrbm93IHdoZXRoZXIgb3Igbm90IGEgZ2l2ZW4gbW92ZSBpcyBsZWdhbC4gKGkuZS4gaXQgc2hvdWxkbuKAmXQgc2hvb3QgdGhlIHNhbWUgY29vcmRpbmF0ZSB0d2ljZSkuIFxuXG4vLyBpbXBvcnQgJy4vZ2FtZWJvYXJkRmFjdG9yeS5qcyc7XG5pbXBvcnQgc2hpcCBmcm9tICcuL3NoaXBGYWN0b3J5LmpzJztcblxuaW1wb3J0IGdhbWVib2FyZEZhY3RvcnkgZnJvbSAnLi9nYW1lYm9hcmRGYWN0b3J5LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxheWVyRmFjdG9yeShuYW1lKSB7IFxuICAgIGNvbnN0IGdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKTtcbiAgICByZXR1cm4ge25hbWUsIGdhbWVib2FyZH07XG59IFxuXG4vLyBtYWtlIGEgcGxheWVyIGZhY3RvcnkgZnVuY3Rpb24uXG4vLyB0aGF0IG1ha2VzIGEgcGxheWVyIGZvciB0aGUgZ2FtZSBcbi8vIG1ha2UgYSBjb21wdXRlciBcbi8vIGNvbXAgc2hvdWxkIGtub3cgaWYgbW92ZSBpcyBsZWdhbCBhbmQgY2Fubm90IGhpdCB0aGUgc2FtZSBzcXVhcmUgdHdpY2UuIFxuXG4vLyB3aGF0IHByb3BlcnRpZXMgd291bGQgcGxheWVyIGhhdmU/IFxuLy8gYSB3YXkgdG8gdHJhY2sgd2hvc2UgdHVybiBpdCBpcyBcbi8vIGEgbmFtZVxuLy8gSSB3b3VsZCBzYXkgYSBuYW1lIHByb3BlcnR5IGFuZCBhIHdheSB0byBtZWFzdXJlIHR1cm5zIFxuLy8gc2FtZSB0aGluZyBmb3IgdGhlIGNvbXAgZnVuY3Rpb24sIFxuLy8gXG5cbi8vIHN0YXJ0IGdhbWVwbGFubmluZywgdmlzdWFsaXppbmcgd2hhdCB5b3Ugd2FudCB0aGlzIHNlY3Rpb24gdG8gbG9vayBsaWtlLCBcbi8vIHdlIGFyZSBjcmVhdGluZyBhIGZhY3RvcnkgZm9yIGEgcGxheWVyIGFuZCBsb29rcyBsaWtlIHRoZSBjb21wdXRlciBhcyB3ZWxsIFxuLy8gc28gY3JlYXRlIHRoZSBwbGF5ZXIgb2JqZWN0IGFzIHdlbGwgYXMgdGhlaXIgc3BlY2lmaWMgZ2FtZWJvYXJkIFxuLy8gbG9vayB1cCBvbGQgcG9zdHMgZm9yIGluc3BpcmF0aW9uLCBcbi8vIGNyZWF0ZSBhIHBsYXllciBhbmQgZ3JhYiB0aGVpciBnYW1lYm9hcmQgXG4vLyBzZWUgaWYgeW91IGNhbiBsb2cgYmFjayBhIGdhbWVib2FyZFxuLy8gc28gSSBjYW4gaW5jbHVkZSB0aGUgZ2FtZWJvYXJkIGluIHRoZSByZXR1cm4gb2JqZWN0LCB0aGlzIHNlZW1zIGxpa2UgdGhlIGluaXRhbCBnYW1lYm9hcmRzIFxuLy8gbW9kYWwgd2lsbCBwb3AtdXAgYW5kIGFsbG93IHVzZXIgdG8gcGxhY2Ugc2hpcHMgYXQgc3BlY2lmaWMgc3BvdHMsXG4vLyBjcmVhdGUgYW5vdGhlciBmYWN0b3J5IGZvciBjb21wdXRlciBcblxuLy8gc2VlbXMgbGlrZSBwbGF5ZXJGYWN0b3J5IHdpbGwgYWxzbyBuZWVkIGFuIGF0dGFjayBtZXRob2QsIGFsbG93aW5nIHRoZSB1c2VyIHRvIGhpdCB0aGUgZW5lbXkncyBib2FyZC4gXG5cbi8vIHdoYXQgd291bGQgYmUgaW5jbHVkZWQgaW4gdGhpcyBhdHRhY2sgbWV0aG9kPyBcbi8vIGFjY2VzcyB0byB0aGUgcmVjZWl2ZUF0dGFjayBtZXRob2QsIGNhbGxzIHRoZSBmdW5jdGlvbiwgcGFzc2luZyBpbiB0aGUgY29vcmRpbmF0ZXMuIFxuXG4vLyBhbiBhdHRhY2sgbWV0aG9kLCBpcyB0aGF0IGp1c3QgdXNpbmcgcmVjZWl2ZUF0dGFjaz8gQmVjYXVzZSByZWNlaXZlQXR0YWNrIGlzIHRoZSBvbmUgcGxhY2luZyB0aGUgc2hpcHMgYW5kIGRldGVybWluZXMgdmFsaWQgc2hpcCBwbGFjZW1lbnQsIFxuLy8gYSB3YXkgdG8gc3dpdGNoIHBsYXllciB0dXJucyBcblxuLy8gYXR0YWNrIG1ldGhvZCB3aWxsIHRha2UgYSBwYWlyIGNvb3JkaW5hdGVzLCBhbmQgcGFzcyB0aGVtIHRvIHJlY2VpdmVBdHRhY2ssIFxuLy8gbWFraW5nIHRoZSBhdHRhY2sgbWV0aG9kLCBhY2Nlc3MgdGhlIGdhbWVib2FyZCwgYW5kIHJlY2VpdmVBdHRhY2sgbWV0aG9kLCBcbi8vIFxuXG4vLyBJJ20gc3VwcG9zZWQgdG8gYWNjZXNzIHRoZSBlbmVteSdzIGdhbWVib2FyZCwgaG93PyBcbi8vIG1ha2UgaXQgd2l0aGluIGNvbXB1dGVyIGZhY3RvcnkgYW5kIHNvbWVob3cgYWNjZXNzIGl0LCBcbi8vIGF0dGFjayBtZXRob2QsIGdldHMgZW5lbXkgZ2FtZWJvYXJkKCBob3cgPyApIFxuLy8gdXNlcyB0aGUgcmVjZWl2ZUF0dGFjayBtZXRob2Qgb24gdGhlIGVuZW15IGdhbWVib2FyZCBcbi8vIGhvdyBjYW4gSSB1c2UgcmVjZWl2ZUF0dGFjayBtZXRob2Qgd2l0aGluIGF0dGFjayBtZXRob2QgXG4vLyBkbyBJIGFjY2VzcyB0aGUgY29tcHV0ZXJzIGdhbWVib2FyZCBmcm9tIGl0J3MgZmFjdG9yeT8gXG4vLyB5ZXMgc2VlbXMgbGlrZSB0aGF0IGNvdWxkIHdvcmtcblxuXG5cbi8vIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKTtcbi8vIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQbGF5ZXIobmFtZSwgdHVybiwgYm9hcmQpIHsgXG4vLyAgICAgbGV0IHBsYXllckJvYXJkID0gYm9hcmQ7XG4vLyAgICAgZnVuY3Rpb24gYXR0YWNrKCkgeyBcbi8vICAgICBsZXQgZ2V0Q29tcHV0ZXJCb2FyZCA9IGNyZWF0ZUNvbXB1dGVyUGxheWVyKCkuY29tcEJvYXJkO1xuLy8gICAgIC8vIEkgZG9udCBrbm93IGhvdyB0byB1c2UgcmVjZWl2ZUF0dGFjayBvbiB0aGUgZ2FtZWJvYXJkXG4vLyAgICAgY29uc29sZS5sb2coZ2V0Q29tcHV0ZXJCb2FyZCk7XG4vLyB9IFxuLy8gICAgIHJldHVybiB7IFxuLy8gICAgICAgICBuYW1lOiBuYW1lLCBcbi8vICAgICAgICAgdHVybjogdHVybixcbi8vICAgICAgICAgYm9hcmQ6IHBsYXllckdhbWVib2FyZC5nZXRHYW1lYm9hcmQoKSxcbi8vICAgICAgICAgYXR0YWNrLFxuLy8gICAgIH1cbi8vIH0gXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb21wdXRlclBsYXllcihuYW1lLCB0dXJuLCBjb21wQm9hcmQpIHsgXG4vLyAgICAgbGV0IGNvbXB1dGVyQm9hcmQgPSBjb21wQm9hcmQ7XG4vLyAgICAgcmV0dXJuIHsgXG4vLyAgICAgICAgIG5hbWU6IG5hbWUsIFxuLy8gICAgICAgICB0dXJuOiB0dXJuLFxuLy8gICAgICAgICBjb21wQm9hcmQ6IGNvbXB1dGVyR2FtZWJvYXJkLmdldEdhbWVib2FyZCgpLFxuLy8gICAgIH1cbi8vIH0gXG5cbi8vIGxldCBwbGF5ZXIxID0gY3JlYXRlUGxheWVyKCdhbGVjJywgdHJ1ZSk7XG4vLyBjb25zb2xlLmxvZyhwbGF5ZXIxLmF0dGFjaygpKTtcblxuXG4vLyBsZXQgY29tcHV0ZXIgPSBjcmVhdGVDb21wdXRlclBsYXllcignY29tcCcsIGZhbHNlKTtcbi8vIGNvbnNvbGUubG9nKGNvbXB1dGVyLmJvYXJkKTtcblxuLy8gY29uc29sZS5sb2coZ2FtZWJvYXJkLmdldEdhbWVib2FyZCgpKTtcblxuLy8gbWFrZSBhIGZhY3RvcnkgZm9yIGJvdGggcGxheWVyIGFuZCBjb21wdXRlciBcblxuLy8gaGFzIGEgbmFtZSBwcm9wZXJ0eSwgYW5kIGEgdHVybiBwcm9wZXJ0eSwgXG4vLyBlYWNoIGZhY3RvcnkgaGFzIGl0cyBvd24gZ2FtZWJvYXJkIHdpdGhpbiBpdCBcbi8vIGhhdmUgYW4gYXR0YWNrIG1ldGhvZCB3aGljaCBncmFicyB0aGUgZW5lbXkncyBnYW1lYm9hcmQgXG4vLyBtYWtlIHRoZSBlbmVteSdzIGZhY3RvcnksIHNhbWUgc2V0LXVwXG4vLyBncmFiIHRoZSBlbmVteSdzIGdhbWVib2FyZCBcbi8vIGhvdyBjYW4gSSBhY2Nlc3MgdGhlIGVuZW15J3MgZ2FtZWJvYXJkIGluIGEgZGlmZmVyZW50IGZhY3RvcnkgXG4vLyByZXZpZXcgcGFzdG9zIG1lc3NhZ2VzLCB3b3JrIG9uIG1vY2sgb2JqZWN0IGV4YW1wbGVcblxuLy8gbG9nIHRoZSBwcm9wZXJ0aWVzIG9mIGdhbWVib2FyZCBtb2R1bGVcbi8vIE9rIGhvdyBkbyBJIHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvIGZvcm0gYW4gYXR0YWNrPyBcbi8vIEkgYW0gbm90IHN1cmUgaG93IHRvIHByb3Blcmx5IGNvbnN0cnVjdCB0aGUgYXR0YWNrIG1ldGhvZCwgXG5cblxuLy8gQW5kIHRoZW4gdGhpcyBpcyB0aGUgZXhhY3Qgc2FtZSBzb2x1dGlvbiwgd2hlbiB5b3UgYnVpbGQgdGhlIGF0dGFjayBmdW5jdGlvbiwgeW91IG5lZWQgdG8gbWFrZSBpdCBzbyBpdCB0YWtlcyBhIGdhbWVib2FyZCBhcyBhbiBhcmd1bWVudFxuLy8gQW5kIHRoZW4gaW5zaWRlIHRoZSBmdW5jdGlvbiwgeW91IGNhbiB1c2UgdGhlIGdhbWVib2FyZCBtZXRob2RzICBcblxuLy8gd2h5IGFtIEkgc3RpbGwgaGF2aW5nIGlzc3VlcyBhY2Nlc3NpbmcgdGhlIGdhbWVib2FyZEZhY3RvcmllcyBtZXRob2RzID8gXG4vLyBJIGFtIHBhc3NpbmcgaW4gdGhlIG9iamVjdCwgXG4vLyBPayBpIGFtIGFibGUgdG8gYWNjZXNzIHRoZSBnYW1lYm9hcmRzIHByb3BlcnRpZXMvbWV0aG9kcyBcbi8vIG5vdyBjaGVjayBpZiBJIGNhbiBwbGFjZSBhbiBhdHRhY2sgb24gdGhlIGJvYXJkIHVzaW5nIHJlY2VpdmVBdHRhY2sgXG4vLyB3aGF0IGlzIHRoZSBhdHRhY2sgbWV0aG9kIHN1cHBvc2VkIHRvIGJlIGRvaW5nPz8gYXR0YWNraW5nIGFuIGVuZW15IHNoaXAgSE9XPz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/P1xuXG4vLyB3aGVyZSBkbyBJIHBsYXkgdGhlIHNoaXBzPz8/IGhvdyBjYW4gSSB1c2UgcmVjZWl2ZUF0dGFjayBpZiB0aGVyZXMgbm8gZnVja2luZyBzaGlwcyBvbiB0aGUgYm9hcmQ/IFxuLy8gVGhpcyBzdGVwIGxpdGVyYWxseSBtYWtlcyBubyBzZW5zZSBcbi8vIGFtIEkgc3VwcG9zZWQgdG8gcGxhY2Ugc2hpcHMgaGVyZSwgdGhlbiB1c2UgcmVjZWl2ZUF0dGFjaywgXG4vLyBJIGFtIHRyeWluZyB0byBtYWtlIGEgc3R1cGlkIGZ1Y2tpbmcgdGVzdCBwYXNzLFxuLy8gdGVzdCB0byBzZWUgaWYgYXR0YWNrIG1ldGhvZCByZXR1cm5zIGJhY2sgdGhlIGNvb3JkaW5hdGVzIHBhc3NlZCBpbiwgIFxuXG4vLyBJIHdhbnQgdG8gYmVnaW4gdG8gdGVzdCBteSBmdW5jdGlvbiBhbmQgaXQncyBtZXRob2RzLCBcbi8vIGZpcnN0IEkgY2FuIG1ha2UgYSB0ZXN0IHRoYXQgZ2V0TmFtZSBpcyByZXR1cm5pbmcgdGhlIGNvcnJlY3QgdmFsdWUgXG4vLyBjYW50IGV2ZW4gYWNjZXNzIGl0LCBcblxuLy8gYXR0YWNrIG1ldGhvZCB3aXRoaW4gdGhlIHBsYXllciBmYWN0b3J5IFxuLy8gd2hhdCB3b3VsZCBnbyBpbnRvIGl0LCBcbi8vIGEgd2F5IHRvIHVzZSB0aGUgcmVjZWl2ZUF0dGFjayBtZXRob2Qgd2l0aGluIHRoZSBmdW5jdGlvbiBcbi8vIGFjY2VzcyBhIGdhbWVib2FyZCwgXG4vLyB1c2UgdGhlIHJlY2VpdmVBdHRhY2sgbWV0aG9kIG9uIHRoZSBnYW1lYm9hcmQsIFxuLy8gSSB0aGluayB0aGUgcmVjZWl2ZUF0dGFjayBtZXRob2QgaXMgd29ya2luZywgaXQgbG9va3MgbGlrZSBpdCdzIGxvZ2dpbmcgY29vcmRpbmF0ZXMgb2YgbWlzc2VkIHNob3RzIFxuLy8gY2FuIHdlIHRlc3QgaXQ/IFxuLy8gaXQgd291bGQgdGFrZSBjb29yZGlhbnRlcyB0b28sIFxuLy8gdGFrZSB0aGUgY29vcmRpbmF0ZXMgYW5kIGhpdCB0aGUgYm9hcmQgXG4vLyBidXQgaG93IGNhbiBJIHRlc3QgdGhlIGF0dGFjayBtZXRob2QsIFxuLy8gc2hvdWxkbid0IEkgaGF2ZSBhIGRpZmZlcmVudCBmYWN0b3J5IGZvciBjb21wdXRlciwgd2hpY2ggY3JlYXRlcyBpdHMgb3duIGJvYXJkLCB0aGVuIHVzZSByZWNlaXZlQXR0YWNrIG9uIHRoYXQgYm9hcmQgXG4vLyBpZiB0aGVyZSB3YXMgb25lIHRoaW5nIHRoYXQgSSB3b3VsZCBjaGFuZ2UsIGl0IHdvdWxkIGJlIGFjY2Vzc2luZyB0aGUgY29tcHV0ZXJzIGdhbWVib2FyZCwgXG5cbi8vIGFjY2VzcyB0aGUgZ2FtZWJvYXJkRmFjdG9yeSBtb2R1bGUgd2l0aGluIHRoZSBwbGF5ZXJGYWN0b3J5IFxuXG4vLyBhY2Nlc3MgdGhlIGVuZW15cyBnYW1lYm9hcmQgdXNpbmcgYSBnZXR0ZXIgYW5kIHNldHRlciwgLy8gZG9uZVxuXG4vLyBwbGFjZVBsYXllclNoaXBzIG1ldGhvZCwgdGFrZXMgYSBzaGlwIG9iaiBhbmQgcGxhY2VzIGl0IG9uIHRoZSBnYW1lYm9hcmQgdGhhdCB3YXMgY3JlYXRlZCwgXG5cbi8vIGlmIEkgY2FsbCBwbGFjZVNoaXBzIHdvdWxkIHRoYXQgbm90IHBsYWNlIGl0IGNvcnJlY3RseT8/PyBcblxuLy8gaXMgdGhlcmUgYSB3YXkgSSBjYW4gdGVzdCB0aGUgYXR0YWNrIG1ldGhvZCBub3c/IGJlZm9yZSBJIG1ha2UgdGhlIGxvZ2ljIGZvciBzaGlwIHBsYWNlbWVudD8gXG5cbi8vIHRyeSB0byB0ZXN0IGF0dGFjayBtZXRob2QsIFxuXG4vLyBJIGhhdmUgbWV0aG9kcyB3aXRoaW4gcGxheWVyRmFjdG9yeSBhbmQgY29tcEZhY3RvcnkgdGhhdCByZXR1cm5zIGJhY2sgZW5lbXkncyBnYW1lYm9hcmQgYXMgd2VsbCBwbGF5ZXJzIGJvYXJkLCBcblxuLy8gSSB3YW50ZWQgdG8gc3RhcnQgcGxhY2luZyBoaXRzIG9uIHRoZSBib2FyZCwgSSBuZWVkIHRvIHVzZSByZWNlaXZlQXR0YWNrIG1ldGhvZCB3aGljaCBpcyBpbiBnYW1lYm9hcmRGYWN0b3J5LCBcblxuLy8gaG93IGRvIEkgdXNlIG1ldGhvZHMgd2l0aGluIGdhbWVib2FyZEZhY3Rvcnkgb24gdGhlIGJvYXJkIHZhcmlhYmxlcz8gXG5cbi8vIGxvb2sgb3ZlciBuZXZ6IG1lc3NhZ2VzIGFuZCBjb21taXQgdG8gc2F2ZSB3b3JrLCBcblxuLy8gdGhlbiBiZWdpbiB0byByZWZhY3RvciBwbGF5ZXJGYWN0b3J5LCBvbmx5IHJldHVybnMgYSBuYW1lIGFuZCBnYW1lYm9hcmQuIFxuXG4vLyBJIGRvbnQgdGhpbmsgaXRzIG5lY2Vzc2FyeSB0byB0ZXN0IHRoZXNlIG1ldGhvZHMsIGl0cyBwcmV0dHkgYmFzaWMgc3R1ZmZcblxuLy8gSSBkZWxldGVkIHRoZSB0ZXN0IGZpbGUsIG5vdyBJIHdpbGwgbWFrZSB0aGUgZ2FtZSBtb2R1bGUvbG9vcCBcblxuLy8gZ2FtZSBtb2R1bGUgd2lsbCB1c2UgdGhlIHJlY2VpdmVBdHRhY2sgbWV0aG9kLCBcblxuLy8gZGV0ZXJtaW5lIHdob3NlIHR1cm4gaXQgaXMsIFxuXG4vLyBkZXRlcm1pbmUgaWYgdGhlIHNoaXBzIGhhdmUgYmVlbiBzdW5rLCBcblxuLy8gZGV0ZXJtaW5lIGEgd2lubmVyIGFuZCBwcmludCBhIG1lc3NhZ2Ugb3IgbW9kYWwgcG9wLXVwIHRoYXQgZGlzcGxheXMgd2lubmVyIFxuXG5cblxuLy8gY29uc3QgcGxheWVyMSA9IHBsYXllckZhY3RvcnkoJ2FsZWMnKTtcbi8vIGNvbnN0IGNvbXB1dGVyID0gcGxheWVyRmFjdG9yeSgnY29tcHV0ZXInKTtcblxuLy8gY29uc29sZS5sb2cocGxheWVyMSk7XG4vLyBjb25zb2xlLmxvZyhjb21wdXRlcik7IFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBmdW5jdGlvbiBwbGF5ZXJGYWN0b3J5KG5hbWUsIHR1cm4pIHsgXG4vLyAgICAgbGV0IGdhbWVib2FyZE1vZHVsZU1ldGhvZHMgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG4vLyAgICAgY29uc3QgZ2V0TmFtZSA9ICgoKSA9PiB7XG4vLyAgICAgICAgIHJldHVybiBuYW1lOyBcbi8vICAgICB9KVxuLy8gICAgIGxldCBwbGF5ZXJUdXJuID0gdHVybjsgXG4vLyAgICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpLmdldEdhbWVib2FyZCgpO1xuXG4vLyAgICAgZnVuY3Rpb24gZ2V0Qm9hcmQoKSB7IFxuLy8gICAgICAgICByZXR1cm4gcGxheWVyR2FtZWJvYXJkO1xuLy8gICAgIH0gXG5cbi8vICAgICBmdW5jdGlvbiBnZXRDb21wdXRlckJvYXJkKCkgeyBcbi8vICAgICAgIGxldCBnZXRDb21wQm9hcmQgPSBnYW1lYm9hcmRNb2R1bGVNZXRob2RzLmdldEdhbWVib2FyZCgpO1xuLy8gICAgICAgcmV0dXJuIGdldENvbXBCb2FyZDtcbi8vICAgICB9IFxuXG4vLyAgICAgZnVuY3Rpb24gYXR0YWNrKHgsIHkpIHtcbi8vICAgICAgICAgbGV0IGNvbXB1dGVyQm9hcmQgPSBnZXRDb21wdXRlckJvYXJkKCk7XG4vLyAgICAgICAgIC8vIGNvbXB1dGVyQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTsgIC8vIGhvdyBjYW4gSSB1c2UgdGhlIHJlY2VpdmVBdHRhY2sgbWV0aG9kIG9uIHRoZSBib2FyZD8gXG4gICAgICAgIFxuLy8gICAgIH0gXG4vLyAgICAgcmV0dXJuIHsgXG4vLyAgICAgICAgIG5hbWU6IG5hbWUsXG4vLyAgICAgICAgIHR1cm46IHR1cm4sXG4vLyAgICAgICAgIGdldEJvYXJkLFxuLy8gICAgICAgICBhdHRhY2ssIFxuLy8gICAgICAgICBnZXROYW1lLFxuLy8gICAgICAgICBnZXRDb21wdXRlckJvYXJkLFxuLy8gICAgICAgICBnYW1lYm9hcmRNb2R1bGVNZXRob2RzLFxuLy8gICAgIH1cbi8vIH0gXG5cblxuLy8gZnVuY3Rpb24gY29tcHV0ZXJGYWN0b3J5KG5hbWUsIHR1cm4pIHsgXG4vLyAgICAgbGV0IGdhbWVib2FyZE1vZHVsZU1ldGhvZHMgPSBnYW1lYm9hcmRGYWN0b3J5KCk7XG4vLyAgICAgY29uc3QgZ2V0TmFtZSA9ICgoKSA9PiB7XG4vLyAgICAgICAgIHJldHVybiBuYW1lOyBcbi8vICAgICB9KSBcbi8vICAgICBsZXQgY29tcHV0ZXJUdXJuID0gdHVybjtcbi8vICAgICBjb25zdCBjb21wdXRlckdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKS5nZXRHYW1lYm9hcmQoKTtcbi8vICAgICBjb25zb2xlLmxvZyhjb21wdXRlckdhbWVib2FyZCk7IFxuXG4vLyAgICAgZnVuY3Rpb24gZ2V0Q29tcHV0ZXJCb2FyZCgpIHsgXG4vLyAgICAgICAgIHJldHVybiBjb21wdXRlckdhbWVib2FyZDtcbi8vICAgICB9IFxuXG4vLyAgICAgZnVuY3Rpb24gZ2V0UGxheWVyc0JvYXJkKCkgeyBcbi8vICAgICAgICAgbGV0IGdldFBsYXllckJvYXJkID0gcGxheWVyRmFjdG9yeSgpLmdldEJvYXJkKCk7XG4vLyAgICAgICAgIHJldHVybiBnZXRQbGF5ZXJCb2FyZDtcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiBhdHRhY2soeCwgeSkgeyBcbi8vICAgICAgICAgY29uc29sZS5sb2coJ0xPR0dJTkcgVEhFIFBMQVlFUlMgR0FNRUJPQVJEIFdJVEhJTiBUSEUgQ09NUFVURVJGQUNUT1JZIEZVTkNUSU9OJywgZ2V0UGxheWVyc0JvYXJkKCkpXG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHsgXG4vLyAgICAgICAgIG5hbWU6IG5hbWUsXG4vLyAgICAgICAgIHR1cm46IHR1cm4sXG4vLyAgICAgICAgIGF0dGFjaywgXG4vLyAgICAgICAgIGdldE5hbWUsXG4vLyAgICAgICAgIGdldENvbXB1dGVyQm9hcmQsXG4vLyAgICAgICAgIGdldFBsYXllcnNCb2FyZCxcbi8vICAgICAgICAgZ2FtZWJvYXJkTW9kdWxlTWV0aG9kc1xuLy8gICAgIH1cbi8vIH1cblxuXG5cbi8vIGNvbnNvbGUubG9nKHBsYXllckZhY3RvcnkoJ2FsZWMnLCB0cnVlKSk7XG5cbi8vIGNvbnNvbGUubG9nKGNvbXB1dGVyRmFjdG9yeSgnY29tcCcsIGZhbHNlKSk7XG5cbi8vIGNvbnNvbGUubG9nKHBsYXllckZhY3RvcnkoKS5hdHRhY2soMywgMykpO1xuXG4vLyBjb25zb2xlLmxvZyhjb21wdXRlckZhY3RvcnkoKS5hdHRhY2soNSwgNSkpO1xuLy8gY29uc29sZS5sb2cocGxheWVyRmFjdG9yeS5nZXRDb21wdXRlckJvYXJkKCkpO1xuXG4vLyBmdW5jdGlvbiBjb21wdXRlckZhY3RvcnkobmFtZSwgdHVybikgeyBcbi8vICAgICBmdW5jdGlvbiBhdHRhY2soKSB7IFxuLy8gICAgICAgICBjb25zdCBjb21wdXRlcnNHYW1lYm9hcmQgPSBnYW1lYm9hcmRNb2R1bGUuZ2V0R2FtZWJvYXJkKCk7XG4vLyAgICAgfSBcblxuLy8gICAgIHJldHVybiB7IFxuLy8gICAgICAgICBuYW1lOiBuYW1lLCBcbi8vICAgICAgICAgdHVybjogdHVybixcbi8vICAgICAgICAgYXR0YWNrLCBcbi8vICAgICB9XG4vLyB9XG5cblxuLy8gY29uc3QgcGxheWVyMSA9IHBsYXllckZhY3RvcnkoJ2FsZWMnLCBmYWxzZSwgZ2FtZWJvYXJkKTtcblxuLy8gY29uc29sZS5sb2cocGxheWVyMS5nZXROYW1lKCkpO1xuXG4vLyBjb25zb2xlLmxvZyhwbGF5ZXIxLmF0dGFjayg2LCA2KSk7XG5cbi8vIGNvbnNvbGUubG9nKHBsYXllcjEuZ2V0TmFtZSgpKTtcblxuLy8gLy8gY29uc29sZS5sb2cocGxheWVyMS5hdHRhY2soKSkgXG5cbi8vIC8vIHBhc3MgdGhlIGdhbWVib2FyZCBvYmplY3QgdG8gdGhpcyBmYWN0b3J5IHNvIHlvdSBjYW4gYWNjZXNzICBpdCdzIG1ldGhvZHMsIFxuXG4vLyBsZXQgeCA9IGdhbWVib2FyZEZhY3RvcnkoKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlwKG5hbWUsIGxlbmd0aCwgcG9zaXRpb24pIHtcbiAgICBsZXQgaGl0Q291bnRlciA9IDA7XG4gICAgbGV0IGlzU3VuayA9IGZhbHNlO1xuICAgIC8vIGxldCBnYW1lQm9hcmQgPSBnYW1lYm9hcmRGYWN0b3J5LnN1bmtlblNoaXBzQXJyYXk7XG5cbiAgICBmdW5jdGlvbiBoaXRJbmNyZW1lbnRvcigpIHtcbiAgICAgIGhpdENvdW50ZXIrKztcbiAgICAgIGlmIChoaXRDb3VudGVyID49IGxlbmd0aCkge1xuICAgICAgICBpc1N1bmsgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gZ2V0SGl0Q291bnRlcigpIHtcbiAgICAgIHJldHVybiBoaXRDb3VudGVyO1xuICAgIH1cbiAgICAvLyBmdW5jdGlvbiBpc1N1bmtDb25kaXRpb25hbCgpIHtcbiAgICAvLyAgIGlmIChoaXRDb3VudGVyID49IGxlbmd0aCkge1xuICAgIC8vICAgICBpc1N1bmsgPSB0cnVlO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgXG4gICAgZnVuY3Rpb24gZ2V0U2hpcFN0YXR1cygpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdsb2dnaW5nIHRoZSBzdGF0dXMgb2YgaXNTdW5rIHZhcmlhYmxlIHdpdGhpbiBnZXRTaGlwU3RhdHVzIGluIHRoZSBzaGlwRmFjdG9yeSBtb2R1bGUnLCBpc1N1bmspO1xuICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdW5rZW5TaGlwc0FycmF5KSkpO1xuICAgICAgcmV0dXJuIGlzU3VuaztcbiAgICB9XG4gIFxuICAgIHJldHVybiB7XG4gICAgICBzaGlwTmFtZTogbmFtZSxcbiAgICAgIGdldCBpc1N1bmsoKSB7cmV0dXJuIGlzU3Vua30sXG4gICAgICAvLyBpc1N1bmssXG4gICAgICBzaGlwTGVuZ3RoOiBsZW5ndGgsXG4gICAgICBzaGlwUG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgaGl0SW5jcmVtZW50b3IsXG4gICAgICBnZXRIaXRDb3VudGVyLFxuICAgICAgLy8gaXNTdW5rQ29uZGl0aW9uYWwsXG4gICAgICBnZXRTaGlwU3RhdHVzLFxuICAgIH07XG4gIH1cbiAgXG4gIC8vIGxldCBwYXRyb2xCb2F0ID0gc2hpcCgncGF0cm9sLWJvYXQnLCAyKTtcbiAgXG4gIC8vIGNvbnNvbGUubG9nKHBhdHJvbEJvYXQpO1xuICAvLyBjb25zb2xlLmxvZyhwYXRyb2xCb2F0LmhpdEluY3JlbWVudG9yKCkpO1xuICAvLyBjb25zb2xlLmxvZyhwYXRyb2xCb2F0LmhpdEluY3JlbWVudG9yKCkpO1xuICAvLyBjb25zb2xlLmxvZyhwYXRyb2xCb2F0LmdldEhpdEluY3JlbWVudG9yKCkpO1xuICAvLyBjb25zb2xlLmxvZyhwYXRyb2xCb2F0LmlzU3Vua0NvbmRpdGlvbmFsKCkpO1xuICAvLyBjb25zb2xlLmxvZyhwYXRyb2xCb2F0LmdldFNoaXBTdGF0dXMoKSk7XG4gIC8vIGNvbnNvbGUubG9nKHBhdHJvbEJvYXQpO1xuICAvLyBjb25zb2xlLmxvZyhwYXRyb2xCb2F0KTtcblxuICAvLyBleHBvcnQgZGVmYXVsdCBzaGlwO1xuIl0sIm5hbWVzIjpbInNoaXAiLCJnYW1lYm9hcmRGYWN0b3J5IiwicGxheWVyRmFjdG9yeSIsImNyZWF0ZVBsYXllciIsInBsYXlHYW1lIiwiZ3JpZENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3cmFwcGluZ0NvbnRhaW5lciIsImNvbXB1dGVyR3JpZENvbnRhaW5lciIsImNvbnNvbGUiLCJsb2ciLCJnYW1lYm9hcmQiLCJwbGF5ZXJHYW1lYm9hcmQiLCJjb21wdXRlckdhbWVib2FyZCIsImN1cnJlbnRTaGlwIiwiY3VycmVudENlbGwiLCJjdXJyZW50U2hpcExlbmd0aCIsImN1cnJlbnRTaGlwRGlyZWN0aW9uIiwiYmF0dGxlU2hpcCIsImRlc3Ryb3llciIsInBhdHJvbEJvYXQiLCJjYXJyaWVyQm9hdCIsInN1Ym1hcmluZSIsImNvb3JkaW5hdGVGcm9tQ29tcHV0ZXJCb2FyZFgiLCJjb29yZGluYXRlRnJvbUNvbXB1dGVyQm9hcmRZIiwic2hpcENvdW50ZXIiLCJjb21wdXRlckJhdHRsZVNoaXAiLCJjb21wdXRlckRlc3Ryb3llciIsImNvbXB1dGVyUGF0cm9sQm9hdCIsImNvbXB1dGVyQ2FycmllckJvYXQiLCJjb21wdXRlclN1Ym1hcmluZSIsImNvbXB1dGVyU2hpcEFycmF5IiwiaGl0U2hvdHNBcnJheSIsImhpdFNob3RzIiwicGxhY2VDb21wdXRlclNoaXBzIiwiY3VycmVudENvbXB1dGVyU2hpcCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInZlcnRpY2FsRGlyZWN0aW9uIiwiaG9yaXpvbnRhbERpcmVjdGlvbiIsInJhbmRvbVNoaXBEaXJlY3Rpb24iLCJNYXRoIiwicmFuZG9tIiwiZmFpbGVkQ29vcmRpbmF0ZXMiLCJyYW5kb21Db29yZGluYXRlWCIsImZsb29yIiwicmFuZG9tQ29vcmRpbmF0ZVkiLCJpc1ZhbGlkU2hpcFBsYWNlbWVudCIsInBsYWNlU2hpcCIsInNoaXBMZW5ndGgiLCJpbmNsdWRlcyIsInNwbGljZSIsInB1c2giLCJnZXRHYW1lYm9hcmQiLCJjaGFuZ2VTaGlwUG9zaXRpb25CdG4iLCJjaGFuZ2VTaGlwUG9zaXRpb25CdG5Ib3Jpem9udGFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJmaW5kQ29vcmRzIiwic2VsZWN0ZWRDZWxsIiwic2VsZWN0ZWRTaGlwRGlyZWN0aW9uIiwic2VsZWN0ZWRTaGlwTGVuZ3RoIiwidXBkYXRlZENvb3JkaW5hdGVzWCIsImN1cnJlbnRSb3ciLCJkYXRhc2V0Iiwicm93IiwiY3VycmVudENvbHVtbiIsImNvbHVtbiIsImNvbnZlcnRDb2x1bW5Ub051bWJlciIsIk51bWJlciIsImNvbnZlcnRSb3dUb051bWJlciIsImkiLCJ1cGRhdGVkWENvb3JkaW5hdGUiLCJ1c2VDb29yZHMiLCJ1cGRhdGVkQ29vcmRpbmF0ZXNZIiwidXBkYXRlZFlDb29yZGluYXRlIiwiY29vcmRzIiwicGFzc2VkQ29vcmRpbmF0ZXMiLCJjb29yZGluYXRlIiwiY2VsbCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhbGxQbGF5ZXJTaGlwc1BsYWNlZCIsIm1haW5UaXRsZUNvbnRhaW5lciIsInN0YXJ0R2FtZUJ0blZpc2libGUiLCJzdHlsZSIsImRpc3BsYXkiLCJwbGFjZUN1cnJlbnRTaGlwIiwieCIsInkiLCJzZWxlY3RlZFhDb29yZGluYXRlIiwic2VsZWN0ZWRZQ29vcmRpbmF0ZSIsInNlbGVjdGVkU2hpcCIsImdldFNoaXBDb29yZGluYXRlcyIsImN1cnJlbnRHYW1lYm9hcmQiLCJwb3NpdGlvbiIsImNvb3JkaWFudGVYIiwiY29vcmRpbmF0ZVkiLCJjdXJyZW50U2hpcFBvc2l0aW9uIiwiZGlzcGxheVNoaXBTdHlsZXMiLCJqIiwiZ2FtZWJvYXJkQ2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJib3JkZXIiLCJoZWlnaHQiLCJ3aWR0aCIsImlkIiwiYXBwZW5kIiwiY3VycmVudFBsYXllckJvYXJkIiwieENvb3JkaW5hdGUiLCJ5Q29vcmRpbmF0ZSIsInRhcmdldCIsIm51bWJlcmVkWENvb3JkaW5hdGUiLCJudW1iZXJlZFlDb29yZGluYXRlIiwic3RhcnRHYW1lQnRuIiwiY3JlYXRlQ29tcHV0ZXJCb2FyZERPTSIsImdhcCIsImNvbXByb3ciLCJjb21wY29sdW1uIiwicmVtb3ZlIiwiY29udGFpbmVyRm9yU2hpcE9iaiIsImNvbnRhaW5lckZvckNoYW5naW5nU2hpcERpcmVjdGlvbiIsImNvbnRhaW5lckZvclN0YXJ0R2FtZUJ0biIsImRldGVybWluZUlmSGl0T3JNaXNzIiwic2VsZWN0ZWRVc2VyIiwiY29vcmRpbmF0ZVgiLCJjb29yZGluYXRlQ2hlY2siLCJzZWxlY3RlZENlbGxPbkdhbWVib2FyZCIsIm1pc3NlZFNob3RzQXJyYXkiLCJtaXNzZWRTaG90cyIsInNlbGVjdGVkQ29vcmRpbmF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWxlY3RlZENvb3JkaW5hdGVNaXNzZWRTaG90IiwiZGV0ZXJtaW5lSWZIaXRPck1pc3NDb21wdXRlciIsImNyZWF0ZUJhdHRsZVNoaXBET01PYmoiLCJkaXYiLCJiYXR0bGVzaGlwQ29udGFpbmVyIiwic2hpcElEIiwic2hpcFBvc2l0aW9uIiwiY3JlYXRlRGVzdHJveWVyRE9NT2JqIiwiZGVzdHJveWVyQ29udGFpbmVyIiwiY3JlYXRlUGF0cm9sQm9hdERPTU9iaiIsInBhdHJvbEJvYXRDb250YWluZXIiLCJjcmVhdGVDYXJyaWVyQm9hdERPTU9iaiIsImNhcnJpZXJCb2F0Q29udGFpbmVyIiwiY3JlYXRlU3VibWFyaW5lRE9NT2JqIiwic3VibWFyaW5lQ29udGFpbmVyIiwiY3VycmVudFBsYXllckdhbWVib2FyZCIsImN1cnJlbnRDb21wdXRlckdhbWVib2FyZCIsIm1vZGFsIiwib3ZlcmxheSIsIm9wZW5Nb2RhbEJ0biIsImNsb3NlTW9kYWxCdG4iLCJjdXJyZW50SGl0U2hvdHNBcnJheSIsImN1cnJlbnRNaXNzZWRTaG90c0FycmF5IiwibmFtZSIsInR5cGUiLCJjb21wdXRlck5hbWUiLCJwbGF5ZXJOYW1lIiwiY2hlY2tGb3JXaW5uZXIiLCJ1c2VyT2JqIiwiYXJlQWxsU2hpcHNTdW5rIiwiYXR0YWNrIiwicmVjZWl2ZUF0dGFjayIsImNvbXB1dGVyQXR0YWNrIiwib3Blbk1vZGFsIiwidXNlciIsImN1cnJlbnRVc2VyIiwid2lubmVyTmFtZSIsIndpbm5lclRpdGxlSW5Nb2RhbCIsInRleHRDb250ZW50IiwiZGV0ZXJtaW5lSWZJbnNpZGVIaXRTaG90QXJyYXkiLCJjdXJyZW50SGl0IiwiZGV0ZXJtaW5lSWZJbnNpZGVNaXNzZWRTaG90QXJyYXkiLCJjdXJyZW50TWlzcyIsImRldGVybWluZUlmSW5zaWRlSGl0U2hvdEFycmF5Q29tcHV0ZXIiLCJkZXRlcm1pbmVJZkluc2lkZU1pc3NlZFNob3RBcnJheUNvbXB1dGVyIiwicGxheWVyVHVybiIsInBsYXllck1hcmtYIiwicGxheWVyTWFya1kiLCJyYW5kb21Db29yZGluYXRlMSIsInJhbmRvbUNvb3JkaW5hdGUyIiwiYWxsU2hvdHMiLCJzdW5rZW5TaGlwc0FycmF5IiwiY2hlY2tGb3JTaGlwIiwic2hpcE9iaiIsImNoZWNrRm9ySGl0cyIsImhpdFNob3RDb29yZGluYXRlcyIsImNoZWNrRm9yRHVwbGljYXRlTWlzc2VkU2hvdHMiLCJtaXNzZWRTaG90Q29vcmRpbmF0ZXMiLCJzaGlwT25Cb2FyZCIsImhpdEluY3JlbWVudG9yIiwiZ2V0U2hpcFN0YXR1cyIsImhpdENvdW50ZXIiLCJpc1N1bmsiLCJnZXRIaXRDb3VudGVyIiwic2hpcE5hbWUiXSwic291cmNlUm9vdCI6IiJ9